import { Router } from "express";
import { updateDoctor } from "../controllers/doctors.controller";

import {
    getAllRegistro,
    getRegistro,
    updateRegistro,
    createRegistro,
    deleteRegistro,
} from "../controllers/registro.controller";

const router = Router({ caseSensitive: true });

router
    .get("", getAllRegistro)
    .get("", getRegistro)
    .post("", createRegistro)
    .patch("", updateDoctor)
    .delete("", deleteRegistro);

export default router;