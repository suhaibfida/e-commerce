// import ErrorHandler from "../utils/errorHandler.js";
// const errorMiddleware = (
//   err: string | number,
//   req: Request,
//   res: Response,
//   next: any
// ) => {
//   err.statusCode = err.statusCode || 500;
//   err.message = err.message || "Internal error";

//   // mongodb id search error

//   if (err.name == "CastError") {
//     const message = "Resource not found" + err.path;
//     err = newErrorHandler(message, 400);
//   }

//   res.status(err.statusCode).json({
//     success: false,
//     message: err.message,
//   });
// };
// export default error;
