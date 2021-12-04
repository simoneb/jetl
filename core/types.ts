export interface Operation<T, TResult = T> {
  (rows: AsyncGenerator<T>): AsyncGenerator<TResult>
}

export interface MatchCondition<A, B> {
  (a: A, b: B): boolean
}

export interface MergeOperation<L, R, TResult = [L, R]> {
  (l: L, r: R): TResult
}
