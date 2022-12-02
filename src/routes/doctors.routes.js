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
  .get("/example", getAllDoctors)
  .get("/example/:id", getDoctor)
  .post("/example", createDoctor)
  .patch("/example/:id", updateDoctor)
  .delete("/example/:id", deleteDoctor);

export default router;
