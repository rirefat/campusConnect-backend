"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    id: zod_1.z.string({ required_error: "User id is required" }),
    password: zod_1.z.string().min(8, { message: "Password should be more than 8 characters" }),
    needPasswordChange: zod_1.z.boolean().optional().default(true),
    role: zod_1.z.enum(['student', 'faculty', 'admin']),
    status: zod_1.z.enum(['in-progress', 'blocked']).optional().default("in-progress"),
    isDeleted: zod_1.z.boolean().optional().default(false)
});
