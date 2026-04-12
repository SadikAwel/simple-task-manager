import baseErrorHandler from "../base.errorHandler.js"
import {UnauthorizedError} from "../mainError.js"

export class UnauthorizedErrorHandler extends baseErrorHandler{
    protected canHandle(err: Error):boolean{
        if (err instanceof UnauthorizedError)return true;
        return false;
        
    }

    protected process(err: Error): void {
        if (err instanceof UnauthorizedError){

        console.log(`Error:\n error type is : ${err.type} \n
             statuscode is: ${err.statusCode} \n 
             time is : ${err.time}`)
    }
}}