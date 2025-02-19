import { Response } from "express";

export default class {

    protected results({ res, message, data = {}, statusCode = 200 }: { res: Response, message: string, data?: any, statusCode?: number }) {
        res.status(statusCode).json({
            message,
            data,
            statusCode
        });
    }
}

