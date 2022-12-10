import { Router } from "express";

import {
    getAllHistoria,
    getHistoria,
    createHistoria,
    updateHistoria,
    deleteHistoria,
} from "../controllers/historia.controller.js";

const router = Router({ caseSensitive: true });

router
    .get("/historia", getAllHistoria)
    .get("/historia/:id", getHistoria)
    .post("/historia", createHistoria)
    .patch("/historia/:id", updateHistoria)
    .delete("/historia/:id", deleteHistoria);

export default router;