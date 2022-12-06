export const getAllRegistro = (req, res) => {
    res.send("fxkj");
};

export const getRegistro = (req, res) => {
    const { id } = req.params;
    res.send({ id });
};

export const createRegistro = (req, res) => {
    const { nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad } = req.body;
    res.send({ nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad });
};

export const updateRegistro = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad } = req.body;
    res.send({ id, nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad });
};
export const deleteRegistro = (req, res) => {
    const { id } = req.params;
    res.send({ id })
};