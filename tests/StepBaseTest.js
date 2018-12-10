import { StepBase, EnvironmentRun, EnvironmentTestcase } from '../lib/index'

import { getLogAdapterMemory } from '@bitdiver/logadapter'

const logAdapterMemory = getLogAdapterMemory({ logLevel: 'debug' })

test('Logging: info', () => {
  const step = getStep()
  step.logInfo('myInfo')
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
                  logLevel: 'info',
                },
              ],
            },
          },
        },
      },
    },
  })
})

test('Logging: warning', () => {
  const step = getStep()
  step.logWarning('myError')
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
                  logLevel: 'warning',
                },
              ],
            },
          },
        },
      },
    },
  })
})

test('Logging: error', () => {
  const step = getStep()
  step.logError('myError')
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
                  logLevel: 'error',
                },
              ],
            },
          },
        },
      },
    },
  })
})

test('Logging: fatal', () => {
  const step = getStep()
  step.logFatal('myError')
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
                  logLevel: 'fatal',
                },
              ],
            },
          },
        },
      },
    },
  })
})

function getStep() {
  logAdapterMemory.reset()
  const step = new StepBase({ logAdapter: logAdapterMemory })
  const envRun = new EnvironmentRun()
  envRun.id = 'myRunId'
  const envTc = new EnvironmentTestcase()
  envTc.countCurrent = 2
  envTc.countAll = 12
  envTc.name = 'myTcName'
  step.environmentRun = envRun
  step.environmentTestcase = envTc
  step.name = 'myStep'
  step.countCurrent = 3
  step.countAll = 15
  return step
}
