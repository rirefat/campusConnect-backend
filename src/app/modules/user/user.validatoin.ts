import { z } from "zod";

export const userValidationSchema = z.object({
    password: z
        .string({ invalid_type_error: 'Password must be string' })
        .min(8, { message: "Password should be more than 8 characters" })
        .optional()
});