import  {Schema, model} from "mongoose";

const Agendar = new Schema (
    {
        fecha: {
            type : Date,
            required : true
        },
        estado: {
            type : String,
            required : true,
            default: "Creado",
        },
        doctor: {
            type: Schema.Types.ObjectId,
            ref: "Doctor"
        },
        paciente: {
            type: Schema.Types.ObjectId,
            ref: "Paciente"
        }   
    },
    {
        timestamps: true
    }  
);

export default model("Agendar", Agendar);