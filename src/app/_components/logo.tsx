import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <Image src="/logo.svg" alt="NextJs Boilerplate" width={30} height={30} />
      <span className="text-xl font-semibold">NextJs Boilerplate</span>
    </div>
  );
};

export default Logo;
