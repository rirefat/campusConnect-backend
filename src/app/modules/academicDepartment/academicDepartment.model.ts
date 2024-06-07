import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        ref: 'AcademicFaculty',
        required: true
    }
},
    { timestamps: true }
);

export const AcademicDepartmentModel = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema);