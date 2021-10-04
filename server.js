import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

import connectDatabase from "./configs/database.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDatabase();
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Api working");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(5000, console.log("Server listening on port 5000"));
