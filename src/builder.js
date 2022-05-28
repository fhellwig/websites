import { Parcel } from '@parcel/core';
import { createLog } from 'pkglogger';
import { addExitHandler } from 'shutdown-async';

export { buildProject, watchProject };

const log = createLog(import.meta);

async function buildProject(entries) {
  const bundler = new Parcel({
    entries: entries,
    defaultConfig: '@parcel/config-default',
    mode: 'production'
  });
  log.info('building...');
  try {
    await bundler.run();
    log.info('finished building');
  } catch (err) {
    handleError(err);
  }
}

async function watchProject(entries) {
  const bundler = new Parcel({
    entries: entries,
    defaultConfig: '@parcel/config-default',
    mode: 'development'
  });
  try {
    const subscription = await bundler.watch((_, event) => {
      if (event.type === 'buildSuccess') {
        log.info('rebuilt project');
      } else if (event.type === 'buildFailure') {
        handleError(event);
      }
    });
    log.info('watching...');
    addExitHandler(subscription.unsubscribe);
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  err.diagnostics.forEach((obj) => {
    log.error(obj.message);
    if (obj.codeFrames) {
      obj.codeFrames.forEach((frame) => {
        log.error(` file: ${frame.filePath}`);
        if (Array.isArray(frame.codeHighlights)) {
          frame.codeHighlights.forEach((code) => {
            log.error(
              `start: line ${code.start.line}, column ${code.start.column}`
            );
            log.error(
              `  end: line ${code.end.line}, column ${code.end.column}`
            );
            if (code.message) {
              log.error(code.message);
            }
          });
        }
      });
    }
  });
}
