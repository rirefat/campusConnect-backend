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
exports.academicFacultyController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const academicFaculty_service_1 = require("./academicFaculty.service");
// create academic faculty
const createAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.academicFacultyServices.createAcademicFacultyIntoDB(req.body);
    // sending response 
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic faculty is created successfully',
        data: result
    });
}));
// retrieve all academic faculties
const getAllAcademicFaculties = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.academicFacultyServices.getAllAcademicFacultiesFromDB();
    // sending response 
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieved all academic faculties successfully',
        totalData: result.length,
        data: result
    });
}));
// retrieve single academic faculty
const getSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicFaculty_service_1.academicFacultyServices.getSingleAcademicFacultyFromDB(req.params.facultyId);
    // sending response 
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieved a specific academic faculty successfully',
        data: result
    });
}));
// update a single academic faculty
// const updateSingleAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
//     const result = academicFacultyServices.updateAcademicFacultyFromDB(req.params.facultyId, req.body);
//     // 
//     sendResponse(res, {
//         statusCode: httpStatus.OK,
//         success: true,
//         message: 'Updated a specific academic faculty successfully',
//         data: result
//     })
// })
const updateSingleAcademicFaculty = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const updateData = req.body;
    const updatedFaculty = yield academicFaculty_service_1.academicFacultyServices.updateAcademicFacultyFromDB(facultyId, updateData);
    if (!updatedFaculty) {
        return (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: 'Academic faculty not found or update failed',
            data: null
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Updated a specific academic faculty successfully',
        data: updatedFaculty
    });
}));
exports.academicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateSingleAcademicFaculty
};
