# vladana-perlic.github.io

This is the source for Vladana Perlić’s portfolio and literary archive, published at [vladana-perlic.github.io](https://vladana-perlic.github.io/).

- **Live site:** https://vladana-perlic.github.io/
- **Main file:** [index.html](index.html)
- **How to preview locally:**
  1. Run `python -m http.server 8000` in the project folder.
  2. Open [http://localhost:8000/](http://localhost:8000/) in your browser.

**Design and navigation:**
- A shared writer/researcher introduction, selected credentials, and two audience paths.
- Research papers with titles and publication status first; full citations expand on demand.
- Writing with books and a poem reader; translations, international publications, awards, prose, and readings expand on demand.
- Compact archives for news, press, beta reading, and the copyable author bios and press photo.
- Separate scholar/author CVs and a shared contact section.

Archive links open the relevant disclosure automatically, including direct fragment links. The reader, image lightbox, copy controls, and email reveal remain available. Beta reading is an inline invitation rather than a timed popup. The layout uses system fonts, a restrained cream/green palette, and responsive grids with visible keyboard focus and reduced-motion support.

All content is static, privacy-respecting, and designed for clarity and discoverability.

## Visitor analytics

The site uses [GoatCounter](https://www.goatcounter.com/): free, open source, cookie-free, and no consent banner needed.

1. Sign up at goatcounter.com and choose a code (e.g. `vladana` → `https://vladana.goatcounter.com`).
2. In `index.html`, set `const GOATCOUNTER_CODE = "vladana";` (near the top of `<head>`). While empty, nothing is loaded.
3. Stats appear in your GoatCounter dashboard. Local previews (`localhost`, `file://`) are not counted.

Besides page views, these events are counted (dashboard names in brackets):
- poems opened in the reader (`poem-…`)
- CV opens (`cv-scholar`, `cv-author`)
- email reveals and copies (`contact-email-reveal`, `contact-email-copy`)
- author bio copies (`bio-copy-…`) and press photo downloads (`download-press-photo`)
- outbound clicks such as papers, publishers, Goodreads, and press (`ext-<domain>`)
- collapsed archive sections opened (`archive-…`)

## Folder layout

```
index.html                  the whole site (HTML, CSS, JS)
data/
  site/                     banner, profile/press photos, favicon, link-preview image
  cv/                       Scholar CV and Author CV (PDF)
  images/
    books/                  book covers
    publications/           anthology, magazine and journal covers
    photos/                 readings, awards, residencies (named YYYY-event.jpg)
  poems/<language>/         poem texts (.txt / .docx / .jpg) shown in the poem reader
_source/                    local-only originals and archived drafts (git-ignored)
```

When adding or renaming a file, update its path in `index.html`. GitHub Pages is case-sensitive, so keep names lowercase where possible.