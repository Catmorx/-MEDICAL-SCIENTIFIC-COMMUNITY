import { Schema, model } from "mongoose";

const Historia = new Schema(
    {
        codigoHistoria: {
            type: Number,
            required: true,
            unique: true
        },
        antedecentes: {
            type: String,
            required: true
        },
        observaciones: {
            type: String,
            required: true
        },
        alergias: {
            type: String,
            required: true
        },
        signos:{
            type: String,
            required: true
        },
        diagnostico: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export default model("Historia", Historia);