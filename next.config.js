const path = require('path');
const { ipv4Addresses } = require('./_deploy/get-localhost-ip');
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });


const isProdEnv = process.env.NODE_ENV === 'production'
const HOST_URL = isProdEnv ? process.env.PROD_HOST_URL : process.env.DEV_HOST_URL
const GRAPHQL_API_URL = isProdEnv ? `${process.env.BACKEND_URL}/graphql` : `${ipv4Addresses[1]}:4000/graphql`
const BACKEND_URL = isProdEnv ? process.env.BACKEND_URL : 'localhost'

module.exports = {
  reactStrictMode: true,
  outputFileTracing: false,
  sassOptions: {
    includedPaths: [path.join(__dirname, 'styles')],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    HOST_URL,
    GRAPHQL_API_URL,
    BACKEND_URL,
    PORT: '3000',
    BACKEND_LOCAL_PORT: '4000'
  },
  output: 'standalone',
  // images: {
  //   deviceSizes: [380, 430, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // },
};
