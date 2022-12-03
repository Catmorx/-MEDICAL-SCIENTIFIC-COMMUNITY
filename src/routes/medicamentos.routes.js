import { Router } from "express";
import {
  createMedicamentos,
  deleteMedicamentos,
  getAllMedicamentos,
  updateMedicamentos,
  getMedicamentos,
} from "../controllers/Medicamentos.controller";

const router = Router({ caseSensitive: true });

router
  .get("/Medicamentos", getAllMedicamentos)
  .get("/Medicamentos/:id", getMedicamentos)
  .post("/Medicamentos", createMedicamentos)
  .patch("/Medicamentos/:id", updateMedicamentos)
  .delete("/Medicamentos/:id", deleteMedicamentos);

export default router;