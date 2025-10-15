import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2,"username should be of atleast 2 chars")
    .max(20, "Username should be less than 20 chars")
    .regex(/^[a-zA-Z][a-zA-Z0-9._]{2,19}$/
, "Username included invalid characters")


export const signUpValidation = z.object({
    username : usernameValidation,
    email : z.string().email(),
    password : z.string().min(8,{message : "Password must be atleast 8 characters"})

})