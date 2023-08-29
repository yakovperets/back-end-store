import { getProducts } from "./services.js";
import { handleError } from "./handelerror.js";
import { Response, Request } from "express";

//פונקציה מחזירה רשימת מוצרים
export const getProductscontroller = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await getProducts();
    res.send(products);
  } catch (error: any) {
    handleError(res, 500, error.message);
  }
};
