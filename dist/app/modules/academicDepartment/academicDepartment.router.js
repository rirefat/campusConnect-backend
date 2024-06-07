"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const router = express_1.default.Router();
router.get('/', academicDepartment_controller_1.academicDepartmentControllers.getAllAcademicDepartments);
router.get('/:departmentId', academicDepartment_controller_1.academicDepartmentControllers.getSingleAcademicDepartment);
router.post('./create-academic-department', (0, validateRequest_1.default)(academicDepartment_validation_1.academicDepartmentValidation.createAcademicDepartmentValidationSchema), academicDepartment_controller_1.academicDepartmentControllers.createAcademicDepartment);
router.patch('/update-academic-department', (0, validateRequest_1.default)(academicDepartment_validation_1.academicDepartmentValidation.updateAcademicDepartmentValidationSchema), academicDepartment_controller_1.academicDepartmentControllers.updateSingleAcademicDepartment);
exports.academicDepartmentRoutes = router;
