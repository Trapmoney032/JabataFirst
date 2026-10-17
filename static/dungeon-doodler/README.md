# DUNGEON DOODLER

A notebook-cyberpunk rogue-lite bullet-heaven built with Phaser 3.80 (Arcade Physics).
Everything is in `index.html`: one file, no build step. All art and sound are generated in code, so the game needs no asset files.

## Run locally
Any static server works, for example:

```sh
npx serve static/dungeon-doodler      # or: python3 -m http.server -d static/dungeon-doodler
```

Opening `index.html` straight from disk also works.

## Deploy
- **Netlify / Vercel:** deploy the `static/dungeon-doodler` folder as a static site (drag-and-drop it, or set it as the publish directory).
- **This Gatsby site:** Gatsby copies `static/` into the build as-is, so the game is served at `/dungeon-doodler/`.

## Controls
| Platform | Move | Other |
| --- | --- | --- |
| Desktop | WASD / Arrow keys (or click-drag) | ESC / P pause, 1-2-3 pick a card, Enter play/retry |
| Mobile | Floating joystick: touch and drag on the left side of the screen | Tap buttons and cards |

Shooting is automatic: the player fires at the closest enemy in range.

## Save data
The save is stored in `localStorage` under `dungeonDoodler_save` and holds coins, shop levels, best run and the sound setting.
