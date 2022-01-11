"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var dbDetails = {
    host: process.env.LOCAL_HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASE_PORT
};
var ormconfig = {
    type: "postgres",
    host: dbDetails.host,
    port: Number(dbDetails.port),
    username: dbDetails.user,
    password: dbDetails.password,
    database: dbDetails.database,
};
var config = {
    port: process.env.PORT,
    dbDetails: dbDetails,
    jwt_secret: process.env.JWT_SECRET,
    database_url: process.env.DATABASE_URL,
    ormconfig: ormconfig
};
exports.default = config;
//# sourceMappingURL=config.js.map