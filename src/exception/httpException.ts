export class HttpException extends Error {
    constructor(public message: string, public errorCode: ErrorCode, public statusCode: number, public errors: any) {
        super(message);
    }
}
export enum ErrorCode {
    BAD_REQUEST = 1001,
    NOTFOUND_REQUEST = 1004,
}
