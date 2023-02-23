// @ts-check

const withRoutes = require("nextjs-routes/config")();

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  basePath: "/portfolio-v3",
};

module.exports = withRoutes(nextConfig);
