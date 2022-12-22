// const express = require('express'); // con sintaxis antigua
import express from "express"; // con sintaxis nueva EcmaScript 6
import cors from "cors"
import { connection } from "./database.js";
import config from "./config.js";

import doctorsRoutes from "./routes/doctors.routes.js";
import historiaRoutes from "./routes/historia.routes.js";
import pacienteRoutes from "./routes/paciente.routes.js";
import especialidadRoutes from "./routes/especialidad.routes.js";
import mensajeRoutes from "./routes/mensaje.routes.js";
import agendarRoutes from "./routes/agendar.routes.js";
import authRoutes from "./routes/auth.routes.js";
import medicamentoRoutes from "./routes/medicamentos.routes.js";

const app = express();
app.use(
  cors({
    origin: config.frontUrl,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("port", config.port);

connection();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(doctorsRoutes);
app.use(pacienteRoutes);
app.use(historiaRoutes);
app.use(especialidadRoutes);
app.use(mensajeRoutes);
app.use(agendarRoutes);
app.use(medicamentoRoutes);
app.use(authRoutes)

export default app;
