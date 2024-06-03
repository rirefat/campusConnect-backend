import { TAcademicSemester } from "./academicSemester.interface"
import { AcademicSemesterModel } from "./academicSemester.model"

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    const result = AcademicSemesterModel.create(payload);
    return result;
}

export const academicServices = {
    createAcademicSemesterIntoDB,
}