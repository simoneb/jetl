import tap from 'tap'
import { count, first, toArray } from '../src/operators'
import { generateOnce, empty } from '../src/generators'
import { cache } from '../src/operations'

tap.test('operators', async t => {
  t.test('empty', async t => {
    t.same(await toArray(empty()), [])
  })

  t.test('toArray', async t => {
    t.test('should return an array', async t => {
      t.strictSame(await toArray(generateOnce([1, 2, 3])()), [1, 2, 3])
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
      t.same(await first(generateOnce([1, 2, 3])()), 1)
    })
  })

  t.test('count', async t => {
    t.test('should count the number of elements', async t => {
      t.same(await count(generateOnce([1, 2, 3])()), 3)
    })
  })
})
