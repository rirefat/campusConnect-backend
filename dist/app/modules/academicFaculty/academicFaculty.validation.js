"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyValidationSchema = void 0;
const zod_1 = require("zod");
exports.academicFacultyValidationSchema = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Academic Faculty name is required",
        invalid_type_error: "Name must be a string",
    })
});
