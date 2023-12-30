"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
const nanoid_1 = require("nanoid");
const url_model_1 = require("../model/url.model");
class UrlService {
    static createUrl(long_url, domain) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!domain) {
                    const short_url = `${process.env.BASE_URL}${(0, nanoid_1.nanoid)(3)}`;
                    const resultSet = yield url_model_1.Url.create({ original_url: long_url, short_url: short_url, short_code: short_url.slice(48) });
                    return resultSet;
                }
                const short_url = `${process.env.BASE_URL}${domain}`;
                const resultSet = yield url_model_1.Url.create({ original_url: long_url, short_url: short_url, short_code: short_url.slice(48) });
                return resultSet;
            }
            catch (err) {
                throw new Error('Failed to shorten url');
            }
        });
    }
    static retrieveUrl(shortCode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const resultSet = yield url_model_1.Url.findOne({ short_code: shortCode });
                return resultSet;
            }
            catch (err) {
                throw new Error('Failed to retrieve url');
            }
        });
    }
}
exports.UrlService = UrlService;
