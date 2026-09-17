import z, { email } from "zod"


export const registerValidation = z.object({
    name: z.string().min(1),
    email: z.email(),
    password: z.string().min(1),
    file: z.object().optional()
})




export const loginValidation = z.object({
    email: z.email(),
    password: z.string().min(1)
})