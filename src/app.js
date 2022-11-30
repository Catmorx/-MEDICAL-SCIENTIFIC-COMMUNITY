// const express = require('express'); // con sintaxis antigua
import express from "express"; // con sintaxis nueva EcmaScript 6
import { connection } from "./database.js";
import config from "./config.js"

const app = express();

app.set("port", config.port)

connection();

app.get("/", (req, res) => {
    res.send("hello world");
});

export default app