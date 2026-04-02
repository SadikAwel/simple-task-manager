import { object } from "zod";

export class AppError extends Error {
    statusCode: number;
    constructor(message: string, status: number){
        super(message)
        this.statusCode = status

        Object.setPrototypeOf(this, AppError.prototype)
    }
    
}