class ErrorHandler extends Error {
  constructor(message: string, statusCode: number) {
    super(message);
    statusCode = statusCode;
    Error.captureStackTrace(this.constructor);
  }
}
export default ErrorHandler;
