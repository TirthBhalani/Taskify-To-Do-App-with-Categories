import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRouter = express.Router();

taskRouter.get("/", authMiddleware, getTasks);
taskRouter.post("/", authMiddleware, createTask);
taskRouter.patch("/:id", authMiddleware, updateTask);
taskRouter.delete("/:id", authMiddleware, deleteTask);

export default taskRouter;
 