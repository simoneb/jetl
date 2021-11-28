import { Operation } from './Operation'

export abstract class AbstractOperation<TInput = never, TResult = never>
  implements Operation<TInput, TResult>
{
  abstract execute(
    rows: AsyncIterableIterator<TInput>
  ): AsyncIterableIterator<TResult>
}
