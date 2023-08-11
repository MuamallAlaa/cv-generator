import { Request, Response, NextFunction } from "express";
import { AnyObjectSchema, object, string, number } from "yup";
export const ValidateForm = (schema: AnyObjectSchema) => {
  interface YupValidationError {
    errors: string[];
  }
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await schema.validate(req.body);
      next();
    } catch (err: any) {
      return res.status(422).json(err.errors);
    }
  };
};
export const schemas = {
  data: object().shape({
    name: string()
      .required("Name is required")
      .max(50, "Name must not exceed 50 characters"),
    phone: number()
      .typeError("Enter a valid number for the phone")
      .required("Phone is required")
      .positive("Phone must be a positive number")
      .integer("Phone must be an integer"),
    address: string().required("Address is required"),
    about: string().required("About is required"),
    experience: string().required("Experience is required"),
    education: string().required("Educations is required"),
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
  }),
};
