import { StepBase } from './StepBase'

type StepClass = new (opts: any) => StepBase

interface RegisterStepRequest {
  /** The name under which the step class is registered */
  stepName: string

  /** The step class to be registered */
  step: StepClass
}

/**
 * This registry stores all the available steps by there name.
 */
export class StepRegistry {
  /** The map storing the step classes by name */
  stepClassMap = new Map()

  /**
   * Register a class for a step by a given name
   * @param stepName - The name under the class will be rigistered
   * @param step - The class of the step
   */
  registerStep(request: RegisterStepRequest): void {
    const { stepName, step } = request

    if (this.stepClassMap.has(stepName)) {
      // A step with the same name was already registred
      // eslint-disable-next-line no-console
      console.warn(
        `There was already a step registered with the name '${stepName}'`
      )
    }

    this.stepClassMap.set(stepName, step)
  }

  /**
   * Returns an instance of a step class
   * @param stepName - The name under the class is be rigistered
   * @returns step - The instance of the step class
   */
  getStep(stepName: string): StepBase {
    if (!this.stepClassMap.has(stepName)) {
      throw new Error(
        `There was no step registered with the name '${stepName}'`
      )
    }
    const stepClass = this.stepClassMap.get(stepName)

    // eslint-disable-next-line new-cap
    return new stepClass({ name: stepName })
  }
}
