[@bitdiver/model](README.md) / Exports

# @bitdiver/model

## Table of contents

### Enumerations

- [StepType](enums/StepType.md)

### Classes

- [EnvironmentRun](classes/EnvironmentRun.md)
- [EnvironmentTestcase](classes/EnvironmentTestcase.md)
- [StepBase](classes/StepBase.md)
- [StepNormal](classes/StepNormal.md)
- [StepRegistry](classes/StepRegistry.md)
- [StepSingle](classes/StepSingle.md)

### Interfaces

- [StepLoggerInterface](interfaces/StepLoggerInterface.md)

### Variables

- [DIR\_BASE\_DATA](modules.md#dir_base_data)
- [STATUS\_ERROR](modules.md#status_error)
- [STATUS\_FATAL](modules.md#status_fatal)
- [STATUS\_OK](modules.md#status_ok)
- [STATUS\_UNKNOWN](modules.md#status_unknown)
- [STATUS\_WARNING](modules.md#status_warning)

### Functions

- [generateLogs](modules.md#generatelogs)

## Variables

### DIR\_BASE\_DATA

• `Const` **DIR\_BASE\_DATA**: ``"DIR_BASE_DATA"``

#### Defined in

[constants.ts:14](https://github.com/bitdiver/model/blob/e208e5b/src/constants.ts#L14)

___

### STATUS\_ERROR

• `Const` **STATUS\_ERROR**: ``4``

#### Defined in

[constants.ts:4](https://github.com/bitdiver/model/blob/e208e5b/src/constants.ts#L4)

___

### STATUS\_FATAL

• `Const` **STATUS\_FATAL**: ``5``

#### Defined in

[constants.ts:5](https://github.com/bitdiver/model/blob/e208e5b/src/constants.ts#L5)

___

### STATUS\_OK

• `Const` **STATUS\_OK**: ``1``

#### Defined in

[constants.ts:1](https://github.com/bitdiver/model/blob/e208e5b/src/constants.ts#L1)

___

### STATUS\_UNKNOWN

• `Const` **STATUS\_UNKNOWN**: ``2``

#### Defined in

[constants.ts:2](https://github.com/bitdiver/model/blob/e208e5b/src/constants.ts#L2)

___

### STATUS\_WARNING

• `Const` **STATUS\_WARNING**: ``3``

#### Defined in

[constants.ts:3](https://github.com/bitdiver/model/blob/e208e5b/src/constants.ts#L3)

## Functions

### generateLogs

▸ **generateLogs**(`request`): `Promise`<`void`[]\>

This function generates the log message as needed by the logadapter
and calls it. This method is extracted from the step because of reuse
in the runner

**`See`**

GenerateLogsRequest

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `GenerateLogsRequest` | The request as defined in |

#### Returns

`Promise`<`void`[]\>

#### Defined in

[generateLogs.ts:34](https://github.com/bitdiver/model/blob/e208e5b/src/generateLogs.ts#L34)
