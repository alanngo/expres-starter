import { NextFunction, Request, Response } from "express";
export type Middleware = (req: Request, res: Response, next: NextFunction) => void
export type Handler = (err: Error, req: Request, res: Response, next: NextFunction) => void
