"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const respond_1 = __importDefault(require("./utils/respond"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const url_routes_1 = __importDefault(require("./routes/url.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const options = {
    origin: '*',
    methods: ['POST', 'GET'],
    allowheader: ['Content-Type', 'Authorization']
};
app.use((0, cors_1.default)(options));
app.use((0, cookie_parser_1.default)());
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use('/api/v1/links', url_routes_1.default);
app.get('/', (req, res) => {
    (0, respond_1.default)(res, 200, 'Express API is running...');
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json(err);
});
app.use('*', (req, res) => {
    (0, respond_1.default)(res, 400, 'Endpoint does not exist');
});
exports.default = app;
