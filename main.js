import 'dotenv/config';
import { existsSync, rm } from 'fs';
import { resolve } from 'path';
import { createLog } from 'pkglogger';
import { exitGracefully } from 'shutdown-async';
import {
  buildProject,
  createApp,
  startServer,
  watchProject
} from './src/index.js';

const log = createLog(import.meta);
const cmd = process.argv[2];
const distDir = resolvePath('dist');
const entries = resolvePath('webapp/index.html');

async function run() {
  if (!existsSync(resolvePath('package.json'))) {
    throw new Error('Invalid current working directory');
  }
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
            log.info(`removed ${dir}`);
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

export function resolvePath(name) {
  return resolve(process.cwd(), name);
}

run();
