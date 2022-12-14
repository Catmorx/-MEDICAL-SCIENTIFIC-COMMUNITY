
import {
    findAll,
    create,
    findById,
    updateById,
    deleteById
} from "./../services/registro.services.js";

export const getAllRegistro = async (req, res) => {
    const registro = await findAll();
    res.json(registro);
};

export const getRegistro = async (req, res) => {
    const { id } = req.params;
    const Registro = await findById(id);
    res.status(200).json(Registro);
};

export const createRegistro = async (req, res) => {
    const { nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad } = req.body;
    const salt = await bcrypt.genSalt(10);
    const contraEncrip = await bcrypt.hash(contraseña, salt);
    const registro = await create({
        nombre, 
        apellido,
        documento,
        correo,
        contacto,
        direccion,
        fechaDeNacimiento,
        genero,
        usuario,
        contraseña: contraEncrip,
        entidad,
    });
    res.status(201).json(registro);
};

export const updateRegistro = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad } = req.body;
    const response = await updateById(id, {
        nombre,
        apellido,
        documento,
        correo,
        contacto,
        direccion,
        fechaDeNacimiento,
        genero,
        usuario,
        contraseña,
        entidad,
    });
    res.status(200).json({message: `El registro${response ? "" : " no"} fue actualizado`});
};
export const deleteRegistro = async (req, res) => {
    const { id } = req.params;
    await deleteById(id);
    res.sendStatus(204);
};