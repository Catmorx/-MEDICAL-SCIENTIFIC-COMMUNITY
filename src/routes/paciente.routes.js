import { Router } from "express";

import {
    getAllPaciente,
    getPaciente,
    updatePaciente,
    createPaciente,
    deletePaciente,
} from "../controllers/paciente.controller.js";

const router = Router({ caseSensitive: true });

router
    .get("/paciente", getAllPaciente)
    .get("/paciente/:id", getPaciente)
    .post("/paciente", createPaciente)
    .patch("/paciente/:id", updatePaciente)
    .delete("/paciente/:id", deletePaciente);

export default router;