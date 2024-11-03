const path = require('path');
const { ipv4Addresses } = require('./_deploy/get-localhost-ip');
// const { ngrokPublicUrl } = require('./_deploy/get-ngrok-public-url');
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });

const isProdEnv = process.env.NODE_ENV === 'production';
const BACKEND_LOCAL_PORT = '4000';
const LOCAL_IP_ADDRESS = ipv4Addresses[1]
const HOST_URL = isProdEnv
  ? process.env.PROD_HOST_URL
  : process.env.DEV_HOST_URL;
const GRAPHQL_API_URL = isProdEnv
  ? `${process.env.BACKEND_URL}/graphql`
  : `http://${LOCAL_IP_ADDRESS}:${BACKEND_LOCAL_PORT}/graphql`;
const BACKEND_URL = isProdEnv
  ? process.env.BACKEND_URL
  : `http://${LOCAL_IP_ADDRESS}:${BACKEND_LOCAL_PORT}`;
const STRIPE_URL = isProdEnv ?
  `${BACKEND_URL}/api/v1/payments/intent` :
  `http://${LOCAL_IP_ADDRESS}:${BACKEND_LOCAL_PORT}/api/v1/payments/intent`;
// const extraOptions = isProdEnv ? { output: 'standalone' } : {};
module.exports = {
  reactStrictMode: false,
  // outputFileTracing: false,
  sassOptions: {
    includedPaths: [path.join(__dirname, 'styles')],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    HOST_URL,
    NEXTAUTH_URL: ngrokPublicUrl,
    GRAPHQL_API_URL,
    BACKEND_URL,
    STRIPE_URL,
    PORT: '3000',
    BACKEND_LOCAL_PORT,
  },
  images: {
    // loader: 'sharp',
    deviceSizes: [380, 430, 640, 750, 828, 1080, 1200],
  },
  // ...extraOptions,
};
