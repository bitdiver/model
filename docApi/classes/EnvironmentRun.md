[@bitdiver/model](../README.md) / [Exports](../modules.md) / EnvironmentRun

# Class: EnvironmentRun

The run enviroment will be created when a new run starts

## Table of contents

### Constructors

- [constructor](EnvironmentRun.md#constructor)

### Properties

- [\_status](EnvironmentRun.md#_status)
- [description](EnvironmentRun.md#description)
- [id](EnvironmentRun.md#id)
- [map](EnvironmentRun.md#map)
- [name](EnvironmentRun.md#name)
- [startTime](EnvironmentRun.md#starttime)

### Accessors

- [status](EnvironmentRun.md#status)

## Constructors

### constructor

• **new EnvironmentRun**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `EnvironmentOptions` |

#### Defined in

EnvironmentRun.ts:27

## Properties

### \_status

• **\_status**: `number` = `STATUS_OK`

#### Defined in

EnvironmentRun.ts:16

___

### description

• **description**: `string`

#### Defined in

EnvironmentRun.ts:19

___

### id

• **id**: `string`

#### Defined in

EnvironmentRun.ts:10

___

### map

• **map**: `Map`<`any`, `any`\>

#### Defined in

EnvironmentRun.ts:25

___

### name

• **name**: `string`

#### Defined in

EnvironmentRun.ts:13

___

### startTime

• **startTime**: `number`

#### Defined in

EnvironmentRun.ts:22

## Accessors

### status

• `get` **status**(): `number`

#### Returns

`number`

#### Defined in

EnvironmentRun.ts:46

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

EnvironmentRun.ts:40
