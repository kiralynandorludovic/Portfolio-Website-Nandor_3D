   # Király Nándor — Portfolio Site

A real, static portfolio site: plain HTML/CSS/JS, no build step, no framework.
Open `index.html` in a browser and it works — or deploy it anywhere (see below).

## What's inside

```
index.html              → all page content and structure
assets/css/style.css    → all styling (colors, type, layout, responsive rules)
assets/js/main.js       → nav menu, carousels, gallery filter + lightbox, contact form
assets/img/             → project renders (see note below)
assets/icons/           → your logo + favicon
```

Everything is commented so you (or any developer) can find things quickly.

## Important: the gallery images are placeholders

The renders currently on the site were pulled from the layout reference file you
shared (`Layout.pdf`) so the site is fully working out of the box — but they're
demo/template imagery, not your actual project files. **Swap them for your own
renders before publishing.**

To replace an image:
1. Export your render (JPG, ~1600px on the long edge is plenty for web — much
   smaller than a full-res render, so pages stay fast).
2. Drop it into `assets/img/`, replacing the old file **or** using a new name.
3. If you used a new filename, update the matching `src="assets/img/..."` (and
   `data-full="..."` for the lightbox) in `index.html`. Each project card has
   one `img src` and one `data-full` pointing at the same file — for the main
   gallery grid, one `img src` + `data-full` per tile.
4. Update the `data-title` / `data-by` attributes and the visible caption text
   next to each image to match your real project names.

The three carousels (Product Visualization / Architectural Visualization /
Personal Art) and the big filterable Gallery section pull from the same image
files, so you can reuse one export in both places, or use different ones.

## Editing text

All copy lives directly in `index.html` — About section, section descriptions,
contact details, social links. Search for the text you want to change and
edit it directly; no templating system to fight with.

The "Featured Clients" section from the layout reference was intentionally
left out, since I didn't have real client names to put there — it would have
meant inventing companies you haven't actually worked with. In its place is a
simple tools/focus strip (Blender, Substance, etc.) — edit or remove the
`.tools` block in `index.html` freely, or turn it back into a client logo
strip once you have real logos to show (just drop images into `assets/img/`
and swap the text spans for `<img>` tags).

## Contact form

The form is fully built (validation, states, sending) but needs a backend to
actually deliver email, since a static site can't send mail on its own. The
easiest option:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form — they'll give you an endpoint like
   `https://formspree.io/f/abc123`.
3. Open `assets/js/main.js`, find `FORM_ENDPOINT` near the bottom, and paste
   your endpoint in.
4. Done — submissions arrive in your inbox.

Until that's set up, the form shows a friendly message pointing people to your
email link instead, so nothing breaks.

## Social links

The social icons in the Contact section (`Instagram`, `Facebook`, `ArtStation`,
`Behance`, `LinkedIn`, `YouTube`) currently link to `#`. Search for
`aria-label="Instagram"` (etc.) in `index.html` and replace the `href="#"`
with your real profile URLs.

## Deploying

No build step needed — this is already a finished static site. Easiest free
options:

- **Netlify / Vercel**: drag the whole `site` folder onto their dashboard.
- **GitHub Pages**: push this folder to a repo and enable Pages in settings.
- Any regular web host: upload the folder via FTP.

## Browser support / accessibility notes

- Fully responsive from ~360px phones up to large desktop screens.
- Keyboard accessible: nav menu, filters, and the lightbox (arrow keys + Esc)
  all work without a mouse.
- Respects `prefers-reduced-motion` for people who've turned down motion
  system-wide.
- Fonts are loaded from Google Fonts (Space Grotesk, Inter, IBM Plex Mono).
  If you'd rather self-host them, download the families and update the
  `<link>` tags in `index.html`.
