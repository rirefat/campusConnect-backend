"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentModel = void 0;
const mongoose_1 = require("mongoose");
const academicDepartmentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    academicFaculty: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AcademicFaculty',
        required: true
    }
}, { timestamps: true });
exports.AcademicDepartmentModel = (0, mongoose_1.model)("AcademicDepartment", academicDepartmentSchema);
