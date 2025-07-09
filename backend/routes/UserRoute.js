import express from "express";
import {
  getUsers,
  getUserById,
  CreateUser,
  UpdateUser,
  deleteUser,
} from "../controllers/Users.js";
import {verifyUser, adminOnly} from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getUsers);
router.get("/users/:id",verifyUser, adminOnly, getUserById);
router.post("/users", verifyUser, adminOnly, CreateUser);
router.patch("/users/:id",verifyUser, adminOnly, UpdateUser);
router.delete("/users/:id",verifyUser, adminOnly, deleteUser);

export default router;
