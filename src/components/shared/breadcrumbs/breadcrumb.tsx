import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useTranslations } from 'next-intl';
import React from 'react';

/**
 * - If href is provided, it will be a link, otherwise it will be a page
 * - If dinamic is provided, it will be used as the text instead of the translation key of value
 */
export type BreadCrumbItems = {
  value: string;
  href?: string;
  dinamic?: string;
}[];

export function BreadCrumb({ items }: { items: BreadCrumbItems }) {
  const t = useTranslations('Breadcrumb');
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">{t('home')}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            {item.href ? (
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  {item.dinamic ? (
                    <Link href={item.href}>{item.dinamic}</Link>
                  ) : (
                    <Link href={item.href}>{t(item.value)}</Link>
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                {item.dinamic ? (
                  <BreadcrumbPage>{item.dinamic}</BreadcrumbPage>
                ) : (
                  <BreadcrumbPage>{t(item.value)}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
