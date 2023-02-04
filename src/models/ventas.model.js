import mongoose from "mongoose";

const { Schema } = mongoose;

const VentaSchema = new Schema(
  {
    fecha: { type: String, requiered: true },
    vendedor: { type: Schema.Types.ObjectId, ref: "Vendedor" },
    quiniela: { type: Number },
    quini6: { type: Number },
    loto: { type: Number },
    brinco: { type: Number },
    express: { type: Number },
    poceada: { type: Number },
    premios: { type: Number },
    total: { type: Number },
    paga: { type: Number },
    saldo: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

export const Venta = mongoose.model("Venta", VentaSchema, "ventas");
