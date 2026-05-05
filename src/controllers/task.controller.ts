import { TaskService } from "../services/task.service.js"
import { taskSchema, taskTitleSchema, taskIdSchema, type taskSchemaTod } from "../models/task.schema.js"
import type {Request, Response, NextFunction} from "express"
import {UnauthorizedError} from "../error/mainError.js"
import {logger} from "../utils/logger.js"
import type { UUID } from "node:crypto"
import type { Task } from "@prisma/client"



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
        const parsed = taskSchema.safeParse(req.body);
        if(!parsed.success){
            logger.warn("Task Validation failed")
            console.log(parsed.data)
            res.status(400).send("Bad Request !!")
            return
        }
        logger.info("Task creation request", parsed.data)

        const value = await this.taskService.createTask(parsed.data)
        logger.info("Task created successfully")
        res.status(201).send("created successfully!!!" + `${value.id}`)
        return
    
    }

    async listTask(req: Request, res: Response, next: NextFunction):Promise<void>{
         logger.info("fetching all data");
      
        const val = await this.taskService.listTask();
        console.log(val);

        logger.info("fetching all data", { dataLength: val.length });

        res.json(val);
    

        return 
    }
/////////////////////////////////
    async listByName(req: Request, res: Response, next: NextFunction):Promise<void>{
        const parsed = taskTitleSchema.safeParse({title:req.params.name})
        
        if(!parsed.success){
            console.log(parsed)
            
           return
        }
         console.log(parsed.data)
            logger.info("fetching data using name ref")
            const value = await this.taskService.listByName(parsed.data.title)
            logger.info(`the task you fetch: ${value}` )
            res.json(value);
        return;
    }
 
    
    async deleteById(req:Request, res:Response, next:NextFunction):Promise<void>{
        const value = {id:req.body.id};
        const id = taskIdSchema.safeParse(value)
        if(!id.success){
            console.log(typeof value)
            return 
        }
        logger.info(`deleting use id: ${id.data.id}`)
        const main = await this.taskService.deleteById(id.data.id)
        console.log("pass")
          res.send(main)
    }

    async updateByID(req:Request, res:Response, next:NextFunction):Promise<Task|void>{

        const value = req.body
        const main = taskSchema.safeParse(value)
         const id = {id:req.params.id}
        const idParsed = taskIdSchema.safeParse(id)

        if(!main.success || !idParsed.success ){
            logger.error("Input value is not valied")
            return;
            }
            console.log(typeof idParsed.data.id)
        const data: taskSchemaTod = {
            ...main.data,
            id:idParsed.data.id
            

            
        }
        console.log("updating ...")
        const updatedTask = await this.taskService.updateById(data)

        logger.info("updating task")
        res.json(updatedTask)
        }

    }

