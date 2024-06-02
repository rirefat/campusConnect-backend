import { RequestHandler } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// const createStudent = async (req: Request, res: Response, next: NextFunction) => {
// the above line can be written as below: 
const createStudent: RequestHandler = async (req, res, next) => {
    try {
        const { password, student: studentData } = req.body;

        // validation using zod
        // const zodParsedData = studentValidationSchema.parse(studentData);
        // const result = await userServices.createStudentIntoDB(zodParsedData);
        const result = await userServices.createStudentIntoDB(password, studentData);

        // sending response
        // res.status(200).json({
        //     success: true, 
        //     message: "Successfully created student data.",
        //     data: result
        // })
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Successfully created student data.",
            data: result
        })
    } catch (err) {
        next(err)
    }
}

export const userControllers = {
    createStudent,
} 