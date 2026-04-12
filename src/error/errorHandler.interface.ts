import type {Request, Response, NextFunction} from "express"
export interface ErrorHandler {
    setNext(errorHandler: ErrorHandler):ErrorHandler;
    handle(
        err: Error, 
        req: Request,
        res: Response,
        next: NextFunction
    ):boolean;
}

