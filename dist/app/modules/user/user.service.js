"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const config_1 = __importDefault(require("../../config"));
const academicSemester_model_1 = require("../academicSemester/academicSemester.model");
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const createStudentIntoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    // create user object
    // const user = {} as NewUser;
    const userData = {};
    // find academic semester info
    const admissionSemester = yield academicSemester_model_1.AcademicSemesterModel.findById(studentData.admissionSemester);
    if (!admissionSemester) {
        throw new Error('Admission semester not found');
    }
    // set user id manually
    userData.id = (0, user_utils_1.generateStudentId)(admissionSemester);
    // if password is not given, use default password
    userData.password = password || config_1.default.user_pass;
    // set student role
    userData.role = 'student';
    // create user
    const newUser = yield user_model_1.UserModel.create(userData);
    // create a student
    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = yield student_model_1.StudentModel.create(studentData);
        return newStudent;
    }
});
exports.userServices = {
    createStudentIntoDB,
};
