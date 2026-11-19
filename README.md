# NEON COAST — Vice Cover Studio

A make.fun entry for **gta6-cover-art-01** ("Make GTA 6 Cover Art").

NEON COAST is a fully offline web app that turns your own photos and a caption
into GTA-style multi-panel cover art, exported as a PNG. Drop in a photo, pick
a panel layout and a colour grade, set the caption, and export — no uploads, no
account, no network. Your photos never leave the device.

## What it does

- **Poster Ink illustrated grade** — the default look is not a photo tint: each
  panel is gradient-mapped, saturation-lifted, posterized to six flat colour
  levels and finished with Sobel ink edges, so photos read as illustrated key
  art. Six more grades sit beside it: Vice Sunset, Neon Nights, Golden Hour,
  Teal Heat, Noir Ink (hard 4-level near-mono) and Pastel Vice.
- **Nine-panel cover grid** — the Mosaic 9 layout leads six layouts in all:
  Grid 6, Hero Strip (tall hero + stack), Duo Split (diagonal pair), Full
  Bleed and Tilted Shots (rotated snapshots with white frames).
- **Four sample photos built in** — boulevard, pier, rooftop and friends shots
  ship with the app, and panels are assigned distinct photos cycling the
  library, so a fresh cover never repeats a photo until the library runs out.
  Your own photos join the same library by file picker or drag-and-drop.
- **Per-panel crop and zoom** — click any panel to select it, drag on the
  preview to reposition its photo, zoom from 1× to 2.4×, or swap its photo.
- **Export all post sizes at once** — 1920×1080 landscape, 1080×1080 square,
  1080×1350 portrait and 1080×1920 story, one at a time or all four in a row.
- **Undo / redo** — a 50-step history covers every change, plus a shuffle for
  happy accidents.
- **Drawn lettering** — the halftone title block, gradient condensed title,
  neon script subtitle, five-star heat meter and round NEON COAST badge are
  all drawn on canvas. No Rockstar artwork, logos, characters or fonts; the
  look is an original homage.
- **Fully offline** — plain static files and ES modules; no libraries, no
  network requests, no build step.

## Run it

Serve the `app/` folder with any static file server and open it in a desktop
browser, e.g.:

```
python3 -m http.server 8080 --directory app
# then open http://localhost:8080
```

Screenshot scenes are built in for the entry's screenshots: `?shot=cover`,
`?shot=portrait` and `?shot=square` render a canned cover full-frame at its
export size.

## Handing it in

`node main.ts` copies `app/` and `screenshots/` to the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`) and writes `dossier.json` with the
vendored make.fun library in `vendor/makefun-app.ts`.

[![Live leaderboard](https://make.fun/api/competitions/gta6-cover-art-01/badge.svg?field=leaderboard)](https://make.fun/bounty/gta6-cover-art-01)
[![Dev grade](https://make.fun/api/competitions/gta6-cover-art-01/badge.svg?field=grade)](https://make.fun/bounty/gta6-cover-art-01)
[![make.fun](https://make.fun/api/competitions/gta6-cover-art-01/badge.svg?field=brand)](https://make.fun/bounty/gta6-cover-art-01)
