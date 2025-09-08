import type { Request, Response } from "express";
import products from "../models/productModel.js";
import handleAsyncError from "../middlewares/handleAsyncError.js";
import ApiFeatures from "../utils/apiFeatures.js";
//------------------------------------------For admin only--------------------------------------------------------
export const createProduct = handleAsyncError(
  async (req: Request, res: Response) => {
    const product = await products.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  }
);
export const updateProduct = handleAsyncError(
  async (req: Request, res: Response) => {
    let product = await products.findById(req.params.id); //findById(req.params.id);
    if (!product) {
      return res.json({ message: "id is incorrect" });
    }
    product = await products.findByIdAndUpdate(req.params.id, req.body); // can't we use only [update] here instead of findByIdAndUpdate & can't we use different variable here.
    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  }
);
export const deleteProduct = handleAsyncError(
  async (req: Request, res: Response) => {
    const product = await products.findById(req.params.id);
    if (!product) {
      return res.json({
        message: "Enter valid id",
      });
    }
    await product.deleteOne();
    res.json({
      success: true,
      message: "product deleted successfully",
    });
  }
);
// ----------------------------------------------USER------------------------------------------------------------
export const getAllProducts = handleAsyncError(
  async (req: Request, res: Response) => {
    // const apiFeature = new ApiFeatures(products.find(), req.query)
    // .search()
    // .filter();
    const product = await products.find();
    if (!product) {
      res.json({ message: "no products here" });
    }
    res.status(200).json({
      success: true,
      product,
    });
  }
);

export const getProductDetails = handleAsyncError(
  async (req: Request, res: Response) => {
    const productDetails = await products.findById(req.params.id);
    if (!productDetails) {
      return res.json({ message: "product not found" });
    }
    res.json({
      success: true,
      productDetails,
    });
  }
);
