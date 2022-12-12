import { StepRegistry, StepBase } from '../src/index'
import { StepOptions } from '../src/interfaceStepOptions'

test('Test that the step could be registered', () => {
  const registry = new StepRegistry()
  registry.registerStep({ stepName: 'gumStep', step: StepBase })

  const step = registry.getStep('gumStep')

  expect(step.name).toEqual('gumStep')
})

test('Register to steps with the same name:Schould overwrite the first step', () => {
  const registry = new StepRegistry()
  registry.registerStep({ stepName: 'gumStep', step: StepBase })

  const step = registry.getStep('gumStep')
  expect(step.name).toEqual('gumStep')

  registry.registerStep({ stepName: 'gumStep', step: GumStep })

  const step2 = registry.getStep('gumStep')
  expect(step2.name).toEqual('gumStep')
  expect(step2.data).toEqual('otherStep')
})

test('Register try to get a step which does not exists', () => {
  const registry = new StepRegistry()
  registry.registerStep({ stepName: 'gumStep', step: StepBase })

  expect(() => {
    // eslint-disable-next-line no-new
    registry.getStep('bubu')
  }).toThrow("There was no step registered with the name 'bubu'")
})

class GumStep extends StepBase {
  constructor(opts: StepOptions) {
    super(opts)
    this.data = 'otherStep'
  }
}
