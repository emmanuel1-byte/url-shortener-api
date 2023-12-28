"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_1 = require("./config/database");
const server = http_1.default.createServer(app_1.default);
const port = process.env.PORT || 3000;
app_1.default.set('port', port);
//Check if port is already in use an if it is exit the process.
function onError(error) {
    if (error.code === 'EADDRINUSE') {
        console.clear();
        console.error(` port ${port} is already in use please switch to another port🙏😌`);
        process.exit(1);
    }
    else {
        console.error('An error occurrred: ', error);
        process.exit(1);
    }
}
//Event Emmitter that listens to error Event
server.on('error', onError);
//Database connection
//Run the server
server.listen(port, (() => {
    console.clear();
    console.log(`Express API is running on port ${port}`);
    (0, database_1.connect)(process.env.DATABASE_URL);
}));
