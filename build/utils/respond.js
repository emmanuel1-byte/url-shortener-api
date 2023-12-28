"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const respond = (res, status = 200, message, data = {}) => {
    const successCodes = [200, 201];
    return res.status(status).send({
        status: successCodes.includes(status) ? "success" : "error",
        message: message,
        data: data
    });
};
exports.default = respond;
