import { AbstractAggregateOperation } from '../../core/operations/AbstractAggregateOperation'

export class SumOperation extends AbstractAggregateOperation<number, number> {
  constructor() {
    super(0)
  }
  protected updateAggregation(row: number, aggregation: number): number {
    return row + aggregation
  }
}
