"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyValidation = void 0;
const zod_1 = require("zod");
const createAcademicFacultyValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Academic Faculty name is required",
        invalid_type_error: "Name must be a string",
    })
});
const updateAcademicFacultyValidationSchema = zod_1.z.object({
    name: zod_1.z
        .string({ invalid_type_error: "Name must be a string" })
        .optional()
});
exports.academicFacultyValidation = {
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema,
};
