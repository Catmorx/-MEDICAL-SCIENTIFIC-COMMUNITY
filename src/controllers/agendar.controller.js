import {
  findAll,
  create,
  findById,
  updateById,
  deleteById,
} from "./../services/agendar.services.js";

export const getAllAgendar = async (req, res) => {
  const agendar = await findAll();
  res.json(agendar);
};

export const getAgendar = async (req, res) => {
  const { id } = req.params;
  const agendar = await findById(id);
  res.status(200).json(agendar);
};

export const createAgendar = async (req, res) => {
  const { fecha, hora, usuario, doctor } = req.body;
  const agendar = await create(fecha, hora, usuario, doctor);
  if (agendar) res.status(201).json({ message: "Cita agenda con exito" });
};

export const updateAgendar = async (req, res) => {
  const { id } = req.params;
  const { fecha, hora, estado, usuario, doctor } = req.body;
  const response = await updateById(id, {
    fecha,
    hora,
    estado,
    usuario,
    doctor
  });
  res
    .status(200)
    .json({ message: `La agenda ${response ? "" : "no"} fue actualizada` });
};

export const deleteAgendar = async (req, res) => {
  const { id } = req.params;
  await deleteById(id);
  res.sendStatus(204);
};
