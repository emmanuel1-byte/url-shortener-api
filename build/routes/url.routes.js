"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const url_controller_1 = require("../controller/url/url.controller");
const validateUrl_1 = require("../utils/validateUrl");
const router = express_1.default.Router();
router.post('/', validateUrl_1.validateUrl, url_controller_1.UrlController.generateUrl);
router.get('/:code', url_controller_1.UrlController.getUrl);
exports.default = router;
