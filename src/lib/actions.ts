'use server';

import { logger } from '@/lib/logger';

type LogLevel = 'info' | 'warn' | 'debug' | 'error';

export async function logAction(level: LogLevel, msg: string): Promise<void> {
  logger[level](msg);
}
