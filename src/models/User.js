import { Schema, model } from "mongoose";

const User = new Schema(
    {
        usuario: {
            type: String,
            required: true,
            unique: true
        },
        contraseña: {
            type: String,
            required: true
        },
       
    },
    {
        timestamps: true
    }
)

export default model("User", User);