"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./routes"));
class Server {
    constructor(app) {
        this.config(app);
        new routes_1.default(app);
    }
    config(app) {
        app.use((0, express_1.urlencoded)({ extended: true }));
        app.use((0, express_1.json)());
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map