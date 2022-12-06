import { Schema, model } from "mongoose";

const medicamentos = new Schema(
    {
        lote: {
            type: Number,
            required: true,
            unique: true
        },
        nombreMedicamento: {
            type: String,
            required: true
        },
        laboratorio: {
            type: String,
            required: true
        },
        concentracion: {
            type: String,
            required: true
        },
        formaFarmaceutica:{
            type: String,
            required: true
        },
        fechaCaducidad: {
            type: Date,
            required: true
        },
        autoizacionRequerida:{
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export default model("medicamentos", medicamentos);