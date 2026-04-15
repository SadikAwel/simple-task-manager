import type {ErrorHandler} from "./errorHandler.interface.ts";
import type {Request, Response, NextFunction} from "express"


export default abstract class BaseErrorHandler implements ErrorHandler{
    private errorHandlerAddress: ErrorHandler | null = null;

    setNext(errorHandler: ErrorHandler):ErrorHandler{
        this.errorHandlerAddress = errorHandler;
        return errorHandler;
    }

    handle(
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction
    ):boolean{
        if (this.canHandle(err)){
            this.process(err, req, res);
            return true;
        }

        if(this.errorHandlerAddress){
            this.errorHandlerAddress.handle(err, req, res, next);
            return true;
        }

        return false
    }
    protected abstract canHandle(err: Error):boolean;
    protected abstract process(err: Error, req: Request, res: Response): void;
}