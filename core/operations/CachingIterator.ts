import { AsyncIteratorAdapter } from './AsyncIterableIteratorAdapter'

export class CachingIterator<T> implements AsyncIterableIterator<T> {
  private cache: T[] = []
  private inner: AsyncIterator<T>
  private isFirstTime?: boolean = undefined

  constructor(source: AsyncIterableIterator<T>) {
    this.inner = source
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<T> {
    if (this.isFirstTime === undefined) {
      this.isFirstTime = true
    } else if (this.isFirstTime) {
      this.isFirstTime = false
      this.inner = new AsyncIteratorAdapter(this.cache.values())
    } else {
      this.inner = new AsyncIteratorAdapter(this.cache.values())
    }

    return this
  }

  async next(): Promise<IteratorResult<T>> {
    const result = await this.inner.next()
    if (!result.done && this.isFirstTime) {
      this.cache.push(result.value)
    }
    return result
  }
}
