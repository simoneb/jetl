import { CachingIterator } from './CachingIterator'
import { AbstractBranchingOperation } from './AbstractBranchingOperation'
import { clone } from '../helpers'

export class BranchingOperation<
  TInput
> extends AbstractBranchingOperation<TInput> {
  async *execute(
    rows: AsyncIterableIterator<TInput>
  ): AsyncIterableIterator<never> {
    const copiedRows = new CachingIterator<TInput>(rows)

    for (const operation of this.operations) {
      const cloned = clone(copiedRows)

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
}
