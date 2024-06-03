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

// Getting single academic semester from db
const getSingleAcademicSemesterFromDB = async (id: string) => {
    const result = await AcademicSemesterModel.findOne({ _id: id });
    return result;
}

// Updating single academic semester
const updateSingleAcademicSemesterIntoDB = async (id: string, payload: TAcademicSemester) => {
    const result = await AcademicSemesterModel.findOneAndUpdate({ _id: id }, payload, { new: true })
    return result;
}

export const academicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateSingleAcademicSemesterIntoDB,
}