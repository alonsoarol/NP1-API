import { Vendedor } from "../models/vendedor.model.js";

export const getVendedores = async (req, res) => {
  const vendedores = await Vendedor.find();
  res.json(vendedores);
};

export const getVendedor = async (req, res) => {
  const vendedor = await Vendedor.buscarVendedorPorId(req.params.id);
  res.json(vendedor);
};

export const postVendedor = async (req, res) => {
  const { numero_vendedor, nombre, apellido, dni, telefono, direccion } =
    req.body;
  const vendedor = await Vendedor.findOne({ numero_vendedor });
  if (vendedor) {
    return res.send("El numero de vendedor ya existe");
  }

  const nuevoVendedor = new Vendedor({
    numero_vendedor,
    nombre,
    apellido,
    dni,
    telefono,
    direccion,
  });
  await nuevoVendedor.save();
  res.send("Vendedor registrado correctamente");
};

export const deleteVendedor = async (req, res) => {
  await Vendedor.deleteOne({ _id: req.params.id });
  res.send("Vendedor eliminado correctamente");
};

export const putVendedor = async (req, res) => {
  const { numero_vendedor, nombre, apellido, dni, telefono, direccion } =
    req.body;
  try {
    await Vendedor.findByIdAndUpdate(
      { _id: req.params.id },
      {
        numero_vendedor,
        nombre,
        apellido,
        dni,
        telefono,
        direccion,
      }
    );
    res.status(200).send("Vendedor actualizado correctamente");
  } catch (error) {
    res.send(error);
  }
};
