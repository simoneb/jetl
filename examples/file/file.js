const fs = require('fs')

const { pipeline } = require('jetl')
const { first } = require('jetl/operators')
const { joinStrings, map, split } = require('jetl/operations')

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
