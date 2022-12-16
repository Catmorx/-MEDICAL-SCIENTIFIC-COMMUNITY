import  bcrypt from "bcrypt";
import {
    findAll,
    create,
    findById,
    updateById,
    deleteById
} from "../services/user.services.js";

export const getAllUser = async (req, res) => {
    const user = await findAll();
    res.json(user);
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    const User = await findById(id);
    res.status(200).json(User);
};

export const createUser = async (req, res) => {
    const { usuario, contraseña } = req.body;
    const salt = await bcrypt.genSalt(10);
    const contraEncrip = await bcrypt.hash(contraseña, salt);
    const user = await create({
        usuario,
        contraseña: contraEncrip,
    });
    res.status(201).json(user);
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { usuario, contraseña } = req.body;
    const response = await updateById(id, {
        usuario,
        contraseña,
    });
    res.status(200).json({message: `El usuario${response ? "" : " no"} fue actualizado`});
};
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    await deleteById(id);
    res.sendStatus(204);
};