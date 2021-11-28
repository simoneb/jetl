import { AbstractOperation } from './AbstractOperation'

export abstract class AbstractJoinOperation<
  TInput = never,
  TLeft = never,
  TRight = never,
  TResult = never
> extends AbstractOperation<TInput, TResult> {
  protected abstract mergeRows(
    leftRow: TLeft | object,
    rightRow: TRight | object
  ): TResult
  protected leftOrphanRow(row: TLeft): void {
    return
  }
  protected rightOrphanRow(row: TRight): void {
    return
  }
}
