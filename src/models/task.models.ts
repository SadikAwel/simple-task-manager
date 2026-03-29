type taskPriority = "high" | "low"| "medium"

export interface Task {
    id: string,
    title: string,
    complete: boolean,
    priority?: taskPriority
}
