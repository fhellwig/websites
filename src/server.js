import { createServer } from 'http';
import { createLog } from 'pkglogger';
import { addExitHandler } from 'shutdown-async';

export { startServer };

const log = createLog(import.meta);

async function startServer(app, port) {
  const server = createServer(app);
  return new Promise((resolve, reject) => {
    server.on('error', (err) => {
      log.error(err.message);
      reject(err);
    });
    server.on('listening', (err) => {
      if (!err) {
        addExitHandler(() => {
          server.close();
          log.info('stopped');
        });
        log.info(`listening on port ${server.address().port}`);
        resolve();
      }
    });
    server.listen(port);
  });
}
