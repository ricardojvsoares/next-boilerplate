import { cn } from '@/lib/utils';

interface PageActionsProps {
  className?: string;
  children: React.ReactNode;
}

export function PageActions({ className, children }: Readonly<PageActionsProps>) {
  return <div className={cn('flex shrink-0 items-center gap-2', className)}>{children}</div>;
}
