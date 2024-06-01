import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFoundRouts = (req: Request, res: Response, next: NextFunction) => {
    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'API not found',
        error: ''
    })
}

export default notFoundRouts;