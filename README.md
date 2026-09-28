# Vantage Infrastructure and Energy Ltd — Website

Open `index.html` in a browser, or upload the whole folder to your web host.

## Folder structure

```
vantage-website/
├── index.html                 Home page
├── footprint-map.html         Interactive map (embedded on Home)
├── robots.txt
├── assets/
│   ├── css/
│   │   └── tokens.css         Design tokens (colours, type, spacing, shadows)
│   ├── js/
│   │   ├── support.js         Page runtime (required)
│   │   └── image-slot.js      Image component (required)
│   └── images/
│       ├── brand/             Logos, mark, favicon
│       ├── hero/              Hero slideshow images (1920px)
│       ├── projects/          Project gallery (38 images)
│       ├── partners/          Client & partner logos (32)
│       └── sectors/           Sector icons (11)
└── config/
    └── tailwind.config.js     Tailwind theme matching tokens.css
```

## Images

- All images are WebP; text overlays from profile pages were cropped out (quality ~80%), roughly 60–75% smaller than the source PNGs.
- File names are lowercase, hyphenated and descriptive, prefixed `vantage-` for search relevance.
- Hero images are 1920px wide; project photos 1000px; logos keep transparency.

## Notes

- The page needs an internet connection for Google Fonts and the map data (d3 / world-atlas CDN).
- Some partner logos have placeholder names (`partner-seal`, `partner-coat-of-arms`, `partner-municipality`, `roads-authority`). Rename them once identified.
