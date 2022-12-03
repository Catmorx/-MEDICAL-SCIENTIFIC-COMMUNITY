import { Router } from "express";
import {
  createAgendar,
  deleteAgendar,
  getAllAgendar,
  updateAgendar,
  getAgendar,
} from "../controllers/Agendar.controller.js";

const router = Router({ caseSensitive: true });

router
  .get("/Agendar", getAllAgendar)
  .get("/Agendar/:id", getAgendar)
  .post("/Agendar", createAgendar)
  .patch("/Agendar/:id", updateAgendar)
  .delete("/Agendar/:id", deleteAgendar);

export default router;