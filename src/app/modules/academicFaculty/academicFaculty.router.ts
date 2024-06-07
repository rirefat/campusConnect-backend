import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

// All routers
// creating new academic faculty
router.post(
    '/create-academic-faculty',
    validateRequest(academicFacultyValidation.createAcademicFacultyValidationSchema),
    academicFacultyController.createAcademicFaculty
);
// Getting all academic faculties
router.get(
    '/',
    academicFacultyController.getAllAcademicFaculties
);
// Getting single academic faculty
router.get(
    '/:facultyId',
    academicFacultyController.getSingleAcademicFaculty
);
// Updating single academic faculty
router.patch(
    '/:facultyId',
    validateRequest(academicFacultyValidation.updateAcademicFacultyValidationSchema),
    academicFacultyController.updateSingleAcademicFaculty
)


export const academicFacultyRoutes = router;