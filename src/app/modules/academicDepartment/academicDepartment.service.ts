import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartmentModel } from "./academicDepartment.model";

// Creating academic department into DB
const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
    const result = await AcademicDepartmentModel.create(payload);
    return result;
};

// Retrieving all academic department from DB
const getAllAcademicDepartmentsFromDB = async () => {
    const result = await AcademicDepartmentModel.find();
    return result;
};

// Retrieving single academic department from DB
const getSingleAcademicDepartmentFromDB = async (id: string) => {
    const result = await AcademicDepartmentModel.findById(id);
    return result;
}

// Updating single academic department from DB
const updateSingleAcademicDepartmentFromDB = async (id: string, payload: Partial<TAcademicDepartment>) => {
    const result = await AcademicDepartmentModel.findByIdAndUpdate(id, payload, { new: true });
    return result;
}


export const academicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentsFromDB,
    getSingleAcademicDepartmentFromDB,
    updateSingleAcademicDepartmentFromDB
}