import { cn } from '@/lib/utils';

interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function PageHeader({ className, children }: Readonly<PageHeaderProps>) {
  return <div className={cn('flex items-center justify-between', className)}>{children}</div>;
}
