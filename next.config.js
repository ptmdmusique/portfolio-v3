const withRoutes = require("nextjs-routes/config")();

const { withGlobalCss } = require("next-global-css");
const withGlobalCssConfig = withGlobalCss();

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["en", "vi"], defaultLocale: "en" },
};

module.exports = withRoutes(withGlobalCssConfig(nextConfig));
