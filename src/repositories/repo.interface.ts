import type {Task} from "../models/task.models.js"
export interface repoInterface{
    createTask(data: Omit<Task, "id">): Task;
listTask(): Task;
}