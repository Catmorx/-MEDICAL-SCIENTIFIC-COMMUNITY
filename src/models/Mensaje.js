import { Schema, model } from "mongoose";

const Mensaje = new Schema(
    {
        descripcion: {
            type: String,
            required: true
        },
        score: {
            type: Number, 
            required: true
        },
    },
    {
        timestamps: true
    }
)

export default model("Mensaje", Mensaje);