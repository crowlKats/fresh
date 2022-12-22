// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/components.tsx";
import * as $3 from "./routes/docs/[...slug].tsx";
import * as $4 from "./routes/gfm.css.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/raw.ts";
import * as $7 from "./routes/showcase.tsx";
import * as $8 from "./routes/update.tsx";
import * as $$0 from "./islands/ComponentGallery.tsx";
import * as $$1 from "./islands/CopyArea.tsx";
import * as $$2 from "./islands/Counter.tsx";
import * as $$3 from "./islands/LemonDrop.tsx";
import * as $$4 from "./islands/SearchButton.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/components.tsx": $2,
    "./routes/docs/[...slug].tsx": $3,
    "./routes/gfm.css.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/raw.ts": $6,
    "./routes/showcase.tsx": $7,
    "./routes/update.tsx": $8,
  },
  islands: {
    "./islands/ComponentGallery.tsx": $$0,
    "./islands/CopyArea.tsx": $$1,
    "./islands/Counter.tsx": $$2,
    "./islands/LemonDrop.tsx": $$3,
    "./islands/SearchButton.tsx": $$4,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
