export function createOneToThree() {
  let firstIteration = true

  return async function* oneToThree() {
    if (!firstIteration) {
      throw new Error('Should not be called more than once')
    }
    firstIteration = false

    yield 1
    yield 2
    yield 3
  }
}
