# TS Wiz

<p align="center">
  <img src="./docs/cover.jpg" height="400" />
</p>

## Installation

```
npm install --save-dev ts-wiz
```

Or using yarn:

```
yarn add -D ts-wiz
```

## Exports

### ValueOf

Gets the union type of all the values in an object, tuple, array or array-like type T.

```typescript
type Result = ValueOf<{ a: string; b: number }>;
// type Result will be `string | number`
```

```typescript
type Result = ValueOf<[string, number]>;
// type Result will be `string | number`
```

### Maybe

Injects `undefined` to a type

```typescript
type Result = Maybe<string>;
// type Result will be `string | undefined`
```

### NonUndefined

Excludes `undefined` from a type

```typescript
type Result = NonUndefined<string | undefined>;
// type Result will be `string`
```

### Nullable

Injects `null` to a type

```typescript
type Result = Nullable<string>;
// type Result will be `string | null`
```

### Nullish

Union of `null` and `undefined` types

```typescript
type Result = Nullish;
// type Result will be `null | undefined`
```

### Nullishable

Injects `null` and `undefined` to a type

```typescript
type Result = Nullishable<string>;
// type Result will be `string | null | undefined`
```

### Falsy

Union of falsy values in TypeScript: `false` | `""` | `0` | `null` | `undefined`

### Truthy

Represents all the Falsy values of TypeScript except for falsy ones

### Primitive

Union of primitive types in TypeScript: string | number | bigint | boolean | symbol | null | undefined

### Dictionary

Represents an object with certain value types(`unknown` by default)

```typescript
type Result = Dictionary<boolean>;
// type Result will be a dictionary with boolean values
```

### MergeBy

Merges two object types

```typescript
type ObjectType1 = { a: string; b: number; c: boolean };
type ObjectType2 = { a: number; b: string; d: boolean };
type Merged = MergeBy<ObjectType1, ObjectType2>;
// type Merged will be of type { a: number; b: string; c: boolean; d: boolean }
```

### Subtract

Subtracts two object types(Remove shared properties of two object types from the first one)

```typescript
type ObjectType1 = { a: string; b: number; c: boolean };
type ObjectType2 = { a: number; b: string; d: boolean };
type Subtracted = Subtract<ObjectType1, ObjectType2>;
// type Subtracted will be of type { c: boolean; }
```

### UnPromise

Obtains Promise resolve type

```typescript
type Result = UnPromise<Promise<string>>;
// type Result will be of type string
```

### NoneToVoidFunction

Represents a function that doesn't accept any arguments and returns void

```typescript
type Result = NonToVoidFunction;
// type Result will be of type () => void
```

### Enumerate

Generates a tuple of numbers from 0 to N-1

```typescript
type Result = Enumerate<5>;
// type Result will be 0 | 1 | 2 | 3 | 4 | 5
```

### IntRange

Generates a tuple of numbers from N to M-1

```typescript
type Result = IntRange<2, 6>;
// type Result will be 2 | 3 | 4 | 5
```
