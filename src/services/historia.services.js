import Historia from "../models/Historia.js";

export const findAll = async () =>{
    return await Historia.find();
}

export const findById = async (id) =>{
    return await Historia.findById(id);
}

export const create = async (historia) =>{
    const newHistoria = await new Historia(historia).save();
    return newHistoria;
}

export const updateById = async (_id, data) =>{
    const historia = await Historia.findByIdAndUpdate(_id,data);
    if(historia) return true;
    return false;
}

export const deleteById = async (_id) =>{
    await Historia.findByIdAndDelete(_id);
}
