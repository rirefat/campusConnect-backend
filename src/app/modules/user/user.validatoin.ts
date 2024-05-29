import { z } from "zod";

export const userValidationSchema = z.object({
    id: z.string({ required_error: "User id is required" }),
    password: z.string().min(8, { message: "Password should be more than 8 characters" }),
    needPasswordChange: z.boolean().optional().default(true),
    role: z.enum(['student', 'faculty', 'admin']),
    status: z.enum(['in-progress', 'blocked']).optional().default("in-progress"),
    isDeleted: z.boolean().optional().default(false)
});