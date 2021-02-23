import { Router } from "express";
import * as sessionRepository from "./repositories/session-repository";

const router = Router();

router.get("/session", sessionRepository.get);
router.post("/session", sessionRepository.add);

export default router;
