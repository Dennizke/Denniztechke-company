# EE × DEV — Personal Portfolio

Personal portfolio website for an Electrical & Electronic Engineer turned
self-taught web developer.

---

## File Structure

```
portfolio/
├── index.html        ← markup & content
├── css/
│   └── style.css     ← all styles & design tokens
├── js/
│   └── main.js       ← scroll effects, fade-ins, form handler
└── README.md
```

---

## How to Run Locally

No build tools or dependencies required.

1. Clone or download the repo
2. Open `index.html` in any modern browser

That's it.

---

## Personalising

| What to change | Where |
|---|---|
| Your name / logo text | `index.html` → `<nav>` and `<footer>` |
| Hero headline / subline | `index.html` → `#hero` section |
| Bio text | `index.html` → `#about` section |
| Profile photo | Replace `[ photo ]` span with `<img src="images/photo.jpg" alt="..." />` |
| Project titles & descriptions | `index.html` → `#projects` section |
| Project links (Live Demo / Code) | `index.html` → `href="#"` on each `.btn-filled` / `.btn-ghost` |
| Social links | `index.html` → `.contact-links` in `#contact` |
| Email address | `index.html` → `mailto:` link in `#contact` |
| Accent colours | `css/style.css` → `:root` variables `--accent` and `--accent2` |

---

## Deploying to GitHub Pages

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/portfolio`

---

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, Grid, Flexbox, animations)
- Vanilla JavaScript (no frameworks)
- Google Fonts — Space Mono + Syne

---

> "Don't just make it work. Make it efficient."
