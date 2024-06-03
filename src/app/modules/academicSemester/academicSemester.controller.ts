import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { academicServices } from "./academicSemester.service"

const createAcademicSemester = catchAsync(async (req, res) => {
    const result = academicServices.createAcademicSemesterIntoDB(req.body);

    // sending response
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester is created successfully',
        data: result
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
}