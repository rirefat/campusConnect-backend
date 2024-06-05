import config from "../../config";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    // create user object
    // const user = {} as NewUser;
    const userData: Partial<TUser> = {};

    // find academic semester info
    const admissionSemester = await AcademicSemesterModel.findById(studentData.admissionSemester);
    if (!admissionSemester) {
        throw new Error('Admission semester not found');
    }

    // set user id manually
    userData.id = await generateStudentId(admissionSemester);

    // if password is not given, use default password
    userData.password = password || (config.user_pass as string);

    // set student role
    userData.role = 'student'

    // create user
    const newUser = await UserModel.create(userData);

    // create a student
    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id;

        const newStudent = await StudentModel.create(studentData);
        return newStudent;
    }
}

export const userServices = {
    createStudentIntoDB,
}