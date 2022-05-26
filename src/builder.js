import debug from 'debug';
import { addExitHandler } from 'shutdown-async';
import { Parcel } from '@parcel/core';

export { buildProject, watchProject };

const log = debug('builder.js');

async function buildProject(entries) {
  const bundler = new Parcel({
    entries: entries,
    defaultConfig: '@parcel/config-default',
    mode: 'production'
  });
  log('building...');
  try {
    await bundler.run();
    log('finished building');
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
        log('rebuilt project');
      } else if (event.type === 'buildFailure') {
        handleError(event);
      }
    });
    log('watching...');
    addExitHandler(subscription.unsubscribe);
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  err.diagnostics.forEach((obj) => {
    log(`ERROR: ${obj.message}`);
    if (obj.codeFrames) {
      obj.codeFrames.forEach((frame) => {
        log(` file: ${frame.filePath}`);
        if (Array.isArray(frame.codeHighlights)) {
          frame.codeHighlights.forEach((code) => {
            log(`start: line ${code.start.line}, column ${code.start.column}`);
            log(`  end: line ${code.end.line}, column ${code.end.column}`);
            if (code.message) {
              log(code.message);
            }
          });
        }
      });
    }
  });
}
