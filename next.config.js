// @ts-check

const withRoutes = require("nextjs-routes/config")();

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  basePath: "/portfolio-v3",
  i18n: { locales: ["en", "vi"], defaultLocale: "en" },
};

module.exports = withRoutes(nextConfig);
