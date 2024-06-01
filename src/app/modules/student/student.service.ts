import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

// creating new student data
// const createStudentIntoDB = async (student: TStudent) => {
//     const result = await StudentModel.create(student);
//     return result;
// }

// retrieve all student's data from database
const getAllStudentsFromDB = async () => {
    const result = await StudentModel.find();
    return result;
}

// retrieve a single student's data from database
const getSingleStudentFromDB = async (id: string) => {
    const result = await StudentModel.findOne({ id: id });
    return result;
}

export const studentServices = {
    // createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentFromDB
}