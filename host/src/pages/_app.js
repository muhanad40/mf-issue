import "@/styles/globals.css";

import { init } from "@module-federation/runtime";

const runtimePlugin = function () {
  return {
    name: "my-runtime-plugin",
    beforeRequest(args) {
      let isServer = !globalThis["document"];

      if (isServer) {
        // Need to replace 'chunks' with 'ssr' in the entry URL for SSR
        args.options.remotes[0].entry = args.options.remotes[0].entry.replace(
          "chunks",
          "ssr"
        );
      }
      return args;
    },
  };
};

init({
  name: "hostapp/hostapp",
  remotes: [
    {
      name: "componentsremote",
      entry: `http://localhost:3003/_next/static/chunks/remoteEntry.js`,
      alias: "componentsremote",
    },
  ],
  force: true,
  plugins: [runtimePlugin()],
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
