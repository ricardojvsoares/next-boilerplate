import * as React from 'react';
import { cn } from '@/lib/utils';
import { PageHeader } from './pages-header';
import { PageIcon } from './pages-icon';
import { PageTitle } from './pages-title';
import { PageActions } from './pages-actions';
import { PageContent } from './pages-content';

interface PagesRootProps {
  className?: string;
  children: React.ReactNode;
}

function Page({ className, children }: Readonly<PagesRootProps>) {
  return (
    <div className={cn('flex w-full flex-1 flex-col gap-4', className)}>
      <div className="flex flex-1 flex-col gap-6 p-6">{children}</div>
    </div>
  );
}

Page.Header = PageHeader;
Page.Icon = PageIcon;
Page.Title = PageTitle;
Page.Actions = PageActions;
Page.Content = PageContent;

export { Page };
export { PageHeader } from './pages-header';
export { PageIcon } from './pages-icon';
export { PageTitle } from './pages-title';
export { PageActions } from './pages-actions';
export { PageContent } from './pages-content';
