import express from "express";
import { getAllProducts } from "../controllers/productsCont.js";
export const routes = express.Router();
routes.route("/products").get(getAllProducts);
