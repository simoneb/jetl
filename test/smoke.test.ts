import t from 'tap'
import { SumOperation } from './aggregation/SumOperation'
import { EtlProcess } from '../core/EtlProcess'
import { createFibonacci, FibonacciOperation } from './FibonacciOperation'
import { PlusOneOperation } from './PlusOneOperation'
import { empty } from '../core/helpers'

interface Operation<T> {
  (rows: AsyncGenerator<T>): AsyncGenerator
}

async function* plus1(rows: AsyncGenerator<number>) {
  for await (const row of rows) {
    yield row + 1
  }
}

async function* sum(rows: AsyncGenerator<number>) {
  let sum = 0

  for await (const row of rows) {
    sum += row
  }

  yield sum
}

class pipeline<T = unknown> {
  private operations: Operation<unknown>[] = []

  static create(): pipeline {
    return new pipeline()
  }

  public register<T>(operation: Operation<T>): pipeline<T> {
    this.operations.push(operation as Operation<unknown>)
    return this as unknown as pipeline<T>
  }

  public async *run(): AsyncGenerator<T> {
    let rows = empty() as AsyncGenerator

    for (const operation of this.operations) {
      rows = operation(rows)
    }

    yield* rows as AsyncGenerator<T>
  }
}

class SampleEtlProcess extends EtlProcess<number> {
  constructor() {
    super()

    this.register(new FibonacciOperation(5))
    this.register(new PlusOneOperation())
    this.register(new SumOperation())
  }
}

t.test('smoke', async t => {
  t.test('simple', async t => {
    const process = new SampleEtlProcess()

    const result = await process.execute().next()

    // fibonacci = 1, 1, 2, 3, 5, 8, 13
    // add 1 = 2, 2, 3, 4, 6, 9, 14
    // sum = 40
    t.same(result.value, 40)
  })

  t.test('experimental api', async t => {
    const result = pipeline
      .create()
      .register(createFibonacci(5))
      .register(plus1)
      .run()

    const expected = [2, 2, 3, 4, 6, 9, 14]

    for await (const e of result) {
      t.same(e, expected.shift())
    }
  })

  t.test('experimental api sum', async t => {
    t.plan(1)

    const result = pipeline
      .create()
      .register(createFibonacci(5))
      .register(plus1)
      .register(sum)
      .run()

    for await (const sum of result) {
      t.same(sum, 40)
    }
  })
})
