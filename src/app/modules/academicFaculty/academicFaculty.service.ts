import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";


// creating a new academic faculty
const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
    const result = await AcademicFacultyModel.create(payload);
    return result;
};

// retrieve all academic faculties
const getAllAcademicFacultiesFromDB = async () => {
    const result = await AcademicFacultyModel.find();
    return result;
};

// retrieve single academic faculty
const getSingleAcademicFacultyFromDB = async (id: string) => {
    const result = await AcademicFacultyModel.findById(id);
    return result;
};

// update a single academic faculty
const updateAcademicFacultyFromDB = async (id: string, payload: Partial<TAcademicFaculty>) => {
    const result = await AcademicFacultyModel.findOneAndUpdate({ _id: id }, payload, { new: true });
    return result;
};

export const academicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultiesFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyFromDB
}