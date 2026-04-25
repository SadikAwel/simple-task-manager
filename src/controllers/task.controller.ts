import { TaskService } from "../services/task.service.js"
import { taskSchema } from "../models/task.schema.js"
import type {Request, Response} from "express"
import {UnauthorizedError} from "../error/mainError.js"
import {logger} from "../utils/logger.js"


export class Controller{
    taskService: TaskService;
    constructor(taskService: TaskService){
        this.taskService = taskService;
    }
    createTask(req: Request, res: Response): void{
        const parsed = taskSchema.safeParse(req.body);
        if(!parsed.success){
            logger.warn("Task Validation failed", parsed.error)
            res.status(400).send("Bad Request !!")
            return
        }
        logger.info("Task creation request", parsed.data)
        this.taskService.createTask(parsed.data)
        logger.info("Task created successfully",{taskId: parsed.data.id})
        res.status(201).send("created successfully!!!")
    }

    listTask = (req: Request, res: Response) =>{
         logger.info("fetching all data");

        const val = this.taskService.listTask()
        console.log(val)

       
        logger.info("fetching all data", {dataLength: val.length});

        res.json(val)
        return
    }

    admin(req: Request, res: Response){
        logger.error("admin user is not ready for know")
        throw new UnauthorizedError("Unauthorized Person Can't access this Domain right now");
        
    }
    
}