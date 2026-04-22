import type {taskSchemaTod} from "../models/task.schema.ts"
import type {Task} from "../models/task.models.js"
import type {repoInterface} from "../repositories/repo.interface.js"

export class TaskService{
    repository: repoInterface ;
    constructor(repository:repoInterface ){
        this.repository = repository;
    }

    createTask(data: taskSchemaTod): void{
        this.repository.createTask({
            ...data,
            complete : false,
        }
        )
        console.log("this from TaskService class createTask method ");

    }

    listTask(): Task{
                return this.repository.listTask();
    }
}

