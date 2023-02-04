import mongoose from "mongoose";

const { Schema } = mongoose;

const VendedoresSchema = new Schema(
  {
    numero_vendedor: { type: String, requiered: true },
    nombre: { type: String, requiered: true },
    apellido: { type: String, requiered: true },
    dni: { type: String, unique: true },
    telefono: { type: String, requiered: true },
    direccion: { type: String, requiered: true },
    porcentajes: {
      type: Object,
      default: { quiniela: 10, quini6: 10, loto: 10 },
    },
  },
  { timestamps: true, versionKey: false }
);

VendedoresSchema.statics.buscarVendedorPorId = async (id) => {
  return Vendedor.findOne({ _id: id });
};
VendedoresSchema.statics.buscarVendedorPornumero = async (numero) => {
  const vendedor = Vendedor.findOne({ numero_vendedor: numero });
  console.log(vendedor);
  return vendedor;
};

export const Vendedor = mongoose.model(
  "Vendedor",
  VendedoresSchema,
  "vendedores"
);
