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
exports.studentControllers = void 0;
const student_service_1 = require("./student.service");
// import { studentValidationSchema } from "./student.validation";
// creating a new student data
// const createStudent = async (req: Request, res: Response) => {
//     try {
//         const { student: studentData } = req.body;
//         // validation using zod
//         const zodParsedData = studentValidationSchema.parse(studentData);
//         const result = await studentServices.createStudentIntoDB(zodParsedData);
//         // response
//         res.status(200).json({
//             success: true,
//             message: "Successfully created student data.",
//             data: result
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }
// getting all student's data from db
const getAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.studentServices.getAllStudentsFromDB();
        // sending response
        res.status(200).json({
            success: true,
            message: "Successfully retrieved all the student's data from database.",
            totalData: result.length,
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
// getting single student's data from db
const getSingleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.studentServices.getSingleStudentFromDB(studentId);
        // sending response
        res.status(200).json({
            success: true,
            message: `successfully retrieved the student(id: ${studentId}) data.`,
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.studentControllers = {
    // createStudent,
    getAllStudents,
    getSingleStudent
};
