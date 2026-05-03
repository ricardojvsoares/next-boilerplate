import { logToServer } from './serverActions';

type LogLevel = 'info' | 'warn' | 'debug' | 'error';
type LogFn = (msg: string) => void;

export interface Logger {
  info: LogFn;
  warn: LogFn;
  debug: LogFn;
  error: LogFn;
  prefix: (tag: string) => void;
}

function createLogger(): Logger {
  let currentPrefix: string | undefined;

  const log = (level: LogLevel) => (msg: string) => void logToServer(level, msg, currentPrefix);

  return {
    info: log('info'),
    warn: log('warn'),
    debug: log('debug'),
    error: log('error'),
    prefix: (tag: string) => {
      currentPrefix = tag;
    },
  };
}

/**
 * The main logger instance used throughout the application.
 * - You can create additional loggers with specific prefixes using the `prefix` method.
 *
 * #### Example usage:
 *
 * ```typescript
 * import { logger } from '@/lib/log';
 *
 * logger.info('This is an info message');
 * logger.warn('This is a warning');
 * logger.error('This is an error');
 *
 * const userLogger = logger.prefix('UserModule');
 * userLogger.debug('User module initialized');
 * ```
 */
export const logger: Logger = createLogger();
