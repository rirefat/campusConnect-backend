import { StudentModel } from "./student.model";

// retrieve all student's data from database
const getAllStudentsFromDB = async () => {
    const result = await StudentModel
        .find()
        .populate('admissionSemester')
        .populate({
            path: 'academicDepartment',
            populate: 'academicFaculty'
        })
    return result;
}

// retrieve a single student's data from database
const getSingleStudentFromDB = async (id: string) => {
    const result = await StudentModel
        .findOne({ id: id })
        .populate('admissionSemester')
        .populate({
            path: 'academicDepartment',
            populate: 'academicFaculty'
        });

    return result;
}

export const studentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB
}