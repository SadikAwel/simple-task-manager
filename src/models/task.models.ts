type taskPriority = "high" | "low"| "medium" | undefined ;

export interface Task {
    id: string,
    title: string,
    complete: boolean,
    priority?: taskPriority
}
