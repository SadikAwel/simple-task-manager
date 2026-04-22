import { TaskService } from "../services/task.service.js"
import { taskSchema } from "../models/task.schema.js"
import type {Request, Response} from "express"
import {UnauthorizedError} from "../error/mainError.js"


export class Controller{
    taskService: TaskService;
    constructor(taskService: TaskService){
        this.taskService = taskService;
    }
    createTask(req: Request, res: Response): void{
        const parsed = taskSchema.safeParse(req.body);
        if(!parsed.success){
            res.status(400).send("Bad Request !!")
            return
        }
        this.taskService.createTask(parsed.data)
    }

    listTask(req: Request, res: Response){
        const val = this.taskService.listTask();
        const value: string = JSON.stringify(val);
        console.log(`this from TaskServie class listTask method : ${value}`)

        res.send()
        return
    }

    admin = (req: Request, res: Response) => {
        console.log("am here !!!!")
        throw new UnauthorizedError("Unauthorized Person Can't access the Domain");
        
    }
    
}