@bitdiver/model / [Exports](docApi/modules.md)

# Model

## Step

The step is the basic element to create a test. A test normally is an
aggregation of several steps.

There are two types of steps  
-   single  
    This step will be executed once for all the test cases.

-   normal  
    In this case there will be instantiate one step object per test
    case.

### Configuration

When creating a step the following configurations are supported.

-   type  
    The type of this step. {normal|single}

-   name  
    The name of this step

-   needData  
    Normally a step will only be executed if there is a test case which
    defines data for this step. But some steps do not need any data. For
    example there is a step which cleans a data base.

### Properties

This describes the existing properties of a step and what there are used
for.

-   logger  
    The logger used to log. This logger should be used in the step
    implementation.

-   stepInstanceId  
    A UUID for the instance of the step. This is is used to correlate
    logs later on.

-   environmentTestcase  
    A step could store and retrieve data from this environment. This
    context lives as long the test case. So a step could pass data to
    one of the next steps. If this is a singleStep, then this is an
    array of environments

-   environmentRun  
    A context shared between all the test cases.

-   name  
    Just the name for this step.

-   testMode  
    The idea of the test mode is to test the run of a step without
    executing it completly. So the suite could be tested. This is
    important for long running tests

-   status  
    The status of this step while execution

-   data  
    The test data for this step instance. If this is a single step, then
    this is an array of data.

### Log methods

These methods are for step implementer.

Parameter for all the log messages.

-   message  
    The message or object to log.

-   RETURNS  
    A promise when the log was written.

    List of all the log messages  

-   logDebug(message)

-   logInfo(options)

-   logWarning(options)

-   logError(options)

-   logFatal(options)

### Methods called by the runner

These methods could be implemented by the step implementer. They will be
called by the runner while step execution

Each of the methods must return a promise.

#### start()

This method is called for all the step instances when a new step is
entered in the execution.

#### beforeRun()

This method will be called just before the run method is called. This
method is called per test case.

#### run()

The run method is the method which should do the work of the step.

#### afterRun()

This method will be called just after the run method is finished. It
will be called even if the run method has failed. So this method could
be used for clean up.

#### end()

This method will be called when all the step instances of this step are
finished.

## Execution status

Describes the existing status values used by the step, test case and
run.

STATUS\_OK  
value = 1  
This status is set on each step, test case and run when a new run
starts.

STATUS\_UNKNOWN  
value = 2  
This status will be set for example if a test will be stopped but the
test case is not yet finished and not failed.

STATUS\_WARNING  
value = 3  
This status is set if the 'logWarning' method of a step was called.

STATUS\_ERROR  
value = 4  
This status will be set if 'logError' method of a step was called or any
other error comes up for a test case. This causes the test case to stop.
For this test case no further steps will be executed.

STATUS\_FATAL  
value = 5  
This status will be set if 'logFatal' method of a step was called or any
other fatal error comes up for a test case or run. This causes the
complete test to stop. The rest of the run will be aborted.

## StepRegistry

This is the registry for all the step classes. The registry will be used
to create the real steps on runtime from the step definitions before.
The runner gets a stepDefinition which should be executed, then looks up
a implementation in the stepRegistry object.

So beforehand the steps needs to be registered in the step registry.

### Methods

#### registerStep(stepName, step)::

Registers a new step class to the registry.

-   stepName  
    A name under which the step class should be registered.

-   step  
    The step class.

**Example usage**

    import {SuperStep} from 'myStepProject'

    stepRegistry.registerStep({ stepName: 'superStepName', step: SuperStep })

#### getStep(stepName)

Creates an instance for the class registered under the given name.

-   stepName  
    The name under which the step class was registered.

-   RETURNS  
    The instance of the step

**Example usage**

    const mySuperStep = stepRegistry.getStep('superStepName')

## EnvironmemntRun

The run environment is the context which lives for the whole execution
of the run. This context could be used to store configurations or other
data which needs to be provided to each test case. This context could be
read and written by each step in each test case.

The data is stored in a map.

**EnvironmemntRun properties**

    {
      id: 'uuid'             
      name: 'suite name'     
      status: STATUS_OK      
      description: 'a desc'  
      startTime: Date.now()  
      this.map = new Map()   
    }

-   The id is a uuid. It will be generated when the environment is
    created.

-   The name of the suite.

-   The overall status of this run. If one test case has an error the
    complete run get the status error.

-   Any description for this run.

-   The timestamp the run was started.

-   This map is used to store the context information.

## EnvironmemntTestcase

The test case environment is the context which lives for the whole
execution of the test case. For each test case an own environment will
be created. This context is the right place to transport data from one
step to a following step in the test case.

The data is stored in a map.

**EnvironmemntRun properties**

    {
      id: 'uuid'             
      name: 'suite name'     
      status: STATUS_OK      
      description: 'a desc'  
      running: true          
      this.map = new Map()   
    }

-   The id is a uuid. It will be generated when the environment is
    created.

-   The name of the suite.

-   The overall status of this run. If one test case has an error the
    complete run get the status error.

-   Any description for this run.

-   if a test case has failed the running status will be switched to
    false. So there will be no execution of further steps for this test
    case.

-   This map is used to store the context information.
