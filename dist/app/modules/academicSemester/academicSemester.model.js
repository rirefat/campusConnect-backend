"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterModel = void 0;
const mongoose_1 = require("mongoose");
const academicSemester_constants_1 = require("./academicSemester.constants");
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        enum: academicSemester_constants_1.academicSemesterName
    },
    code: {
        type: String,
        required: true,
        enum: academicSemester_constants_1.academicSemesterCode
    },
    year: {
        type: String,
        required: true
    },
    startMonth: {
        type: String,
        required: true,
        enum: academicSemester_constants_1.Months
    },
    endMonth: {
        type: String,
        required: true,
        enum: academicSemester_constants_1.Months
    }
}, { timestamps: true });
exports.AcademicSemesterModel = (0, mongoose_1.model)('AcademicSemester', academicSemesterSchema);
