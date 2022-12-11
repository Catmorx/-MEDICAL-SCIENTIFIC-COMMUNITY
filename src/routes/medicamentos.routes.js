import { Router } from "express";
import {
  createMedicamentos,
  deleteMedicamentos,
  getAllMedicamentos,
  updateMedicamentos,
  getMedicamentos,
} from "../controllers/medicamentos.controller.js";

const router = Router({ caseSensitive: true });

router
  .get("/medicamentos", getAllMedicamentos)
  .get("/medicamentos/:id", getMedicamentos)
  .post("/medicamentos", createMedicamentos)
  .patch("/medicamentos/:id", updateMedicamentos)
  .delete("/medicamentos/:id", deleteMedicamentos);

export default router;