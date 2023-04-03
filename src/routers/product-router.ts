import { createProduct, getProducts, getProductsOfCategory } from "@/controllers";
import { validateBody } from "@/middlewares";
import { productSchema } from "@/schemas/product-schema";
import { Router } from "express";

const productRouter = Router();

productRouter
  .post("/", validateBody(productSchema), createProduct)
  .get("/", getProducts)
  .get("/:category", getProductsOfCategory);

export { productRouter };
