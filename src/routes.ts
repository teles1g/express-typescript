import express from 'express';

const routes = express();

routes.get('/', (request, response) => {
  return response.json({ message: 'Express TypeScript Running!' });
});

export default routes;
