import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.router";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.router";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.router";

const router = Router();

const moduleRoutes = [
    { path: '/users', route: userRoutes },
    { path: '/students', route: studentRoutes },
    { path: '/academic-semesters', route: academicSemesterRoutes },
    { path: '/academic-faculties', route: academicFacultyRoutes },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;