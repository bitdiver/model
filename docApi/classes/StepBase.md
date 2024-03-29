[@bitdiver/model](../README.md) / [Exports](../modules.md) / StepBase

# Class: StepBase

The base class for a step. Later on there will be one instace of this class per step and per testcase.
If the step is of the type 'STEP_TYPE_SINGLE' or 'STEP_TYPE_SERVER_ONLY' Then there would be only one instance
for the step.

## Hierarchy

- **`StepBase`**

  ↳ [`StepNormal`](StepNormal.md)

  ↳ [`StepSingle`](StepSingle.md)

## Table of contents

### Constructors

- [constructor](StepBase.md#constructor)

### Properties

- [countAll](StepBase.md#countall)
- [countCurrent](StepBase.md#countcurrent)
- [data](StepBase.md#data)
- [description](StepBase.md#description)
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

[StepBase.ts:80](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L80)

## Properties

### countAll

• **countAll**: `number` = `0`

This is set by the runner. How many steps to be excuted in this run

#### Defined in

[StepBase.ts:58](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L58)

___

### countCurrent

• **countCurrent**: `number` = `0`

This is set by the runner. The number of this stepin the list of all the steps
Start with '1'

#### Defined in

[StepBase.ts:55](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L55)

___

### data

• `Optional` **data**: `any`

The data for this step

#### Defined in

[StepBase.ts:78](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L78)

___

### description

• `Optional` **description**: `string`

An optional description for this step

#### Defined in

[StepBase.ts:37](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L37)

___

### environmentRun

• `Optional` **environmentRun**: [`EnvironmentRun`](EnvironmentRun.md)

#### Defined in

[StepBase.ts:73](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L73)

___

### environmentTestcase

• `Optional` **environmentTestcase**: [`EnvironmentTestcase`](EnvironmentTestcase.md) \| [`EnvironmentTestcase`](EnvironmentTestcase.md)[]

#### Defined in

[StepBase.ts:75](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L75)

___

### logAdapter

• **logAdapter**: `LogAdapterInterface`

The Logadapter used by the step

#### Defined in

[StepBase.ts:25](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L25)

___

### maxParallelSteps

• **maxParallelSteps**: `number` = `10`

Allows to define how many parallel exection are possible on a per step basis.
This value is normaly defined in the runner, but when given here it will overwrite
the runner if this value is less

#### Defined in

[StepBase.ts:71](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L71)

___

### name

• **name**: `string`

The name of this step

#### Defined in

[StepBase.ts:34](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L34)

___

### needData

• **needData**: `boolean` = `true`

Normaly a step will only be executed if there is data defined for the testcase.
but some steps do not need any data. Then this must be set to false.

#### Defined in

[StepBase.ts:50](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L50)

___

### runOnError

• **runOnError**: `boolean` = `false`

If this is set to true, the step will executed even if the testcase is already failed
This is important for cleanup steps, for Example.

#### Defined in

[StepBase.ts:64](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L64)

___

### stepInstanceId

• **stepInstanceId**: `string`

creates a unique step instance id

#### Defined in

[StepBase.ts:31](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L31)

___

### testMode

• **testMode**: `boolean` = `false`

The idea of the testmode is to test the run of a step without executing it completly.
So the suite could be tested. This is important for long running tests
The mode is set by the runner

#### Defined in

[StepBase.ts:44](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L44)

___

### type

• **type**: [`StepType`](../enums/StepType.md) = `StepType.normal`

The type of this step

#### Defined in

[StepBase.ts:28](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L28)

## Methods

### \_log

▸ **_log**(`messageObj`, `logLevel?`, `environmentTestcase?`): `Promise`<`void`\>

Calls the logger with the given messageObj.
If this is a single step the log will be written for each testcase environment

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageObj` | `any` | Either a message or a json object to be logged |
| `logLevel?` | `string` | The loglevel to be used |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) \| [`EnvironmentTestcase`](EnvironmentTestcase.md)[] | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:213](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L213)

___

### afterRun

▸ **afterRun**(): `Promise`<`void`\>

This method will be called just after the run is finished
This method will be called even if the run method has failed

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:126](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L126)

___

### beforeRun

▸ **beforeRun**(): `Promise`<`void`\>

This method will be called just before the run method

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:111](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L111)

___

### end

▸ **end**(): `Promise`<`void`\>

This method will be called when all the step instances of this step are finished

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:133](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L133)

___

### logDebug

▸ **logDebug**(`messageObj`, `environmentTestcase?`): `Promise`<`void`\>

Logs a debug message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageObj` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the testcases |

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:144](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L144)

___

### logError

▸ **logError**(`messageObj`, `environmentTestcase?`): `Promise`<`void`\>

Logs a error message.
Error normaly means that the testcase gots an error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageObj` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:184](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L184)

___

### logFatal

▸ **logFatal**(`messageObj`, `environmentTestcase?`): `Promise`<`void`\>

Logs a fatal message.
Fatal normaly means that the complete test run needs to be stopped

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageObj` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:198](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L198)

___

### logInfo

▸ **logInfo**(`messageObj`, `environmentTestcase?`): `Promise`<`void`\>

Logs a info message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageObj` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:157](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L157)

___

### logWarning

▸ **logWarning**(`messageObj`, `environmentTestcase?`): `Promise`<`void`\>

Logs a warning message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageObj` | `any` | The message to log or the properties |
| `environmentTestcase?` | [`EnvironmentTestcase`](EnvironmentTestcase.md) | The testcase environment. If given the log will only be written for this testcase. If not the log will be written for all the |

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:170](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L170)

___

### run

▸ **run**(): `Promise`<`void`\>

This method is doing the work

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:118](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L118)

___

### start

▸ **start**(): `Promise`<`void`\>

First the start method will be called for all the step instances of the step

#### Returns

`Promise`<`void`\>

#### Defined in

[StepBase.ts:104](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L104)
