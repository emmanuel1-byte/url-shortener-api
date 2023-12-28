"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUrl = void 0;
const respond_1 = __importDefault(require("./respond"));
function validateUrl(req, res, next) {
    try {
        const { long_url } = req.body;
        new URL(long_url);
        next();
    }
    catch (err) {
        return (0, respond_1.default)(res, 400, 'Url is malformed');
    }
}
exports.validateUrl = validateUrl;
