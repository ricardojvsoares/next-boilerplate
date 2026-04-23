import { Page } from '@/components/pages-layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { BreadcrumbDashboard } from './_components/dashboard.breadcrumbs';
import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');
  return (
    <Page>
      <BreadcrumbDashboard />
      <Page.Header>
        <div className="display:block flex items-center gap-2">
          <Page.Icon icon={Home} />
          <Page.Title>{t('title')}</Page.Title>
        </div>
        <Page.Actions>
          <Button>{t('new')}</Button>
        </Page.Actions>
      </Page.Header>

      <Page.Content>
        <div className="border-muted rounded-lg border-2 border-dashed p-6 text-center">
          <Home className="mx-auto mb-4 size-10" />
          <h2 className="text-lg font-semibold">{t('welcome')}</h2>
          <p className="text-muted-foreground text-sm">{t('welcomeMessage')}</p>
        </div>
      </Page.Content>
    </Page>
  );
}
