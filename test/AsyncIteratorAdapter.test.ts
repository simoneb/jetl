import t from 'tap'
import { AsyncIteratorAdapter } from '../core/operations/AsyncIterableIteratorAdapter'

t.test('AsyncIteratorAdapter', async t => {
  t.test('simple', async t => {
    const adapter = new AsyncIteratorAdapter<number>([1, 2, 3].values())

    for (let i = 1; i <= 3; i++) {
      const result = await adapter.next()
      t.same(result.value, i)
    }

    const result = await adapter.next()
    t.same(result.done, true)
  })
})
