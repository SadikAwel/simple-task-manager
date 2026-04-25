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

        res.send(`<strong>Error:</strong><br> 
             error type--=> ${err.type} </br>
             Message----=> ${err.message} </br>
             statuscode-=> ${err.statusCode} </br>
             time--------=> ${err.time}`)
    }
}}