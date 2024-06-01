"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("./user.model");
const createStudentIntoDB = (password, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    // create user object
    const user = {};
    // set user id manually
    user.id = '202510001';
    // if password is not given, use default password
    user.password = password || config_1.default.user_pass;
    // set student role
    user.role = 'student';
    // create user
    const result = yield user_model_1.UserModel.create(user);
    // create a student
    if (Object.keys(result).length) {
        studentData.id = result.id;
        studentData.user = result._id;
    }
    return result;
});
exports.userServices = {
    createStudentIntoDB,
};
