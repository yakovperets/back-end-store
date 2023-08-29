import { getDataFromJsonFile, sendDataToJsonFile } from "./dal.js";
//פונקציה מחזירה רשימת מוצרים
type promises = Promise<Record<string, unknown> | Error>;
export const getProducts = async (): promises => {
  try {
    const products = await getDataFromJsonFile();
    return Promise.resolve(products);
  } catch (error) {
    return Promise.reject(error);
  }
};
