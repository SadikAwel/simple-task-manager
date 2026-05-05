import {uuid, z} from "zod";


export const taskSchema = z.object({
    id:uuid().optional(),
    title: z.string().min(3).max(100),
priority: z.enum(["low", "medium", "high"]).optional()})

export const taskTitleSchema = z.object({
    title: z.string()
})

export const taskIdSchema = z.object({
    id: z.uuid({message:"invalid zod formate"})
})

export type taskSchemaTod = z.infer<typeof taskSchema>;