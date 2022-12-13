import { EnvironmentRun } from './EnvironmentRun'
import { EnvironmentTestcase } from './EnvironmentTestcase'
import { LogAdapterInterface, LogMessageInterface } from '@bitdiver/logadapter'
import { StepBase } from './StepBase'

interface GenerateLogsRequest {
  /** The run environment */
  environmentRun: EnvironmentRun

  /** The test case environment */
  environmentTestcase?: EnvironmentTestcase

  /** The log adapter to use */
  logAdapter: LogAdapterInterface

  /** The message to log */
  messageObj: any

  /** The log level as string */
  logLevelString: string

  /** If this is a step log, the step instance object */
  step?: StepBase
}

/**
 * This function generates the log message as needed by the logadapter
 * and calls it. This method is extracted from the step because of reuse
 * in the runner
 * @param request - The request as defined in @see GenerateLogsRequest
 */
export async function generateLogs(
  request: GenerateLogsRequest // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
): Promise<void[]> {
  const {
    environmentRun,
    environmentTestcase,
    logAdapter,
    messageObj,
    logLevelString,
    step
  } = request

  // The base data object
  let data: any = {}

  if (messageObj instanceof Error) {
    data = {
      message: messageObj.message,
      stack: messageObj.stack
    }
  } else if (typeof messageObj === 'string') {
    data = { message: messageObj }
  } else {
    data = messageObj
  }

  const logMessage: LogMessageInterface = {
    data,
    logLevel: logLevelString,
    meta: {
      run: {
        id: environmentRun.id,
        name: environmentRun.name,
        start: environmentRun.startTime
      },
      logTime: Date.now()
    }
  }

  if (step !== undefined) {
    logMessage.meta.step = {
      stepCountAll: step.countAll,
      stepCountCurrent: step.countCurrent,

      id: step.stepInstanceId,
      name: step.name,
      type: step.type
    }
  }
  const promises = []
  if (environmentTestcase !== undefined) {
    // ----------------------------------------------
    // For a normal step the log will be written just once
    // ----------------------------------------------
    if (!Array.isArray(environmentTestcase)) {
      logMessage.meta.tc = {
        tcCountAll: environmentTestcase.countAll,
        tcCountCurrent: environmentTestcase.countCurrent,
        id: environmentTestcase.id,
        name: environmentTestcase.name
      }
      promises.push(logAdapter.log(logMessage))
    } else {
      // ----------------------------------------------
      // For Single step the log will be written for each testcase environment
      // ----------------------------------------------

      for (const tcEnv of environmentTestcase) {
        logMessage.meta.tc = {
          tcCountAll: tcEnv.countAll,
          tcCountCurrent: tcEnv.countCurrent,
          id: tcEnv.id,
          name: tcEnv.name
        }
        promises.push(logAdapter.log(logMessage))
      }
    }
  } else {
    promises.push(logAdapter.log(logMessage))
  }

  return await Promise.all(promises)
}
