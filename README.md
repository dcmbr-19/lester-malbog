# Olive Web Agency — Website

A static, no-build-tool website for Olive Web Agency. Plain HTML/CSS/JS — push it to GitHub and it's ready for GitHub Pages, or any static host.

## Structure

```
index.html              Homepage
portfolio.html          Full portfolio page with filters
css/style.css           All styles (colors, type, layout)
js/main.js              Nav behavior, scroll reveal, portfolio rendering
js/portfolio-data.js    ← Edit this file to add new portfolio builds
assets/logo.svg         Logo mark (icon only)
assets/logo-full.svg    Logo lockup (mark + wordmark)
assets/favicon.svg      Browser tab icon
assets/portfolio/       Put project screenshots here
```

## Adding a new portfolio build

Open `js/portfolio-data.js` and copy one of the existing entries inside the `PORTFOLIO_ITEMS` array, then edit the values:

```js
{
  title: "Client or Project Name",
  category: "WordPress",      // WordPress, Elementor, Beaver Builder, Divi, GoHighLevel, or Front-End
  summary: "One or two sentences about the build.",
  image: "assets/portfolio/project-name.jpg", // or "" for a placeholder tile
  url: "https://the-live-site.com",
  featured: true               // true = also shows on the homepage
}
```

Save the file — both the homepage preview and `portfolio.html` update automatically, no other edits needed.

## Publishing with GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — GitHub will give you a live URL a minute or two later.

## Customizing

- **Colors**: all defined as CSS variables at the top of `css/style.css` under `:root`.
- **Copy**: edit directly in `index.html` and `portfolio.html`.
- **Contact info**: search for the email/phone in both HTML files and the footer to update in one pass.

## Language toggle (English / Japanese)

The site includes a built-in EN / JA switch — no page reload, no separate
Japanese copy of the site to maintain.

- **UI**: a pill-shaped radio toggle in the nav (`EN` / `JA`), styled to
  match the existing olive design system.
- **Engine**: `js/i18n.js` holds all translated strings in one
  `TRANSLATIONS` object (`en` and `ja`) and swaps text across the page
  based on `data-i18n`, `data-i18n-html`, and `data-i18n-attr` attributes
  already added to `index.html` and `portfolio.html`.
- **Persistence**: the chosen language is saved in `localStorage`, so it
  stays selected as visitors move between pages.
- **Portfolio data**: `js/portfolio-data.js` includes a `summary_ja`
  field alongside the existing English `summary` for each project.
  `js/main.js` picks whichever matches the active language when
  rendering the portfolio grid, and re-renders automatically when the
  toggle is switched (via the `owa:langchange` event).

### Adding a new translated string

1. Add `data-i18n="my.key"` (or `data-i18n-html="my.key"` if the text
   contains a nested tag like `<span>` or `&amp;`) to the HTML element.
2. Add `'my.key': '...'` to **both** the `en` and `ja` blocks in
   `js/i18n.js`.

### Adding a new page

Load `js/i18n.js` before `js/main.js`, mark up translatable text with
`data-i18n` attributes, and add the corresponding keys to the
dictionary — everything else (persistence, the toggle UI, live
re-rendering) is already wired up.
