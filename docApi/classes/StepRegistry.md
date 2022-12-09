[@bitdiver/model](../README.md) / [Exports](../modules.md) / StepRegistry

# Class: StepRegistry

This registry stores all the available steps by there name.

## Table of contents

### Constructors

- [constructor](StepRegistry.md#constructor)

### Properties

- [stepClassMap](StepRegistry.md#stepclassmap)

### Methods

- [getStep](StepRegistry.md#getstep)
- [registerStep](StepRegistry.md#registerstep)

## Constructors

### constructor

• **new StepRegistry**()

## Properties

### stepClassMap

• **stepClassMap**: `Map`<`any`, `any`\>

The map storing the step classes by name

#### Defined in

StepRegistry.ts:18

## Methods

### getStep

▸ **getStep**(`stepName`): [`StepBase`](StepBase.md)

Returns an instance of a step class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stepName` | `string` | The name under the class is be rigistered |

#### Returns

[`StepBase`](StepBase.md)

step - The instance of the step class

#### Defined in

StepRegistry.ts:44

___

### registerStep

▸ **registerStep**(`request`): `void`

Register a class for a step by a given name

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `RegisterStepRequest` |

#### Returns

`void`

#### Defined in

StepRegistry.ts:25
