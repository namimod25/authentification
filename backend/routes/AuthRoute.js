import express from "express";
import { LogOut, Login, Me } from "../controllers/Auth.js";
const router = express.Router();

router.post('/login', Login);
router.get('/logout', LogOut);
router.get('/me', Me);

export default router;
