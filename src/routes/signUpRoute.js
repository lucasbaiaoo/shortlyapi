import { Router } from "express";
import { signUpController } from "../controllers/signUpController.js";
import { signUpMiddleware } from "../middlewares/signUpMiddleware.js";

const router = Router();

router.post("/signup", signUpMiddleware, signUpController)

export default router;
