import { Application } from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './config/config';
import * as express from 'express';
import Server from './server';

const { ormconfig, port } = config;
const app: Application = express();
const server = new Server(app);

createConnection(ormconfig)
  .then(async (connection) => {
    console.log('Connected database');
    app.listen(port, () => {
      console.log('The server is running');
    });
  })
  .catch((error) => console.log(error));
