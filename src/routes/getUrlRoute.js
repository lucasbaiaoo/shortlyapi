import { Router } from "express";
import { getUrlController } from "../controllers/getUrlController.js";

const router = Router();

router.get("/urls/:id", getUrlController)

export default router;