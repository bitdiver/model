'use strict'

import path from 'path'
import mkdirp from 'mkdirp'
import jsonfile from 'jsonfile'

import { LogAdapter } from './LogAdapter'

/**
 * This logadapter stores all the logs into memory.
 * The format of the stored logs is as follows:
 * const this.logs = {
 *   runId: {
 *     logs:[{}, ...]
 *     testcases:{tcId: testcase}
 *   }
 * }
 *
 * const testcase = {
 *   steps: {}
 *   logs: []
 * }
 *
 * const step = {
 *   logs: []
 * }
 *
 */
export class LogAdapterMemory extends LogAdapter {
  constructor() {
    super()
    this.logs = {}
  }

  clear() {
    this.logs = {}
  }

  prepareRun(runId) {
    if (this.logs[runId] === undefined) {
      this.logs[runId] = {
        logs: [],
        testcases: {},
      }
    }
  }

  prepareTestcase(runId, testcaseName) {
    if (this.logs[runId].testcases[testcaseName] === undefined) {
      this.logs[runId].testcases[testcaseName] = {
        logs: [],
        steps: {},
      }
    }
  }

  async _logRun(meta, data) {
    const runId = meta.run.id
    this.prepareRun(runId)
    this.logs[runId].logs.push(data)
  }

  async _logTestcase(meta, data) {
    const runId = meta.run.id
    const testcaseName = meta.tc.name

    this.prepareRun(runId)
    this.prepareTestcase(runId, testcaseName)

    this.logs[runId].testcases[testcaseName].logs.push(data)
  }

  async _logStep(meta, data) {
    const runId = meta.run.id
    const testcaseName = meta.tc.name
    const stepName = meta.step.name

    this.prepareRun(runId)
    this.prepareTestcase(runId, testcaseName)

    if (this.logs[runId].testcases[testcaseName] === undefined) {
      this.logs[runId].testcases[testcaseName] = {
        logs: [],
        steps: {},
      }
    }
    if (
      this.logs[runId].testcases[testcaseName].steps[stepName] === undefined
    ) {
      this.logs[runId].testcases[testcaseName].steps[stepName] = {
        logs: [],
      }
    }
    this.logs[runId].testcases[testcaseName].steps[stepName].logs.push(data)
  }

  async writeFile(fileName) {
    const dir = path.dirname(fileName)

    return new Promise((resolve, reject) => {
      mkdirp(dir, err => {
        if (err) {
          reject(err)
        }
      })
      resolve()
    }).then(() => {
      return new Promise((resolve, reject) => {
        jsonfile.writeFile(fileName, this.logs, { spaces: 2 }, err => {
          if (err) {
            reject(err)
          }
          resolve()
        })
      })
    })
  }
}

// Stores the logger instance
let logAdapter

/**
 * returns the logAdapter
 */
export function getLogAdapterMemory(opts) {
  if (logAdapter === undefined) {
    logAdapter = new LogAdapterMemory(opts)
  }
  return logAdapter
}
