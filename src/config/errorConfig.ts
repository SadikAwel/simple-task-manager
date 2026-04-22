import {DatabaseErrorHandler} from "../error/errorHandlers/databaseErrorHandler.js"
import {NotFoundErrorHandler} from "../error/errorHandlers/notFoundErrorHandler.js"
import {TimeOutErrorHandler} from "../error/errorHandlers/timeOutErrorHandler.js"
import {UnauthorizedErrorHandler} from "../error/errorHandlers/unauthorizedErrorHandler.js"


    export const dataBaseErrorHandler = new DatabaseErrorHandler();
    const notFoundErrorHandler = new NotFoundErrorHandler();
    const timeOutErrorHandler = new TimeOutErrorHandler();
    const unauthorizedErrorHandler = new UnauthorizedErrorHandler();

    dataBaseErrorHandler
    .setNext(notFoundErrorHandler)
    .setNext(timeOutErrorHandler)
    .setNext(unauthorizedErrorHandler);
