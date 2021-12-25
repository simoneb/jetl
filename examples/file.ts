import fs from 'fs'
import pipeline from '../'
import { first } from '../core/operators'
import { joinStrings, map, split } from '../core/operations'

async function run() {
  const result = new pipeline()
    .add(fs.createReadStream(__filename))
    .add(split())
    .add(map(line => `// ${line}`))
    .add(joinStrings('\n'))
    .run()

  console.log(await first(result))
}

run()
