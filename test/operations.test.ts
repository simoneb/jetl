import tap from 'tap'
import { first } from '../core/helpers'
import { generateOnce, joinStrings } from '../core/operations'

tap.test('operations', async t => {
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

  t.test('joinStrings', async t => {
    t.test('should join strings', async t => {
      t.same('1,2,3', await first(joinStrings(',')(generateOnce([1, 2, 3])())))
    })
  })
})
