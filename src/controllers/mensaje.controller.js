
import {
  findAll,
  findById,
  create,
  updateById,
  deleteById
} from "./../services/mensaje.services.js";

export const getAllMensaje = async (req, res) => {
  const mensaje = await findAll();
  res.json(mensaje);
  };
  
  export const getMensaje = async (req, res) => {
    const { id } = req.params;
    const mensaje = await findById(id);
    res.status(200).json(mensaje);
  };
  
  export const createMensaje = async (req, res) => {
    const { descripcion, score } = req.body;
    const especialidad = await create({
      descripcion,
      score,
    });
    res.status(201).json(especialidad);
  };
  
  export const updateMensaje = async (req, res) => {
    const { id } = req.params;
    const { descripcion, score} = req.body;
    const response = await updateById(id, {
      descripcion,
      score,
    });
    res.status(200).json({message: `El mensaje${response ? "": " no"} fue actualizado`});
  };
  
  export const deleteMensaje = async (req, res) => {
    const { id } = req.params;
    await deleteById(id);
    res.sendStatus(204);
  };
  