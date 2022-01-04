---
sidebar_position: 1
---

# Getting Started

`jetl` is a data processing library for JavaScript built on top of asynchronous iterators.

It is written in TypeScript and compiles to pure JavaScript, meaning that it can be used in both server and browser environments.

## Quick Start

This example processes an array of integer numbers by:

- filtering out the odd numbers
- increasing each remaining number by 1
- computing their sum

> The example is editable so you can play around with it

```js live
const result = new pipeline()
  .add([1, 2, 3, 4, 5, 6])
  .add(filter(n => n % 2 === 0))
  .add(map(n => n + 1))
  .add(apply(reduce((acc, c) => acc + c, 0)))
  .run()

// 2, 4, 6 => 3, 5, 7
// 3 + 5 + 7 => 15
return `Sum: ${await first(result)}`
```

### How it works

1. `[1, 2, 3, 4, 5, 6]` provides the initial data source to the [pipeline](./concepts/pipelines) as an array of numbers
2. `filter(n => n % 2 === 0)` adds an [operation](./concepts/operations) which filters only the even numbers
3. `map(n => n + 1)` transforms each element by incrementing it by 1
4. `apply(reduce((acc, c) => acc + c, 0))` applies an [operator](./concepts/operators) which, given the transformed array of numbers, turns it into the sum of those numbers
5. `.run()` executes the pipeline and returns an asynchronously iterable of results
6. `await first(result)` asynchronously returns the first element of the result

### Concepts

In the example above:

- `new pipeline()` creates a new [pipeline](./concepts/pipelines)
- `filter`, `map`, `apply` are [operations](./concepts/operations). Operations are functions which accept _iterables_ as inputs and return _iterables_ as output
- `reduce` and `first` are [operator](./concepts/operators). Operators are functions which accept _iterables_ as input and can return anything (including scalar values)
