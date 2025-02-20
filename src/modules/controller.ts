import { Response } from "express";
import autoBind from "auto-bind";

export default class {
    constructor() {
        autoBind(this);
    }
    protected response({ res, message, data = {}, statusCode = 200 }: { res: Response, message: string, data?: any, statusCode?: number }) {
        res.status(statusCode).json({
            message,
            data,
            statusCode
        });
    }
}

