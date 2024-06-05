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
exports.academicFacultyServices = void 0;
const academicFaculty_model_1 = require("./academicFaculty.model");
// creating a new academic faculty
const createAcademicFacultyIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_model_1.AcademicFacultyModel.create(payload);
    return result;
});
// retrieve all academic faculties
const getAllAcademicFacultiesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_model_1.AcademicFacultyModel.find();
    return result;
});
// retrieve single academic faculty
const getSingleAcademicFacultyFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_model_1.AcademicFacultyModel.findById(id);
    return result;
});
// update a single academic faculty
const updateAcademicFacultyFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_model_1.AcademicFacultyModel.findOneAndUpdate({ _id: id }, payload, { new: true });
    return result;
});
exports.academicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultiesFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyFromDB
};
