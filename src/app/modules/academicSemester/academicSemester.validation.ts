import { z } from "zod";
import { Months, academicSemesterCode, academicSemesterName } from "./academicSemester.constants";

const createAcademicSemesterValidationSchema = z.object({
    body: z.object({
        name: z.enum([...academicSemesterName] as [string, ...string[]]),
        code: z.enum([...academicSemesterCode] as [string, ...string[]]),
        year: z.date(),
        startMonth: z.enum([...Months] as [string, ...string[]]),
        endMonth: z.enum([...Months] as [string, ...string[]]),
    })
});

export const AcademicSemesterValidation ={
    createAcademicSemesterValidationSchema,
}