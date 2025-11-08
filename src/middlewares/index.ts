import cors from "cors"
import { NextFunction, Request, Response, json, urlencoded } from "express"
import { INFO, ERROR, FATAL, WARN } from "../utils/logger"
import helmet from "helmet"
import { Middleware } from "../helper/types"
const loggerMiddleware = (): Middleware => (req: Request, res: Response, next: NextFunction) => {
    const { url, method } = req
    res.on("finish", () => {
        const { statusCode, statusMessage } = res

        const mssg = `(${method}) ${url} -> ${statusCode} ${statusMessage}`
        if (statusCode < 300)
            INFO(mssg)
        else if (statusCode >= 300 && statusCode < 400)
            WARN(mssg)
        else
            ERROR(mssg)
    })
    res.on("error", () => {
        FATAL("an error occured")
    })

    next()
}

const BODY_PARSER = { extended: true }
const middlewares: Middleware[] = [
    urlencoded(BODY_PARSER),
    json(),
    cors(),
    helmet(),
    loggerMiddleware(),
]

export default middlewares