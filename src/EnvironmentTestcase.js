'use strict'

import uuid from 'uuid'
const uuidV4 = uuid.v4

import { STATUS_OK } from './status'

/**
 * The testcase enviroment will be created when the test starts. There is one testcase
 * environment per testcase. It could be used if steps need to provide data to other steps
 * in the same testcase
 */
export default class EnvironmentTestcase {
  constructor(opts = {}) {
    // The testcase instance id
    this.id = uuidV4()

    // The name of this testcasde
    this.name = opts.name

    // a description for this test case
    this.description = opts.description

    this.status = STATUS_OK

    // The map is used to store the data
    this.map = new Map()
  }
}
