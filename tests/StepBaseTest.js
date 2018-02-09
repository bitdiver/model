import {
  StepBase,
  STATUS_OK,
  STATUS_WARNING,
  STATUS_ERROR,
  STATUS_FATAL,
  getLogAdapterMemory,
  EnvironmentRun,
  EnvironmentTestcase,
} from '../lib/index'

const logAdapterMemory = getLogAdapterMemory()

test('Status: default status', () => {
  const step = new StepBase()
  expect(step.status).toEqual(STATUS_OK)
})

test('Status: set status', () => {
  const step = new StepBase()
  step.status = STATUS_WARNING
  expect(step.status).toEqual(STATUS_WARNING)
})

test('Status: can not set status to better value as before.', () => {
  const step = new StepBase()
  step.status = STATUS_WARNING
  expect(step.status).toEqual(STATUS_WARNING)
  step.status = STATUS_OK
  expect(step.status).toEqual(STATUS_WARNING)
})

test('Logging: info', () => {
  const step = getStep()
  step.logInfo('myInfo')
  expect(step.status).toEqual(STATUS_OK)
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
  expect(step.status).toEqual(STATUS_WARNING)
  expect(step.environmentTestcase.status).toEqual(STATUS_WARNING)
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
  expect(step.status).toEqual(STATUS_ERROR)
  expect(step.environmentTestcase.status).toEqual(STATUS_ERROR)
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
  expect(step.status).toEqual(STATUS_FATAL)
  expect(step.environmentTestcase.status).toEqual(STATUS_FATAL)
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
  logAdapterMemory.clear()
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
