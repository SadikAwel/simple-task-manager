import type {taskSchemaTod} from "../models/task.schema.ts"
import type {Task} from "../models/task.models.js"
import type {repoInterface} from "../repositories/repo.interface.js"
import {logger} from "../utils/logger.js"

export class TaskService{
    repository: repoInterface ;
    constructor(repository:repoInterface ){
        this.repository = repository;
    }

    createTask(data: taskSchemaTod): Task{
        logger.info("Processing task creation business logic");
        const task =  this.repository.createTask({
            ...data,
            complete : false,
        }
        )
        logger.info("Task creation business logic completed");
        return task;

    }

    listTask(): Task[]{
        
        logger.info("Processing task retrieval business logic")
        let value = this.repository.listTask();
        logger.info("Task retrival completed", {count: value.length})
        return value
    }
}

