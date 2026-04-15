import type {Request, Response, NextFunction, ErrorRequestHandler} from "express"

import {DatabaseErrorHandler} from "../error/errorHandlers/databaseErrorHandler.js"
import {NotFoundErrorHandler} from "../error/errorHandlers/notFoundErrorHandler.js"
import {TimeOutErrorHandler} from "../error/errorHandlers/timeOutErrorHandler.js"
import {UnauthorizedErrorHandler} from "../error/errorHandlers/unauthorizedErrorHandler.js"

function errorHandlerMiddleware():ErrorRequestHandler{

    const dataBaseErrorHandler = new DatabaseErrorHandler();
    const notFoundErrorHandler = new NotFoundErrorHandler();
    const timeOutErrorHandler = new TimeOutErrorHandler();
    const unauthorizedErrorHandler = new UnauthorizedErrorHandler();

    dataBaseErrorHandler
    .setNext(notFoundErrorHandler)
    .setNext(timeOutErrorHandler)
    .setNext(unauthorizedErrorHandler);


    return (err: Error, req: Request, res: Response,next: NextFunction) => {
        dataBaseErrorHandler.handle(err, req, res, next);
    }
}

export const errorMiddleware  = errorHandlerMiddleware();