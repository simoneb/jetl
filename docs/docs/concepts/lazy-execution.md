---
sidebar_position: 4
---

# Lazy Execution

When operations are added to a pipeline, they are pushed into an internal data structure but they are not executed until the pipeline's `run()` method is invoked.

When `run()` is invoked, each operation is invoked in a cascading fashion, with the output of the current operation being provided as input to the next.

The return value of `run()` is an asynchronous iterable value which can then be used.

At this stage no processing has happened yet, because of the lazy nature of asynchronous iterables.

Only when the output iterable is iterated in user code will the actual processing happen.

## Example

This example shows a how to use a custom iterable capable of generating all integer numbers. Iterating it would lead to an infinite loop.

When the pipeline is executed with `run()` no infinite loop happens, because the pipeline stages are only executed and no iteration occurs.

Iteration happens when the `result` value is then iterated in your code.

```js live
// infinite iterable
const integers = {
  current: 0,
  next() {
    return { value: this.current++, done: false }
  },
  [Symbol.iterator]() {
    return this
  },
}

const result = new pipeline()
  .add(integers)
  .add(map(n => n + 1))
  .run()

const output = []

while (true) {
  const { value } = await result.next()
  output.push(value)

  // break when more than 6 items are in output
  if (output.length > 5) {
    break
  }
}

return output.join(', ')
```
