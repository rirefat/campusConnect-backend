"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidationSchema = void 0;
const zod_1 = require("zod");
const userNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string({ required_error: "First name is required", })
        .min(1, { message: 'Invalid name' })
        .max(12, { message: "Invalid name" }),
    middleName: zod_1.z.string({ required_error: "Middle name is required", })
        .min(1, { message: "Invalid name" })
        .max(12, { message: "Invalid name" }),
    lastName: zod_1.z.string({ required_error: "Last name is required" })
        .min(1, { message: "Invalid last name" })
        .max(12, { message: "Invalid last name" })
});
const guardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string({ required_error: "Name is required" })
        .min(1, { message: "Invalid name" })
        .max(25, { message: "Invalid name" }),
    fatherOccupation: zod_1.z.string({ required_error: "Occupation is required" })
        .min(1, { message: "Invalid occupation" })
        .max(25, { message: "Invalid occupation" }),
    fatherContactNo: zod_1.z.string({ required_error: "contact no is required" }),
    motherName: zod_1.z.string({ required_error: "Name is required" })
        .min(1, { message: "Invalid name" })
        .max(25, { message: "Invalid name" }),
    motherOccupation: zod_1.z.string({ required_error: "Occupation is required" })
        .min(1, { message: "Invalid occupation" })
        .max(25, { message: "Invalid occupation" }),
    motherContactNo: zod_1.z.string({ required_error: "contact no is required" }),
});
const localGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name is required" })
        .min(1, { message: "Invalid name" })
        .max(25, { message: "Invalid name" }),
    occupation: zod_1.z.string({ required_error: "Occupation is required" })
        .min(1, { message: "Invalid occupation" })
        .max(25, { message: "Invalid occupation" }),
    contactNo: zod_1.z.string({ required_error: "contact no is required" }),
    address: zod_1.z.string({ required_error: "Address no is required" }),
});
exports.studentValidationSchema = zod_1.z.object({
    id: zod_1.z.string({
        required_error: "Name is required",
    }),
    name: userNameValidationSchema,
    gender: zod_1.z.enum(['male', 'female']),
    dateOfBirth: zod_1.z.string({ required_error: "Date of birth is required", }),
    email: zod_1.z.string({ required_error: "Email is required", }),
    contactNo: zod_1.z.string({ required_error: "Contact no is required", }),
    emergencyContactNo: zod_1.z.string({ required_error: "Emergency contact no is required", }),
    bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    presentAddress: zod_1.z.string({ required_error: "Present address is required", }),
    permanentAddress: zod_1.z.string({ required_error: "Permanent address is required", }),
    guardian: guardianValidationSchema,
    localGuardian: localGuardianValidationSchema,
    profileImg: zod_1.z.string({ required_error: "Student img is required" }),
    isActive: zod_1.z.enum(['active', 'blocked']).default("active")
});
