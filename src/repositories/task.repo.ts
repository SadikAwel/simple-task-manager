import type { Task } from "../models/task.models.js"
import {NotFoundError} from "../error/mainError.js"

//for more

const task: Task[] = [];
//{title:"abebe", id: "asede", complete:false}

export class TaskRepository{
    createTask(data: Task): Task | undefined {
        task.push(data);
        return data;
    }
    listTask(): Task{
        if (!task[0]){
            throw new NotFoundError("=> There is noting Record in Database. ")
        }
            return {title:"abebe", id: "asede", complete:false};
    }
}