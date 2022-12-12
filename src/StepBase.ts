import { v4 as uuidv4 } from 'uuid'
import {
  getLogAdapterConsole,
  LEVEL_DEBUG,
  LEVEL_INFO,
  LEVEL_WARNING,
  LEVEL_ERROR,
  LEVEL_FATAL,
  LogAdapterConsole
} from '@bitdiver/logadapter'

import { generateLogs } from './logHelper'
import { StepType } from './constants'
import { EnvironmentTestcase } from './EnvironmentTestcase'
import { EnvironmentRun } from './EnvironmentRun'
import { StepOptions } from './interfaceStepOptions'

/**
 * The base class for a step. Later on there will be one instace of this class per step and per testcase.
 * If the step is of the type 'STEP_TYPE_SINGLE' or 'STEP_TYPE_SERVER_ONLY' Then there would be only one instance
 * for the step.
 */
export class StepBase {
  /** The Logadapter used by the step */
  logAdapter: LogAdapterConsole = getLogAdapterConsole()

  /** The type of this step */
  type: StepType = StepType.normal

  // creates a unique step instance id
  stepInstanceId: string = uuidv4()

  // The name of this step
  name: string

  // The idea of the testmode is to test the run of a step without executing it completly.
  // So the suite could be tested. This is important for long running tests
  // The mode is set by the runner
  testMode: boolean = false

  // Normaly a step will only be executed if there is data defined for the testcase.
  // but some steps do not need any data. Then this must be set to false.
  needData: boolean = true

  // This is set by the runner. The number of this stepin the list of all the steps
  // Start with '1'
  countCurrent: number = 0

  // This is set by the runner. How many steps to be excuted in this run
  countAll: number = 0

  // If this is set to true, the step will executed even if the testcase is already failed
  // This is important for cleanup steps, for Example.
  runOnError: boolean = false

  // Allows to define how many parallel exection are possible on a per step basis.
  // This value is normaly defined in the runner, but when given here it will overwrite
  // the runner if this value is less
  maxParallelSteps: number = 10

  // A step can store information in the testcase environment. So a step could provide data
  // to other steps in the same testcase. For a single step or a server only step this is an
  // array of testcase environments
  environmentTestcase?: EnvironmentTestcase

  environmentRun?: EnvironmentRun

  // Stores the data for the current testcase. If it is a single step then this is an array
  // of data.
  data?: any

  constructor(opts: StepOptions) {
    // The name of this step
    this.name = opts.name

    if (opts.logAdapter !== undefined) {
      this.logAdapter = opts.logAdapter
    }

    if (opts.type !== undefined) {
      this.type = opts.type
    }

    if (opts.needData !== undefined) {
      this.needData = opts.needData
    }

    if (opts.runOnError !== undefined) {
      this.runOnError = opts.runOnError
    }

    if (opts.maxParallelSteps !== undefined) {
      this.maxParallelSteps = opts.maxParallelSteps
    }
  }

  /**
   * First the start method will be called for all the step instances of the step
   */
  async start(): Promise<void> {
    return await Promise.resolve()
  }

  /**
   * This method will be called just before the run method
   */
  async beforeRun(): Promise<void> {
    return await Promise.resolve()
  }

  /**
   * This method is doing the work
   */
  async run(): Promise<void> {
    return await Promise.resolve()
  }

  /**
   * This method will be called just after the run is finished
   * This method will be called even if the run method has failed
   */
  async afterRun(): Promise<void> {
    return await Promise.resolve()
  }

  /**
   * This method will be called when all the step instances of this step are finished
   */
  async end(): Promise<void> {
    return await Promise.resolve()
  }

  /**
   * Logs a debug message.
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   * testcases
   */
  async logDebug(
    options: any,
    environmentTestcase?: EnvironmentTestcase
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ): Promise<void[]> {
    return await this._log(options, LEVEL_DEBUG, environmentTestcase)
  }

  /**
   * Logs a info message.
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  async logInfo(
    options: any,
    environmentTestcase?: EnvironmentTestcase
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ): Promise<void[]> {
    return await this._log(options, LEVEL_INFO, environmentTestcase)
  }

  /**
   * Logs a warning message.
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  async logWarning(
    options: any,
    environmentTestcase?: EnvironmentTestcase
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ): Promise<void[]> {
    return await this._log(options, LEVEL_WARNING, environmentTestcase)
  }

  /**
   * Logs a error message.
   * Error normaly means that the testcase gots an error
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  async logError(
    options: any,
    environmentTestcase?: EnvironmentTestcase
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ): Promise<void[]> {
    return await this._log(options, LEVEL_ERROR, environmentTestcase)
  }

  /**
   * Logs a fatal message.
   * Fatal normaly means that the complete test run needs to be stopped
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  async logFatal(
    options: any,
    environmentTestcase?: EnvironmentTestcase
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ): Promise<void[]> {
    return await this._log(options, LEVEL_FATAL, environmentTestcase)
  }

  /**
   * Calls the logger with the given messageObj.
   * If this is a single step the log will be written for each testcase environment
   * @param messageObj - Either a message or a json object to be logged
   * @param logLevel - The loglevel to be used
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  async _log(
    messageObj: any,
    logLevel?: string,
    environmentTestcase?: EnvironmentTestcase
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  ): Promise<void[]> {
    if (logLevel === undefined) {
      logLevel = LEVEL_INFO
    }

    if (environmentTestcase === undefined) {
      environmentTestcase = this.environmentTestcase
    }

    if (
      this.environmentRun === undefined ||
      environmentTestcase === undefined
    ) {
      // Only to make typescript happy
      throw new Error('Should be impossible')
    }

    return await generateLogs({
      environmentRun: this.environmentRun,
      environmentTestcase,
      logAdapter: this.logAdapter,
      logLevelString: logLevel,
      messageObj,
      step: this
    })
  }
}
