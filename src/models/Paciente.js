import { Schema, model } from "mongoose";

const Paciente = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    documento: {
      type: String,
      required: true,
      unique: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    contacto: {
      type: Number,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    fechaDeNacimiento: {
      type: Date,
      required: true,
    },
    genero: {
      type: String,
      required: true,
    },
    usuario: {
      type: String,
      required: true,
      unique: true,
    },
    clave: {
      type: String,
      required: true,
    },
    entidad: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Paciente", Paciente);
