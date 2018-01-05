'use strict'

import uuid from 'uuid'
const uuidV4 = uuid.v4

import { STATUS_OK } from './status'
/**
 * The run enviroment will be created when a new run starts

 */
export default class EnvironmentRun {
  constructor(opts = {}) {
    // The run id
    this.id = uuidV4()

    // The name of the suite
    this.name = opts.name

    // The status of the complete run
    this._status = STATUS_OK

    // The description of the suite
    this.description = opts.description

    this.status = STATUS_OK

    this.startTime = Date.now()
  }

  /**
   * The status could only be changed while the testcase is running. After finishing the
   * testcase the status could not be changed any more
   * @param newStatus {number} The new status for the testcase
   */
  set status(newStatus) {
    if (newStatus > this._status) {
      this._status = newStatus
    }
  }

  get status() {
    return this._status
  }
}
