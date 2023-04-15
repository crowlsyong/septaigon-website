/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
    plugins: [
      twindPlugin({
        preflight: {
          "@font-face": [
            {
              fontFamily: "Poppins",
              src: 'url(/fonts/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format("woff2")',
            },
            {
              fontFamily: "Poppins",
              fontWeight: "bold",
              src: 'url(/fonts/pxiByp8kv8JHgFVrLDD4Z11lFd2JQEl8qw.woff2) format("woff2")',
            },
          ],
          
        },
          ...twindConfig,
        }),
    ],
});