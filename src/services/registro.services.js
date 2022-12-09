import Registro from "./../models/Registro.js";

export const findAll = async () =>{
    return await Registro.find();
}

export const findById = async (id) => {
    return await Registro.findById(id);
}

export const create = async (registro) =>{
    const newRegistro = await new Registro(registro).save();
    return newRegistro;
}

export const updateById = async (_id, data) => {
    const registro = await Registro.findByIdAndUpdate(_id, data);
    if(registro) return true;
    return false;
}

export const deleteById = async (_id) =>{
    await Registro.findByIdAndDelete(_id);
}