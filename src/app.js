import express from 'express';

export function createApp(distDir) {
  const app = express();
  app.enable('trust proxy');
  app.get('/hostname', (req, res) => {
    res.send(req.headers.host);
  });
  app.use(express.static(distDir));
  return app;
}
