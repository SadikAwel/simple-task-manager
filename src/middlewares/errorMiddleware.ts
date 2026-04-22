import type {Request, Response, NextFunction, ErrorRequestHandler} from "express"

import {dataBaseErrorHandler} from "../config/errorConfig.js"

export function errorHandlerMiddleware():ErrorRequestHandler{


    return (err: Error, req: Request, res: Response,next: NextFunction) => {
        dataBaseErrorHandler.handle(err, req, res, next);
    }
}

