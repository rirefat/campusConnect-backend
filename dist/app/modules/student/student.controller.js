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
exports.studentControllers = void 0;
const student_service_1 = require("./student.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
// getting all student's data from db
const getAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.studentServices.getAllStudentsFromDB();
        // sending response
        // res.status(200).json({
        //     success: true,
        //     message: "Successfully retrieved all the student's data from database.",
        //     totalData: result.length,
        //     data: result
        // })
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: "Successfully retrieved all the student's data from database.",
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
        // res.status(200).json({
        //     success: true,
        //     message: `successfully retrieved the student(id: ${studentId}) data.`,
        //     data: result
        // })
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: `successfully retrieved the student(id: ${studentId}) data.`,
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.studentControllers = {
    getAllStudents,
    getSingleStudent
};
