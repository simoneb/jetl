import t from 'tap'
import { createOneToThree } from '../helpers'
import { SumOperation } from './SumOperation'

t.test('SumOperation', async t => {
  t.test('simple', async t => {
    const oneToThree = createOneToThree()
    const result = new SumOperation().execute(oneToThree())

    for await (const value of result) {
      t.same(value, 6)
    }
  })
})
