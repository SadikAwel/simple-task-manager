import BaseErrorHandler from "../base.errorHandler.js"
import {NotFoundError} from "../mainError.js"
import type { Request, Response, NextFunction } from "express";

export class NotFoundErrorHandler extends BaseErrorHandler{
    protected canHandle(err: Error):boolean{
        if (err instanceof NotFoundError)return true;
        return false;
        
    }

    protected process(err: Error, req: Request, res: Response): void {
        if (err instanceof NotFoundError){

        res.send(`<strong>Error:</strong><br> 
             error type--=> ${err.type} </br>
             Message----=> ${err.message} </br>
             statuscode-=> ${err.statusCode} </br>
             time--------=> ${err.time}`)
    }
}}