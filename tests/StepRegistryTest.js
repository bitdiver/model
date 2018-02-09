import { StepRegistry, StepBase } from '../lib/index'

test('Test that the step could be registered', () => {
  const registry = new StepRegistry()
  registry.registerStep('gumStep', StepBase)

  const step = registry.getStep('gumStep')

  expect(step.name).toEqual('gumStep')
})
