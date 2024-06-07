import { z } from "zod";

// Validation for creating academic department
const createAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Academic Department name is required",
            invalid_type_error: "Department name must be a string"
        }),
        academicFaculty: z.string({ required_error: "Corresponding Academic Faculty is required." })
    })
});

// Validation for updating academic department
const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Academic Department name is required",
            invalid_type_error: "Department name must be a string"
        }),
        academicFaculty: z.string({ required_error: "Corresponding Academic Faculty is required." })
    })
});


export const academicDepartmentValidation = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
}