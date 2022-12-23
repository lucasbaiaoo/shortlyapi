import { Router } from "express";
import { deleteUrlController } from "../controllers/deleteUrlController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.delete("/urls/:id", authMiddleware, deleteUrlController)

export default router;