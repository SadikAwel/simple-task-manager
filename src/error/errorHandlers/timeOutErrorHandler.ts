import baseErrorHandler from "../base.errorHandler.js"
import {TimeOutError} from "../mainError.js"

export class TimeOutErrorHandler extends baseErrorHandler{
    protected canHandle(err: Error):boolean{
        if (err instanceof TimeOutError)return true;
        return false;
        
    }

    protected process(err: Error): void {
        if (err instanceof TimeOutError){

        console.log(`Error:\n error type is : ${err.type} \n
             statuscode is: ${err.statusCode} \n 
             time is : ${err.time}`)
    }
}}