import { NextFunction, Response, Request } from "express";
import { errorfeatures } from "../utilities/errorhandling";

const errorcontrollers = (
  err: errorfeatures,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  console.log(err);
  if (err.isOperational) {
    console.log(err.message);
    res.status(err.statusCode).json({
      status: err.status,

      message: err.message,
    });
  } else {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "%somthing went worng %",
    });
  }
};
export default errorcontrollers;
