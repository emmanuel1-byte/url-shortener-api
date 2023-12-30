"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const urlSchema = new mongoose_1.default.Schema({
    original_url: { type: String, required: true },
    short_url: { type: String, required: true },
    short_code: { type: String, required: true }
}, { autoIndex: false, autoCreate: false, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
exports.Url = mongoose_1.default.model('Url', urlSchema);
