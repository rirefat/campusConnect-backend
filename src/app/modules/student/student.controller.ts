import { Request, Response } from "express";
import { studentServices } from "./student.service";

// creating a new student data
const createStudent = async (req: Request, res: Response) => {
    try {
        const { student: studentData } = req.body;
        const result = await studentServices.createStudentIntoDB(studentData);

        // response
        res.status(200).json({
            success: true,
            message: "Successfully created student data.",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

// getting all student's data from db
const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await studentServices.getAllStudentsFromDB();

        // sending response
        res.status(200).json({
            success: true,
            message: "Successfully retrieved all the student's data from database.",
            totalData: result.length,
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

export const studentControllers = {
    createStudent,
    getAllStudents
}