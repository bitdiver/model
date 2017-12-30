import {
  getLogAdapter,
  LEVEL_INFO,
  LEVEL_DEBUG,
  LEVEL_WARNING,
  LEVEL_ERROR,
  LEVEL_FATAL,
} from './LogAdapter'

import uuid from 'uuid'
const uuidV4 = uuid.v4

import { STATUS_OK, STATUS_WARNING, STATUS_ERROR, STATUS_FATAL } from './status'

export const STEP_TYPE_NORMAL = 'normal'
export const STEP_TYPE_SINGLE = 'single'
export const STEP_TYPE_SERVER_ONLY = 'serverSingle'

/**
 * The base class for a step. Later on there will be one instace of this class per step and per testcase.
 * If the step is of the type 'STEP_TYPE_SINGLE' or 'STEP_TYPE_SERVER_ONLY' Then there would be only one instance
 * for the step.
 */
export default class StepBase {
  constructor(opts = {}) {
    this.logger = getLogAdapter()

    this.type = opts.type ? opts.type : STEP_TYPE_NORMAL

    // creates a unique step instance id
    this.stepInstanceId = uuidV4()

    // A step can store information in the testcase environment. So a step could provide data
    // to other steps in the same testcase. For a single step or a server only step this is an
    // array of testcase environments
    this.environmentTestcase = undefined

    // The name of this step
    this.name = opts.name

    // The idea of the testmode is to test the run of a step without executing it completly.
    // So the suite could be tested. This is important for long running tests
    this.testMode = false

    // each step starts with this status
    this.status = STATUS_OK

    // Normaly a step will only be executed if there is data defined for the testcase.
    // but some steps do not need any data. Then this must be set to false.
    this.needData = opts.needData ? opts.needData : true

    // Stores the data for the current testcase. If it is a single step then this is an array
    // of data.
    this.data = undefined
  }

  /**
   * Logs a debug message.
   * @param options {string/object} The message to log or the properties
   */
  logDebug(options) {
    const logLevel = LEVEL_DEBUG
    if (typeof options === 'string') {
      this._log({ message: options, logLevel })
    } else {
      this._log({ ...options, logLevel })
    }
  }

  /**
   * Logs a info message.
   * @param options {string/object} The message to log or the properties
   */
  logInfo(options) {
    const logLevel = LEVEL_INFO
    if (typeof options === 'string') {
      this._log({ message: options, logLevel })
    } else {
      this._log({ ...options, logLevel })
    }
  }

  /**
   * Logs a warning message.
   * @param options {string/object} The message to log or the properties
   */
  logWarning(options) {
    const logLevel = LEVEL_WARNING
    this._setStatus(STATUS_WARNING)
    if (typeof options === 'string') {
      this._log({ message: options, logLevel })
    } else {
      this._log({ ...options, logLevel })
    }
  }

  /**
   * Logs a error message.
   * Error normaly means that the testcase gots an error
   * @param options {string/object} The message to log or the properties
   */
  logError(options) {
    const logLevel = LEVEL_ERROR
    this._setStatus(STATUS_ERROR)
    if (typeof options === 'string') {
      this._log({ message: options, logLevel })
    } else {
      this._log({ ...options, logLevel })
    }
  }

  /**
   * Logs a fatal message.
   * Fatal normaly means that the complete test run needs to be stopped
   * @param options {string/object} The message to log or the properties
   */
  logFatal(options) {
    const logLevel = LEVEL_FATAL
    this._setStatus(STATUS_FATAL)
    if (typeof options === 'string') {
      this._log({ message: options, logLevel })
    } else {
      this._log({ ...options, logLevel })
    }
  }

  _log(options) {
    this.logger.log({
      ...options,
      name: this.name,
      instance: this.stepInstanceId,
      time: new Date(Date.now()),
    })
  }

  /**
   * Sets the status of this step to 'ERROR'. This normaly means that the testcase
   * this step belongs to got an error and will not be continued.
   * @param message {string/object} The message to log or the properties to log
   */
  _setStatus(status) {
    if (this.status < status) {
      this.status = status
    }
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
   * This method will be called just before the run method
   * @return promise {promise} A promise to signal that the method is finished
   */
  run() {
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
