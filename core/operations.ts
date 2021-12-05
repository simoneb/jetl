import { cache, empty, toArray } from './helpers'
import { MatchCondition, MergeOperation, Operation } from './types'

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

export function join<L, R, TResult>(
  operation: Operation<R>,
  match?: MatchCondition<L, R>,
  merge?: MergeOperation<L, R, TResult>
) {
  return async function* join(rows: AsyncIterable<L>) {
    const cached = cache(operation(empty()))

    for await (const row of rows) {
      for await (const row2 of cached()) {
        if (!match || match(row, row2)) {
          yield merge ? merge(row, row2) : [row, row2]
        }
      }
    }
  }
}

export function joinStrings(separator = '') {
  return async function* <T>(iterable: AsyncIterable<T>) {
    yield (await toArray(iterable)).join(separator)
  }
}

export function map<T, TResult>(f: (input: T) => TResult) {
  return async function* (iterable: AsyncIterable<T>) {
    for await (const item of iterable) {
      yield f(item)
    }
  }
}

export function group<T, TKey, TResult>(
  createKey: (i: T) => TKey,
  reduce: (group: T[]) => TResult
): Operation<T, [TKey, TResult]> {
  return async function* group(
    rows: AsyncIterable<T>
  ): AsyncIterable<[TKey, TResult]> {
    const groups: Map<TKey, T[]> = new Map()

    for await (const row of rows) {
      const key = createKey ? createKey(row) : (row as unknown as TKey)
      const group = groups.get(key)

      if (group) {
        group.push(row)
      } else {
        groups.set(key, [row])
      }
    }

    for (const [key, group] of groups) {
      yield [key, reduce(group)]
    }
  }
}
