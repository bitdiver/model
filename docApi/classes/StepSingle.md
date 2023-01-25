[@bitdiver/model](../README.md) / [Exports](../modules.md) / StepSingle

# Class: StepSingle

The base class for a step. Later on there will be one instace of this class per step and per testcase.
If the step is of the type 'STEP_TYPE_SINGLE' or 'STEP_TYPE_SERVER_ONLY' Then there would be only one instance
for the step.

## Hierarchy

- [`StepBase`](StepBase.md)

  ↳ **`StepSingle`**

## Table of contents

### Constructors

- [constructor](StepSingle.md#constructor)

### Properties

- [countAll](StepSingle.md#countall)
- [countCurrent](StepSingle.md#countcurrent)
- [data](StepSingle.md#data)
- [description](StepSingle.md#description)
- [environmentRun](StepSingle.md#environmentrun)
- [environmentTestcase](StepSingle.md#environmenttestcase)
- [logAdapter](StepSingle.md#logadapter)
- [maxParallelSteps](StepSingle.md#maxparallelsteps)
- [name](StepSingle.md#name)
- [needData](StepSingle.md#needdata)
- [runOnError](StepSingle.md#runonerror)
- [stepInstanceId](StepSingle.md#stepinstanceid)
- [testMode](StepSingle.md#testmode)
- [type](StepSingle.md#type)

### Methods

- [\_log](StepSingle.md#_log)
- [afterRun](StepSingle.md#afterrun)
- [beforeRun](StepSingle.md#beforerun)
- [end](StepSingle.md#end)
- [logDebug](StepSingle.md#logdebug)
- [logError](StepSingle.md#logerror)
- [logFatal](StepSingle.md#logfatal)
- [logInfo](StepSingle.md#loginfo)
- [logWarning](StepSingle.md#logwarning)
- [run](StepSingle.md#run)
- [start](StepSingle.md#start)

## Constructors

### constructor

• **new StepSingle**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `StepOptions` |

#### Inherited from

[StepBase](StepBase.md).[constructor](StepBase.md#constructor)

#### Defined in

[StepBase.ts:80](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L80)

## Properties

### countAll

• **countAll**: `number` = `0`

This is set by the runner. How many steps to be excuted in this run

#### Inherited from

[StepBase](StepBase.md).[countAll](StepBase.md#countall)

#### Defined in

[StepBase.ts:58](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L58)

___

### countCurrent

• **countCurrent**: `number` = `0`

This is set by the runner. The number of this stepin the list of all the steps
Start with '1'

#### Inherited from

[StepBase](StepBase.md).[countCurrent](StepBase.md#countcurrent)

#### Defined in

[StepBase.ts:55](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L55)

___

### data

• `Optional` **data**: `any`[]

The array contains one entry (which could be undefined of null)
per test case

#### Overrides

[StepBase](StepBase.md).[data](StepBase.md#data)

#### Defined in

[StepSingle.ts:16](https://github.com/bitdiver/model/blob/e208e5b/src/StepSingle.ts#L16)

___

### description

• `Optional` **description**: `string`

An optional description for this step

#### Inherited from

[StepBase](StepBase.md).[description](StepBase.md#description)

#### Defined in

[StepBase.ts:37](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L37)

___

### environmentRun

• `Optional` **environmentRun**: [`EnvironmentRun`](EnvironmentRun.md)

#### Inherited from

[StepBase](StepBase.md).[environmentRun](StepBase.md#environmentrun)

#### Defined in

[StepBase.ts:73](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L73)

___

### environmentTestcase

• `Optional` **environmentTestcase**: [`EnvironmentTestcase`](EnvironmentTestcase.md)[]

The test case environments for all the test cases.
A single step has access to all the test case environments

#### Overrides

[StepBase](StepBase.md).[environmentTestcase](StepBase.md#environmenttestcase)

#### Defined in

[StepSingle.ts:10](https://github.com/bitdiver/model/blob/e208e5b/src/StepSingle.ts#L10)

___

### logAdapter

• **logAdapter**: `LogAdapterInterface`

The Logadapter used by the step

#### Inherited from

[StepBase](StepBase.md).[logAdapter](StepBase.md#logadapter)

#### Defined in

[StepBase.ts:25](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L25)

___

### maxParallelSteps

• **maxParallelSteps**: `number` = `10`

Allows to define how many parallel exection are possible on a per step basis.
This value is normaly defined in the runner, but when given here it will overwrite
the runner if this value is less

#### Inherited from

[StepBase](StepBase.md).[maxParallelSteps](StepBase.md#maxparallelsteps)

#### Defined in

[StepBase.ts:71](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L71)

___

### name

• **name**: `string`

The name of this step

#### Inherited from

[StepBase](StepBase.md).[name](StepBase.md#name)

#### Defined in

[StepBase.ts:34](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L34)

___

### needData

• **needData**: `boolean` = `true`

Normaly a step will only be executed if there is data defined for the testcase.
but some steps do not need any data. Then this must be set to false.

#### Inherited from

[StepBase](StepBase.md).[needData](StepBase.md#needdata)

#### Defined in

[StepBase.ts:50](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L50)

___

### runOnError

• **runOnError**: `boolean` = `false`

If this is set to true, the step will executed even if the testcase is already failed
This is important for cleanup steps, for Example.

#### Inherited from

[StepBase](StepBase.md).[runOnError](StepBase.md#runonerror)

#### Defined in

[StepBase.ts:64](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L64)

___

### stepInstanceId

• **stepInstanceId**: `string`

creates a unique step instance id

#### Inherited from

[StepBase](StepBase.md).[stepInstanceId](StepBase.md#stepinstanceid)

#### Defined in

[StepBase.ts:31](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L31)

___

### testMode

• **testMode**: `boolean` = `false`

The idea of the testmode is to test the run of a step without executing it completly.
So the suite could be tested. This is important for long running tests
The mode is set by the runner

#### Inherited from

[StepBase](StepBase.md).[testMode](StepBase.md#testmode)

#### Defined in

[StepBase.ts:44](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L44)

___

### type

• **type**: [`StepType`](../enums/StepType.md) = `StepType.single`

The type of this step

#### Overrides

[StepBase](StepBase.md).[type](StepBase.md#type)

#### Defined in

[StepSingle.ts:19](https://github.com/bitdiver/model/blob/e208e5b/src/StepSingle.ts#L19)

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

#### Inherited from

[StepBase](StepBase.md).[_log](StepBase.md#_log)

#### Defined in

[StepBase.ts:213](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L213)

___

### afterRun

▸ **afterRun**(): `Promise`<`void`\>

This method will be called just after the run is finished
This method will be called even if the run method has failed

#### Returns

`Promise`<`void`\>

#### Inherited from

[StepBase](StepBase.md).[afterRun](StepBase.md#afterrun)

#### Defined in

[StepBase.ts:126](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L126)

___

### beforeRun

▸ **beforeRun**(): `Promise`<`void`\>

This method will be called just before the run method

#### Returns

`Promise`<`void`\>

#### Inherited from

[StepBase](StepBase.md).[beforeRun](StepBase.md#beforerun)

#### Defined in

[StepBase.ts:111](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L111)

___

### end

▸ **end**(): `Promise`<`void`\>

This method will be called when all the step instances of this step are finished

#### Returns

`Promise`<`void`\>

#### Inherited from

[StepBase](StepBase.md).[end](StepBase.md#end)

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

#### Inherited from

[StepBase](StepBase.md).[logDebug](StepBase.md#logdebug)

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

#### Inherited from

[StepBase](StepBase.md).[logError](StepBase.md#logerror)

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

#### Inherited from

[StepBase](StepBase.md).[logFatal](StepBase.md#logfatal)

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

#### Inherited from

[StepBase](StepBase.md).[logInfo](StepBase.md#loginfo)

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

#### Inherited from

[StepBase](StepBase.md).[logWarning](StepBase.md#logwarning)

#### Defined in

[StepBase.ts:170](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L170)

___

### run

▸ **run**(): `Promise`<`void`\>

This method is doing the work

#### Returns

`Promise`<`void`\>

#### Inherited from

[StepBase](StepBase.md).[run](StepBase.md#run)

#### Defined in

[StepBase.ts:118](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L118)

___

### start

▸ **start**(): `Promise`<`void`\>

First the start method will be called for all the step instances of the step

#### Returns

`Promise`<`void`\>

#### Inherited from

[StepBase](StepBase.md).[start](StepBase.md#start)

#### Defined in

[StepBase.ts:104](https://github.com/bitdiver/model/blob/e208e5b/src/StepBase.ts#L104)
