import ErrorHandler from "../utils/errorHandler.js";
import type { Request, Response, NextFunction } from "express";
const errorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal error";

  // mongodb id search error

  if (err.name == "CastError") {
    const message = "Resource not found" + err.path;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
export default errorMiddleware;
