import type {taskSchemaTod} from "../models/task.schema.ts"
import type {Task} from "@prisma/client"
import {TaskPriority} from "@prisma/client"
import type {repoInterface} from "../repositories/repo.interface.js"
import {logger} from "../utils/logger.js"
import type { UUID } from "node:crypto"
import { id } from "zod/v4/locales"
import { NotFoundError, DatabaseError, TimeOutError} from "../error/mainError.js"
import { dataBaseErrorHandler } from "../config/errorConfig.js"



export class TaskService{
    repository: repoInterface ;
    constructor(repository:repoInterface ){
        this.repository = repository;
    }

    async createTask(data: taskSchemaTod): Promise<Task>{
        logger.info("Processing task creation business logic");
        const task = await this.repository.createTask({
    title: data.title,
    completed: false,

  });
        logger.info("Task creation business logic completed");
        return task;

    }

    async listTask(): Promise<Task[]> {
      
        logger.info("Processing task retrieval business logic")
        const value = await this.repository.listTask();
        logger.info("Task retrival completed", {count: value.length})
        return value
    

    }

    ////////////////////////////////////////

    async listByName(name: string):Promise<Task[]>{
        const value = await this.repository.listByName(name)
        return value;
    }

    async deleteById(id:string):Promise<Task>{
        logger.info(`Deleting Task ${id}`);
        try{

            const value = await this.repository.deleteById(id)
            return value
        }catch(error){
            throw new NotFoundError("the task is not found");
            
        }
        {
        }
       
        
    }


    async updateById(id: string, task: taskSchemaTod):Promise<Task>{
        logger.info(`from service uspdating`);
        const value = await this.repository.updateById(id, task)
        logger.info("Pass..")
        return value;
    }

}

