import { Response } from "express";

type TResponse<T> = {
    success: boolean;
    statusCode: number;
    message?: string;
    totalData?: number;
    data: T;
}

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data?.statusCode).json({
        success: data.success,
        message: data?.message,
        totalData: data?.totalData,
        data: data?.data
    })
}

export default sendResponse;