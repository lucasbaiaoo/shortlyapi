import { Router } from "express";
import { shortenUrlsController } from "../controllers/shortenUrlsController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { urlMiddleware } from "../middlewares/urlMiddleware.js"

const router = Router();

router.post("/urls/shorten", authMiddleware, urlMiddleware, shortenUrlsController)

export default router;