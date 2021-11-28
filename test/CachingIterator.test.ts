import t from 'tap'
import { CachingIterator } from '../core/operations/CachingIterator'
import { createOneToThree } from './helpers'

t.test('CachingIterator', async t => {
  t.test('simple', async t => {
    t.plan(6)

    const oneToThree = createOneToThree()

    const source = new CachingIterator<number>(oneToThree())

    for await (const value of source) {
      t.ok(value)
    }

    for await (const value of source) {
      t.ok(value)
    }
  })
})
