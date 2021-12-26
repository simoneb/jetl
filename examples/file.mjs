import fs from 'fs'
import { fileURLToPath } from 'url'

import { pipeline } from 'jetl'
import { first } from 'jetl/operators'
import { joinStrings, map, split } from 'jetl/operations'

async function run() {
  const result = new pipeline()
    .add(fs.createReadStream(fileURLToPath(import.meta.url)))
    .add(split())
    .add(map(line => `// ${line}`))
    .add(joinStrings('\n'))
    .run()

  console.log(await first(result))
}

run()
