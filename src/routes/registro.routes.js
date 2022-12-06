import { Router } from "express";

import {
    getAllRegistro,
    getRegistro,
    updateRegistro,
    createRegistro,
    deleteRegistro,
} from "../controllers/registro.controller.js";

const router = Router({ caseSensitive: true });

router
    .get("/registro", getAllRegistro)
    .get("/registro/:id", getRegistro)
    .post("/registro", createRegistro)
    .patch("/registro/:id", updateRegistro)
    .delete("/registro/:id", deleteRegistro);

export default router;