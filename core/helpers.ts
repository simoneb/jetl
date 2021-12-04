import { MatchCondition, MergeOperation, Operation } from './types'

export async function* empty() {
  // do nothing
}

export function generate<T>(iterable: Iterable<T>) {
  return async function* () {
    yield* iterable
  }
}

export function generateOnce<T>(iterable: Iterable<T>) {
  let executed = false

  return async function* () {
    if (executed) {
      throw new Error('already iterated')
    }

    executed = true

    yield* iterable
  }
}

export async function* clone<T>(rows: AsyncIterable<T>) {
  for await (const row of rows) {
    yield { ...row }
  }
}

export function reduce<T, TResult>(
  reducer: (acc: TResult, current: T) => TResult,
  initialValue: TResult
) {
  return async function* reduce(rows: AsyncIterable<T>) {
    let result = initialValue

    for await (const row of rows) {
      result = reducer(result, row)
    }

    yield result
  }
}

export function join<L, R, TResult>(
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

export function cache<T>(source: AsyncGenerator<T>) {
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
