import { Venta } from "../models/ventas.model.js";
import { Vendedor } from "../models//vendedor.model.js";

export const postVenta = async (req, res) => {
  const {
    vendedor,
    fecha,
    quiniela,
    quini6,
    loto,
    brinco,
    express,
    poceada,
    premios,
    total,
    paga,
    saldo,
  } = req.body;
  const vendedorMatch = await Vendedor.findOne({
    numero_vendedor: vendedor,
  });
  const venta = await Venta.findOne({ fecha, vendedor: vendedorMatch._id });
  if (!vendedorMatch) {
    return res.send("El vendedor no existe");
  }
  if (venta) {
    return res.send("La venta ya existe");
  }

  const nuevaVenta = new Venta({
    fecha: fecha,
    vendedor: vendedorMatch._id,
    quiniela: quiniela,
    quini6: quini6,
    loto: loto,
    brinco: brinco,
    express: express,
    poceada: poceada,
    premios: premios,
    total: total,
    paga: paga,
    saldo: saldo,
  });
  await nuevaVenta.save();
  res.send("Venta registrada correctamente");
};

export const getVentaByDate = async (req, res) => {
  console.log(req.params.vendedor);
  console.log(req.params.fecha);
  try {
    const vendedorMatch = await Vendedor.findOne({
      numero_vendedor: req.params.vendedor,
    });
    if (!vendedorMatch) {
      return res.send("El vendedor no existe");
    }
    const ventaExist = await Venta.findOne({
      fecha: req.params.fecha,
      vendedor: vendedorMatch._id,
    }).populate("vendedor");

    if (!ventaExist) {
      return null;
    }

    res.json(ventaExist);
  } catch (error) {
    res.send(error);
  }
};
