import { Request, Response } from "express";
import {
  getUsers,
  getUser,
  User,
  createUser,
  updateUser,
  deleteUser,
} from "../models/userModel";
import {
  sendSuccessResponse,
  sendErrorResponse,
} from "../utils/responseHelper";

export const getUsersController = (req: Request, res: Response): void => {
  const users: User[] = getUsers();
  sendSuccessResponse(res, users);
};

export const getUserByIdController = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const user: User | undefined = getUser(id);
  if (user) {
    sendSuccessResponse(res, user);
  } else {
    sendErrorResponse(res, "User not found", 404);
  }
};

export const createUserController = (req: Request, res: Response): void => {
  const user: User = req.body;
  createUser(user);
  sendSuccessResponse(res, user, 201);
};

export const updateUserController = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  updateUser(id, req.body);
  sendSuccessResponse(res, {}, 200);
};

export const deleteUserController = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  deleteUser(id);
  sendSuccessResponse(res, {}, 204);
};
