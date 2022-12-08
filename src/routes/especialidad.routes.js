import { Router } from "express";
import {
  getAllEspecialidad,
  getEspecialidad,
  createEspecialidad,
  updateEspecialidad,
  deleteEspecialidad,
} from "../controllers/especialidad.controller.js";

const router = Router({ caseSensitive: true });

router
  .get("/especialidad", getAllEspecialidad)
  .get("/especialidad/:id", getEspecialidad)
  .post("/especialidad", createEspecialidad)
  .patch("/especialidad/:id", updateEspecialidad)
  .delete("/especialidad/:id", deleteEspecialidad);

export default router;