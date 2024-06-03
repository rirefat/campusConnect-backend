import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { RequestHandler } from "express";
import { academicSemesterServices } from "./academicSemester.service";

// Creating a new academic semester
const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
    const result = await academicSemesterServices.createAcademicSemesterIntoDB(req.body);

    // sending response
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester is created successfully',
        data: result
    })
});

// Getting all academic semesters
const getAllAcademicSemesters: RequestHandler = catchAsync(async (req, res) => {
    const result = await academicSemesterServices.getAllAcademicSemestersFromDB();

    // sending response
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved all academic semesters successfully',
        totalData: result.length,
        data: result
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemesters
}