import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { academicFacultyServices } from "./academicFaculty.service";

// create academic faculty
const createAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
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
});

// retrieve single academic faculty
const getSingleAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
    const result = await academicFacultyServices.getSingleAcademicFacultyFromDB(req.params.facultyId);

    // sending response 
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved a specific academic faculty successfully',
        data: result
    })
});

// update a single academic faculty
const updateSingleAcademicFaculty: RequestHandler = catchAsync(async (req, res) => {
    const { facultyId } = req.params;
    const updateData = req.body;

    const updatedFaculty = await academicFacultyServices.updateAcademicFacultyFromDB(facultyId, updateData);

    if (!updatedFaculty) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'Academic faculty not found or update failed',
            data: null
        });
    }

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Updated a specific academic faculty successfully',
        data: updatedFaculty
    });
});


export const academicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateSingleAcademicFaculty
}