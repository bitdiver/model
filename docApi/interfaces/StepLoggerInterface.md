[@bitdiver/model](../README.md) / [Exports](../modules.md) / StepLoggerInterface

# Interface: StepLoggerInterface

This interface is used when a step calls a function, but the function
needs a logger to report something. Then The step itself will be provided
to the function as the logger

## Table of contents

### Properties

- [logDebug](StepLoggerInterface.md#logdebug)
- [logError](StepLoggerInterface.md#logerror)
- [logFatal](StepLoggerInterface.md#logfatal)
- [logInfo](StepLoggerInterface.md#loginfo)
- [logWarning](StepLoggerInterface.md#logwarning)

## Properties

### logDebug

• **logDebug**: (`options`: `any`, `environmentTestcase?`: [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`options`, `environmentTestcase?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |
| `environmentTestcase?` | [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md) |

##### Returns

`Promise`<`void`\>

#### Defined in

[interfaceStepLogger.ts:9](https://github.com/bitdiver/model/blob/e208e5b/src/interfaceStepLogger.ts#L9)

___

### logError

• **logError**: (`options`: `any`, `environmentTestcase?`: [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`options`, `environmentTestcase?`): `Promise`<`void`\>

Logs a error message.
Error normaly means that the testcase gots an error

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

##### Returns

`Promise`<`void`\>

#### Defined in

[interfaceStepLogger.ts:43](https://github.com/bitdiver/model/blob/e208e5b/src/interfaceStepLogger.ts#L43)

___

### logFatal

• **logFatal**: (`options`: `any`, `environmentTestcase?`: [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`options`, `environmentTestcase?`): `Promise`<`void`\>

Logs a fatal message.
Fatal normaly means that the complete test run needs to be stopped

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

##### Returns

`Promise`<`void`\>

#### Defined in

[interfaceStepLogger.ts:55](https://github.com/bitdiver/model/blob/e208e5b/src/interfaceStepLogger.ts#L55)

___

### logInfo

• **logInfo**: (`options`: `any`, `environmentTestcase?`: [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`options`, `environmentTestcase?`): `Promise`<`void`\>

Logs a info message.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

##### Returns

`Promise`<`void`\>

#### Defined in

[interfaceStepLogger.ts:20](https://github.com/bitdiver/model/blob/e208e5b/src/interfaceStepLogger.ts#L20)

___

### logWarning

• **logWarning**: (`options`: `any`, `environmentTestcase?`: [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`options`, `environmentTestcase?`): `Promise`<`void`\>

Logs a warning message.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](../classes/EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

##### Returns

`Promise`<`void`\>

#### Defined in

[interfaceStepLogger.ts:31](https://github.com/bitdiver/model/blob/e208e5b/src/interfaceStepLogger.ts#L31)
