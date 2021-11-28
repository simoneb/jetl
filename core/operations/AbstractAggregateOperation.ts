import { AbstractOperation } from './AbstractOperation'

export abstract class AbstractAggregateOperation<
  TInput,
  TAggregate
> extends AbstractOperation<TInput, TAggregate> {
  protected operations: AbstractOperation<TInput>[] = []

  constructor(private initialValue: TAggregate) {
    super()
  }

  async *execute(
    rows: AsyncIterableIterator<TInput>
  ): AsyncIterableIterator<TAggregate> {
    const aggregations = new Map<string, TAggregate>()
    const groupBy = this.getPropertiesToGroupBy()

    for await (const row of rows) {
      const key = groupBy.map(property => (row as never)[property]).join('|')

      if (!aggregations.has(key)) {
        aggregations.set(key, this.initialValue)
      }

      aggregations.set(key, this.updateAggregation(row, aggregations.get(key)))
    }

    yield* aggregations.values()
  }

  protected abstract updateAggregation(
    row: TInput,
    aggregation?: TAggregate
  ): TAggregate

  protected getPropertiesToGroupBy(): string[] {
    return []
  }
}
