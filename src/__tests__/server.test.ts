import Server from '../server';
import * as supertest from 'supertest';
import * as express from 'express';
import { Application } from 'express';
import { createConnection, getConnection } from 'typeorm';
import config from '../config/config';

const { ormconfig } = config;

const app: Application = express();
const server = new Server(app);

beforeAll(async () => {
  await createConnection(ormconfig);
});

afterAll(async () => {
  const defaultConnection = getConnection('default');
  await defaultConnection.close();
});

describe('GET /api/tutorials', () => {
  it('Should return a tutorials list', async () => {
    const response = await supertest(app).get('/api/tutorials');

    expect(response.statusCode).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
});

describe('GET /api/tutorials/:id', () => {
  it('Should return the target tutorial', async () => {
    const tutorialId = 2;
    const response = await supertest(app).get(`/api/tutorials/${tutorialId}`);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toBeTruthy();
  });
});
