import express from 'express';
import { studentControllers } from './student.controller';

const route = express.Router();

// Routers
route.get('/', studentControllers.getAllStudents);
route.get('/:studentId', studentControllers.getSingleStudent);

export const studentRoutes = route;