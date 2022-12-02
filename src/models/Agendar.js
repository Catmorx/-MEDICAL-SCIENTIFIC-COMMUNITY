import  {Schema, model} from "mongoose";

const Agendar = new Schema (
    {
        fecha: {
            type : Date,
            required : true
        },
        estado: {
            type : String,
            required : true
        },
    },
    {
        timestamps: true
    }
);

export default model("Agendar", Agendar);