import Agendar from "../models/Agendar.js";
import Paciente from "../models/Paciente.js";
import Doctor from "../models/Doctor.js";

export const findAll = async () =>{
    return await Agendar.find();
};

export const findById = async (id) =>{
    return await Agendar.findById(id);
};

export const create = async({fecha, usuario, doctorName}) =>{
    const doctor = await Doctor.findOne({"nombre": doctorName}) 
    const paciente = await Paciente.findOne({"usuario": usuario})
    const newAgendar = await new Agendar({fecha, paciente:paciente._id, doctor:doctor._id}).save();
    return newAgendar;
}; 

export const updateById = async(_id, data) =>{
    const agendar = await Agendar.findByIdAndUpdate(_id, data);
    if(agendar) return true;
    return false;
};

export const deleteById = async(_id) =>{
    await Agendar.findByIdAndDelete(_id);
};