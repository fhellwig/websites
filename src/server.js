import debug from 'debug';
import { createServer } from 'http';
import { addExitHandler } from 'shutdown-async';

export { startServer };

const log = debug('server.js');

async function startServer(app, port) {
  const server = createServer(app);
  return new Promise((resolve, reject) => {
    server.on('error', (err) => {
      log(err.message);
      reject(err);
    });
    server.on('listening', (err) => {
      if (!err) {
        addExitHandler(() => {
          server.close();
          log('stopped');
        });
        log(`listening on port ${server.address().port}`);
        resolve();
      }
    });
    server.listen(port);
  });
}
