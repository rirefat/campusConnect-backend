"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicSemester_validation_1 = require("./academicSemester.validation");
const router = express_1.default.Router();
router.get('/', academicSemester_controller_1.AcademicSemesterControllers.getAllAcademicSemesters);
router.get('/:semesterId', academicSemester_controller_1.AcademicSemesterControllers.getSingleAcademicSemester);
// Updating academic semester
router.patch('/:semesterId', (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesterValidation.updateAcademicSemesterValidationSchema), academicSemester_controller_1.AcademicSemesterControllers.updateSingleAcademicSemester);
// Creating academic semester
router.post('/create-academic-semester', (0, validateRequest_1.default)(academicSemester_validation_1.AcademicSemesterValidation.createAcademicSemesterValidationSchema), academicSemester_controller_1.AcademicSemesterControllers.createAcademicSemester);
exports.academicSemesterRoutes = router;
