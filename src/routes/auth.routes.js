import express from "express";
import login from "../controllers/login.controller.js";
import { createPaciente } from "../controllers/paciente.controller";

const loginRouter = express.Router();

loginRouter.post("/login", login);
loginRouter.post("/register", createPaciente);

export default loginRouter;
