import config from "../../config";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    // create user object
    // const user = {} as NewUser;
    const userData: Partial<TUser> = {};

    // set user id manually
    userData.id = '202510001';

    // if password is not given, use default password
    userData.password = password || (config.user_pass as string);

    // set student role
    userData.role = 'student'

    // create user
    const newUser = await UserModel.create(userData);

    // create a student
    if(Object.keys(newUser).length){
        studentData.id = newUser.id;
        studentData.user = newUser._id;

        const newStudent = await StudentModel.create(studentData);
        return newStudent;
    }
}

export const userServices = {
    createStudentIntoDB,
}