import type { Task } from "../models/task.models.js"
import type {repoInterface} from "./repo.interface.ts"
import {logger} from "../utils/logger.js"
import type { fdatasync } from "node:fs";

//for more

const task: Task[] = [{title:"abebe", id: "asede", complete:false}];
//{title:"abebe", id: "asede", complete:false}

export class TaskRepository implements repoInterface{
    createTask(data: Task): Task {
        logger.info("Persisting task to repository")
        task.push(data);
        logger.info("Task persisted successfully")
        return data;
    }
    listTask(): Task[]{

            logger.info("Querying repository for all task");
            return  task;
    }
}