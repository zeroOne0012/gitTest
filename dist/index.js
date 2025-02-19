"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sum_1 = __importDefault(require("./sum"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    const result = (0, sum_1.default)(1, 2);
    res.send('Hello World! ' + result);
});
app.listen(3000, () => { console.log('Server is running on port 3000'); });
// import * as express from "express";
// const app: express.Application = express();
