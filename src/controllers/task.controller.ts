import { TaskService } from "../services/task.service.js"
import { taskSchema, taskTitleSchema, taskIdSchema, type taskSchemaTod } from "../models/task.schema.js"
import type {Request, Response, NextFunction} from "express"
import {UnauthorizedError, DatabaseError} from "../error/mainError.js"
import {logger} from "../utils/logger.js"
import type { UUID } from "node:crypto"
import type { taskId, taskTitle } from "../models/task.schema.js"


export class Controller{
    taskService: TaskService;
    constructor(taskService: TaskService){
        this.taskService = taskService;

        this.listTask = this.listTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.listByName = this.listByName.bind(this);
        this.deleteById = this.deleteById.bind(this);
        this.updateByID = this.updateByID.bind(this);
    }
    async createTask(req: Request, res: Response, next: NextFunction):Promise<void>{
        
        logger.info("Task creation request", req.body)

        const value = await this.taskService.createTask(req.body)
        logger.info("Task created successfully")
        res.status(201).send("created successfully!!!" + `${value.id}`)
        return
    
    }

    async listTask(req: Request, res: Response, next: NextFunction):Promise<void>{
         logger.info("fetching all data");
      
        const val = await this.taskService.listTask();

        logger.info(`fetching all data ${val}`);

        res.json(val);
    

        return 
    }
/////////////////////////////////
    async listByName(req: Request<taskTitle>, res: Response, next: NextFunction):Promise<void>{
        
            console.log(req.params.title)
            logger.info(`fetching data using name ref ${req.params.title}`)
            const value = await this.taskService.listByName(req.params.title)
            logger.info(`the task you fetch: ${value}` )
            res.json(value);
        return;
    }
 
    
    async deleteById(req:Request<taskId>, res:Response, next:NextFunction):Promise<void>{
        
        logger.info(`deleting use id: ${req.params.id}`)
        const main = await this.taskService.deleteById(req.params.id)
          res.send(main)
    }

    async updateByID(req:Request<taskId>, res:Response, next:NextFunction):Promise<void>{

 
        const {id} = req.params
        logger.info("updating ...")
        const updatedTask = await this.taskService.updateById(id, req.body)

        logger.info("updating task")
        res.json(updatedTask)
        }

    }

