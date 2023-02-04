import express from "express";
import * as ctrlVentas from "../controllers/ventas.controllers.js";

export const ventasRouter = express.Router();

// vendedorRouter.get("/vendedores", ctrlVendedores.getVendedores);

ventasRouter.get("/venta/:vendedor/:fecha", ctrlVentas.getVentaByDate);

ventasRouter.post("/venta", ctrlVentas.postVenta);

// vendedorRouter.delete("/vendedor/:id", ctrlVendedores.deleteVendedor);

// vendedorRouter.put("/vendedor/:id", ctrlVendedores.putVendedor);
