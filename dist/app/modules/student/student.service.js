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
// retrieve all student's data from database
const getAllStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel
        .find()
        .populate('admissionSemester')
        .populate({
        path: 'academicDepartment',
        populate: 'academicFaculty'
    });
    return result;
});
// retrieve a single student's data from database
const getSingleStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel
        .findOne({ id: id })
        .populate('admissionSemester')
        .populate({
        path: 'academicDepartment',
        populate: 'academicFaculty'
    });
    return result;
});
exports.studentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB
};
