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

    // The description of the suite
    this.description = opts.description

    this.status = STATUS_OK
  }
}
