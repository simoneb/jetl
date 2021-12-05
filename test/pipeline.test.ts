import tap from 'tap'
import { generate, generateOnce, reduce } from '../core/helpers'
import pipeline from '../core/pipeline'
import { generateFibonacci, plus1, sum } from './test-helpers'

tap.test('pipeline', async t => {
  t.test('increment by 1', async t => {
    const result = new pipeline()
      .register(generateFibonacci(5))
      .register(plus1)
      .run()

    const expected = [2, 2, 3, 4, 6]

    t.plan(expected.length)

    for await (const e of result) {
      t.same(e, expected.shift())
    }
  })

  t.test('scalar sum', async t => {
    t.plan(1)

    const result = new pipeline()
      .register(generateFibonacci(5))
      .register(plus1)
      .register(sum)
      .run()

    for await (const sum of result) {
      t.same(sum, 17)
    }
  })

  t.test('reduce', async t => {
    t.plan(1)

    const result = new pipeline()
      .register(generateOnce([1, 2, 3]))
      .register(reduce((acc, current) => acc + current, 0))
      .run()

    for await (const sum of result) {
      t.same(sum, 6)
    }
  })

  t.test('join', async t => {
    t.test('join simple', async t => {
      const result = new pipeline()
        .register(generate([1, 2, 3]))
        .join(generateOnce([1, 2, 3]))
        .run()

      const pairs = [
        [1, 1],
        [1, 2],
        [1, 3],
        [2, 1],
        [2, 2],
        [2, 3],
        [3, 1],
        [3, 2],
        [3, 3],
      ]

      t.plan(pairs.length)

      for await (const pair of result) {
        t.same(pair, pairs.shift())
      }
    })

    t.test('join match', async t => {
      const result = new pipeline()
        .register(generate([1, 2, 3]))
        .join(generateOnce([1, 2, 3]), (a, b) => a === b)
        .run()

      const pairs = [
        [1, 1],
        [2, 2],
        [3, 3],
      ]

      t.plan(pairs.length)

      for await (const pair of result) {
        t.same(pair, pairs.shift())
      }
    })

    t.test('join match merge', async t => {
      const result = new pipeline()
        .register(generate([1, 2, 3]))
        .join(
          generateOnce([1, 2, 3]),
          (a, b) => a === b,
          (a, b) => `${a}-${b}`
        )
        .run()

      const strings = ['1-1', '2-2', '3-3']

      t.plan(strings.length)

      for await (const string of result) {
        t.same(string, strings.shift())
      }
    })
  })

  t.test('fork', async t => {
    t.test('fork simple', async t => {
      const [p1, p2] = await new pipeline()
        .register(generateOnce([1, 2, 3]))
        .fork()

      const expected = [1, 2, 3, 1, 2, 3]

      t.plan(expected.length)

      const r1 = p1.run()
      const r2 = p2.run()

      for await (const e of r1) {
        t.same(e, expected.shift())
      }

      for await (const e of r2) {
        t.same(e, expected.shift())
      }
    })

    t.test('fork different downstream operations', async t => {
      const [p1, p2] = await new pipeline()
        .register(generateOnce([1, 2, 3]))
        .fork()

      const r1 = p1.register(plus1).run()
      const r2 = p2.register(sum).run()

      const expected = [2, 3, 4, 6]

      t.plan(expected.length)

      for await (const e of r1) {
        t.same(e, expected.shift())
      }

      for await (const e of r2) {
        t.same(e, expected.shift())
      }
    })

    t.test('fork then join', async t => {
      const [p1, p2] = await new pipeline()
        .register(generateOnce([1, 2, 3]))
        .fork()

      const r1 = p1.register(plus1).run()
      const r2 = p2.register(sum).run()

      const pr = new pipeline().register(r1).join(r2).run()

      const expected = [
        [2, 6],
        [3, 6],
        [4, 6],
      ]

      t.plan(expected.length)

      for await (const e of pr) {
        t.strictSame(e, expected.shift())
      }
    })
  })
})
