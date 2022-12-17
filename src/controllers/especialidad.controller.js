import {
  findAll,
  findById,
  create,
  updateById,
  deleteById
} from "./../services/especialidad.services.js";

export const getAllEspecialidad = async(req, res) => {
    const especialidades = await findAll();
    res.json(especialidades);
  };
  
  export const getEspecialidad = async (req, res) => {
    const { id } = req.params;
    const especialidad = await findById(id);
    res.status(200).json(especialidad);
  };
  
  export const createEspecialidad = async (req, res) => {
    const {nombre, descripcion} = req.body;
    const especialidad = await create({
      nombre,
      descripcion,
    });
    res.status(201).json(especialidad);
  };
  
  export const updateEspecialidad = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const response = await updateById(id, {
      nombre,
      descripcion,
    });
    res.status(200).json({message: `La especialidad${response ? "": " no"} fue actualizado`});
  };
  
  export const deleteEspecialidad = async (req, res) => {
    const { id } = req.params;
    await deleteById(id);
    res.sendStatus(204);
  };
  