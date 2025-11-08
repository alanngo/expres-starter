const MISC = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
}

const FG = {
    Black: "\x1b[30m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
    Magenta: "\x1b[35m",
    Cyan: "\x1b[36m",
    White: "\x1b[37m",
    Gray: "\x1b[90m",
}

const BG = {
    Black: "\x1b[40m",
    Red: "\x1b[41m",
    Green: "\x1b[42m",
    Yellow: "\x1b[43m",
    Blue: "\x1b[44m",
    Magenta: "\x1b[45m",
    Cyan: "\x1b[46m",
    White: "\x1b[47m",
    Gray: "\x1b[100m",
}

type Action = "log" | "trace" | "debug" | "info" | "warn" | "error"
const log = (action: Action, color: string, ...args: any[]) => console[action](
    color.trim(),
    `[ ${new Date().toUTCString().replace("GMT", "").trim()} ]`,
    action.toUpperCase()+":",
    ...args,
    MISC.Reset)

export const TRACE = (...args: any[]) => log("trace", FG.Magenta, ...args)
export const DEBUG = (...args: any[]) => log("debug", FG.Green, ...args)
export const INFO = (...args: any[]) => log("info", FG.Blue, ...args)
export const WARN = (...args: any[]) => log("warn", FG.Yellow, ...args)
export const ERROR = (...args: any[]) => log("error",FG.Red,  ...args)
export const FATAL = (...args: any[]) => log("error",BG.Red, ...args)


