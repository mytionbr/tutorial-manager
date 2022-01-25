"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("./config/config"));
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./server"));
const Tutorial_1 = require("./entity/Tutorial");
const { ormconfig, port } = config_1.default;
const app = (0, express_1.default)();
const server = new server_1.default(app);
(0, typeorm_1.createConnection)(ormconfig)
    .then(async (connection) => {
    console.log('Connected database');
    const tutorialRepository = connection.getRepository(Tutorial_1.Tutorial);
    const tutorial = new Tutorial_1.Tutorial();
    tutorial.title = 'test 1';
    tutorial.description = 'This is a test';
    tutorial.published = false;
    await tutorialRepository.save(tutorial);
    const allTutorials = await tutorialRepository.find();
    console.log('All tutorials from the db', allTutorials);
    app.listen(port, () => {
        console.log('The server is running');
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map