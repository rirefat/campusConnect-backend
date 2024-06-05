import { TAcademicSemester } from "../academicSemester/academicSemester.interface";

// generate student id
export const generateStudentId = (payload: TAcademicSemester) => {
    const currentId = (0).toString();
    let incrementId = (parseInt(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;

    return incrementId;
};