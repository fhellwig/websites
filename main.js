import 'dotenv/config';
import debug from 'debug';
import { rm, existsSync } from 'fs';
import { dirname, resolve } from 'path';
import { exitGracefully } from 'shutdown-async';
import { createApp, startServer, buildProject, watchProject } from './src/index.js';

const log = debug('main.js');
const cmd = process.argv[2];
const distDir = resolvePath('dist');
const entries = resolvePath('webapp/index.html');

async function run() {
  try {
    switch (cmd) {
      case 'build':
        await buildProject(entries);
        break;
      case 'watch':
        await startServer(createApp(distDir), process.env.PORT);
        await watchProject(entries);
        break;
      case 'clean':
        for (let i = 3; i < process.argv.length; i++) {
          let dir = process.argv[i];
          if (await clean(resolvePath(dir))) {
            log(`removed ${dir}`);
          }
        }
        break;
      default:
        if (!existsSync(distDir)) {
          // in case they forgot to run npm run build
          await buildProject(entries);
        }
        await startServer(createApp(distDir), process.env.PORT);
        break;
    }
  } catch (_) {
    exitGracefully();
  }
}

async function clean(dir) {
  return new Promise((resolve, reject) => {
    rm(dir, { recursive: true }, (err) => {
      if (err) {
        if (err.code === 'ENOENT') {
          resolve(false);
        } else {
          reject(err);
        }
      } else {
        resolve(true);
      }
    });
  });
}

function getCwd() {
  const argv1 = process.argv[1];
  if (typeof argv1 === 'string') {
    return dirname(argv1);
  } else {
    return process.cwd();
  }
}

export function resolvePath(name) {
  return resolve(getCwd(), name);
}

run();
