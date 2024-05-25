"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const route = express_1.default.Router();
// Routers
route.get('/', student_controller_1.studentControllers.getAllStudents);
route.post('/create-student', student_controller_1.studentControllers.createStudent);
exports.studentRoutes = route;
