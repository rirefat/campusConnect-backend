import { Schema, model } from "mongoose";
import { TGuardian, TLocalGuardian, TStudent, TUsername } from "./student.interface";

const userNameSchema = new Schema<TUsername>({
    firstName: {
        type: String,
        min: [1, "Invalid name"],
        max: [12, "Invalid name"],
        required: [true, "First name is required"]
    },
    middleName: {
        type: String,
        min: [1, "Invalid name"],
        max: [12, "Invalid name"],
        required: [true, "Middle name is required"]
    },
    lastName: {
        type: String,
        min: [1, "Invalid name"],
        max: [12, "Invalid name"],
        required: [true, "Last name is required"]
    }
})

const guardianSchema = new Schema<TGuardian>({
    fatherName: {
        type: String,
        min: [1, "Invalid name"],
        max: [40, "Invalid name"],
        required: [true, "Father's name is required"]
    },
    fatherOccupation: {
        type: String,
        min: [1, "Invalid occupation"],
        max: [25, "Invalid occupation"],
        required: [true, "Father's occupation is required"]
    },
    fatherContactNo: {
        type: String,
        required: [true, "Father's contact no is required"]
    },
    motherName: {
        type: String,
        min: [1, "Invalid name"],
        max: [40, "Invalid name"],
        required: [true, "Mother's name is required"]
    },
    motherOccupation: {
        type: String,
        min: [1, "Invalid occupation"],
        max: [25, "Invalid occupation"],
        required: [true, "Mother's occupation is required"]
    },
    motherContactNo: {
        type: String,
        required: [true, "Mother's contact no is required"]
    },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        min: [1, "Invalid name"],
        max: [40, "Invalid name"],
        required: [true, "Local's guardian's name is required"]
    },
    occupation: {
        type: String,
        min: [1, "Invalid occupation"],
        max: [25, "Invalid occupation"],
        required: [true, "Local's guardian's occupation is required"]
    },
    contactNo: {
        type: String,
        required: [true, "Contact no is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    }
})

const studentSchema = new Schema<TStudent>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required'],
        unique: true,
        ref: 'User',
    },
    name: userNameSchema,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    contactNo: {
        type: String,
        required: [true, "Contact no is required"]
    },
    emergencyContactNo: {
        type: String,
        required: [true, "Emergency contact no is required"]
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    presentAddress: {
        type: String,
        required: [true, "Present address is required"]
    },
    permanentAddress: {
        type: String,
        required: [true, "Permanent address is required"]
    },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: String,

});

export const StudentModel = model<TStudent>("Student", studentSchema);