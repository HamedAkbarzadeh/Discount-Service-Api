import { Request, Response } from "express"
import { stat } from "node:fs/promises"
export class Controller {

    response({ res, message, data = {}, statusCode = 200 }: { res: Response, message: string, data?: any, statusCode?: number }) {
        res.status(statusCode).json({
            message,
            data,
            statusCode
        });
    }
}