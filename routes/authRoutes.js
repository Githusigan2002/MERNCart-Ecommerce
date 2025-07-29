import express from "express";
import { registerUser,loginUser } from "../controllers/authController.js";

const router = express.Router();

router.get("/api/auth/register", registerUser);
router.post("/api/auth/login", loginUser);

export default router;
