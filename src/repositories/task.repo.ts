import type { Task } from "../models/task.models.js"

//for more

const task: Task[] = [];

export class taskRepository{
    createTask(data: Task): Task {
        task.push(data);
        return data;
    }
    listTask(): Task[]{
        return task
    }
}