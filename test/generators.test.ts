import tap from 'tap'

import { ReadableStream } from 'node:stream/web'

import { generate, generateOnce, fromWebStream } from '../src/generators'

tap.test('generators', async t => {
  t.test('generate', async t => {
    t.test('should generate sequence', async t => {
      t.plan(3)

      const generator = generate([1, 2, 3])

      for await (const e of generator) {
        t.ok(e)
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const e of generator) {
        t.fail()
      }
    })
  })

  t.test('generateOnce', async t => {
    t.test('should generate sequence only once', async t => {
      t.plan(4)

      const generator = generateOnce([1, 2, 3])

      for await (const e of generator()) {
        t.ok(e)
      }

      await t.rejects(generator().next(), /already iterated/)
    })
  })

  t.test('fromWebStream', async t => {
    t.test('simple', async t => {
      const chunks = ['a', 'b', 'c']

      const stream = new ReadableStream({
        start(controller) {
          for (const item of chunks) {
            controller.enqueue(item)
          }
          controller.close()
        },
      })

      const iterable = fromWebStream(stream)

      t.plan(chunks.length)

      for await (const e of iterable) {
        t.same(e, chunks.shift())
      }
    })
  })
})
