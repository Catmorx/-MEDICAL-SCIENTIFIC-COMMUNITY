import { Router } from "express";

import {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/user.controller.js"

const router = Router({ caseSensitive: true });

router
    .get("/user", getAllUser)
    .get("/user/:id", getUser)
    .post("/user", createUser)
    .patch("/user/:id", updateUser)
    .delete("/user/:id", deleteUser);

export default router;