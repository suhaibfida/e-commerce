import type { Request, Response } from "express";
export const getAllProducts = (req: Request, res: Response) => {
  res.json("hello from backend");
};
