abstract class AppError extends Error{
    abstract readonly type: string;
    abstract readonly statusCode: number;
    readonly time: Date;

    constructor(message: string){
        super(message);
        this.time = new Date();
        
    }
}

export class NotFoundError extends AppError{
    readonly type: string = "NotFound Error"
    readonly statusCode: number = 404;

    constructor(message: string){
        super(message)
    }
}

export class UnauthorizedError extends AppError{
    readonly type: string = "Unauthorized Error"
    readonly statusCode: number = 404;

    constructor(message: string){
        super(message)
    }
}

export class DatabaseError extends AppError{
    readonly type: string = "BadRequest Error"
    readonly statusCode: number = 400;

    constructor(message: string){
        super(message)
    }
}
export class TimeOutError extends AppError{
    readonly type: string = "Request TimeOut Error"
    readonly statusCode: number = 408;

    constructor(message: string){
        super(message)
    }
}