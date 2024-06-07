import express from 'express';
import { academicDepartmentControllers } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.get('/', academicDepartmentControllers.getAllAcademicDepartments);
router.get('/:departmentId', academicDepartmentControllers.getSingleAcademicDepartment);
router.post(
    './create-academic-department',
    validateRequest(academicDepartmentValidation.createAcademicDepartmentValidationSchema),
    academicDepartmentControllers.createAcademicDepartment
);
router.patch(
    '/update-academic-department',
    validateRequest(academicDepartmentValidation.updateAcademicDepartmentValidationSchema),
    academicDepartmentControllers.updateSingleAcademicDepartment
);

export const academicDepartmentRoutes = router;
