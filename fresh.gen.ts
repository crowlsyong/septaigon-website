// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_404.tsx";
import * as $2 from "./routes/_500.tsx";
import * as $3 from "./routes/api/joke.ts";
import * as $4 from "./routes/audioplayerpage.tsx";
import * as $5 from "./routes/components.tsx";
import * as $6 from "./routes/index.tsx";
import * as $7 from "./routes/search.tsx";
import * as $$0 from "./islands/AudioPlayer.tsx";
import * as $$1 from "./islands/Contact.tsx";
import * as $$2 from "./islands/Counter.tsx";
import * as $$3 from "./islands/SearchBar.tsx";
import * as $$4 from "./islands/StartButton.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_404.tsx": $1,
    "./routes/_500.tsx": $2,
    "./routes/api/joke.ts": $3,
    "./routes/audioplayerpage.tsx": $4,
    "./routes/components.tsx": $5,
    "./routes/index.tsx": $6,
    "./routes/search.tsx": $7,
  },
  islands: {
    "./islands/AudioPlayer.tsx": $$0,
    "./islands/Contact.tsx": $$1,
    "./islands/Counter.tsx": $$2,
    "./islands/SearchBar.tsx": $$3,
    "./islands/StartButton.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
