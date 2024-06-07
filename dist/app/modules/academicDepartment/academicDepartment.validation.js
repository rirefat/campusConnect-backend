"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentValidation = void 0;
const zod_1 = require("zod");
// Validation for creating academic department
const createAcademicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Academic Department name is required",
            invalid_type_error: "Department name must be a string"
        }),
        academicFaculty: zod_1.z.string({ required_error: "Corresponding Academic Faculty is required." })
    })
});
// Validation for updating academic department
const updateAcademicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Academic Department name is required",
            invalid_type_error: "Department name must be a string"
        }).optional(),
        academicFaculty: zod_1.z.string({ required_error: "Corresponding Academic Faculty is required." }).optional()
    })
});
exports.academicDepartmentValidation = {
    createAcademicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
};
