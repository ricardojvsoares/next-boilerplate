import 'server-only';
import { env } from '@/lib/env';
import fs from 'fs';
import path from 'path';

type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'silent';

const LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  silent: 4,
};

function getMinLevel(): LogLevel {
  return env.LOG_LEVEL;
}

const LOG_DIR = path.join(process.cwd(), 'logs');

function getLogFile(): string {
  const date = new Date().toISOString().slice(0, 10);
  return path.join(LOG_DIR, `${date}.log`);
}

function writeToFile(line: string) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  fs.appendFileSync(getLogFile(), line + '\n');
}

function createLogger(prefix?: string) {
  const minLevel = LEVELS[getMinLevel()];
  const tag = prefix ? `[${prefix}]` : '';

  function format(level: string, args: unknown[]): string {
    const ts = new Date().toISOString();
    const body = args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
    return `${ts} ${level}${tag} ${body}`;
  }

  return {
    debug: (...args: unknown[]) => {
      if (minLevel <= LEVELS.debug) {
        const line = format('DEBUG', args);
        console.debug(line);
        writeToFile(line);
      }
    },
    info: (...args: unknown[]) => {
      if (minLevel <= LEVELS.info) {
        const line = format('INFO ', args);
        console.info(line);
        writeToFile(line);
      }
    },
    warn: (...args: unknown[]) => {
      if (minLevel <= LEVELS.warn) {
        const line = format('WARN ', args);
        console.warn(line);
        writeToFile(line);
      }
    },
    error: (...args: unknown[]) => {
      if (minLevel <= LEVELS.error) {
        const line = format('ERROR', args);
        console.error(line);
        writeToFile(line);
      }
    },
  };
}

export const logger = createLogger();
export { createLogger };
