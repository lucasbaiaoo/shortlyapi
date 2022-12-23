import { Router } from "express";
import { getUserUrlsController } from "../controllers/getUserUrlsController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/users/me", authMiddleware, getUserUrlsController)

export default router;