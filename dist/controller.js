"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductscontroller = void 0;
const services_js_1 = require("./services.js");
const handelerror_js_1 = require("./handelerror.js");
const getProductscontroller = async (req, res) => {
    try {
        const products = await (0, services_js_1.getProducts)();
        res.send(products);
    }
    catch (error) {
        (0, handelerror_js_1.handleError)(res, 500, error.message);
    }
};
exports.getProductscontroller = getProductscontroller;
