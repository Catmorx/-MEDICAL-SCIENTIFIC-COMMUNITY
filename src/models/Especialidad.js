import { Schema, model } from "mongoose";

const Especialidad = new Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export default model("Especialidad", Especialidad);