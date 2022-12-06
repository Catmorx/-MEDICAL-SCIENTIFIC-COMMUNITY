export const getAllHistoria = (req, res) => {
    res.send("hola");
};

export const getHistoria = (req, res) => {
    const { id } = req.params;
    res.send({ id });
};

export const createHistoria = (req, res) => {
    const { codigoHistoria, antecedentes, observaciones, alergias, signos, diagnostico } = req.body;
    res.send({ codigoHistoria, antecedentes, observaciones, alergias, signos, diagnostico });
};

export const updateHistoria = (req, res) => {
    const { id } = req.params;
    const { codigoHistoria, antecedentes, observaciones, alergias, signos, diagnostico } = req.body;
    res.send({ id, codigoHistoria, antecedentes, observaciones, alergias, signos, diagnostico });
};

export const deleteHistoria = (req, res) => {
    const { id } = req.params;
    res.send({ id });
};