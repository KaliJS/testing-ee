// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
};

module.exports = withSvgr(nextConfig);
