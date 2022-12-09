export const STATUS_OK = 1
export const STATUS_UNKNOWN = 2
export const STATUS_WARNING = 3
export const STATUS_ERROR = 4
export const STATUS_FATAL = 5

export enum StepType {
  normal = 'normal',
  single = 'single'
}

// The variable name for the base data dir. All file pathes for
// step data is relative to this directory
export const DIR_BASE_DATA = 'DIR_BASE_DATA'
