> The license of this software has changed to AWISC - Anti War ISC License

# jetl

[![npm version](https://badge.fury.io/js/jetl.svg)](https://badge.fury.io/js/jetl)
[![ci](https://github.com/simoneb/jetl/actions/workflows/ci.yml/badge.svg)](https://github.com/simoneb/jetl/actions/workflows/ci.yml)
[![release](https://github.com/simoneb/jetl/actions/workflows/release.yml/badge.svg)](https://github.com/simoneb/jetl/actions/workflows/release.yml)
[![docs](https://github.com/simoneb/jetl/actions/workflows/docs.yml/badge.svg)](https://github.com/simoneb/jetl/actions/workflows/docs.yml)

JavaScript data processing with asynchronous iterators.

## Documentation

Check out the [documentation website](https://simoneb.github.io/jetl).

## Setup

```sh
npm i jetl
```

## Usage

The example below comments out each line of the current file and prints the result

<!-- prettier-ignore-start -->
```js
const fs = require('fs')

const { pipeline } = require('jetl')
const { first } = require('jetl/operators')
const { joinStrings, map, split } = require('jetl/operations')

const result = new pipeline()             // instantiate pipeline
  .add(fs.createReadStream(__filename))   // read file
  .add(split())                           // split into multiple lines
  .add(map(line => `// ${line}`))         // prepend each line with a comment
  .add(joinStrings('\n'))                 // join the lines together
  .run()                                  // execute  the pipeline

console.log(await first(result))          // print the first (only) result
```
<!-- prettier-ignore-end -->
