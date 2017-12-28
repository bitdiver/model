'use strict'

export const LEVEL_DEBUG = 'debug'
export const LEVEL_INFO = 'info'
export const LEVEL_WARNING = 'warn'
export const LEVEL_ERROR = 'error'
export const LEVEL_FATAL = 'fatal'

/**
 * This adapter is for communicating with the server Process
 * @class
 */
class ServerAdapter {
  constructor() {
    // default is not to write to console
    this.writeConsole = true
  }
}

// Stores the logger instance
const serverAdapter = new ServerAdapter()

export function getServerAdapter() {
  return serverAdapter
}
