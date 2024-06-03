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
exports.academicSemesterServices = void 0;
const academicSemester_constants_1 = require("./academicSemester.constants");
const academicSemester_model_1 = require("./academicSemester.model");
// Creating a new academic semester into db
const createAcademicSemesterIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (academicSemester_constants_1.academicSemesterCodeNameMapper[payload.name] !== payload.code) {
        throw new Error('Invalid semester code !!');
    }
    const result = academicSemester_model_1.AcademicSemesterModel.create(payload);
    return result;
});
// Getting all academic semesters from db
const getAllAcademicSemestersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = academicSemester_model_1.AcademicSemesterModel.find();
    return result;
});
// Getting single academic semester from db
const getSingleAcademicSemesterFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_model_1.AcademicSemesterModel.findOne({ _id: id });
    return result;
});
// Updating single academic semester
const updateSingleAcademicSemesterIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_model_1.AcademicSemesterModel.findOneAndUpdate({ _id: id }, payload, { new: true });
    return result;
});
exports.academicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB,
    updateSingleAcademicSemesterIntoDB,
};
