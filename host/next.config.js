const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "hostapp",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          componentsremote: `componentsremote@http://localhost:3003/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
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
