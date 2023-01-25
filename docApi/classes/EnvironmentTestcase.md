[@bitdiver/model](../README.md) / [Exports](../modules.md) / EnvironmentTestcase

# Class: EnvironmentTestcase

The testcase enviroment will be created when the test starts. There is one testcase
environment per testcase. It could be used if steps need to provide data to other steps
in the same testcase

## Table of contents

### Constructors

- [constructor](EnvironmentTestcase.md#constructor)

### Properties

- [\_status](EnvironmentTestcase.md#_status)
- [countAll](EnvironmentTestcase.md#countall)
- [countCurrent](EnvironmentTestcase.md#countcurrent)
- [description](EnvironmentTestcase.md#description)
- [id](EnvironmentTestcase.md#id)
- [map](EnvironmentTestcase.md#map)
- [name](EnvironmentTestcase.md#name)
- [running](EnvironmentTestcase.md#running)

### Accessors

- [status](EnvironmentTestcase.md#status)

### Methods

- [finished](EnvironmentTestcase.md#finished)

## Constructors

### constructor

• **new EnvironmentTestcase**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `EnvironmentOptions` |

#### Defined in

[EnvironmentTestcase.ts:35](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L35)

## Properties

### \_status

• **\_status**: `number` = `STATUS_OK`

#### Defined in

[EnvironmentTestcase.ts:20](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L20)

___

### countAll

• **countAll**: `number` = `0`

#### Defined in

[EnvironmentTestcase.ts:33](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L33)

___

### countCurrent

• **countCurrent**: `number` = `0`

#### Defined in

[EnvironmentTestcase.ts:30](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L30)

___

### description

• **description**: `string`

#### Defined in

[EnvironmentTestcase.ts:18](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L18)

___

### id

• **id**: `string`

#### Defined in

[EnvironmentTestcase.ts:12](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L12)

___

### map

• **map**: `Map`<`any`, `any`\>

#### Defined in

[EnvironmentTestcase.ts:26](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L26)

___

### name

• **name**: `string`

#### Defined in

[EnvironmentTestcase.ts:15](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L15)

___

### running

• **running**: `boolean` = `true`

#### Defined in

[EnvironmentTestcase.ts:23](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L23)

## Accessors

### status

• `get` **status**(): `number`

#### Returns

`number`

#### Defined in

[EnvironmentTestcase.ts:54](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L54)

• `set` **status**(`newStatus`): `void`

The status could only be changed while the testcase is running. After finishing the
testcase the status could not be changed any more

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newStatus` | `number` | The new status for the testcase |

#### Returns

`void`

#### Defined in

[EnvironmentTestcase.ts:48](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L48)

## Methods

### finished

▸ **finished**(): `void`

Finishes this testcase

#### Returns

`void`

#### Defined in

[EnvironmentTestcase.ts:61](https://github.com/bitdiver/model/blob/e208e5b/src/EnvironmentTestcase.ts#L61)
