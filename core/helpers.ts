export async function* empty() {
  // do nothing
}

export async function* clone<T>(rows: AsyncIterableIterator<T>) {
  for await (const row of rows) {
    yield { ...row }
  }
}
