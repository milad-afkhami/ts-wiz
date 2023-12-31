[ts-wiz](README.md) / Exports

# ts-wiz

## Table of contents

### Type Aliases

- [Dictionary](modules.md#dictionary)
- [Enumerate](modules.md#enumerate)
- [Falsy](modules.md#falsy)
- [IntRange](modules.md#intrange)
- [Maybe](modules.md#maybe)
- [MergeBy](modules.md#mergeby)
- [NonUndefined](modules.md#nonundefined)
- [NoneToVoidFunction](modules.md#nonetovoidfunction)
- [Nullable](modules.md#nullable)
- [Nullish](modules.md#nullish)
- [Nullishable](modules.md#nullishable)
- [Primitive](modules.md#primitive)
- [Subtract](modules.md#subtract)
- [Truthy](modules.md#truthy)
- [UnPromise](modules.md#unpromise)
- [ValueOf](modules.md#valueof)

## Type Aliases

### Dictionary

Ƭ **Dictionary**\<`T`\>: `Object`

#### Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

#### Index signature

▪ [key: `string`]: `T`

#### Defined in

[index.ts:27](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L27)

---

### Enumerate

Ƭ **Enumerate**\<`N`, `Acc`\>: `Acc`[``"length"``] extends `N` ? `Acc`[`number`] : [`Enumerate`](modules.md#enumerate)\<`N`, [...Acc, `Acc`[``"length"``]]\>

#### Type parameters

| Name  | Type                    |
| :---- | :---------------------- |
| `N`   | extends `number`        |
| `Acc` | extends `number`[] = [] |

#### Defined in

[index.ts:53](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L53)

---

### Falsy

Ƭ **Falsy**: `null` \| `undefined` \| `false` \| `""` \| `0` \| `0n`

#### Defined in

[index.ts:13](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L13)

---

### IntRange

Ƭ **IntRange**\<`F`, `T`\>: `Exclude`\<[`Enumerate`](modules.md#enumerate)\<`T`\>, [`Enumerate`](modules.md#enumerate)\<`F`\>\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `F`  | extends `number` |
| `T`  | extends `number` |

#### Defined in

[index.ts:60](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L60)

---

### Maybe

Ƭ **Maybe**\<`T`\>: `T` \| `undefined`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[index.ts:11](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L11)

---

### MergeBy

Ƭ **MergeBy**\<`T`, `K`\>: `Omit`\<`T`, keyof `K`\> & `K`

Merge two object types

**`Example`**

```ts
type ObjectType1 = { a: string; b: number; c: boolean };
type ObjectType2 = { a: number; b: string; d: boolean };
type Merged = MergeBy<ObjectType1, ObjectType2>;
// Merged = { a: number; b: string; c: boolean; d: boolean };
```

#### Type parameters

| Name |
| :--- |
| `T`  |
| `K`  |

#### Defined in

[index.ts:73](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L73)

---

### NonUndefined

Ƭ **NonUndefined**\<`T`\>: `T` extends `undefined` ? `never` : `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[index.ts:9](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L9)

---

### NoneToVoidFunction

Ƭ **NoneToVoidFunction**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[index.ts:50](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L50)

---

### Nullable

Ƭ **Nullable**\<`T`\>: `T` \| `null`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[index.ts:1](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L1)

---

### Nullish

Ƭ **Nullish**: `null` \| `undefined`

#### Defined in

[index.ts:3](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L3)

---

### Nullishable

Ƭ **Nullishable**\<`T`\>: `T` \| [`Nullish`](modules.md#nullish)

Type can be undefined or null

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[index.ts:6](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L6)

---

### Primitive

Ƭ **Primitive**: `string` \| `number` \| `bigint` \| `boolean` \| `symbol` \| `null` \| `undefined`

#### Defined in

[index.ts:18](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L18)

---

### Subtract

Ƭ **Subtract**\<`T`, `K`\>: `Omit`\<`T`, keyof `K`\>

Subtract two object types

**`Description`**

Remove shared properties of two object types from the first one

**`Example`**

```ts
type ObjectType1 = { a: string; b: number; c: boolean };
type ObjectType2 = { a: number; b: string; d: boolean };
type Subtracted = Subtract<ObjectType1, ObjectType2>;
// Subtracted = { c: boolean; };
```

#### Type parameters

| Name | Type        |
| :--- | :---------- |
| `T`  | extends `K` |
| `K`  | `K`         |

#### Defined in

[index.ts:84](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L84)

---

### Truthy

Ƭ **Truthy**\<`T`\>: `Exclude`\<`T`, [`Falsy`](modules.md#falsy)\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[index.ts:15](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L15)

---

### UnPromise

Ƭ **UnPromise**\<`T`\>: `T` extends `Promise`\<infer U\> ? `U` : `never`

extracts type of resolved promise value

#### Type parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `T`  | extends `Promise`\<`unknown`\> |

#### Defined in

[index.ts:46](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L46)

---

### ValueOf

Ƭ **ValueOf**\<`T`\>: `T` extends `ReadonlyArray`\<`unknown`\> ? `T`[`number`] : `T` extends `ArrayLike`\<`unknown`\> ? `T`[`number`] : `T` extends `object` ? `T`[keyof `T`] : `never`

#### Type parameters

| Name | Type                                                                                             |
| :--- | :----------------------------------------------------------------------------------------------- |
| `T`  | extends `ReadonlyArray`\<`unknown`\> \| `ArrayLike`\<`unknown`\> \| `Record`\<`any`, `unknown`\> |

#### Defined in

[index.ts:31](https://github.com/milad-afkhami/ts-wiz/blob/d72fe2e/src/index.ts#L31)
