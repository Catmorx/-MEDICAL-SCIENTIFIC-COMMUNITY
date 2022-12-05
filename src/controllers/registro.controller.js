export const getAllRegistro = (req, res) => {
    res.send("");
};

export const getRegistro = (req, res) => {
    const { id } = req.params;
    res.send({ id });
};

export const createRegistro = (req, res) => {
    const { nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad } = req.params
    res.send({ nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad })
};

export const updateRegistro = (req, res) => {
    const { id, nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad } = req.params
    res.send({ id, nombre, apellido, documento, correo, contacto, direccion, fechaDeNacimiento, genero, usuario, contraseña, entidad })
    res.send({ id });
};
export const deleteRegistro = (req, res) => {
    const { id } = req.params;
    res.send({ id })
};