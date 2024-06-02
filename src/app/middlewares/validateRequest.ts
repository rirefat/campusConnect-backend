import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

// Higher order function
const validateRequest = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            // validation check
            await schema.parseAsync({ body: req.body });
            next();
        } catch (err) {
            next(err);
        }
    }
}

export default validateRequest;