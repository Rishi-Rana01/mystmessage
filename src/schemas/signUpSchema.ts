import {z} from 'zod';


export const usernameValidation= z.string().min(2,"Must be 2 Characters")
.max(20,"Must be 20 Characters or less").regex(/^[a-zA-Z0-9_]+$/,"Only letters, numbers, and underscores are allowed");


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, "Password must be at least 6 characters"),

})