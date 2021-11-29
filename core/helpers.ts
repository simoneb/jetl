export async function* empty() {
  // do nothing
}

export function generate<T>(array: T[]) {
  return async function* () {
    for (const item of array) {
      yield item
    }
  }
}

export async function* clone<T>(rows: AsyncIterable<T>) {
  for await (const row of rows) {
    yield { ...row }
  }
}
