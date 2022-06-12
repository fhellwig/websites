import express from 'express';
import { resolve } from 'path';
import { parseHost } from './util.js';

export function createApp(distDir) {
  const app = express();
  app.enable('trust proxy');
  app.get('/host', (req, res) => {
    res.json(parseHost(req.headers.host));
  });
  app.use(express.static(distDir));
  app.use('*', (req, res) => {
    res.sendFile(resolve(distDir, 'index.html'));
  });
  return app;
}
