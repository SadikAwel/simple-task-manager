import type {taskSchemaTod} from "../models/task.schema.js"
import { TaskRepository }  from "../repositories/task.repo.js"

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
        const value: string = repository.listTask()
        console.log(`this from TaskServie class listTask method : ${value}`)
        return value
    }
}

