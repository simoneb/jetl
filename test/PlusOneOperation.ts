import { AbstractOperation } from '../core/operations/AbstractOperation'

export class PlusOneOperation extends AbstractOperation<number, number> {
  async *execute(
    rows: AsyncIterableIterator<number>
  ): AsyncIterableIterator<number> {
    for await (const row of rows) {
      yield row + 1
    }
  }
}
