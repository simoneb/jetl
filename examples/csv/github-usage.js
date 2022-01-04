const path = require('path')
const fs = require('fs/promises')
const { parse } = require('csv')
const { pipeline } = require('jetl')
const { toArray } = require('jetl/operators')
const { group } = require('jetl/operations')

async function run() {
  const input = path.join(__dirname, 'github-usage.csv')

  const costByRepo = new pipeline()
    .add(
      parse(await fs.readFile(input), {
        columns: true,
      })
    )
    .add(
      group(
        r => r['Repository Slug'],
        g =>
          g.reduce(
            (acc, c) =>
              acc + c['Price Per Unit'].replace(/^\$/, '') * c.Quantity,
            0
          )
      )
    )
    .run()

  console.log(await toArray(costByRepo))
}

run()
