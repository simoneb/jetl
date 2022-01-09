import { cache, empty, toArray } from './operators'
import { MatchCondition, MergeOperation, Operation } from './types'

export async function* generate<T>(iterable: Iterable<T> | AsyncIterable<T>) {
  yield* iterable
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

/**
 * Filters the input iterable using the provided filter function.
 *
 * @returns the filtered iterable
 */
export function filter<T>(f: (input: T) => boolean) {
  return async function* (iterable: AsyncIterable<T>) {
    for await (const item of iterable) {
      if (f(item)) {
        yield item
      }
    }
  }
}

export function flatMap<T, TResult>(f: (input: T) => AsyncIterable<TResult>) {
  return async function* (iterable: AsyncIterable<T>) {
    for await (const item of iterable) {
      yield* f(item)
    }
  }
}

export async function* unique<T>(iterable: AsyncIterable<T>) {
  const set = new Set<T>()

  for await (const item of iterable) {
    if (!set.has(item)) {
      set.add(item)
      yield item
    }
  }
}

export function group<T, TKey = T, TResult = T[]>(
  createKey: (i: T) => TKey = i => i as unknown as TKey,
  reduce: (group: T[]) => TResult = group => group as unknown as TResult
): Operation<T, [TKey, TResult]> {
  return async function* group(
    rows: AsyncIterable<T>
  ): AsyncIterable<[TKey, TResult]> {
    const groups: Map<TKey, T[]> = new Map()

    for await (const row of rows) {
      const key = createKey(row)
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

export function split(separator: string | RegExp = /\r?\n/) {
  let buffer: string[] = []

  return async function* split(
    iterable: AsyncIterable<string | Buffer>
  ): AsyncIterable<string> {
    for await (const chunk of iterable) {
      const [first, ...rest] = (
        typeof chunk === 'string' ? chunk : chunk.toString()
      ).split(separator)
      buffer.push(first)

      if (rest.length) {
        yield buffer.join('')
        yield* rest.slice(0, rest.length - 1)
        buffer = [rest[rest.length - 1]]
      }
    }

    if (buffer.length) {
      yield buffer.join('')
    }
  }
}

/**
 * Applies an operator on each element of the input iterable.
 *
 * It's convenient when you want to turn the input iterable into a scalar, to be then consumed by subsequent stages of the pipeline as an iterable value.
 *
 * @example
 * ```js
 * async function sumOperator(rows) {
 *   let sum = 0
 *
 *   for await(const row of rows) {
 *     sum += row
 *   }
 *
 *   return sum
 * }
 *
 * const result = new pipeline()
 *  .add([1, 2, 3])
 *  // highlight-next-line
 *  .add(apply(sumOperator))
 *  .run()
 *
 * // Prints 6
 * console.log(await first(result))
 * ```
 */
export function apply<T, TResult>(
  operator: (rows: AsyncIterable<T>) => Promise<TResult>
) {
  return async function* apply(rows: AsyncIterable<T>) {
    yield await operator(rows)
  }
}
