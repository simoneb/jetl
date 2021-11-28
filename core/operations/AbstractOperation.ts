export abstract class AbstractOperation<TInput = never, TResult = never> {
  abstract execute(
    rows?: AsyncIterableIterator<TInput>
  ): AsyncIterableIterator<TResult>
}
