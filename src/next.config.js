/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack");
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // module: {
  //   rules: [
  //       {
  //           loader: 'babel-loader',
  //           test: /\.jsx?$/,
  //           exclude: /src/pages
  //       }
  //   ]
  // },
  // webpack: (config) => {
  //   config.resolve.alias["@"] = path.resolve(__dirname);
  //   config.plugins.push(new Dotenv({ silent: true }));
  //   return config;
  // },
};