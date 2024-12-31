/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");

module.exports = {
  images: {
   unoptimized: true,
    domains: ['s3.amazonaws.com','api.mlsgrid.com', 'mredllc.media-cs.connectmls.com','https://s3.amazonaws.com','https://test.gmcrealtor.com/'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        pathname: '/mlsgrid/images/**',
      },
    ],
    // loader: 'custom',
    // loaderFile: './src/loader.js',
  },

  output: {
    filename: 'bundle.js',
    libraryTarget: 'standalone', // Set to 'standalone'
  },
};
