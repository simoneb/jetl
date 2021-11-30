import t from 'tap'
import { SumOperation } from './aggregation/SumOperation'
import { EtlProcess } from '../core/EtlProcess'
import { createFibonacci, FibonacciOperation } from './FibonacciOperation'
import { PlusOneOperation } from './PlusOneOperation'
import { empty, generate, generateOnce } from '../core/helpers'

interface Operation<T, TResult = T> {
  (rows: AsyncGenerator<T>): AsyncGenerator<TResult>
}

interface MatchCondition<A, B> {
  (a: A, b: B): boolean
}

interface MergeOperation<L, R, TResult = [L, R]> {
  (l: L, r: R): TResult
}

async function* plus1(rows: AsyncGenerator<number>) {
  for await (const row of rows) {
    yield row + 1
  }
}

async function* sum(rows: AsyncGenerator<number>) {
  let sum = 0

  for await (const row of rows) {
    sum += row
  }

  yield sum
}

function join<L, R, TResult>(
  operation: Operation<R>,
  match: MatchCondition<L, R> = (l: L, r: R) => true,
  merge?: MergeOperation<L, R, TResult>
) {
  return async function* join(rows: AsyncGenerator<L>) {
    const cached = cache(operation(empty()))

    for await (const row of rows) {
      for await (const row2 of cached()) {
        if (match(row, row2)) {
          yield merge ? merge(row, row2) : [row, row2]
        }
      }
    }
  }
}

function cache<T>(source: AsyncGenerator<T>) {
  const cache: T[] = []
  let firstTime = true

  return async function* () {
    if (firstTime) {
      for await (const row of source) {
        cache.push(row)
        yield row
      }
      firstTime = false
    } else {
      yield* cache
    }
  }
}

class pipeline<T = unknown> {
  private operations: Operation<unknown, unknown>[] = []

  static create(): pipeline {
    return new pipeline()
  }

  public register<T, TResult>(
    operation: Operation<T, TResult>
  ): pipeline<TResult> {
    this.operations.push(operation as Operation<unknown, unknown>)
    return this as unknown as pipeline<TResult>
  }

  public join<R, TResult = [T, R]>(
    operation: Operation<R>,
    match?: MatchCondition<T, R>,
    merge?: MergeOperation<T, R, TResult>
  ): pipeline<TResult> {
    this.operations.push(
      join(operation, match, merge) as Operation<unknown, unknown>
    )
    return this as unknown as pipeline<TResult>
  }

  public async *run(): AsyncGenerator<T> {
    let rows = empty() as AsyncGenerator

    for (const operation of this.operations) {
      rows = operation(rows)
    }

    yield* rows as AsyncGenerator<T>
  }
}

class SampleEtlProcess extends EtlProcess<number> {
  constructor() {
    super()

    this.register(new FibonacciOperation(5))
    this.register(new PlusOneOperation())
    this.register(new SumOperation())
  }
}

t.test('smoke', async t => {
  t.test('generateOnce', async t => {
    t.test('simple', async t => {
      t.plan(4)
      const generator = generateOnce([1, 2, 3])

      for await (const e of generator()) {
        t.ok(e)
      }

      await t.rejects(generator().next(), /already iterated/)
    })
  })

  t.test('cache', async t => {
    t.test('simple', async t => {
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

  t.test('simple', async t => {
    const process = new SampleEtlProcess()

    const result = await process.execute().next()

    // fibonacci = 1, 1, 2, 3, 5, 8, 13
    // add 1 = 2, 2, 3, 4, 6, 9, 14
    // sum = 40
    t.same(result.value, 40)
  })

  t.test('experimental api', async t => {
    t.test('basic', async t => {
      const result = pipeline
        .create()
        .register(createFibonacci(5))
        .register(plus1)
        .run()

      const expected = [2, 2, 3, 4, 6, 9, 14]

      for await (const e of result) {
        t.same(e, expected.shift())
      }
    })

    t.test('experimental api sum', async t => {
      t.plan(1)

      const result = pipeline
        .create()
        .register(createFibonacci(5))
        .register(plus1)
        .register(sum)
        .run()

      for await (const sum of result) {
        t.same(sum, 40)
      }
    })

    t.test('join', async t => {
      t.test('join simple', async t => {
        const result = pipeline
          .create()
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
        const result = pipeline
          .create()
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
        const result = pipeline
          .create()
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
  })
})
