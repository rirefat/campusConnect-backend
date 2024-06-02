import { z } from "zod";

const userNameValidationSchema = z.object({
    firstName: z.string({ required_error: "First name is required", })
        .min(1, { message: 'Invalid name' })
        .max(12, { message: "Invalid name" }),
    middleName: z.string({ required_error: "Middle name is required", })
        .min(1, { message: "Invalid name" })
        .max(12, { message: "Invalid name" }),
    lastName: z.string({ required_error: "Last name is required" })
        .min(1, { message: "Invalid last name" })
        .max(12, { message: "Invalid last name" })
});

const guardianValidationSchema = z.object({
    fatherName: z.string({ required_error: "Name is required" })
        .min(1, { message: "Invalid name" })
        .max(25, { message: "Invalid name" }),
    fatherOccupation: z.string({ required_error: "Occupation is required" })
        .min(1, { message: "Invalid occupation" })
        .max(25, { message: "Invalid occupation" }),
    fatherContactNo: z.string({ required_error: "contact no is required" }),

    motherName: z.string({ required_error: "Name is required" })
        .min(1, { message: "Invalid name" })
        .max(25, { message: "Invalid name" }),
    motherOccupation: z.string({ required_error: "Occupation is required" })
        .min(1, { message: "Invalid occupation" })
        .max(25, { message: "Invalid occupation" }),
    motherContactNo: z.string({ required_error: "contact no is required" }),

});

const localGuardianValidationSchema = z.object({
    name: z.string({ required_error: "Name is required" })
        .min(1, { message: "Invalid name" })
        .max(25, { message: "Invalid name" }),
    occupation: z.string({ required_error: "Occupation is required" })
        .min(1, { message: "Invalid occupation" })
        .max(25, { message: "Invalid occupation" }),
    contactNo: z.string({ required_error: "contact no is required" }),
    address: z.string({ required_error: "Address no is required" }),
});

const createStudentValidationSchema = z.object({
    body: z.object({
        password: z.string().min(8),
        student: z.object({
            name: userNameValidationSchema,
            gender: z.enum(['male', 'female']),
            dateOfBirth: z.date({ required_error: "Date of birth is required", }),
            email: z.string({ required_error: "Email is required", }),
            contactNo: z.string({ required_error: "Contact no is required", }),
            emergencyContactNo: z.string({ required_error: "Emergency contact no is required", }),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            presentAddress: z.string({ required_error: "Present address is required", }),
            permanentAddress: z.string({ required_error: "Permanent address is required", }),
            guardian: guardianValidationSchema,
            localGuardian: localGuardianValidationSchema,
            profileImg: z.string({ required_error: "Student img is required" }),
        })
    })
});


export const studentValidations = {
    createStudentValidationSchema,
}