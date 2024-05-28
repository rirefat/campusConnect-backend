import { Schema, model } from "mongoose";
import { TUser } from "./user.interface.";

const userSchema = new Schema<TUser>({
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
},
{
    timestamps: true
});

export const UserModel = model<TUser>("User", userSchema);