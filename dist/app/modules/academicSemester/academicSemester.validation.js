"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidation = void 0;
const zod_1 = require("zod");
const academicSemester_constants_1 = require("./academicSemester.constants");
const createAcademicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_constants_1.academicSemesterName]),
        code: zod_1.z.enum([...academicSemester_constants_1.academicSemesterCode]),
        year: zod_1.z.date(),
        startMonth: zod_1.z.enum([...academicSemester_constants_1.Months]),
        endMonth: zod_1.z.enum([...academicSemester_constants_1.Months]),
    })
});
exports.AcademicSemesterValidation = {
    createAcademicSemesterValidationSchema,
};
