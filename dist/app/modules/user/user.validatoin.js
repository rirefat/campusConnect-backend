"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    // id will be generated automatically in server
    // id: z
    //     .string({ required_error: "User id is required" }),
    password: zod_1.z
        .string({ invalid_type_error: 'Password must be string' })
        .min(8, { message: "Password should be more than 8 characters" })
        .optional(),
    // needPasswordChange: z
    //     .boolean()
    //     .optional()
    //     .default(true),
    // role: z
    //     .enum(['student', 'faculty', 'admin']),
    // status: z
    //     .enum(['in-progress', 'blocked'])
    //     .optional()
    //     .default("in-progress"),
    // isDeleted: z
    //     .boolean()
    //     .optional()
    //     .default(false)
});
