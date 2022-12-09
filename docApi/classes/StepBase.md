[@bitdiver/model](../README.md) / [Exports](../modules.md) / StepBase

# Class: StepBase

The base class for a step. Later on there will be one instace of this class per step and per testcase.
If the step is of the type 'STEP_TYPE_SINGLE' or 'STEP_TYPE_SERVER_ONLY' Then there would be only one instance
for the step.

## Table of contents

### Constructors

- [constructor](StepBase.md#constructor)

### Properties

- [countAll](StepBase.md#countall)
- [countCurrent](StepBase.md#countcurrent)
- [data](StepBase.md#data)
- [environmentRun](StepBase.md#environmentrun)
- [environmentTestcase](StepBase.md#environmenttestcase)
- [logAdapter](StepBase.md#logadapter)
- [maxParallelSteps](StepBase.md#maxparallelsteps)
- [name](StepBase.md#name)
- [needData](StepBase.md#needdata)
- [runOnError](StepBase.md#runonerror)
- [stepInstanceId](StepBase.md#stepinstanceid)
- [testMode](StepBase.md#testmode)
- [type](StepBase.md#type)

### Methods

- [\_log](StepBase.md#_log)
- [afterRun](StepBase.md#afterrun)
- [beforeRun](StepBase.md#beforerun)
- [end](StepBase.md#end)
- [logDebug](StepBase.md#logdebug)
- [logError](StepBase.md#logerror)
- [logFatal](StepBase.md#logfatal)
- [logInfo](StepBase.md#loginfo)
- [logWarning](StepBase.md#logwarning)
- [run](StepBase.md#run)
- [start](StepBase.md#start)

## Constructors

### constructor

• **new StepBase**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StepOptions` |

#### Defined in

StepBase.ts:72

## Properties

### countAll

• **countAll**: `number` = `0`

#### Defined in

StepBase.ts:50

___

### countCurrent

• **countCurrent**: `number` = `0`

#### Defined in

StepBase.ts:47

___

### data

• `Optional` **data**: `any`

#### Defined in

StepBase.ts:70

___

### environmentRun

• `Optional` **environmentRun**: [`EnvironmentRun`](EnvironmentRun.md)

#### Defined in

StepBase.ts:66

___

### environmentTestcase

• `Optional` **environmentTestcase**: [`EnvironmentTestcase`](EnvironmentTestcase.md)

#### Defined in

StepBase.ts:64

___

### logAdapter

• **logAdapter**: `LogAdapterConsole`

The Logadapter used by the step

#### Defined in

StepBase.ts:25

___

### maxParallelSteps

• **maxParallelSteps**: `number` = `10`

#### Defined in

StepBase.ts:59

___

### name

• **name**: `string`

#### Defined in

StepBase.ts:34

___

### needData

• **needData**: `boolean` = `true`

#### Defined in

StepBase.ts:43

___

### runOnError

• **runOnError**: `boolean` = `false`

#### Defined in

StepBase.ts:54

___

### stepInstanceId

• **stepInstanceId**: `string`

#### Defined in

StepBase.ts:31

___

### testMode

• **testMode**: `boolean` = `false`

#### Defined in

StepBase.ts:39

___

### type

• **type**: [`StepType`](../enums/StepType.md) = `StepType.normal`

The type of this step

#### Defined in

StepBase.ts:28

## Methods

### \_log

▸ **_log**(`messageObj`, `logLevel?`, `environmentTestcase?`): `Promise`<`void`[]\>

Calls the logger with the given messageObj.
If this is a single step the log will be written for each testcase environment

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageObj` | `any` | Either a message or a json object to be logged |
| `logLevel?` | `string` | The loglevel to be used |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`[]\>

#### Defined in

StepBase.ts:214

___

### afterRun

▸ **afterRun**(): `Promise`<`void`\>

This method will be called just after the run is finished
This method will be called even if the run method has failed

#### Returns

`Promise`<`void`\>

#### Defined in

StepBase.ts:122

___

### beforeRun

▸ **beforeRun**(): `Promise`<`void`\>

This method will be called just before the run method

#### Returns

`Promise`<`void`\>

#### Defined in

StepBase.ts:107

___

### end

▸ **end**(): `Promise`<`void`\>

This method will be called when all the step instances of this step are finished

#### Returns

`Promise`<`void`\>

#### Defined in

StepBase.ts:129

___

### logDebug

▸ **logDebug**(`options`, `environmentTestcase?`): `Promise`<`void`[]\>

Logs a debug message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the testcases |

#### Returns

`Promise`<`void`[]\>

#### Defined in

StepBase.ts:140

___

### logError

▸ **logError**(`options`, `environmentTestcase?`): `Promise`<`void`[]\>

Logs a error message.
Error normaly means that the testcase gots an error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`[]\>

#### Defined in

StepBase.ts:183

___

### logFatal

▸ **logFatal**(`options`, `environmentTestcase?`): `Promise`<`void`[]\>

Logs a fatal message.
Fatal normaly means that the complete test run needs to be stopped

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`[]\>

#### Defined in

StepBase.ts:198

___

### logInfo

▸ **logInfo**(`options`, `environmentTestcase?`): `Promise`<`void`[]\>

Logs a info message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`[]\>

#### Defined in

StepBase.ts:154

___

### logWarning

▸ **logWarning**(`options`, `environmentTestcase?`): `Promise`<`void`[]\>

Logs a warning message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`[]\>

#### Defined in

StepBase.ts:168

___

### run

▸ **run**(): `Promise`<`void`\>

This method is doing the work

#### Returns

`Promise`<`void`\>

#### Defined in

StepBase.ts:114

___

### start

▸ **start**(): `Promise`<`void`\>

First the start method will be called for all the step instances of the step

#### Returns

`Promise`<`void`\>

#### Defined in

StepBase.ts:100
