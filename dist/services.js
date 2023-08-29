"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const dal_js_1 = require("./dal.js");
const getProducts = async () => {
    try {
        const products = await (0, dal_js_1.getDataFromJsonFile)();
        return Promise.resolve(products);
    }
    catch (error) {
        return Promise.reject(error);
    }
};
exports.getProducts = getProducts;
