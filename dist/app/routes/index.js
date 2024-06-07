"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_route_1 = require("../modules/student/student.route");
const user_router_1 = require("../modules/user/user.router");
const academicSemester_router_1 = require("../modules/academicSemester/academicSemester.router");
const academicFaculty_router_1 = require("../modules/academicFaculty/academicFaculty.router");
const academicDepartment_router_1 = require("../modules/academicDepartment/academicDepartment.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    { path: '/users', route: user_router_1.userRoutes },
    { path: '/students', route: student_route_1.studentRoutes },
    { path: '/academic-semesters', route: academicSemester_router_1.academicSemesterRoutes },
    { path: '/academic-faculties', route: academicFaculty_router_1.academicFacultyRoutes },
    { path: '/academic-departments', route: academicDepartment_router_1.academicDepartmentRoutes },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
