import baseErrorHandler from "../base.errorHandler.js"
import {DatabaseError} from "../mainError.js"
import type { Request, Response } from "express";

export class DatabaseErrorHandler extends baseErrorHandler{
    protected canHandle(err: Error):boolean{
        if (err instanceof DatabaseError)return true;
        return false;
        
    }

    protected process(err: Error, req: Request, res: Response): void {
        if (err instanceof DatabaseError){

        res.send(`<strong>Error:</strong><br> 
             error type--=> ${err.type} </br>
             Message----=> ${err.message} </br>
             statuscode-=> ${err.statusCode} </br>
             time--------=> ${err.time}`)
    }
}}

