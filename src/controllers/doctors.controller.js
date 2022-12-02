export const getAllDoctors = (req, res) => {
  res.send("hello world from doctors get");
};

export const getDoctor = (req, res) => {
  const { id } = req.params;
  res.send({ id });
};

export const createDoctor = (req, res) => {
  const { name, lastname, email, password } = req.body;
  res.send({ name, lastname, email, password });
};

export const updateDoctor = (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, password } = req.body;
  res.send({ id, name, lastname, email, password });
};

export const deleteDoctor = (req, res) => {
  const { id } = req.params;
  res.send({ id });
};
