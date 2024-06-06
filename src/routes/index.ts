import { Router } from "express";
import homeRouter from "./homeRoutes";
import usersRouter from "./userRoutes";

// Create a new Router instance
const router = Router();

// Mount the routers
router.use("/", homeRouter);
router.use("/users", usersRouter);

// Middleware untuk menangani kesalahan server

export default router;
