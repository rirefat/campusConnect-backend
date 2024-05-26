import express from 'express';
import { studentControllers } from './student.controller';

const route = express.Router();

// Routers
route.get('/', studentControllers.getAllStudents);
route.get('/:studentId', studentControllers.getSingleStudent);
route.post('/create-student', studentControllers.createStudent);

export const studentRoutes = route;