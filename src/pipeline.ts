import { consume } from './operators'
import { group, join, cache } from './operations'
import { empty, generate } from './generators'
import { MatchCondition, MergeOperation, Operation } from './types'

function toOperation<T, TResult>(
  value: Operation<T, TResult> | AsyncIterable<TResult> | Iterable<TResult>
) {
  if (typeof value === 'function') {
    return value
  }

  return () => generate(value)
}

export class pipeline<T = unknown> {
  private operations: Operation<unknown, unknown>[] = []

  public add<TResult>(
    operation:
      | Operation<T, TResult>
      | AsyncIterable<TResult>
      | Iterable<TResult>
  ): pipeline<TResult> {
    this.operations.push(toOperation(operation) as Operation<unknown, unknown>)
    return this as unknown as pipeline<TResult>
  }

  public join<R, TResult = [T, R]>(
    operation: Operation<R> | AsyncIterable<R>,
    match?: MatchCondition<T, R>,
    merge?: MergeOperation<T, R, TResult>
  ): pipeline<TResult> {
    this.operations.push(
      join(toOperation(operation), match, merge) as Operation<unknown, unknown>
    )
    return this as unknown as pipeline<TResult>
  }

  public group<TKey = T, TResult = T[]>(
    createKey?: (i: T) => TKey,
    reduce?: (group: T[]) => TResult
  ): pipeline<[TKey, TResult]> {
    this.operations.push(
      group(createKey, reduce) as Operation<unknown, unknown>
    )
    return this as unknown as pipeline<[TKey, TResult]>
  }

  async fork(numberOfForks = 2): Promise<pipeline<T>[]> {
    const cached = cache(this.run())

    await consume(cached())

    return Array.from({ length: numberOfForks }, () =>
      new pipeline().add(cached)
    )
  }

  public async *run() {
    let rows = empty() as AsyncIterable<unknown>

    for (const operation of this.operations) {
      rows = operation(rows)
    }

    yield* rows as AsyncIterable<T>
  }
}
