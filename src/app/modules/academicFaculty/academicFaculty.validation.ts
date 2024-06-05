import { z } from "zod";

export const academicFacultyValidationSchema = z.object({
    name: z.string({
        required_error: "Academic Faculty name is required",
        invalid_type_error: "Name must be a string",
    })
});

