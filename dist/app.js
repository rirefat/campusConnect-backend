"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/modules/student/student.route");
const user_router_1 = require("./app/modules/user/user.router");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application Routes
app.use('/api/v1/students', student_route_1.studentRoutes);
app.use('/api/v1/users', user_router_1.userRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to CampusConnect');
});
exports.default = app;
