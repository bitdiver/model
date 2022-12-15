import { StepType } from './constants'
import { EnvironmentTestcase } from './EnvironmentTestcase'
import { StepBase } from './StepBase'

export class StepNormal extends StepBase {
  /**
   * The test case environment for the current test case
   */
  environmentTestcase?: EnvironmentTestcase

  /**
   * The array contains the data for this step instance
   */
  data?: any

  /** The type of this step */
  type: StepType = StepType.normal
}
