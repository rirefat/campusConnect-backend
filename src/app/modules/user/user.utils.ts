import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";

// finding last student id
const findLastStudentId = async () => {
    const lastStudent = await UserModel
        .findOne({ role: 'student' }, { id: 1 })
        .sort({ createdAt: -1 })
        .lean()

    return lastStudent?.id ? lastStudent?.id : undefined;
}

// generate student id
export const generateStudentId = async (payload: TAcademicSemester) => {
    let currentId = (0).toString();

    // student id sample: 2025 01 0001
    const lastStudentId = await findLastStudentId();
    const lastStudentYear = lastStudentId?.substring(0, 4)
    const lastStudentSemesterCode = lastStudentId?.substring(4, 6);

    if (lastStudentId &&
        lastStudentYear === payload.year &&
        lastStudentSemesterCode && payload.code
    ) {
        currentId = lastStudentId.substring(6);
    }


    let incrementId = (parseInt(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;

    return incrementId;
};