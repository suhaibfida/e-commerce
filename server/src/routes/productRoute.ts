import express from "express";
import { getAllProducts, createProduct } from "../controllers/productsCont.js";
export const routes = express.Router();
routes.route("/products").get(getAllProducts);
routes.route("/product/new").post(createProduct);
