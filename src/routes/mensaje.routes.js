import { Router } from "express";
import {
  createMensaje,
  deleteMensaje,
  getAllMensaje,
  updateMensaje,
  getMensaje,
} from "../controllers/Mensaje.controller";

const router = Router({ caseSensitive: true });

router
  .get("/Mensaje", getAllMensaje)
  .get("/Mensaje/:id", getMensaje)
  .post("/Mensaje", createMensaje)
  .patch("/Mensaje/:id", updateMensaje)
  .delete("/Mensaje/:id", deleteMensaje);

export default router;