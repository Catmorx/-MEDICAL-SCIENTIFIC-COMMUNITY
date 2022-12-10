import { Router } from "express";
import {
  createMensaje,
  deleteMensaje,
  getAllMensaje,
  updateMensaje,
  getMensaje,
} from "../controllers/mensaje.controller.js";

const router = Router({ caseSensitive: true });

router
  .get("/mensaje", getAllMensaje)
  .get("/mensaje/:id", getMensaje)
  .post("/mensaje", createMensaje)
  .patch("/mensaje/:id", updateMensaje)
  .delete("/mensaje/:id", deleteMensaje);

export default router;