import { NextResponse } from 'next/server';
import { logger } from '@/lib/log';

logger.prefix('API Route');

const DELAY_MS = 1000;

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, DELAY_MS));

    const isError = Math.random() < 0.5;

    if (isError) {
      throw new Error('Random error!');
    }

    return NextResponse.json({
      message: 'Hello, World!',
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Internal Server Error';

    logger.error(errorMessage);

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
