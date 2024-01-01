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
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
describe('GET /', () => {
    it('should respond with json', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, supertest_1.default)(app_1.default)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);
    }));
});
describe('POST /', () => {
    it('should respond with the shorten url', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, supertest_1.default)(app_1.default)
            .post('/')
            .send({ long_url: 'https://hevodata.com/learn/mongodb-atlas-nodejs/' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    }));
    describe('GET /', () => {
        it('should redirect to the original url', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, supertest_1.default)(app_1.default)
                .get('/:code')
                .expect('Content-Type', /json/)
                .expect(200);
        }));
    });
});
