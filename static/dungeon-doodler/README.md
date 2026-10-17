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

## Game feel
- **Combo chain:** each kill within 2.2 s of the last one keeps the combo going. Every link adds +0.5% attack speed (up to +30%), and combos of 10, 25, 50, 100 and more trigger a banner, a shockwave and a jingle.
- **Floating combat text:** damage numbers pop up oversized, hop upward and fade. Critical hits show `CRIT!` in magenta and give the camera a small shake.
- **XP magnet:** gems hop slightly away, then accelerate into the player.
- **Level-up:** the game slows almost to a stop while the camera zooms in and the screen flashes. Then code rain falls behind three cards, which flip over one at a time.
- **Damage feedback:** a 100 ms camera shake and a neon-pink flash at the screen edges.
- Projectiles leave neon ink trails, the player leaves a glow trail, and blobs burst into a shower of XP gems.

## Save data
The save is stored in `localStorage` under `dungeonDoodler_save` and holds coins, shop levels, best run and the sound setting.
