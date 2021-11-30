export async function* empty() {
  // do nothing
}

export function generate<T>(iterable: Iterable<T>) {
  return async function* () {
    yield* iterable
  }
}

export function generateOnce<T>(iterable: Iterable<T>) {
  let executed = false

  return async function* () {
    if (executed) {
      throw new Error('already iterated')
    }

    executed = true

    yield* iterable
  }
}

export async function* clone<T>(rows: AsyncIterable<T>) {
  for await (const row of rows) {
    yield { ...row }
  }
}
