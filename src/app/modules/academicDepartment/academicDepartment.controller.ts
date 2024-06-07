import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { academicDepartmentServices } from "./academicDepartment.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// create academic department 
const createAcademicDepartment: RequestHandler = catchAsync(async (req, res) => {
    const result = await academicDepartmentServices.createAcademicDepartmentIntoDB(req.body);

    // sending response 
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic department is created successfully',
        data: result
    })
});

// retrieve all academic departments
const getAllAcademicDepartments: RequestHandler = catchAsync(async (req, res) => {
    const result = await academicDepartmentServices.getAllAcademicDepartmentsFromDB();

    // sending response 
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved all academic departments successfully',
        totalData: result.length,
        data: result
    })
});

// retrieved single academic department using department id
const getSingleAcademicDepartment: RequestHandler = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result =await academicDepartmentServices.getSingleAcademicDepartmentFromDB(departmentId);

    // sending response 
    if (!result) {
        return sendResponse(res, {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: 'Academic department not found',
            data: null
        });
    }
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Retrieved single academic department successfully',
        totalData: 1,
        data: result
    })
});

// update single academic department 
const updateSingleAcademicDepartment: RequestHandler = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result =await academicDepartmentServices.updateSingleAcademicDepartmentFromDB(departmentId, req.body);

    // sending response 
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Updated Academic Department successfully',
        data: result
    })
})


export const academicDepartmentControllers = {
    createAcademicDepartment,
    getAllAcademicDepartments,
    getSingleAcademicDepartment,
    updateSingleAcademicDepartment
}