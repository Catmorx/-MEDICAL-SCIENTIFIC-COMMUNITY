import Doctor from "./../models/Doctor.js";

export const findAll = async () => {
  return await Doctor.find();
};

export const findById = async (id) => {
  return await Doctor.findById(id);
};

export const create = async (doctor) => {
  const newDoctor = await new Doctor(doctor).save();
  return newDoctor;
};

export const updateById = async (_id, data) => {
  const doctor = await Doctor.findByIdAndUpdate(_id, data);
  if (doctor) return true;
  return false;
};

export const deleteById = async (_id) => {
  await Doctor.findByIdAndDelete(_id);
};
