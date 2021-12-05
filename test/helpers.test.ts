import tap from 'tap'
import { cache, first, toArray } from '../core/helpers'
import { generateOnce } from '../core/operations'

tap.test('helpers', async t => {
  t.test('toArray', async t => {
    t.test('should return an array', async t => {
      t.strictSame([1, 2, 3], await toArray(generateOnce([1, 2, 3])()))
    })
  })

  t.test('cache', async t => {
    t.test('should cache result', async t => {
      const generator = cache(generateOnce([1, 2, 3])())

      const expected = [1, 2, 3, 1, 2, 3]
      t.plan(expected.length)

      for await (const e of generator()) {
        t.same(e, expected.shift())
      }

      for await (const e of generator()) {
        t.same(e, expected.shift())
      }
    })
  })

  t.test('first', async t => {
    t.test('should return first element', async t => {
      t.same(1, await first(generateOnce([1, 2, 3])()))
    })
  })
})
