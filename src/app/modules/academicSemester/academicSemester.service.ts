import { academicSemesterCodeNameMapper } from "./academicSemester.constants";
import { TAcademicSemester } from "./academicSemester.interface"
import { AcademicSemesterModel } from "./academicSemester.model"

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {


    if(academicSemesterCodeNameMapper[payload.name] !== payload.code){
        throw new Error('Invalid semester code !!');
    }

    const result = AcademicSemesterModel.create(payload);
    return result;
}

export const academicServices = {
    createAcademicSemesterIntoDB,
}