import { StepNormal, EnvironmentRun, EnvironmentTestcase } from '../src/index'

import { getLogAdapterMemory } from '@bitdiver/logadapter'

const logAdapterMemory = getLogAdapterMemory({ logLevel: 'debug' })

test('Logging: debug', async () => {
  const step = await getStep()

  await step.logDebug('myDebug')
  expect(logAdapterMemory.logs).toEqual({
    myRunId: {
      logs: [],
      testcases: {
        myTcName: {
          countAll: 12,
          countCurrent: 2,
          logs: [],
          steps: {
            myStep: {
              logs: [
                {
                  countCurrent: 3,
                  countAll: 15,
                  data: { message: 'myDebug' },
                  logLevel: 'debug'
                }
              ]
            }
          }
        }
      }
    }
  })
})

test('Logging: info', async () => {
  const step = await getStep()
  await step.logInfo('myInfo')
  expect(logAdapterMemory.logs).toEqual({
    myRunId: {
      logs: [],
      testcases: {
        myTcName: {
          countAll: 12,
          countCurrent: 2,
          logs: [],
          steps: {
            myStep: {
              logs: [
                {
                  countCurrent: 3,
                  countAll: 15,
                  data: { message: 'myInfo' },
                  logLevel: 'info'
                }
              ]
            }
          }
        }
      }
    }
  })
})

test('Logging: warning', async () => {
  const step = await getStep()
  await step.logWarning('myError')
  expect(logAdapterMemory.logs).toEqual({
    myRunId: {
      logs: [],
      testcases: {
        myTcName: {
          countAll: 12,
          countCurrent: 2,
          logs: [],
          steps: {
            myStep: {
              logs: [
                {
                  countCurrent: 3,
                  countAll: 15,
                  data: { message: 'myError' },
                  logLevel: 'warning'
                }
              ]
            }
          }
        }
      }
    }
  })
})

test('Logging: error', async () => {
  const step = await getStep()
  await step.logError('myError')
  expect(logAdapterMemory.logs).toEqual({
    myRunId: {
      logs: [],
      testcases: {
        myTcName: {
          countAll: 12,
          countCurrent: 2,
          logs: [],
          steps: {
            myStep: {
              logs: [
                {
                  countCurrent: 3,
                  countAll: 15,
                  data: { message: 'myError' },
                  logLevel: 'error'
                }
              ]
            }
          }
        }
      }
    }
  })
})

test('Logging: fatal', async () => {
  const step = await getStep()
  await step.logFatal('myError')
  expect(logAdapterMemory.logs).toEqual({
    myRunId: {
      logs: [],
      testcases: {
        myTcName: {
          countAll: 12,
          countCurrent: 2,
          logs: [],
          steps: {
            myStep: {
              logs: [
                {
                  countCurrent: 3,
                  countAll: 15,
                  data: { message: 'myError' },
                  logLevel: 'fatal'
                }
              ]
            }
          }
        }
      }
    }
  })
})

test('Create step needData = false', async () => {
  const step = new StepNormal({ name: 'gugu', needData: false })
  expect(step.needData).toEqual(false)
})
test('Create step needData = undefined', async () => {
  const step = new StepNormal({ name: 'gugu' })
  expect(step.needData).toEqual(true)
})

test('Create step runOnError = true', async () => {
  const step = new StepNormal({ name: 'gugu', runOnError: true })
  expect(step.runOnError).toEqual(true)
})
test('Create step runOnError = undefined', async () => {
  const step = new StepNormal({ name: 'gugu' })
  expect(step.runOnError).toEqual(false)
})

test('Create step type = undefined', async () => {
  const step = new StepNormal({ name: 'gugu' })
  expect(step.type).toEqual('normal')
})

test('make coverage report lucky', async () => {
  const step = new StepNormal({ name: 'gugu' })
  await step.start()
  await step.beforeRun()
  await step.run()
  await step.afterRun()
  await step.end()
})

async function getStep(): Promise<StepNormal> {
  await logAdapterMemory.reset()
  const step = new StepNormal({ logAdapter: logAdapterMemory, name: 'myStep' })
  const envRun = new EnvironmentRun()
  envRun.id = 'myRunId'
  const envTc = new EnvironmentTestcase()
  envTc.countCurrent = 2
  envTc.countAll = 12
  envTc.name = 'myTcName'
  step.environmentRun = envRun
  step.environmentTestcase = envTc
  step.countCurrent = 3
  step.countAll = 15
  return step
}
