import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exception/httpException";

export const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    res.status(error.statusCode || 500).json({
        message: error.message,
        errorcode: error.errorCode,
        errors: error.errors
    })
}