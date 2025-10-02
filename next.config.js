/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['i0.hdslb.com','i1.hdslb.com','i2.hdslb.com','images.unsplash.com'],
  },
};
module.exports = nextConfig;
