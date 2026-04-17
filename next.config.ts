import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  } /* TODO : Remove remotePatterns when using local images */,
};

const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');
export default withNextIntl(nextConfig);
