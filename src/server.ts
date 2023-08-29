import express from "express";
const app = express();
import cors from "cors";
cors({ origin: "http//localhost:3020", optionsSuccessStatus: 200 });
app.use(cors());
// import { handleError } from "./handelerror.js";
import router from "./routes.js";
// handleError(3,5)
app.use(express.json());
app.use(express.text());
app.use("/product", router);
const PORT = 3020;
app.listen(PORT, () => console.log("server run!"));
