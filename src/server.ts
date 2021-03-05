import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { pagination } from 'typeorm-pagination';

import routes from './routes';

// Uncomment this line to enable database access
// --------
// import './database';

const startServer = async () => {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );

  app.use(express.json());
  app.use(pagination);

  app.use(routes);

  app.listen(3333, () => {
    console.log('Running at localhost:3333');
  });
};

startServer().catch((err: Error) => {
  console.log(err);
});
