import type{ZodSchema } from "zod"
import type{Request, Response, NextFunction} from "express"
import { NotFoundError } from "../error/mainError.js";
import {logger} from "../utils/logger.js"


export function validate(schema:ZodSchema,source: "body" | "params" | "query" = "body" ){
    return (req: Request, res: Response, next: NextFunction) => {

        const result = schema.safeParse(req[source]);
        if (!result.success){
             logger.warn("Task Validation failed")
                        res.status(400).send("Bad Request !!")
                        throw new NotFoundError("validation failed")
                        
        }
        req[source] = result.data;
        next()
    }
}