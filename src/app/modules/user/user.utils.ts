import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";

// finding last student id
const findLastStudentId = async () => {
    const lastStudent = await UserModel
        .findOne({ role: 'student' }, { id: 1 })
        .sort({ createdAt: -1 })
        .lean()

    return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
}

// generate student id
export const generateStudentId = async (payload: TAcademicSemester) => {
    const currentId = (await findLastStudentId()) || (0).toString();
    let incrementId = (parseInt(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;

    return incrementId;
};