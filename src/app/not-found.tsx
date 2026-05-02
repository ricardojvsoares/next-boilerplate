import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="mx-auto w-full max-w-md border-2">
        <CardHeader>
          <CardTitle className="text-center text-6xl font-bold">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <h2 className="mb-2 text-2xl font-semibold">{t('title')}</h2>
          <p className="text-muted-foreground">{t('message')}</p>
        </CardContent>
        <CardFooter>
          <Button variant="default" className="w-full" asChild>
            <Link href="/">{t('returnHome')}</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
