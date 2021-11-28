export class AsyncIteratorAdapter<T> implements AsyncIterator<T> {
  constructor(private readonly iterator: Iterator<T>) {}

  async next(...args: [] | [undefined]): Promise<IteratorResult<T>> {
    return this.iterator.next(...args)
  }
}
