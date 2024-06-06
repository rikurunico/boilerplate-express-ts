import { Response } from "express";

export const sendSuccessResponse = <T>(
  res: Response,
  data: T,
  statusCode: number = 200
): void => {
  res.status(statusCode).json(data);
};

export const sendErrorResponse = (
  res: Response,
  message: string,
  statusCode: number = 400
): void => {
  res.status(statusCode).json({ message });
};
