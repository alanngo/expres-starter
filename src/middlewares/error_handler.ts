import { NextFunction, Request, Response } from "express"
import { ERROR } from "../utils/logger";
import { Handler } from "../helper/types";


const errorHandler = (): Handler => (err: Error, req: Request, res: Response, next: NextFunction) => {
    const {message, name, stack} = err
    const {url, method} = req
    res.status(500).json({
        name: name,
        message: message,
        request:{
            url: url,
            method: method
        } 
    });
    ERROR(stack)
    next()
}

const handlersObj = {
    errorHandler: errorHandler()
}
const handlers: [string, Handler][] = Object.entries(handlersObj)
    
export default handlers