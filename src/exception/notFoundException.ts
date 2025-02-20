import { ErrorCode, HttpException } from "./httpException";

export class NotFoundException extends HttpException {
    constructor(public message: string, public errorCode: ErrorCode, public statusCode: number, public errors: any) {
        super(message, ErrorCode.NOTFOUND_REQUEST, 404, null);
    }
}