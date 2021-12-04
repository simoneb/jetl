export function generateFibonacci(max: number) {
  return async function* fibonacci() {
    let a = 0
    let b = 1

    yield 1

    for (let i = 0; i < max - 1; i++) {
      const c = a + b

      yield c

      a = b
      b = c
    }
  }
}

export async function* plus1(rows: AsyncGenerator<number>) {
  for await (const row of rows) {
    yield row + 1
  }
}

export async function* sum(rows: AsyncGenerator<number>) {
  let sum = 0

  for await (const row of rows) {
    sum += row
  }

  yield sum
}
