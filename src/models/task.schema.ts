import {z} from "zod";

export const taskSchema = z.object({

    title: z.string().min(3).max(100),
priority: z.enum(["low", "medium", "high"]).optional()})

export const taskTitleSchema = z.object({

    title: z.string()
})

export type taskSchemaTod = z.infer<typeof taskSchema>;