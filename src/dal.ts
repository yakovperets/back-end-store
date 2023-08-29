import jsonfile from "jsonfile";
import path from "path";

const DB_URL = path.join(__dirname, "../DB/product.json");
//פונקציה אסינכרונית תמיד תחזיר פרומיס ולכן אנו עושים כאן גנריכ של פרומיס שרלוונטי גם לשגיאה שמוחזרת כפרומיס וגם לאפשרות של תגובה מתקיית הגייסון שתחזיר מפתח שהוא בהכרח סטרינג אך אובייקט לא ידוע יכול להיות שהוא מערך
//קריאה מג'ייסון
export const getDataFromJsonFile = async (): Promise<
  Record<string, unknown> | Error
> => {
  try {
    const data = await jsonfile.readFile(DB_URL);
    return data;
  } catch (error) {
    if (error instanceof Error) return error;
    return new Error("Something went wrong!");
  }
};
//שליחה לג'ייסון
export const sendDataToJsonFile = (data: Record<string, unknown>) => {
  try {
    jsonfile.writeFile(DB_URL, data);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
