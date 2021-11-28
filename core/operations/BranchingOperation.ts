import { CachingIterator } from './CachingIterator'
import { AbstractBranchingOperation } from './AbstractBranchingOperation'

export class BranchingOperation<
  TInput
> extends AbstractBranchingOperation<TInput> {
  async *execute(
    rows: AsyncIterableIterator<TInput>
  ): AsyncIterableIterator<never> {
    const copiedRows = new CachingIterator<TInput>(rows)

    for (const operation of this.operations) {
      const cloned = this.clone(copiedRows)

      const result = operation.execute(cloned)

      if (!result) {
        continue
      }

      for await (const _ of result) {
        // do nothing
      }
    }

    for (const _ of []) {
      yield _
    }
  }

  private async *clone(copiedRows: AsyncIterableIterator<TInput>) {
    for await (const row of copiedRows) {
      yield { ...row }
    }
  }
}
