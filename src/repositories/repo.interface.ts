import type {Task, Prisma} from "@prisma/client"
import type {UUID} from "node:crypto"
import type { taskSchemaTod } from "../models/task.schema.js";

export interface repoInterface{
    createTask(data: Prisma.TaskCreateInput): Promise<Task>;
    listTask(): Promise<Task[]>;
    listByName(name: string):Promise<Task[]>;
    deleteById(id: string):Promise<Task>;
    updateById(id: string, task: taskSchemaTod):Promise<Task>;
}