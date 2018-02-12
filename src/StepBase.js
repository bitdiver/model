import {
  getLogAdapter,
  LEVEL_INFO,
  LEVEL_DEBUG,
  LEVEL_WARNING,
  LEVEL_ERROR,
  LEVEL_FATAL,
} from './LogAdapter'

import { generateLogs } from './logHelper'

import uuid from 'uuid'
const uuidV4 = uuid.v4

import { STATUS_ERROR } from './status'

export const STEP_TYPE_NORMAL = 'normal'
export const STEP_TYPE_SINGLE = 'single'
export const STEP_TYPE_SERVER_ONLY = 'serverSingle'

// The variable name for the base data dir. All file pathes for
// step data is relative to this directory
export const DIR_BASE_DATA = 'DIR_BASE_DATA'

/**
 * The base class for a step. Later on there will be one instace of this class per step and per testcase.
 * If the step is of the type 'STEP_TYPE_SINGLE' or 'STEP_TYPE_SERVER_ONLY' Then there would be only one instance
 * for the step.
 */
export default class StepBase {
  constructor(opts = {}) {
    this.logAdapter = opts.logAdapter ? opts.logAdapter : getLogAdapter()

    this.type = opts.type ? opts.type : STEP_TYPE_NORMAL

    // creates a unique step instance id
    this.stepInstanceId = uuidV4()

    // A step can store information in the testcase environment. So a step could provide data
    // to other steps in the same testcase. For a single step or a server only step this is an
    // array of testcase environments
    this.environmentTestcase = undefined

    this.environmentRun = undefined

    // The name of this step
    this.name = opts.name

    // The idea of the testmode is to test the run of a step without executing it completly.
    // So the suite could be tested. This is important for long running tests
    this.testMode = false

    // Normaly a step will only be executed if there is data defined for the testcase.
    // but some steps do not need any data. Then this must be set to false.
    this.needData = opts.needData ? opts.needData : true

    // Stores the data for the current testcase. If it is a single step then this is an array
    // of data.
    this.data = undefined

    // This is set by the runner. The number of this step in the list of all the steps
    // Start with '1'
    this.countCurrent = 0

    // This is set by the runner. How many steps to be excuted in this run
    this.countCurrent = 0
  }

  /**
   * Logs a debug message.
   * @param options {string/object} The message to log or the properties
   * @return promise {promise} Indicating that the message was written
   */
  logDebug(options) {
    return this._log(options, LEVEL_DEBUG)
  }

  /**
   * Logs a info message.
   * @param options {string/object} The message to log or the properties
   * @return promise {promise} Indicating that the message was written
   */
  logInfo(options) {
    return this._log(options, LEVEL_INFO)
  }

  /**
   * Logs a warning message.
   * @param options {string/object} The message to log or the properties
   * @return promise {promise} Indicating that the message was written
   */
  logWarning(options) {
    return this._log(options, LEVEL_WARNING)
  }

  /**
   * Logs a error message.
   * Error normaly means that the testcase gots an error
   * @param options {string/object} The message to log or the properties
   * @return promise {promise} Indicating that the message was written
   */
  logError(options) {
    return this._log(options, LEVEL_ERROR)
  }

  /**
   * Logs a fatal message.
   * Fatal normaly means that the complete test run needs to be stopped
   * @param options {string/object} The message to log or the properties
   * @return promise {promise} Indicating that the message was written
   */
  logFatal(options) {
    return this._log(options, LEVEL_FATAL)
  }

  /**
   * Calls the logger with the given messageObj.
   * If this is a single step the log will be written for each testcase environment
   * @param messageObj {object|string} Either a message or a json object to be logged
   * @param logLevel {string} The loglevel to be used
   * @return promise {promise} Indicating that the message was written
   */
  _log(messageObj, logLevel = LEVEL_INFO) {
    return generateLogs(
      this.environmentRun,
      this.environmentTestcase,
      this.logAdapter,
      messageObj,
      logLevel,
      this
    )
  }

  /**
   * First the start method will be called for all the step instances of the step
   * @return promise {promise} A promise to signal that the method is finished
   */
  start() {
    return Promise.resolve()
  }

  /**
   * This method will be called just before the run method
   * @return promise {promise} A promise to signal that the method is finished
   */
  beforeRun() {
    return Promise.resolve()
  }

  /**
   * This method is doing the work
   * @return promise {promise} A promise to signal that the method is finished
   */
  run() {
    if (
      this.type === STEP_TYPE_NORMAL &&
      this.environmentTestcase.status < STATUS_ERROR
    ) {
      // The run method should not be executed if the status >= Error
      return this.doRun()
    }
    if (this.environmentRun.status < STATUS_ERROR) {
      return this.doRun()
    }

    return Promise.resolve()
  }

  /**
   *
   * @return promise {promise} A promise to signal that the method is finished
   */
  doRun() {
    return Promise.resolve()
  }

  /**
   * This method will be called just after the run is finished
   * This method will be called even if the run method has failed
   * @return promise {promise} A promise to signal that the method is finished
   */
  afterRun() {
    return Promise.resolve()
  }

  /**
   * This method will be called when all the step instances of this step are finished
   * @return promise {promise} A promise to signal that the method is finished
   */
  end() {
    return Promise.resolve()
  }
}
