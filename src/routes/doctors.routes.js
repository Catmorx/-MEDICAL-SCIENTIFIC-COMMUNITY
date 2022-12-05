import { Router } from "express";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctors,
  updateDoctor,
  getDoctor,
} from "../controllers/doctors.controller.js";

const router = Router({ caseSensitive: true });

router
  .get("/doctor", getAllDoctors)
  .get("/doctor/:id", getDoctor)
  .post("/doctor", createDoctor)
  .patch("/doctor/:id", updateDoctor)
  .delete("/doctor/:id", deleteDoctor);

export default router;
