import { academicSemesterCodeNameMapper } from "./academicSemester.constants";
import { TAcademicSemester } from "./academicSemester.interface"
import { AcademicSemesterModel } from "./academicSemester.model"

// Creating a new academic semester into db
const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if (academicSemesterCodeNameMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code !!');
    }
    const result = AcademicSemesterModel.create(payload);
    return result;
}

// Getting all academic semesters from db
const getAllAcademicSemestersFromDB = async () => {
    const result = AcademicSemesterModel.find();
    return result;
}

export const academicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
}