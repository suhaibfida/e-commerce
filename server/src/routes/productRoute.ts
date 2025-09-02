import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} from "../controllers/productsCont.js";
export const routes = express.Router();
routes.route("/products").get(getAllProducts);
routes.route("/product").post(createProduct);
routes
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);
