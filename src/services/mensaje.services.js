import Mensaje from "./../models/Mensaje.js";

export const findAll = async () =>{
    return await Mensaje.find();
}

export const findById = async (id) => {
    return await Mensaje.findById(id);
}

export const create = async (mensaje) =>{
    const newMensaje = await new Mensaje(mensaje).save();
    return newMensaje;
}

export const updateById = async (_id, data) => {
    const mensaje = await Mensaje.findByIdAndUpdate(_id, data);
    if(mensaje) return true;
    return false;
}

export const deleteById = async (_id) =>{
    await Mensaje.findByIdAndDelete(_id);
}