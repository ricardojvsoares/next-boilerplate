'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { logger } from '@/lib/log';

logger.prefix('UI Boundary');
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Error');

  const loggedErrorRef = useRef<string | null>(null);

  useEffect(() => {
    const errorKey = error.digest || error.message;

    if (loggedErrorRef.current !== errorKey) {
      logger.error(`Message: ${error.message} Cause: ${error.cause ?? 'Client-Side'}`);
      loggedErrorRef.current = errorKey;
    }
  }, [error]);

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">{t('title')}</h2>
      <p className="text-muted-foreground">{t('description')}</p>
      <Button onClick={() => reset()}>{t('retry')}</Button>
    </div>
  );
}
