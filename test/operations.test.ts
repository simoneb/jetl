import tap from 'tap'
import { first, toArray } from '../src/operators'
import {
  apply,
  joinStrings,
  filter,
  flatMap,
  unique,
  group,
  map,
  split,
  take,
  skip,
  unwind,
} from '../src/operations'
import { generate, generateOnce } from '../src/generators'

tap.test('operations', async t => {
  t.test('joinStrings', async t => {
    t.test('default separator', async t => {
      t.same(await first(joinStrings()(generateOnce([1, 2, 3])())), '123')
    })

    t.test('custom separator', async t => {
      t.same(await first(joinStrings(',')(generateOnce([1, 2, 3])())), '1,2,3')
    })
  })

  t.test('group', async t => {
    t.test('with default key and reducer', async t => {
      const result = group()(generateOnce([1, 2, 1, 3, 2])())

      t.same(await toArray(result), [
        [1, [1, 1]],
        [2, [2, 2]],
        [3, [3]],
      ])
    })

    t.test('with custom key', async t => {
      const result = group<number, number>(i => i % 2)(
        generateOnce([1, 2, 1, 3, 2])()
      )

      t.same(await toArray(result), [
        [1, [1, 1, 3]],
        [0, [2, 2]],
      ])
    })

    t.test('with custom key and reducer', async t => {
      const result = group<number, number, number>(
        i => i % 2,
        g => g[0]
      )(generateOnce([1, 2, 1, 3, 2])())

      t.same(await toArray(result), [
        [1, 1],
        [0, 2],
      ])
    })
  })

  t.test('filter', async t => {
    const result = filter<number>(x => x % 2 === 0)(generateOnce([1, 2, 3])())

    t.same(await toArray(result), [2])
  })

  t.test('map', async t => {
    const result = map<number, number>(x => x + 1)(generate([1, 2, 3]))

    const expected = [2, 3, 4]

    t.plan(expected.length)

    for await (const e of result) {
      t.same(e, expected.shift())
    }
  })

  t.test('flatMap', async t => {
    const result = flatMap<number, number>(async function* (x) {
      yield x
      yield x + 1
    })(generateOnce([1, 2, 3])())

    t.same(await toArray(result), [1, 2, 2, 3, 3, 4])
  })

  t.test('unique', async t => {
    const result = unique(generateOnce([1, 2, 3, 1, 2, 3])())

    t.same(await toArray(result), [1, 2, 3])
  })

  t.test('split', async t => {
    t.test('no separator', async t => {
      const result = split()(generate(['hello', 'world']))

      t.plan(1)

      for await (const e of result) {
        t.same(e, 'helloworld')
      }
    })

    t.test('separator within same string', async t => {
      const result = split()(generate(['hello\nworld']))

      const expected = ['hello', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('windows separator within same string', async t => {
      const result = split()(generate(['hello\r\nworld']))

      const expected = ['hello', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('separator on boundary before between two strings', async t => {
      const result = split()(generate(['hello\n', 'world']))

      const expected = ['hello', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('separator on boundary after between two strings', async t => {
      const result = split()(generate(['hello', '\nworld']))

      const expected = ['hello', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('split four lines on three writes', async t => {
      const result = split()(generate(['hello\nwor', 'ld\nbye\nwo', 'rld']))

      const expected = ['hello', 'world', 'bye', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('multiple separators within same string', async t => {
      const result = split()(generate(['hello\nwonderful\nworld']))

      const expected = ['hello', 'wonderful', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('separator across multiple strings', async t => {
      const result = split()(generate(['hello\nworld', 'hello\nworld']))

      const expected = ['hello', 'worldhello', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('empty', async t => {
      const result = split()(generate([]))

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const e of result) {
        t.fail()
      }
    })

    t.test('empty string', async t => {
      const result = split()(generate(['']))

      t.plan(1)

      for await (const e of result) {
        t.same(e, '')
      }
    })

    t.test('just separator', async t => {
      const result = split()(generate(['\n']))

      t.plan(2)

      for await (const e of result) {
        t.same(e, '')
      }
    })

    t.test('works with buffers', async t => {
      const result = split()(generate([Buffer.from('hello\nworld')]))

      const expected = ['hello', 'world']

      t.plan(expected.length)

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })
  })

  t.test('apply', async t => {
    t.test('simple', async t => {
      t.plan(1)

      const result = apply(first)(generateOnce([1, 2, 3])())

      for await (const item of result) {
        t.same(item, 1)
      }
    })
  })

  t.test('take', async t => {
    t.test('0', async t => {
      const result = take(0)(generate([1, 2, 3]))

      for await (const item of result) {
        t.fail()
      }
    })

    t.test('< length', async t => {
      const result = take(1)(generate([1, 2, 3]))

      t.plan(1)

      for await (const item of result) {
        t.same(item, 1)
      }
    })

    t.test('== length', async t => {
      const input = [1, 2, 3]
      const result = take(3)(generate([...input]))

      t.plan(input.length)

      for await (const item of result) {
        t.same(item, input.shift())
      }
    })

    t.test('> length', async t => {
      const input = [1, 2, 3]
      const result = take(4)(generate([...input]))

      t.plan(input.length)

      for await (const item of result) {
        t.same(item, input.shift())
      }
    })
  })

  t.test('skip', async t => {
    t.test('0', async t => {
      const input = [1, 2, 3]
      const result = skip(0)(generate([...input]))

      t.plan(input.length)

      for await (const item of result) {
        t.same(item, input.shift())
      }
    })

    t.test('< length', async t => {
      const input = [1, 2, 3]
      const result = skip(1)(generate([...input]))

      t.plan(input.length - 1)

      input.shift()

      for await (const item of result) {
        t.same(item, input.shift())
      }
    })

    t.test('== length', async t => {
      const input = [1, 2, 3]
      const result = skip(3)(generate([...input]))

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const item of result) {
        t.fail()
      }
    })

    t.test('> length', async t => {
      const input = [1, 2, 3]
      const result = skip(4)(generate([...input]))

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const item of result) {
        t.fail()
      }
    })
  })

  t.test('unwind', async t => {
    t.test('simple', async t => {
      const expected = [1, 2, 3, 4, 5, 6]
      const result = unwind(
        generate([generate([1, 2, 3]), generate([4, 5, 6])])
      )

      t.plan(expected.length)

      for await (const item of result) {
        t.same(item, expected.shift())
      }
    })
  })
})
