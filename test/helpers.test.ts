import tap from 'tap'
import {
  cache,
  first,
  generateOnce,
  joinStrings,
  toArray,
} from '../core/helpers'

tap.test('helpers', async t => {
  t.test('generateOnce', async t => {
    t.test('should generate sequence only once', async t => {
      t.plan(4)

      const generator = generateOnce([1, 2, 3])

      for await (const e of generator()) {
        t.ok(e)
      }

      await t.rejects(generator().next(), /already iterated/)
    })
  })

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

  t.test('joinStrings', async t => {
    t.test('should join strings', async t => {
      t.same('1,2,3', await first(joinStrings(',')(generateOnce([1, 2, 3])())))
    })
  })
})
