import { EnvironmentTestcase } from './EnvironmentTestcase'

/**
 * This interface is used when a step calls a function, but the function
 * needs a logger to report something. Then The step itself will be provided
 * to the function as the logger
 */
export interface StepLoggerInterface {
  logDebug: (
    options: any,
    environmentTestcase?: EnvironmentTestcase
  ) => Promise<void>

  /**
   * Logs a info message.
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  logInfo: (
    options: any,
    environmentTestcase?: EnvironmentTestcase
  ) => Promise<void>

  /**
   * Logs a warning message.
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  logWarning: (
    options: any,
    environmentTestcase?: EnvironmentTestcase
  ) => Promise<void>

  /**
   * Logs a error message.
   * Error normaly means that the testcase gots an error
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  logError: (
    options: any,
    environmentTestcase?: EnvironmentTestcase
  ) => Promise<void>

  /**
   * Logs a fatal message.
   * Fatal normaly means that the complete test run needs to be stopped
   * @param options - The message to log or the properties
   * @param environmentTestcase - The testcase environment. If given the log
   * will only be written for this testcase. If not the log will be written for all the
   */
  logFatal: (
    options: any,
    environmentTestcase?: EnvironmentTestcase
  ) => Promise<void>
}
