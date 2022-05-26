import express from 'express';

export function createApp(distDir) {
  const app = express();
  app.enable('trust proxy');
  app.use(express.static(distDir));
  return app;
}
