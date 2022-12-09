import { LogAdapterConsole } from '@bitdiver/logadapter'
import { StepType } from './constants'

export interface StepOptions {
  /** The name of this step */
  name: string

  /** The type of this step */
  type?: StepType

  /** The Logadapter used by the step */
  logAdapter?: LogAdapterConsole

  /**
   * Normaly a step will only be executed if there is data defined for the testcase.
   *but some steps do not need any data. Then this must be set to false.
   */
  needData?: boolean

  /**
   * If this is set to true, the step will executed even if the testcase is already failed
   *This is important for cleanup steps, for Example.
   */
  runOnError?: boolean

  /** Allows to define how many parallel exection are possible on a per step basis.
   * This value is normaly defined in the runner, but when given here it will overwrite
   * the runner if this value is less
   * */
  maxParallelSteps?: number
}
