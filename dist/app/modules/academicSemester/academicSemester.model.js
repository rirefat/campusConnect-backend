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
academicSemesterSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isSemesterExists = yield exports.AcademicSemesterModel.findOne({
            year: this.year, name: this.name
        });
        if (isSemesterExists) {
            throw new Error('This semester is already existed !!');
        }
        next();
    });
});
exports.AcademicSemesterModel = (0, mongoose_1.model)('AcademicSemester', academicSemesterSchema);
