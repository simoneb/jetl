import readline from 'readline'
import fs from 'fs'
import pipeline from '../core/pipeline'
import { first, joinStrings } from '../core/helpers'

async function run() {
  const rl = readline.createInterface({
    input: fs.createReadStream(__filename),
    crlfDelay: Infinity,
  })

  async function* commentOut(lines: AsyncIterable<string>) {
    for await (const line of lines) {
      yield `// ${line}`
    }
  }

  const result = new pipeline()
    .register(rl)
    .register(commentOut)
    .register(joinStrings('\n'))
    .run()

  console.log(await first(result))
}

run()
