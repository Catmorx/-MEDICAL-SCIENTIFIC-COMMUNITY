import Agendar from "./../models/Agendar.js";

export const findAll = async () =>{
    return await Agendar.find();
};

export const findById = async (id) =>{
    return await Agendar.findById(id);
};

export const create = async(agendar) =>{
    const newAgendar = await new Agendar(agendar).save();
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