import { cache, consume, empty, join, toOperation } from './helpers'
import { MatchCondition, MergeOperation, Operation } from './types'

export default class pipeline<T = unknown> {
  private operations: Operation<unknown, unknown>[] = []

  public register<TResult>(
    operation: Operation<T, TResult> | AsyncGenerator<TResult>
  ): pipeline<TResult> {
    this.operations.push(toOperation(operation) as Operation<unknown, unknown>)
    return this as unknown as pipeline<TResult>
  }

  public join<R, TResult = [T, R]>(
    operation: Operation<R> | AsyncGenerator<R>,
    match?: MatchCondition<T, R>,
    merge?: MergeOperation<T, R, TResult>
  ): pipeline<TResult> {
    this.operations.push(
      join(toOperation(operation), match, merge) as Operation<unknown, unknown>
    )
    return this as unknown as pipeline<TResult>
  }

  async fork(): Promise<[pipeline<T>, pipeline<T>]> {
    const cached = cache(this.run())

    await consume(cached())

    return [new pipeline().register(cached), new pipeline().register(cached)]
  }

  public async *run() {
    let rows = empty() as AsyncGenerator

    for (const operation of this.operations) {
      rows = operation(rows)
    }

    yield* rows as AsyncGenerator<T>
  }
}
