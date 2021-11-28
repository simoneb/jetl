export interface Operation<TInput = never, TResult = never> {
  execute(rows?: AsyncIterableIterator<TInput>): AsyncIterableIterator<TResult>
}
