/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i0.hdslb.com', 'i1.hdslb.com', 'i2.hdslb.com', 'images.unsplash.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'i0.hdslb.com' },
      { protocol: 'https', hostname: 'i1.hdslb.com' },
      { protocol: 'https', hostname: 'i2.hdslb.com' },
    ],
  },
};

module.exports = nextConfig;
