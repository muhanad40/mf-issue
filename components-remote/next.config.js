const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "componentsremote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./MyComponent": "./src/components/myComponent.js",
        },
        shared: {
          "styled-components": {
            singleton: true,
          },
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
