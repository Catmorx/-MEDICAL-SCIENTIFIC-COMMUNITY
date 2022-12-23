import Medicamentos from "../models/Medicamentos.js";

export const findAll = async () => {
  return await Medicamentos.find();
};

export const findById = async (id) => {
  return await Medicamentos.findById(id);
};

export const create = async (medicamentos) => {
  const newMedicamentos = await new Medicamentos(medicamentos).save();
  return newMedicamentos;
};

export const updateById = async (_id, data) => {
  const medicamentos = await Medicamentos.findByIdAndUpdate(_id, data);
  if (medicamentos) return true;
  return false;
};

export const deleteById = async (_id) => {
  await Medicamentos.findByIdAndDelete(_id);
};