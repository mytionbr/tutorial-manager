"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_1 = require("./routes");
var Server = /** @class */ (function () {
    function Server(app) {
        this.config(app);
        new routes_1.default(app);
    }
    Server.prototype.config = function (app) {
        app.use((0, express_1.urlencoded)({ extended: true }));
        app.use((0, express_1.json)());
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map