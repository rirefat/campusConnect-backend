"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidation = void 0;
const zod_1 = require("zod");
const academicSemester_constants_1 = require("./academicSemester.constants");
const createAcademicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_constants_1.academicSemesterName]),
        code: zod_1.z.enum([...academicSemester_constants_1.academicSemesterCode]),
        year: zod_1.z.string(),
        startMonth: zod_1.z.enum([...academicSemester_constants_1.Months]),
        endMonth: zod_1.z.enum([...academicSemester_constants_1.Months]),
    })
});
const updateAcademicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_constants_1.academicSemesterName]).optional(),
        code: zod_1.z.enum([...academicSemester_constants_1.academicSemesterCode]).optional(),
        year: zod_1.z.string().optional(),
        startMonth: zod_1.z.enum([...academicSemester_constants_1.Months]).optional(),
        endMonth: zod_1.z.enum([...academicSemester_constants_1.Months]).optional(),
    })
});
exports.AcademicSemesterValidation = {
    createAcademicSemesterValidationSchema,
    updateAcademicSemesterValidationSchema
};
