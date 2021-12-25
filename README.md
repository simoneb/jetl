# jetl

[![ci](https://github.com/simoneb/jetl/actions/workflows/ci.yml/badge.svg)](https://github.com/simoneb/jetl/actions/workflows/ci.yml)

Data processing library built on asynchronous iterators

## Setup

```sh
npm i jetl
```

## Usage

The example below comments out each line of the current file and prints the result

<!-- prettier-ignore-start -->

```js
const result = new pipeline()             // instantiate pipeline
  .add(fs.createReadStream(__filename))   // read file
  .add(split())                           // split into multiple lines
  .add(map(line => `// ${line}`))         // prepend each line with a comment
  .add(joinStrings('\n'))                 // join the lines together
  .run()                                  // execute  the pipeline

console.log(await first(result))          // print the first (only) result
```
<!-- prettier-ignore-end -->

## Concepts

- **Pipelines** are a series of processing stages whose inputs, intermediate processing stages and outputs are asynchronous iterables
- **Operations** are functions whose inputs and outputs are asynchronous iterables. They compose the stages of a pipeline
- **Operators** are functions which transform asynchronous iterables into other values, for example unique values, scalar values, arrays, ...
