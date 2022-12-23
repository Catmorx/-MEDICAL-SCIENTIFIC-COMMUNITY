import Agendar from "../models/Agendar.js";
import Paciente from "../models/Paciente.js";
import Doctor from "../models/Doctor.js";

export const findAll = async () => {
  return await Agendar.find().populate(["doctor", "paciente"]);
};

export const findById = async (id) => {
  return await Agendar.findById(id).populate(["doctor", "paciente"]);
};

export const create = async (fecha, hora, usuario, doctorName) => {
  const doctor = await Doctor.findOne({ nombre: doctorName });
  const paciente = await Paciente.findOne({ usuario: usuario });
  const newAgendar = await new Agendar({
    fecha,
    hora,
    paciente: paciente._id,
    doctor: doctor._id,
  }).save();
  return newAgendar;
};

export const updateById = async (_id, data) => {
  const doctor = await Doctor.findOne({ nombre: data.doctor });
  const paciente = await Paciente.findOne({ usuario: data.usuario });
  const agendar = await Agendar.findByIdAndUpdate(_id, {fecha: data.fecha, hora: data.hora, estado: data.estado,paciente: paciente._id, doctor: doctor._id,});
  
  if (agendar) return true;
  return false;
};

export const deleteById = async (_id) => {
  await Agendar.findByIdAndDelete(_id);
};
