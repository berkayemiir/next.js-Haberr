// next.config.js
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
    // remotePatterns kullanımı
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};

module.exports = nextConfig;
