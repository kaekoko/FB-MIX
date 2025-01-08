/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API_PROD_URL: "https://staging.topwin.club/api/",
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: "6LeNf0UqAAAAAHutrYvf5pW3--0U9wIqw4UqEgDN",
    RECAPTCHA_SECRET_KEY: "6LeNf0UqAAAAAFJywzcuJCJg-FO8UAz1JHko4aoe",
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
        hostname: "staging.topwin.club",
      },
      {
        protocol: "https",
        hostname: "staging.topwin.club",
      },
    ],
  },
  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
