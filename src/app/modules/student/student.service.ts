import { StudentModel } from "./student.model";

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
    getAllStudentsFromDB,
    getSingleStudentFromDB
}