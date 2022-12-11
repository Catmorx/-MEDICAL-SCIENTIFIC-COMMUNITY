import Medicamentos from "../models/Medicamentos.js";
import {
  findAll,
  create,
  findById,
  updateById,
  deleteById,
} from "./../services/medicamentos.services.js";


export const getAllMedicamentos = async (req, res) => {
  const Medicamentos = await findAll();
  res.json(Medicamentos);
};

export const getMedicamentos = async (req, res) => {
  const { id } = req.params;
  const medicamentos = await findById(id);
  res.status(200).json(medicamentos);
};

export const createMedicamentos = async (req, res) => {
  const { lote, nombreMedicamento, laboratorio, concentracion, formaFarmaceutica, fechaCaducidad, autorizacionRequerida } = req.body;
  const medicamentos = await create({
    lote,
    nombreMedicamento,
    laboratorio,
    concentracion,
    formaFarmaceutica,
    fechaCaducidad,
    autorizacionRequerida
  });
  res.status(201).json(medicamentos);
};

export const updateMedicamentos = async (req, res) => {
  const { id } = req.params;
  const { lote, nombreMedicamento, laboratorio, concentracion, formaFarmaceutica, fechaCaducidad, autorizacionRequerida } = req.body;
  const response = await updateById(id, {
    lote,
    nombreMedicamento,
    laboratorio,
    concentracion,
    formaFarmaceutica,
    fechaCaducidad,
    autorizacionRequerida
  });
  res.status(200).json({ message: `Su medicamento${response ? "" : " no"} fue actualizado` });
};

export const deleteMedicamentos = async (req, res) => {
  const { id } = req.params;
  await deleteById(id);
  res.sendStatus(204);
};
