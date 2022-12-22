import { Router } from "express";
import { signInController } from "../controllers/signInController.js";
import { signInMiddleware } from "../middlewares/signInMiddleware.js";

const router = Router();

router.post("/signin", signInMiddleware, signInController)

export default router;