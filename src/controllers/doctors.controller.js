import {
  findAll,
  create,
  findById,
  updateById,
  deleteById,
} from "./../services/doctor.services.js";

export const getAllDoctors = async (req, res) => {
  const doctors = await findAll();
  res.json(doctors);
};

export const getDoctor = async (req, res) => {
  const { id } = req.params;
  const doctor = await findById(id);
  res.status(200).json(doctor);
};

export const createDoctor = async (req, res) => {
  const { nombre, apellido, documento, tarjetaProfesional, graduacion, especialidad } =
    req.body;
  const doctor = await create({
    nombre,
    apellido,
    documento,
    tarjetaProfesional,
    graduacion,
    especialidad
  });
  res.status(201).json(doctor);
};

export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, documento, tarjetaProfesional, graduacion } =
    req.body;
  const response = await updateById(id, {
    nombre,
    apellido,
    documento,
    tarjetaProfesional,
    graduacion,
  });
  res
    .status(200)
    .json({ message: `El doctor${response ? "" : " no"} fue actualizado` });
};

export const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  await deleteById(id);
  res.sendStatus(204);
};
