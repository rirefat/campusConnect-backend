import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRoutes } from './app/modules/student/student.route';
import { userRoutes } from './app/modules/user/user.router';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors())

// Application Routes
app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to CampusConnect')
})

export default app;