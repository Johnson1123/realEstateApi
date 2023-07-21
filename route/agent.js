import express from "express";
import { addAgent } from "../controller/agent";

const router = express.Router();

router.post("/add-agent", addAgent);

export default router;
