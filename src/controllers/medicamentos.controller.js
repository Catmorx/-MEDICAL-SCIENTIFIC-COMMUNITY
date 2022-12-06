export const getAllMedicamentos = (req, res) => {
    res.send("hello world from Medicamentos get");
  };
  
  export const getMedicamentos = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  
  export const createMedicamentos = (req, res) => {
    const { lote, nombreMedicamento, laboratorio, concentracion, formaFarmaceutica, fechaCaducidad, autorizacionRequerida } = req.body;
    res.send({ lote, nombreMedicamento, laboratorio, concentracion, formaFarmaceutica, fechaCaducidad, autorizacionRequerida });
  };
  
  export const updateMedicamentos = (req, res) => {
    const { id } = req.params;
    const { lote, nombreMedicamento, laboratorio, concentracion, formaFarmaceutica, fechaCaducidad, autorizacionRequerida} = req.body;
    res.send({ id,lote, nombreMedicamento, laboratorio, concentracion, formaFarmaceutica, fechaCaducidad, autorizacionRequerida});
  };
  
  export const deleteMedicamentos = (req, res) => {
    const { id } = req.params;
    res.send({ id });
  };
  