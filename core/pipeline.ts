import { cache, empty, join } from './helpers'
import { MatchCondition, MergeOperation, Operation } from './types'

export default class pipeline<T = unknown> {
  private operations: Operation<unknown, unknown>[] = []

  static create(): pipeline {
    return new pipeline()
  }

  public register<TResult>(
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

  fork(): [pipeline<T>, pipeline<T>] {
    const cached = cache(this.run())

    return [
      pipeline.create().register(cached),
      pipeline.create().register(cached),
    ]
  }

  public async *run(): AsyncGenerator<T> {
    let rows = empty() as AsyncGenerator

    for (const operation of this.operations) {
      rows = operation(rows)
    }

    yield* rows as AsyncGenerator<T>
  }
}
