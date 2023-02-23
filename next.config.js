// @ts-check

// @ts-ignore
const withRoutes = require("nextjs-routes/config")();

// @ts-ignore
const { withGlobalCss } = require("next-global-css");
const withGlobalCssConfig = withGlobalCss();

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  basePath: "/portfolio-v3",
  i18n: { locales: ["en", "vi"], defaultLocale: "en" },
};

module.exports = withGlobalCssConfig(withRoutes(nextConfig));
