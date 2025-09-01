import type { Request, Response } from "express";
import productSchema from "../models/productModel.js";

export const createProduct = async (req: Request, res: Response) => {
  // const product = await productSchema.create(req.body);
};
export const getAllProducts = (req: Request, res: Response) => {
  res.json("hello from backend");
};
