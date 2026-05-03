import { date } from "zod";

export type TaskPriority = "high" | "low"| "medium"  ;

export interface Task {
    id: string,
    title: string,
    completed: boolean,
    priority?: TaskPriority,
    createdAt: Date ,
    updatedAt: Date
}
