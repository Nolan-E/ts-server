"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express');
const app = express_1.default();
const port = 3000;
const pageRoutes = require('./routes/pages');
app.get('/', (req, res) => {
    res.send('We are alive!');
});
app.listen(port, () => console.log(`server is listening on ${port}`));
