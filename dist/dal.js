"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDataToJsonFile = exports.getDataFromJsonFile = void 0;
const jsonfile_1 = __importDefault(require("jsonfile"));
const path_1 = __importDefault(require("path"));
const DB_URL = path_1.default.join(__dirname, "../DB/product.json");
const getDataFromJsonFile = async () => {
    try {
        const data = await jsonfile_1.default.readFile(DB_URL);
        return data;
    }
    catch (error) {
        if (error instanceof Error)
            return error;
        return new Error("Something went wrong!");
    }
};
exports.getDataFromJsonFile = getDataFromJsonFile;
const sendDataToJsonFile = (data) => {
    try {
        jsonfile_1.default.writeFile(DB_URL, data);
        return Promise.resolve(data);
    }
    catch (error) {
        return Promise.reject(error);
    }
};
exports.sendDataToJsonFile = sendDataToJsonFile;
