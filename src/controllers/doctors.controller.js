export const getAllDoctors = (req, res) => {
    res.send("hello world from doctors get");
};

export const getDoctor = (req, res) => {
    const { id } = req.params;
    res.send({ id });
};

export const createDoctor = (req, res) => {
    const { nombre, apellido, documento, tarjetaProfesional, graduacion } = req.body;
    res.send({ nombre, apellido, documento, tarjetaProfesional, graduacion });
};

export const updateDoctor = (req, res) => {
    const { id, nombre, apellido, documento, tarjetaProfesional, graduacion } = req.body;
    res.send({ id, nombre, apellido, documento, tarjetaProfesional, graduacion });
};

export const deleteDoctor = (req, res) => {
    const { id } = req.params;
    res.send({ id });
};
