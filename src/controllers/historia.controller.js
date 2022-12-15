
import{
    findAll,
    findById,
    create,
    updateById,
    deleteById
} from "../services/historia.services.js"; 

export const getAllHistoria = async (req, res) => {
    const historias = await findAll();
    res.json(historias);
};

export const getHistoria = async (req, res) => {
    const { id } = req.params;
    const historia = await findById(id);
    res.status(200).json(historia);
};

export const createHistoria = async(req, res) => {
    const { codigoHistoria, antecedentes, observaciones, alergias, signos, diagnostico } = req.body;
    const historia = await create({
        codigoHistoria,
        antecedentes,
        observaciones,
        alergias,
        signos,
        diagnostico,
    });
    res.status(201).json(historia);
};

export const updateHistoria = async (req, res) => {
    const { id } = req.params;
    const { codigoHistoria, antecedentes, observaciones, alergias, signos, diagnostico } = req.body;
    const response = await updateById(id,{
        codigoHistoria,
        antecedentes,
        observaciones,
        alergias,
        signos,
        diagnostico,
    });
    res.status(200).json({message: `La historia ${response? "": "no"} fue actualizada`});
};

export const deleteHistoria = async(req, res) => {
    const { id } = req.params;
    await deleteById(id);
    res.sendStatus(204);
};