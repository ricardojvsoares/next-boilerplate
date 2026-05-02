'use server';

import { logger } from './logger';

type LogLevel = 'info' | 'warn' | 'debug' | 'error';

export async function logToServer(level: LogLevel, msg: string, prefix?: string): Promise<void> {
  logger(prefix)[level](msg);
}
