import { AbstractJoinOperation } from './AbstractJoinOperation'
import { AbstractOperation } from './AbstractOperation'
import { CachingIterator } from './CachingIterator'

export abstract class NestedLoopsJoinOperation<
  TInput = never,
  TLeft = never,
  TRight = never,
  TResult = never
> extends AbstractJoinOperation<TInput, TLeft, TRight, TResult> {
  private currentLeftRow?: TLeft | object
  private currentRightRow?: TRight | object

  constructor(
    public left: AbstractOperation<TInput, TLeft>,
    public right: AbstractOperation<TInput, TRight>
  ) {
    super()
  }

  async *execute(
    rows?: AsyncIterableIterator<TInput>
  ): AsyncIterableIterator<TResult> {
    const matchedRightRows = new Set<TRight>()
    const rightIterator = new CachingIterator(this.right.execute(rows))

    const execute = this.left.execute(rows)

    for await (const leftRow of execute) {
      let leftNeedOuterJoin = true
      this.currentLeftRow = leftRow

      for await (const rightRow of rightIterator) {
        this.currentRightRow = rightRow

        if (this.matchJoinCondition(leftRow, rightRow)) {
          leftNeedOuterJoin = false
          matchedRightRows.add(rightRow)
          yield this.mergeRows(leftRow, rightRow)
        }
      }
      if (leftNeedOuterJoin) {
        const emptyRow = { empty: 'empty' }
        this.currentRightRow = emptyRow

        if (this.matchJoinCondition(leftRow, emptyRow)) {
          yield this.mergeRows(leftRow, emptyRow)
        } else {
          this.leftOrphanRow(leftRow)
        }
      }
    }
    for await (const rightRow of rightIterator) {
      if (matchedRightRows.has(rightRow)) {
        continue
      }

      this.currentRightRow = rightRow

      const emptyRow = { empty: 'empty' }
      this.currentLeftRow = emptyRow
      if (this.matchJoinCondition(emptyRow, rightRow)) {
        yield this.mergeRows(emptyRow, rightRow)
      } else {
        this.rightOrphanRow(rightRow)
      }
    }
  }

  protected abstract matchJoinCondition(
    leftRow: TLeft | object,
    rightRow: TRight | object
  ): boolean
}
