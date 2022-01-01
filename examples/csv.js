const { generate } = require('csv')
const { pipeline } = require('jetl')
const { first } = require('jetl/operators')
const { map } = require('jetl/operations')

async function run() {
  const result = new pipeline()
    .add(
      generate({
        objectMode: true,
      })
    )
    .add(map(row => row.join('-')))
    .run()

  console.log(await first(result))
}

run()
