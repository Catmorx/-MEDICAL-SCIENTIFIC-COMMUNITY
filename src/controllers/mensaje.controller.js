export const getAllMensaje = (req, res) => {
    res.send("hello world from Mensaje get");
  };
  
  export const getMensaje = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  
  export const createMensaje = (req, res) => {
    const { descripcion, score } = req.body;
    res.send({ descripcion, score });
  };
  
  export const updateMensaje = (req, res) => {
    const { id } = req.params;
    const { descripcion, score} = req.body;
    res.send({ descripcion, score});
  };
  
  export const deleteMensaje = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  