import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserByIdController,
  getUsersController,
  updateUserController,
} from "../controller/userController";
import { validateUser } from "../utils/validator/usersValidator";

const router = Router();

router.get("/", getUsersController);

router.get("/:id", getUserByIdController);

router.post("/", validateUser, createUserController);

router.put("/:id", validateUser, updateUserController);

router.delete("/:id", deleteUserController);

export default router;
