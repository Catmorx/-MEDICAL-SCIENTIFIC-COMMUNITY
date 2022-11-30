import { Schema, model } from "mongoose";

const Doctor = new Schema(
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
      type: String, // CC, TI, CE, PP - 123456789
      required: true,
      unique: true,
    },
    tarjetaProfesional: {
      type: String,
      required: true,
      unique: true,
    },
    graduacion: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Doctor", Doctor);
