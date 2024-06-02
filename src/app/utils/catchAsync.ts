import { NextFunction, Request, RequestHandler, Response } from "express"

// Higher order function to avoid try-catch: Implementing DRY principle
const catchAsync = (fn: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch((err) => next(err))
    }
}

export default catchAsync;