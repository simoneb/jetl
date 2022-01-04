const path = require('path')
const fs = require('fs/promises')
const { parse } = require('csv')
const { pipeline } = require('jetl')
const { toArray, reduce, first } = require('jetl/operators')
const { group, apply } = require('jetl/operations')

async function run() {
  const input = path.join(__dirname, 'github-usage.csv')

  const [costByRepoP, costByProductP, totalCostP] = await new pipeline()
    .add(
      parse(await fs.readFile(input), {
        columns: true,
      })
    )
    .fork(3)

  const unitPricePerQuantity = (acc, c) =>
    acc + c['Price Per Unit'].replace(/^\$/, '') * c.Quantity

  const costByRepo = costByRepoP
    .add(
      group(
        r => r['Repository Slug'],
        g => g.reduce(unitPricePerQuantity, 0)
      )
    )
    .run()

  const costByProduct = costByProductP
    .add(
      group(
        r => r.Product,
        g => g.reduce(unitPricePerQuantity, 0)
      )
    )
    .run()

  const totalCost = totalCostP.add(apply(reduce(unitPricePerQuantity, 0))).run()

  console.log('cost by repo', await toArray(costByRepo))
  console.log('cost by product', await toArray(costByProduct))
  console.log('total cost', await first(totalCost))
}

run()
