"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
(0, cors_1.default)({ origin: "http//localhost:3020", optionsSuccessStatus: 200 });
app.use((0, cors_1.default)());
const routes_js_1 = __importDefault(require("./routes.js"));
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use("/product", routes_js_1.default);
const PORT = 3020;
app.listen(PORT, () => console.log("server run!"));
