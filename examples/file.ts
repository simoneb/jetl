import readline from 'readline'
import fs from 'fs'
import pipeline from '../core/pipeline'
import { first } from '../core/helpers'
import { joinStrings, map } from '../core/operations'

async function run() {
  const rl = readline.createInterface({
    input: fs.createReadStream(__filename),
    crlfDelay: Infinity,
  })

  async function comment(line: string) {
    return `// ${line}`
  }

  const result = new pipeline()
    .add(rl)
    .add(map(comment))
    .add(joinStrings('\n'))
    .run()

  console.log(await first(result))
}

run()
