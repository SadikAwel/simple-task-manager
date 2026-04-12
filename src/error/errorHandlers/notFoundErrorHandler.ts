import baseErrorHandler from "../base.errorHandler.js"
import {NotFoundError} from "../mainError.js"

export class NotFoundErrorHandler extends baseErrorHandler{
    protected canHandle(err: Error):boolean{
        if (err instanceof NotFoundError)return true;
        return false;
        
    }

    protected process(err: Error): void {
        if (err instanceof NotFoundError){

        console.log(`Error:\n error type is : ${err.type} \n
             statuscode is: ${err.statusCode} \n 
             time is : ${err.time}`)
    }
}}