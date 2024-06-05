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
exports.generateStudentId = void 0;
const user_model_1 = require("./user.model");
// finding last student id
const findLastStudentId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastStudent = yield user_model_1.UserModel
        .findOne({ role: 'student' }, { id: 1 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id) ? lastStudent === null || lastStudent === void 0 ? void 0 : lastStudent.id : undefined;
});
// generate student id
const generateStudentId = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    // student id sample: 2025 01 0001
    const lastStudentId = yield findLastStudentId();
    const lastStudentYear = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(0, 4);
    const lastStudentSemesterCode = lastStudentId === null || lastStudentId === void 0 ? void 0 : lastStudentId.substring(4, 6);
    if (lastStudentId &&
        lastStudentYear === payload.year &&
        lastStudentSemesterCode && payload.code) {
        currentId = lastStudentId.substring(6);
    }
    let incrementId = (parseInt(currentId) + 1).toString().padStart(4, "0");
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
});
exports.generateStudentId = generateStudentId;
