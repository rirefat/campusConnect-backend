"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    password: zod_1.z
        .string({ invalid_type_error: 'Password must be string' })
        .min(8, { message: "Password should be more than 8 characters" })
        .optional()
});
