import {
  getProductByID,
  getProducts,
} from "../controllers/productController.js";

import express from "express";
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductByID);

export default router;
