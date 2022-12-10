import Especialidad from "./../models/Especialidad.js";

export const findAll = async () =>{
    return await Especialidad.find();
}

export const findById = async (id) => {
    return await Especialidad.findById(id);
}

export const create = async (especialidad) =>{
    const newEspecilidad = await new Especialidad(especialidad).save();
    return newEspecilidad;
}

export const updateById = async (_id, data) => {
    const especialidad = await Especialidad.findByIdAndUpdate(_id, data);
    if(especialidad) return true;
    return false;
}

export const deleteById = async (_id) =>{
    await Especialidad.findByIdAndDelete(_id);
}
