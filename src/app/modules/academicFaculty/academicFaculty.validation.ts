import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
    name: z.string({
        required_error: "Academic Faculty name is required",
        invalid_type_error: "Name must be a string",
    })
});
const updateAcademicFacultyValidationSchema = z.object({
    name: z
        .string({ invalid_type_error: "Name must be a string" })
        .optional()
});

export const academicFacultyValidation = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema,
}