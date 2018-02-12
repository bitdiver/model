'use strict'

import assert from 'assert'

export const LEVEL_DEBUG = 'debug'
export const LEVEL_INFO = 'info'
export const LEVEL_WARNING = 'warning'
export const LEVEL_ERROR = 'error'
export const LEVEL_FATAL = 'fatal'

/**
 * Implements a default logAdapter
 * @class
 */
export class LogAdapter {
  constructor() {
    // default is not to write to console
    this.writeConsole = true
  }

  /**
   * This method will be called each time the runner
   * starts a new run
   */
  reset() {}

  /**
   * @param data {object} The object with the data to be logged and the needed meta data
   *     const logMessage = {
   *       meta:{
   *         run:{
   *           start: <time>,
   *           id: 'id' // RunEnvironment ID
   *         },
   *         tc:{
   *           tcCountCurrent: tcCountCurrent,
   *           tcCountAll: tcCountAll,
   *           id: 'id', // TestcaseEnvironment ID
   *           name: 'great tc name'
   *         },
   *         step:{
   *           stepCountCurrent: stepCountCurrent,
   *           stepCountAll: stepCountAll,
   *           id: 'id', // testcase instance
   *           name: 'great step name'
   *           typ: ('singel'| ''|)
   *         }
   *       }
   *       data:{},
   *       logLevel: LEVEL_INFO
   *     }
   * @return promise {promise} A promise for writing the file
   */
  log(logMessage) {
    assert.ok(logMessage.meta, `The log message does not have a 'meta' object`)
    assert.ok(logMessage.data, `The log message does not have a 'data' object`)

    const meta = logMessage.meta
    const data = logMessage.data
    const logLevel = logMessage.logLevel

    // Set the time of the log
    meta.logTime = Date.now()

    // set the loglevel
    meta.logLevel = logMessage.logLevel

    if (meta.step !== undefined && meta.step.id !== undefined) {
      // this is a step log
      return this._logStep(meta, data, logLevel)
    } else if (meta.tc !== undefined && meta.tc.id !== undefined) {
      // This is a testcase log
      return this._logTestcase(meta, data, logLevel)
    }
    // This is a run log
    return this._logRun(meta, data, logLevel)
  }

  async _logRun(meta, data, logLevel) {
    // eslint-disable-next-line no-console
    console.log('Run: ', `\n${{ data, logLevel }}`)
  }

  async _logTestcase(meta, data, logLevel) {
    const testcaseName = meta.tc.name
    // eslint-disable-next-line no-console
    console.log('Test case: ', `${testcaseName}:\n${{ data, logLevel }}`)
  }

  async _logStep(meta, data, logLevel) {
    const testcaseName = meta.tc.name
    const stepName = meta.step.name
    // eslint-disable-next-line no-console
    console.log(
      'Step: ',
      `${testcaseName}->${stepName}:\n${{ data, logLevel }}`
    )
  }
}

// Stores the logger instance
const logAdapter = new LogAdapter()

export function getLogAdapter() {
  return logAdapter
}
