import type { Request, Response } from "express";
import Product from "../models/productModel.js";

export const createProduct = async (req: Request, res: Response) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

export const getAllProducts = (req: Request, res: Response) => {
  res.json("hello from backend");
};
