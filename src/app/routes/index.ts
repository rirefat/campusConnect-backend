import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.router";

const router = Router();

const moduleRoutes = [
    { path: '/users', route: userRoutes },
    { path: '/students', route: studentRoutes },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;