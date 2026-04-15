import baseErrorHandler from "../base.errorHandler.js"
import {TimeOutError} from "../mainError.js"
import type { Request, Response } from "express";

export class TimeOutErrorHandler extends baseErrorHandler{
    protected canHandle(err: Error):boolean{
        if (err instanceof TimeOutError)return true;
        return false;
        
    }

    protected process(err: Error, req: Request, res: Response): void {
        if (err instanceof TimeOutError){

        res.send(`Error:\n error type is : ${err.type} \n
             statuscode is: ${err.statusCode} \n 
             time is : ${err.time}`)
    }
}}