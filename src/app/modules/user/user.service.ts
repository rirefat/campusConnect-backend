import mongoose from "mongoose";
import config from "../../config";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
    // create user object
    // const user = {} as NewUser;
    const userData: Partial<TUser> = {};

    // find academic semester info
    const admissionSemester = await AcademicSemesterModel.findById(payload.admissionSemester);
    if (!admissionSemester) {
        throw new Error('Admission semester not found');
    }

    // if password is not given, use default password
    userData.password = password || (config.user_pass as string);
    // set student role
    userData.role = 'student'

    const session = await mongoose.startSession();

    try {
        session.startTransaction();
        // set user id manually
        userData.id = await generateStudentId(admissionSemester);

        // create user: (transaction-1)
        const newUser = await UserModel.create([userData], { session });

        if (!newUser.length) {
            throw new Error("Failed to create new user!!")
        }

        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;

        // create user: (transaction-2)
        const newStudent = await StudentModel.create([payload], { session });

        if (!newStudent.length) {
            throw new Error("Failed to create new student!!")
        }

        await session.commitTransaction();
        await session.endSession();

        return newStudent;
    } catch (err) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error("Failed to create new student!!")
        // console.log(err);
    }

}

export const userServices = {
    createStudentIntoDB,
}