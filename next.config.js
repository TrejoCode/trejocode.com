/**
 * @description Configuración personalizada para el servidor y las fases de build
 */

/** @type {import('next').NextConfig} */

// Funciones de reescritura compatibles con splitbee analytics
const rewrites = async () => [
  {
    source: '/bee.js',
    destination: 'https://cdn.splitbee.io/sb.js',
  },
  {
    source: '/_hive/:slug',
    destination: 'https://hive.splitbee.io/:slug',
  },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites,
};

module.exports = nextConfig;
