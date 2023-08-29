"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (res, error, status = 400) => {
    if (error && error instanceof Error) {
        return res.status(status).send(error.message);
    }
};
exports.handleError = handleError;
