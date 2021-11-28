import t from 'tap'
import { SumOperation } from './aggregation/SumOperation'
import { EtlProcess } from '../core/EtlProcess'
import { FibonacciOperation } from './FibonacciOperation'
import { PlusOneOperation } from './PlusOneOperation'

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
})
