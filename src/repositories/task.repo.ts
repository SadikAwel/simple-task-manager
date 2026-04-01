import type { Task } from "../models/task.models.js"

//for more

const task: Task[] = [{title:"abebe", id: "asede", complete:false}];

export class TaskRepository{
    createTask(data: Task): Task | undefined {
        task.push(data);
        return data;
    }
    listTask(): Task{
        return task[0] || {title:"abebe", id: "asede", complete:false};
    }
}