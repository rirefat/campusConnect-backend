import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);
router.get('/:semesterId', AcademicSemesterControllers.getSingleAcademicSemester);
router.patch('/:semesterId', AcademicSemesterControllers.updateSingleAcademicSemester);
router.post(
    '/create-academic-semester',
    validateRequest(AcademicSemesterValidation.createAcademicSemesterValidationSchema),
    AcademicSemesterControllers.createAcademicSemester
);

export const academicSemesterRoutes = router;