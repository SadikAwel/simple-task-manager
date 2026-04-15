import { TaskService } from "../services/task.service.js"
import { taskSchema } from "../models/task.schema.js"
import type {Request, Response} from "express"
import {UnauthorizedError} from "../error/mainError.js"

const taskService = new TaskService();

export class Controller{
    createTask(req: Request, res: Response): void{
        const parsed = taskSchema.safeParse(req.body);
        if(!parsed.success){
            res.status(400).send("Bad Request !!")
            return
        }
        taskService.createTask(parsed.data)
    }

    listTask(req: Request, res: Response){
        res.send(taskService.listTask())
        return
    }

    admin = (req: Request, res: Response) => {
        console.log("am here !!!!")
        throw new UnauthorizedError("Unauthorized Person Can't access the Domain");
        
    }
    
}