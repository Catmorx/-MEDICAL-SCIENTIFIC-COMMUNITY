export const getAllAgendar = (req, res) => {
    res.send("hello world from Agendar get");
  };
  
  export const getAgendar = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  
  export const createAgendar = (req, res) => {
    const {fecha, estado } = req.body;
    res.send({ fecha, estado });
  };
  
  export const updateAgendar = (req, res) => {
    const { id } = req.params;
    const { fecha, estado } = req.body;
    res.send({ id, fecha, estado });
  };
  
  export const deleteAgendar = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  