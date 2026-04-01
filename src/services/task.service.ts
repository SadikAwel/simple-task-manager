import type {taskSchemaTod} from "../models/task.schema.ts"
import { TaskRepository }  from "../repositories/task.repo.js"
import type {Task} from "../models/task.models.js"
const repository = new TaskRepository();

export class TaskService{
    createTask(data: taskSchemaTod): void{
        repository.createTask({
            ...data,
            complete : false,
        }
        )
        console.log("this from TaskService class createTask method ");

    }

    listTask(): string{
        const value : string = JSON.stringify(repository.listTask());
        console.log(`this from TaskServie class listTask method : ${value}`)
        return value;
    }
}

