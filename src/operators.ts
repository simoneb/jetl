export async function consume<T>(rows: AsyncIterable<T>) {
  const iterator = rows[Symbol.asyncIterator]()
  while (!(await iterator.next()).done);
}

export async function toArray<T>(iterable: AsyncIterable<T>): Promise<T[]> {
  const array: T[] = []

  for await (const item of iterable) {
    array.push(item)
  }

  return array
}

export async function first<T>(iterable: AsyncIterable<T>): Promise<T> {
  const iterator = iterable[Symbol.asyncIterator]()

  return (await iterator.next()).value
}

export async function count<T>(iterable: AsyncIterable<T>): Promise<number> {
  const iterator = iterable[Symbol.asyncIterator]()
  let count = 0

  for (; !(await iterator.next()).done; count++);

  return count
}

export function reduce<T, TResult>(
  reducer: (acc: TResult, current: T) => TResult,
  initialValue: TResult
) {
  return async function reduce(rows: AsyncIterable<T>) {
    let result = initialValue

    for await (const row of rows) {
      result = reducer(result, row)
    }

    return result
  }
}
