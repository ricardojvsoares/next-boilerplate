'use client';

import { CircleX, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

type PasswordRequirementsProps = {
  password?: string;
};

export function PasswordRequirements({ password = '' }: PasswordRequirementsProps) {
  const t = useTranslations('SignUp');

  const requirements = [
    { label: t('minimumLength', { length: 8 }), met: password.length >= 8 },
    { label: t('mustContainLowerCase'), met: /[a-z]/.test(password) },
    { label: t('mustContainUpperCase'), met: /[A-Z]/.test(password) },
    { label: t('mustContainSymbol'), met: /[^A-Za-z0-9]/.test(password) },
    { label: t('mustContainNumber'), met: /[0-9]/.test(password) },
  ];
  return (
    <Card>
      <CardContent className="w-100 space-y-2">
        <div className="text-sm font-semibold">{t('passwordRequirements')}</div>

        {requirements.map((req, index) => (
          <div
            key={index}
            className={cn(
              'flex items-center gap-2 text-sm transition-colors',
              req.met ? 'text-success' : 'text-muted-foreground'
            )}
          >
            {req.met ? <CheckCircle2 className="h-4 w-4" /> : <CircleX className="h-4 w-4" />}
            <span>{req.label}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
