export async function* empty() {
  // do nothing
}

export async function* generate<T>(iterable: Iterable<T> | AsyncIterable<T>) {
  yield* iterable
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

export async function* fromWebStream(stream: ReadableStream) {
  const reader = stream.getReader()

  while (true) {
    const { done, value } = await reader.read()

    if (done) {
      break
    }

    yield value
  }
}
