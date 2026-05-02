import { MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Logo from './logo';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const navigationData = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'dashboard',
    href: '/dashboard',
  },
];

export default function Navbar() {
  const t = useTranslations('HomePage');
  return (
    <header className="bg-background sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6">
        <Logo className="text-foreground gap-3" />
        <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
          {navigationData.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary max-md:hidden">
              {t(item.title)}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link href="/signup" className="hidden md:inline-flex">
            <Button variant="outline" className="hidden md:inline-flex">
              {t('signUp')}
            </Button>
          </Link>
          <Link href="/signin" className="hidden md:inline-flex">
            <Button variant="outline" className="hidden md:inline-flex">
              {t('signIn')}
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{t(item.title)}</a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <a href="/signup">{t('signUp')}</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="/signin">{t('signIn')}</a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
