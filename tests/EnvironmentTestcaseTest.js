import { EnvironmentTestcase, STATUS_OK, STATUS_WARNING } from '../lib/index'

test('EnvironmentTestcaseTest: default status', () => {
  const env = new EnvironmentTestcase()
  expect(env.status).toEqual(STATUS_OK)
})

test('EnvironmentTestcaseTest: set status', () => {
  const env = new EnvironmentTestcase()
  env.status = STATUS_WARNING
  expect(env.status).toEqual(STATUS_WARNING)
})

test('EnvironmentTestcaseTest: can not set status to better value as before.', () => {
  const env = new EnvironmentTestcase()
  env.status = STATUS_WARNING
  expect(env.status).toEqual(STATUS_WARNING)
  env.status = STATUS_OK
  expect(env.status).toEqual(STATUS_WARNING)
})
