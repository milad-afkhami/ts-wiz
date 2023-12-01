export type Nullable<T> = T | null;

export type Nullish = null | undefined;

/** Type can be undefined or null */
export type Nullishable<T> = T | Nullish;
// type Nullishable<T> = Nullable<Maybe<T>>;

export type NonUndefined<T> = T extends undefined ? never : T;

export type Maybe<T> = T | undefined;

export type Falsy = null | undefined | false | "" | 0 | 0n;

export type Truthy<T> = Exclude<T, Falsy>;
// type Truthy<T> = T extends Falsy ? never : T;

export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;

export type Dictionary<T = unknown> = { [key: string]: T };

// interface Tuple<T extends number, Len extends number> extends Array<T> { [key: number]: T; length: Len; }

export type ValueOf<
  T extends
    | ReadonlyArray<unknown>
    | ArrayLike<unknown>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | Record<any, unknown>
> = T extends ReadonlyArray<unknown>
  ? T[number]
  : T extends ArrayLike<unknown>
  ? T[number]
  : T extends object
  ? T[keyof T]
  : never;

/** extracts type of resolved promise value */
export type UnPromise<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U
  : never;

// Any
export type AnyLiteral = Record<string, unknown>;

export type AnyClass = new (...args: unknown[]) => unknown;

export type AnyFunction = (...args: unknown[]) => unknown;

export type AnyToVoidFunction = (...args: unknown[]) => void;

export type NoneToVoidFunction = () => void;

// Integer
export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

export type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

/**
 * Merge two object types
 * @example
 * type ObjectType1 = { a: string; b: number; c: boolean };
 * type ObjectType2 = { a: number; b: string; d: boolean };
 * type Merged = MergeBy<ObjectType1, ObjectType2>;
 * // Merged = { a: number; b: string; c: boolean; d: boolean };
 */
export type MergeBy<T, K> = Omit<T, keyof K> & K;

/**
 * Subtract two object types
 * @description Remove shared properties of two object types from the first one
 * @example
 * type ObjectType1 = { a: string; b: number; c: boolean };
 * type ObjectType2 = { a: number; b: string; d: boolean };
 * type Subtracted = Subtract<ObjectType1, ObjectType2>;
 * // Subtracted = { c: boolean; };
 */
export type Subtract<T extends K, K> = Omit<T, keyof K>;
