/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    // API_PROD_URL: "https://laravel.pixelstrap.net/fastkart/api/",
    API_PROD_URL: "https://sport.myvipmm.com/api",
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/en/dashboard",

        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1:8000",
      },
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
