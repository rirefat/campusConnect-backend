import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
// import { studentValidationSchema } from "./student.validation";

// creating a new student data
// const createStudent = async (req: Request, res: Response) => {
//     try {
//         const { student: studentData } = req.body;
        
//         // validation using zod
//         const zodParsedData = studentValidationSchema.parse(studentData);
//         const result = await studentServices.createStudentIntoDB(zodParsedData);

//         // response
//         res.status(200).json({
//             success: true,
//             message: "Successfully created student data.",
//             data: result
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// getting all student's data from db
const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
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
        next(err);
    }
}

// getting single student's data from db
const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentId } = req.params;
        const result = await studentServices.getSingleStudentFromDB(studentId);

        // sending response
        res.status(200).json({
            success: true,
            message: `successfully retrieved the student(id: ${studentId}) data.`,
            data: result
        })
    } catch (err) {
        next(err);
    }
}

export const studentControllers = {
    // createStudent,
    getAllStudents,
    getSingleStudent
}