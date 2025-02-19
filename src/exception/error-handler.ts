import { NextFunction, Request, Response } from "express"
import { ErrorCode, HttpException } from "./httpException";
import { InternalException } from "./internalExeption";

export const errorHandler = (method: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await method(req, res, next);
        } catch (error: any) {
            let exception: HttpException;

            if (error instanceof HttpException) {
                exception = error;
            } else {
                exception = new InternalException("internal error", ErrorCode.INTERNAL_EXCEPTION, 500, error);
            }
            next(exception);
        }
    }
}