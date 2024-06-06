import { Request, Response, NextFunction } from "express";
import Joi, { ValidationResult } from "joi";

export const userSchema = Joi.object({
  id: Joi.number().integer().required().messages({
    "number.base": "ID harus berupa angka",
    "number.integer": "ID harus berupa angka bulat",
    "any.required": "ID wajib diisi",
  }),
  username: Joi.string().required().messages({
    "string.empty": "Username tidak boleh kosong",
    "any.required": "Username wajib diisi",
  }),
  name: Joi.string().required().messages({
    "string.empty": "Nama tidak boleh kosong",
    "any.required": "Nama wajib diisi",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email harus berupa alamat email yang valid",
    "string.empty": "Email tidak boleh kosong",
    "any.required": "Email wajib diisi",
  }),
  password: Joi.string().min(8).required().messages({
    "string.min": "Password harus memiliki panjang minimal 8 karakter",
    "string.empty": "Password tidak boleh kosong",
    "any.required": "Password wajib diisi",
  }),
});

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Validate user data
  const result: ValidationResult = userSchema.validate(req.body, {
    abortEarly: false, // Return all errors
  });

  // If errors, return error response
  if (result.error) {
    return res.status(422).json({
      message: "Data permintaan tidak valid",
      errors: result.error.details.map((err) => err.message),
    });
  }

  next();
};
