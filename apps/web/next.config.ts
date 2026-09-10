import { NextConfig } from 'next';

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    authInterrupts: true,
    serverActions: {
      bodySizeLimit: '30mb',
    },
  },
} satisfies NextConfig;

export default nextConfig;
