import { Router } from "express";
import {
  createespecialidad,
  deleteespecialidad,
  getAllespecialidad,
  updateespecialidad,
  getespecialidad,
} from "../controllers/especialidad.controller.js";

const router = Router({ caseSensitive: true });

router
  .get("/especialidad", getAllespecialidad)
  .get("/especialidad/:id", getespecialidad)
  .post("/especialidad", createespecialidad)
  .patch("/especialidad/:id", updateespecialidad)
  .delete("/especialidad/:id", deleteespecialidad);

export default router;