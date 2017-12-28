'use strict'

export const LEVEL_DEBUG = 'debug'
export const LEVEL_INFO = 'info'
export const LEVEL_WARNING = 'warn'
export const LEVEL_ERROR = 'error'
export const LEVEL_FATAL = 'fatal'

/**
 * Implements a default logAdapter
 * @class
 */
class LogAdapter {
  constructor() {
    // default is not to write to console
    this.writeConsole = true
  }

  log(data) {
    if (this.writeConsole) {
      console.log(data)
    }
  }
}

// Stores the logger instance
const logAdapter = new LogAdapter()

export function getLogAdapter() {
  return logAdapter
}
