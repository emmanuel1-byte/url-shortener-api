"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.set('strictQuery', false);
function connect(dbUrl) {
    mongoose_1.default.connect(dbUrl);
    mongoose_1.default.connection.on('connected', () => {
        console.log('Database connected successfully');
    });
    mongoose_1.default.connection.on('error', (err) => {
        console.error(`Database connection not successfull ${err}`);
    });
}
exports.connect = connect;
