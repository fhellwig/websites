import express from 'express';
import { parseHost } from './util.js';

export function createApp(distDir, staticDir) {
  const app = express();
  app.enable('trust proxy');
  app.get('/host', (req, res) => {
    res.json(parseHost(req.headers.host));
  });
  app.use(express.static(distDir));
  app.use(express.static(staticDir));
  return app;
}
