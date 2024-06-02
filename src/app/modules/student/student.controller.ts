import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";


// getting all student's data from db
const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await studentServices.getAllStudentsFromDB();

        // sending response
        // res.status(200).json({
        //     success: true,
        //     message: "Successfully retrieved all the student's data from database.",
        //     totalData: result.length,
        //     data: result
        // })
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Successfully retrieved all the student's data from database.",
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
        // res.status(200).json({
        //     success: true,
        //     message: `successfully retrieved the student(id: ${studentId}) data.`,
        //     data: result
        // })
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: `successfully retrieved the student(id: ${studentId}) data.`,
            data: result
        })
    } catch (err) {
        next(err);
    }
}

export const studentControllers = {
    getAllStudents,
    getSingleStudent
}