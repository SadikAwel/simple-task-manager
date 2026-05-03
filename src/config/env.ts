import {z} from "zod"
import dotenv from "dotenv"

dotenv.config();

const envSchema = z.object({
    PORT : z.coerce.number().int().min(1).max(25000),
    NODE_ENV : z.enum(["Production", "Debug"])
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success){
    console.log("enviromental variable is invalid: \n", parsed.error.format())
    process.exit(1)
}

export const env = parsed.data;