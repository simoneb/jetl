import { AbstractOperation } from '../core/operations/AbstractOperation'

export class FibonacciOperation extends AbstractOperation<never, number> {
  constructor(private max: number) {
    super()
  }

  async *execute(): AsyncIterableIterator<number> {
    let a = 0
    let b = 1

    yield 1

    for (let i = 0; i <= this.max; i++) {
      const c = a + b

      yield c

      a = b
      b = c
    }
  }
}
