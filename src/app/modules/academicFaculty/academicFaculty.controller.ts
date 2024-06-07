import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { academicFacultyServices } from "./academicFaculty.service";

// create academic faculty
const createAcademicFaculty: RequestHandler = catchAsync(async (req, res, next) => {
    const result = await academicFacultyServices.createAcademicFacultyIntoDB(req.body);

    // sending response 
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic faculty is created successfully',
        data: result
    })
});

// retrieve all academic faculties
const getAllAcademicFaculties: RequestHandler = catchAsync(async (req, res) => {
    const result = await academicFacultyServices.getAllAcademicFacultiesFromDB();

    // sending response 
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved all academic faculties successfully',
        totalData: result.length,
        data: result
    })
})

export const academicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculties,
}