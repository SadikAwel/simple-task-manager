import baseErrorHandler from "../base.errorHandler.js"
import {DatabaseError} from "../mainError.js"

export class DatabaseErrorHandler extends baseErrorHandler{
    protected canHandle(err: Error):boolean{
        if (err instanceof DatabaseError)return true;
        return false;
        
    }

    protected process(err: Error): void {
        if (err instanceof DatabaseError){

        console.log(`Error: this error type is : ${err.type} \n
             statuscode is: ${err.statusCode} \n 
             time is : ${err.time}`)
    }
}}

