import { Router } from "express";
import {
  createAgendar,
  deleteAgendar,
  getAllAgendar,
  updateAgendar,
  getAgendar,
} from "../controllers/agendar.controller.js";

const router = Router({ caseSensitive: true });

router
  .get("/agendar", getAllAgendar)
  .get("/agendar/:id", getAgendar)
  .post("/agendar", createAgendar)
  .patch("/agendar/:id", updateAgendar)
  .delete("/agendar/:id", deleteAgendar);

export default router;