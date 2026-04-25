class Logger {
    info(message:string, meta?: unknown): void{
        console.log(`[INFO]: ${message}`, meta ?? "" )
        return;
    }

    warn(message:string, meta?: unknown){
        console.log(`[WARN]: ${message}`, meta ?? "" )
    }

    error(message:string, meta?: unknown){
        console.log(`[ERROR]: ${message}`, meta ?? "" )
    }

}

export const logger = new Logger();