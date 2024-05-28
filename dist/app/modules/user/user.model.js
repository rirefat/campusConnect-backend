"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, required: true },
    role: {
        type: String,
        enum: (['student', 'faculty', 'admin']),
        required: true
    },
    status: {
        type: String,
        enum: (['in-progress', 'blocked']),
        required: true
    },
    isDeleted: { type: Boolean, required: true },
}, {
    timestamps: true
});
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
