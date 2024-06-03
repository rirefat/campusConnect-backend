"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_route_1 = require("../modules/student/student.route");
const user_router_1 = require("../modules/user/user.router");
const academicSemester_router_1 = require("../modules/academicSemester/academicSemester.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    { path: '/users', route: user_router_1.userRoutes },
    { path: '/students', route: student_route_1.studentRoutes },
    { path: '/academic-semesters', route: academicSemester_router_1.academicSemesterRoutes },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
