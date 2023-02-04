import * as dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import { dbConnect } from "./database/db.js";
import { vendedorRouter } from "./routes/vendedor.routes.js";
import { ventasRouter } from "./routes/ventas.routes.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/", vendedorRouter);
app.use("/", ventasRouter);

app.listen(PORT, () => {
  try {
    dbConnect();
  } catch (error) {
    console.error("It was an error on the data base", error);
  }
  console.log(`API en Puerto ${PORT}`);
});
