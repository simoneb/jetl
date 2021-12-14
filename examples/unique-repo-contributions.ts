import dotenv from 'dotenv'

dotenv.config()

import { gql, GraphQLClient } from 'graphql-request'
import { toArray } from '../core/helpers'
import { filter, flatMap, map } from '../core/operations'
import pipeline from '../core/pipeline'

async function* getAllArchivedDoneCards() {
  const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  })

  const query = gql`
    query ($cursor: String) {
      organization(login: "nearform") {
        project(number: 3) {
          columns(last: 2) {
            nodes {
              name
              cards(archivedStates: ARCHIVED, after: $cursor) {
                totalCount
                nodes {
                  note
                  content {
                    ... on Issue {
                      url
                    }
                    ... on PullRequest {
                      url
                    }
                  }
                }
                pageInfo {
                  endCursor
                }
              }
            }
          }
        }
      }
    }
  `

  let cursor

  while (true) {
    const data = (await graphQLClient.request(query, { cursor })) as any
    const cards = data?.organization?.project?.columns?.nodes?.[0]?.cards as any
    yield* cards?.nodes

    cursor = cards?.pageInfo?.endCursor

    if (!cursor) {
      break
    }
  }
}

async function run() {
  const result = new pipeline()
    .add(getAllArchivedDoneCards)
    .add(map(({ content, note }) => note || content?.url))
    .add(
      flatMap(async function* extractUrls(content) {
        const r =
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/g

        let res

        while ((res = r.exec(content))) {
          yield res[0]
        }
      })
    )
    .add(filter(url => url.includes('github.com')))
    .add(map(url => /(https:\/\/github.com\/[^/]+\/[^/]+)/.exec(url)?.[1]))
    .group()
    .add(map(([r]) => r))
    .run()

  const repos = await toArray(result)
  console.log(repos)
  console.log(repos.length)
}

run()
