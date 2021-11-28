import { empty } from './helpers'
import { Operation } from './operations/Operation'

export class EtlProcess<TResult> {
  private operations: Operation[] = []

  protected register<TInput, TResult>(operation: Operation<TInput, TResult>) {
    this.operations.push(operation as Operation)
  }

  public async *execute(): AsyncIterableIterator<TResult> {
    let rows = empty() as AsyncIterableIterator<never>

    for (const operation of this.operations) {
      rows = await operation.execute(rows)
    }

    yield* rows
  }
}
