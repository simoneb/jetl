export interface Operation<T = unknown, TResult = T> {
  (rows: AsyncIterable<T>): AsyncIterable<TResult>
}

export interface MatchCondition<A, B> {
  (a: A, b: B): boolean
}

export interface MergeOperation<L, R, TResult = [L, R]> {
  (l: L, r: R): TResult
}
