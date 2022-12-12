import { v4 as uuidv4 } from 'uuid'
import { EnvironmentOptions } from './interfaceEnvironmentOptions'
import { STATUS_OK } from './constants'

/**
 * The testcase enviroment will be created when the test starts. There is one testcase
 * environment per testcase. It could be used if steps need to provide data to other steps
 * in the same testcase
 */
export class EnvironmentTestcase {
  // The testcase instance id
  id: string = uuidv4()

  // The name of this testcasde
  name: string

  // a description for this test case
  description: string

  _status: number = STATUS_OK

  // if the running is false, the status could not be changed any more
  running: boolean = true

  // The map is used to store the data
  map = new Map()

  // This is set by the runner. The number of this test case in the list of all the test cases
  // Start with '1'
  countCurrent: number = 0

  // This is set by the runner. How many test cases to be excuted in this run
  countAll: number = 0

  constructor(opts: EnvironmentOptions = {}) {
    // The name of this testcasde
    this.name = opts.name ?? 'no name'

    // a description for this test case
    this.description = opts.description ?? ''
  }

  /**
   * The status could only be changed while the testcase is running. After finishing the
   * testcase the status could not be changed any more
   * @param newStatus - The new status for the testcase
   */
  set status(newStatus) {
    if (this.running && newStatus > this._status) {
      this._status = newStatus
    }
  }

  get status(): number {
    return this._status
  }

  /**
   * Finishes this testcase
   */
  finished(): void {
    this.running = false
  }
}
