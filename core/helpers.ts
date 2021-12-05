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
  match: MatchCondition<L, R> = () => true,
  merge?: MergeOperation<L, R, TResult>
) {
  return async function* join(rows: AsyncIterable<L>) {
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

export function cache<T>(source: AsyncIterable<T>) {
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

export function toOperation<T, TResult>(
  value: Operation<T, TResult> | AsyncIterable<TResult>
) {
  return typeof value === 'function' ? value : () => value
}

export async function consume<T>(rows: AsyncIterable<T>) {
  const iterator = rows[Symbol.asyncIterator]()
  while (!(await iterator.next()).done);
}

export async function toArray<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const array: T[] = []

  for await (const item of iterable) {
    array.push(item)
  }

  return array
}

export async function first<T>(iterable: AsyncIterable<T>): Promise<T> {
  const iterator = iterable[Symbol.asyncIterator]()

  return (await iterator.next()).value
}

export function joinStrings(separator = '') {
  return async function* <T>(iterable: AsyncIterable<T>) {
    yield (await toArray(iterable)).join(separator)
  }
}
