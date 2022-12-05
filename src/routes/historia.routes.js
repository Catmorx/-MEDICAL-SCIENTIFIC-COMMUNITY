import { Router } from "express";

import {
    createHistoria,
    deleteHistoria,
    getAllHistoria,
    getHistoria,
    updateHistoria,
} from "../controllers/historia.controller"

const router = Router({ caseSensitive: true });

router
    .get("historia", getAllHistoria)
    .get("historia/:id", getHistoria)
    .post("historia", createHistoria)
    .patch("historia/:id", updateHistoria)
    .delete("historia/:id", deleteHistoria);

export default router;