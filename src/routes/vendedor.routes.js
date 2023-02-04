import express from "express";
import * as ctrlVendedores from "../controllers/vendedor.controllers.js";

export const vendedorRouter = express.Router();

vendedorRouter.get("/vendedores", ctrlVendedores.getVendedores);

vendedorRouter.get("/vendedor/:id", ctrlVendedores.getVendedor);

vendedorRouter.post("/vendedor/", ctrlVendedores.postVendedor);

vendedorRouter.delete("/vendedor/:id", ctrlVendedores.deleteVendedor);

vendedorRouter.put("/vendedor/:id", ctrlVendedores.putVendedor);
