// @ts-check

// @ts-ignore
const withRoutes = require("nextjs-routes/config")();

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["en", "vi"], defaultLocale: "en" },
  reactStrictMode: true,
  experimental: { appDir: true },
};

module.exports = withRoutes(nextConfig);
