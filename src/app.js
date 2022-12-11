// const express = require('express'); // con sintaxis antigua
import express from "express"; // con sintaxis nueva EcmaScript 6
import { connection } from "./database.js";
import config from "./config.js";

import doctorsRoutes from "./routes/doctors.routes.js";
import historiaRoutes from "./routes/historia.routes.js";
import registroRoutes from "./routes/registro.routes.js";
import especialidadRoutes from "./routes/especialidad.routes.js";
import mensajeRoutes from "./routes/mensaje.routes.js";
import agendarRoutes from "./routes/agendar.routes.js";





import medicamentoRoutes from "./routes/medicamentos.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", config.port);

connection();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(doctorsRoutes);
app.use(registroRoutes);
app.use(historiaRoutes);
app.use(especialidadRoutes);
app.use(mensajeRoutes);
app.use(agendarRoutes);





app.use(medicamentoRoutes);

export default app;
