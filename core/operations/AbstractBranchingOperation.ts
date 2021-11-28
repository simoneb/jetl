import { AbstractOperation } from './AbstractOperation'

export abstract class AbstractBranchingOperation<
  TInput
> extends AbstractOperation<TInput> {
  protected operations: AbstractOperation<TInput>[] = []
}
