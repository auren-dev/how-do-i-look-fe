/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@use "src/styles/utils.scss" as *;`,
  },
  webpack: (config) => {
    config.resolve.alias['@app'] = path.resolve(__dirname, 'src/app');
    config.resolve.alias['@styles'] = path.resolve(__dirname, 'src/styles');
    config.resolve.alias['@libs'] = path.resolve(__dirname, 'src/libs');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
      {
        protocol: 'https',
        hostname: 'sprint-be-project.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
    ],
  },
}
