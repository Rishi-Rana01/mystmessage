import {z} from 'zod';

export const acceptMessageSchema= z.object({
    content: z.string().min(1).max(500),
})