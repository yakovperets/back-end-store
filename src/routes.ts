//קובץ הראוטר עבור המוצרים
import express from "express";

//ייבוא המחלקה ראוטר
const routerProduct = express.Router();
import { getProductscontroller } from "./controller";
routerProduct.get("/all", getProductscontroller);
export default routerProduct;
