import { AbstractOperation } from '../core/operations/AbstractOperation'

export function createFibonacci(max: number) {
  return async function* fibonacci() {
    let a = 0
    let b = 1

    yield 1

    for (let i = 0; i <= max; i++) {
      const c = a + b

      yield c

      a = b
      b = c
    }
  }
}

export class FibonacciOperation extends AbstractOperation<never, number> {
  constructor(private max: number) {
    super()
  }

  async *execute() {
    yield* createFibonacci(this.max)()
  }
}
