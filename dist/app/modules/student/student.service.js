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
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentServices = void 0;
const student_model_1 = require("./student.model");
// creating new student data
const createStudentIntoDB = (student) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.create(student);
    return result;
});
// retrieve all student's data from database
const getAllStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.find();
    return result;
});
exports.studentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB
};
