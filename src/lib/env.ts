import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    DB_USER: z.string().min(1),
    DB_PASSWORD: z.string().min(8),
    DB_HOST: z.string().min(1),
    DB_PORT: z.string().min(1),
    DB_NAME: z.string().min(1),

    BETTER_AUTH_SECRET: z.string().min(16),
    BETTER_AUTH_URL: z.url(),

    NODE_ENV: z.enum(['development', 'production']).default('development'),
  },
  runtimeEnv: {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,

    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,

    NODE_ENV: process.env.NODE_ENV,
  },
});

export const DATABASE_URL =
  `postgresql://${env.DB_USER}:${env.DB_PASSWORD}` +
  `@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}?schema=public`;
