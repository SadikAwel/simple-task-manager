import {z} from "zod";

const taskSchema = z.object({
    id: z.string(),
    title: z.string().min(3).max(100),
priority: z.enum(["low", "medium", "high"]).optional()
})

export type taskSchemaTod = z.infer<typeof taskSchema>;