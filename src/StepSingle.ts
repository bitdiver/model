import { StepType } from './constants'
import { EnvironmentTestcase } from './EnvironmentTestcase'
import { StepBase } from './StepBase'

export class StepSingle extends StepBase {
  /**
   * The test case environments for all the test cases.
   * A single step has access to all the test case environments
   */
  environmentTestcase?: EnvironmentTestcase[]

  /**
   * The array contains one entry (which could be undefined of null)
   * per test case
   */
  data?: any[]

  /** The type of this step */
  type: StepType = StepType.single
}
