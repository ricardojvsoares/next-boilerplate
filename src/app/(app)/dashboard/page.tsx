import {
  Page,
  PageHeader,
  PageIcon,
  PageTitle,
  PageActions,
  PageContent,
} from '@/components/shared/pages-layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BreadCrumb, type BreadCrumbItems } from '@/components/shared/breadcrumbs';

const navigationData: BreadCrumbItems = [
  {
    value: 'dashboard',
    href: '/dashboard',
  },
];

export default function DashboardPage() {
  const t = useTranslations('Dashboard');
  return (
    <Page>
      <BreadCrumb items={navigationData} />
      <PageHeader>
        <div className="flex items-center gap-2">
          <PageIcon icon={Home} />
          <PageTitle>{t('title')}</PageTitle>
        </div>
        <PageActions>
          <Button>{t('new')}</Button>
        </PageActions>
      </PageHeader>

      <PageContent>
        <div className="border-muted rounded-lg border-2 border-dashed p-6 text-center">
          <Home className="mx-auto mb-4 size-10" />
          <h2 className="text-lg font-semibold">{t('welcome')}</h2>
          <p className="text-muted-foreground text-sm">{t('welcomeMessage')}</p>
        </div>
      </PageContent>
    </Page>
  );
}
