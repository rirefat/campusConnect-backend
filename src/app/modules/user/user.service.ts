import config from "../../config";
import { TStudent } from "../student/student.interface";
import { NewUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    // create user object
    const user = {} as NewUser;

    // set user id manually
    user.id = '202510001';

    // if password is not given, use default password
    user.password = password || (config.user_pass as string);

    // set student role
    user.role = 'student'

    // create user
    const result = await UserModel.create(user);

    // create a student
    if(Object.keys(result).length){
        studentData.id = result.id;
        studentData.user = result._id;
    }

    return result;
}

export const userServices = {
    createStudentIntoDB,
}