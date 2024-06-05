import { Schema, model } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFacultySchema = new Schema<TAcademicFaculty>({
    name: {
        type: String,
        required: true
    }
});

export const AcademicFacultyModel = model<TAcademicFaculty>('AcademicFaculty', academicFacultySchema);