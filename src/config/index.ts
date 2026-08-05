import express from 'express';
import pino from 'pino';
import { createConnection } from 'typeorm';
import { setupRoutes } from '../presentation/routes';

export const app = express();
export const logger = pino();

export const setupApp = async () => {
  await createConnection();
  setupRoutes(app);
};