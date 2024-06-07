"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const router = express_1.default.Router();
// All routers
// creating new academic faculty
router.post('/create-academic-faculty', (0, validateRequest_1.default)(academicFaculty_validation_1.academicFacultyValidation.createAcademicFacultyValidationSchema), academicFaculty_controller_1.academicFacultyController.createAcademicFaculty);
// Getting all academic faculties
router.get('/', academicFaculty_controller_1.academicFacultyController.getAllAcademicFaculties);
// Getting single academic faculty
router.get('/:facultyId', academicFaculty_controller_1.academicFacultyController.getSingleAcademicFaculty);
// Updating single academic faculty
router.patch('/:facultyId', (0, validateRequest_1.default)(academicFaculty_validation_1.academicFacultyValidation.updateAcademicFacultyValidationSchema), academicFaculty_controller_1.academicFacultyController.updateSingleAcademicFaculty);
exports.academicFacultyRoutes = router;
