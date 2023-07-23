import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import 'express-async-errors';

import { errorMiddleware, notFoundMiddleware } from './app/middlewares';
import { dbConnection } from './config/db';

type IoCServer = {
  config: {
    PORT: string | number;
    APP_ENV: string;
  };
  appRouter: () => express.Router;
};

export class Server {
  private readonly app;
  private readonly config;

  constructor({ config, appRouter }: IoCServer) {
    this.app = express();
    this.config = config;
    this.connectToDB();
    this.middlewares();
    this.app.use(appRouter); // set app router
    this.finalMiddlewares();
  }

  async connectToDB() {
    await dbConnection();
  }

  middlewares() {
    console.clear(); // remove it

    this.app
      .use(cors())
      .use(express.json())
      .use(helmet())
      .use(compression())
      .use(morgan('dev'));
  }

  finalMiddlewares() {
    this.app.use(notFoundMiddleware);
    this.app.use(errorMiddleware);
  }

  listen() {
    this.app.listen(this.config.PORT, () => {
      console.log(
        'App is running at http://localhost:%d in %s mode',
        this.config.PORT,
        this.config.APP_ENV
      );
    });
  }

  getApp() {
    return this.app;
  }
}
