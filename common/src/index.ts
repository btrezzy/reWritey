import z from "zod"

export const SignupInput =z.object({
    username : z.string().email(),
    password : z.string().min(3),
    name : z.string().optional(),
})

export const SigninInput = z.object({
    username : z.string().email(),
    password : z.string().min(3),
})

export const CreateBlogInput = z.object({
    title : z.string(),
    content : z.string(),
})

export const UpdateBlogInput = z.object({
    title : z.string().optional(),
    content : z.string().optional(),
    id : z.string(),
})


export type SignupInputType = z.infer<typeof SignupInput>
export type SigninInputType = z.infer<typeof SigninInput>
export type CreateBlogInputType = z.infer<typeof CreateBlogInput>
export type UpdateBlogInputType = z.infer<typeof UpdateBlogInput>