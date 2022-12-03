export const getAllEspecialidad = (req, res) => {
    res.send("hello world from Especialidad get");
  };
  
  export const getEspecialidad = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  
  export const createEspecialidad = (req, res) => {
    const {nombre,description } = req.body;
    res.send({ nombre,description });
  };
  
  export const updateEspecialidad = (req, res) => {
    const { id } = req.params;
    const { nombre,description } = req.body;
    res.send({ id, nombre,description});
  };
  
  export const deleteEspecialidad = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  