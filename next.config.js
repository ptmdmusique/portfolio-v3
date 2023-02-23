// @ts-check

const withRoutes = require("nextjs-routes/config")();

const { withGlobalCss } = require("next-global-css");
const withGlobalCssConfig = withGlobalCss();

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["en", "vi"], defaultLocale: "en" },
  experimental: { appDir: true },
};

module.exports = withGlobalCssConfig(withRoutes(nextConfig));
