import Paciente from "./../models/Paciente.js";

export const findAll = async () => {
  return await Paciente.find();
};

export const findById = async (id) => {
  return await Paciente.findById(id);
};

export const create = async (paciente) => {
  const newPaciente = await new Paciente(paciente).save();
  return newPaciente;
};

export const updateById = async (_id, data) => {
  const paciente = await Paciente.findByIdAndUpdate(_id, data);
  if (paciente) return true;
  return false;
};

export const deleteById = async (_id) => {
  await Paciente.findByIdAndDelete(_id);
};
