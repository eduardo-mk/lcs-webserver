const path = require('path');
const { ipv4Addresses } = require('./_deploy/get-localhost-ip');
require('dotenv').config({ path: '.env.local' });
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includedPaths: [path.join(__dirname, 'styles')],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    API_BASE_URL: 'http://localhost:4000',
    HOST_URL: process.env.HOST_URL,
    GRAPHQL_API_URL: `http://${ipv4Addresses[1]}:4000/graphql`,
  },
  exclude: ['package-lock.json'],
  output: 'standalone',
  // images: {
  //   deviceSizes: [380, 430, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // },
};
