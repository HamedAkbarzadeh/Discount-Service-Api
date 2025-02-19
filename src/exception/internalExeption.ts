import { ErrorCode, HttpException } from "./httpException";

export class InternalException extends HttpException {
    constructor(public message: string, public errorCode: ErrorCode, public statusCode: number, public errors: any) {
        super(message, ErrorCode.INTERNAL_EXCEPTION, 500, null);
    }
}