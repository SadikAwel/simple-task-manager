import type {Task, Prisma} from "@prisma/client"
export interface repoInterface{
    createTask(data: Prisma.TaskCreateInput): Promise<Task>;
    listTask(): Promise<Task[]>;
    listByName(name: string):Promise<Task[]>;
}