"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const dbDetails = {
    host: process.env.LOCAL_HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASE_PORT
};
const ormconfig = {
    type: 'postgres',
    host: dbDetails.host,
    port: Number(dbDetails.port),
    username: dbDetails.user,
    password: dbDetails.password,
    database: dbDetails.database,
    synchronize: true,
    logging: false,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber'
    }
};
const config = {
    port: process.env.PORT,
    dbDetails: dbDetails,
    jwt_secret: process.env.JWT_SECRET,
    database_url: process.env.DATABASE_URL,
    ormconfig: ormconfig
};
exports.default = config;
//# sourceMappingURL=config.js.map