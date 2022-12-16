import bcrypt from "bcrypt";
import {
  findAll,
  create,
  findById,
  updateById,
  deleteById,
} from "../services/paciente.services.js";

export const getAllPaciente = async (req, res) => {
  const paciente = await findAll();
  res.json(paciente);
};

export const getPaciente = async (req, res) => {
  const { id } = req.params;
  const Paciente = await findById(id);
  res.status(200).json(Paciente);
};

export const createPaciente = async (req, res) => {
  const {
    nombre,
    apellido,
    documento,
    correo,
    contacto,
    direccion,
    fechaDeNacimiento,
    genero,
    usuario,
    clave,
    entidad,
  } = req.body;
  const salt = await bcrypt.genSalt(10);
  const contraEncrip = await bcrypt.hash(clave, salt);
  const paciente = await create({
    nombre,
    apellido,
    documento,
    correo,
    contacto,
    direccion,
    fechaDeNacimiento,
    genero,
    usuario,
    clave: contraEncrip,
    entidad,
  });
  res.status(201).json(paciente);
};

export const updatePaciente = async (req, res) => {
  const { id } = req.params;
  const {
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
  } = req.body;
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
  res
    .status(200)
    .json({ message: `El paciente${response ? "" : " no"} fue actualizado` });
};
export const deletePaciente = async (req, res) => {
  const { id } = req.params;
  await deleteById(id);
  res.sendStatus(204);
};
