import { Application, json, urlencoded } from 'express';
import tutorialRoutes from './routes/tutorial';
import * as cors from 'cors';

export default class Server {
  constructor(private app: Application) {
    this.config(this.app);
    this.getRoutes(this.app);
  }

  public config(app: Application): void {
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(cors());
  }

  public getRoutes(app: Application): void {
    app.use('/api/tutorials', tutorialRoutes);
  }

  public getApp(): Application {
    return this.app;
  }
}
