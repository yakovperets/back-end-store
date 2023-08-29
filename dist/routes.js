"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerProduct = express_1.default.Router();
const controller_1 = require("./controller");
routerProduct.get("/all", controller_1.getProductscontroller);
exports.default = routerProduct;
