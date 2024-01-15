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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const url_service_1 = require("../../services/url.service");
const respond_1 = __importDefault(require("../../utils/respond"));
/**
 * Controller handling URL-related operations.
 *
 * @class
 */
class UrlController {
    /**
  * Generate a short URL from a provided long URL.
  *
  * @static
  * @async
  * @param {Request} req - Express request object.
  * @param {Response} res - Express response object.
  * @returns {Promise<void>} A Promise representing the completion of the operation.
  */
    static generateUrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { long_url } = req.body;
                const shortUrl = yield url_service_1.UrlService.createUrl(long_url);
                if (!shortUrl)
                    return (0, respond_1.default)(res, 500, 'Failed to shorten Url');
                return (0, respond_1.default)(res, 201, 'Url shortened successfully', { short_url: shortUrl.short_url });
            }
            catch (err) {
                return (0, respond_1.default)(res, 500, 'Internal Server Error: Failed to create short url');
            }
        });
    }
    /**
 * Retrieve the original URL associated with a short code.
 *
 * @static
 * @async
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {Promise<void>} A Promise representing the completion of the operation.
 */
    static getUrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const shortCode = req.params.code;
                const url = yield url_service_1.UrlService.retrieveUrl(shortCode);
                if (!url)
                    return (0, respond_1.default)(res, 404, 'Url not found', { url });
                return res.redirect(url.original_url);
            }
            catch (err) {
                return (0, respond_1.default)(res, 500, 'Internal Server Error: Failed to retrieve original url');
            }
        });
    }
}
exports.UrlController = UrlController;
