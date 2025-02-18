class BadRequest extends HttpException {
    constructor(public message: string, public errorCode: ErrorCode, public statusCode: number, public errors: any) {
        super(message, ErrorCode.BAD_REQUEST, 400, null);
    }
}