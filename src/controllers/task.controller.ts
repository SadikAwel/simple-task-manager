import { TaskService } from "../services/task.service.js"
import { taskSchema } from "../models/task.schema.js"
import type {Request, Response} from "express"

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
}