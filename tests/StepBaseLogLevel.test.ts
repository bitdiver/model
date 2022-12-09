import { StepBase, EnvironmentRun, EnvironmentTestcase } from '../src/index'

import { getLogAdapterMemory } from '@bitdiver/logadapter'

const LOG_ADAPTER_LOG_LEVEL = 'error'

const logAdapterMemory = getLogAdapterMemory({
  logLevel: LOG_ADAPTER_LOG_LEVEL
})

test('Logging: info', async () => {
  const step = await getStep()
  await step.logInfo('myInfo')
  expect(logAdapterMemory.logs).toEqual({})
})

test('Logging: warning', async () => {
  const step = await getStep()
  await step.logWarning('myError')
  expect(logAdapterMemory.logs).toEqual({})
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

async function getStep(): Promise<StepBase> {
  await logAdapterMemory.reset()
  const step = new StepBase({ logAdapter: logAdapterMemory, name: 'myStep' })
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
