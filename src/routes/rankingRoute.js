import { Router } from "express";
import { getRankingCrontroller } from "../controllers/getRankingController.js";

const router = Router();

router.get("/ranking", getRankingCrontroller)

export default router;