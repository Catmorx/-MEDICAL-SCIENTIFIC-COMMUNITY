import User from "../models/User.js";

export const findAll = async () =>{
    return await User.find();
}

export const findById = async (id) => {
    return await User.findById(id);
}

export const create = async (user) =>{
    const newUser = await new User(user).save();
    return newUser;
}

export const updateById = async (_id, data) => {
    const user = await User.findByIdAndUpdate(_id, data);
    if(user) return true;
    return false;
}

export const deleteById = async (_id) =>{
    await User.findByIdAndDelete(_id);
}