import { v4 as uuidv4 } from 'uuid'
import { STATUS_OK } from './constants'
import { EnvironmentOptions } from './interfaceEnvironmentOptions'

/**
 * The run enviroment will be created when a new run starts
 */
export class EnvironmentRun {
  // The run id
  id: string = uuidv4()

  // The name of the suite
  name: string

  // The status of the complete run
  _status: number = STATUS_OK

  // The description of the suite
  description: string

  // The start time in milliseconds
  startTime: number = Date.now()

  // The map is used to store the data
  map = new Map()

  constructor(opts: EnvironmentOptions = {}) {
    // The name of the suite
    this.name = opts.name ?? 'no name'

    // The description of the suite
    this.description = opts.description ?? ''
  }

  /**
   * The status could only be changed while the testcase is running. After finishing the
   * testcase the status could not be changed any more
   * @param newStatus - The new status for the testcase
   */
  set status(newStatus) {
    if (newStatus > this._status) {
      this._status = newStatus
    }
  }

  get status(): number {
    return this._status
  }
}
