import { Router } from "express";
import { openUrlController } from "../controllers/openUrlController.js";

const router = Router();

router.get("/urls/open/:shortUrl", openUrlController)

export default router;