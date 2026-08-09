# New Features in al-folio v0.16 (vs your v0.6 from 2022)

Features worth exploring in the new al-folio that you should consider using.

## High Value for Your Site

### Bibliography Search
- Built-in search bar on the publications page — visitors can filter by title, author, venue, year
- Already enabled via `bib_search: true` in `_config.yml`
- Uses `{% include bib_search.liquid %}` (already added to your publications page)

### Teachings Collection
- New `_teachings/` collection with structured course metadata (schedule, topics, materials, instructor, location)
- Could replace your manual teaching page with richer, auto-generated course pages
- Example files in `_teachings/` show the format

### Publication Badges
- Altmetric, Dimensions, Google Scholar, and Inspire HEP citation badges on each publication
- Enabled via `enable_publication_badges` in `_config.yml` (already on)
- Add `google_scholar_id`, `altmetric`, `dimensions` fields to your BibTeX entries

### Publication Thumbnails
- Display preview images next to publications
- Add `preview: image.png` to BibTeX entries, place images in `assets/img/publication_preview/`
- Controlled by `enable_publication_thumbnails: true`

### Author Limit on Publications
- `max_author_limit: 3` shows first 3 authors with a clickable "et al." to expand
- Useful for your multi-author HPC papers

### Site-Wide Search
- Full-text search across all pages and posts
- `search_enabled: true` (already on in config)

### Dark Mode
- Toggle between light/dark themes (currently disabled to match your old site)
- Enable with `enable_darkmode: true` when ready

### Improved CV Page
- New RenderCV YAML format for structured CV data
- Can auto-generate a PDF from the YAML via GitHub Actions
- Your `_data/cv.yml` has been converted to the new format

## Medium Value

### Newsletter Integration
- Add email subscription form via Loops.so
- Configure endpoint in `_config.yml` under `newsletter:`

### Books Collection
- `_books/` collection for book reviews or reading lists
- Built-in book shelf layout

### Google Calendar Embedding
- `{% include calendar.liquid calendar_id='...' %}` on any page
- Could be useful on your teaching or internal pages

### Medium Zoom
- Click-to-zoom on images (already enabled)
- Works automatically on all images

### Progress Bar
- Horizontal scroll progress indicator on long pages (already enabled)

### Related Blog Posts
- Automatic "related posts" at bottom of blog entries
- Based on shared tags

### Open Graph / Social Previews
- Rich link previews when sharing pages on social media
- Enable with `serve_og_meta: true` and set `og_image`

### Cookie Consent (GDPR)
- Built-in GDPR-compliant cookie consent dialog
- Enable with `enable_cookie_consent: true`

## Nice to Have

### Mermaid Diagrams
- Create flowcharts, sequence diagrams in Markdown with ` ```mermaid ` code blocks

### Jupyter Notebook Embedding
- Display notebooks directly in pages

### Audio/Video Embedding
- `{% include audio.liquid %}` and `{% include video.liquid %}` includes

### Docker Development
- `docker-compose.yml` for local development without installing Ruby/Jekyll

### GitHub Profile Stats
- Display GitHub contribution stats and trophies on repositories page
- Configured via `repo_trophies` in `_config.yml`

### Scheduled Posts
- Draft posts in `_drafts/` that publish automatically on a set date via GitHub Actions

### Multiple Analytics Providers
- Beyond Google Analytics: Cronitor, Pirsch, Openpanel

## What Changed from Your Old Setup

| Old (v0.6) | New (v0.16) |
|---|---|
| `.html` includes | `.liquid` includes |
| `_layouts/bib.html` | `_layouts/bib.liquid` |
| Bootstrap 4.6.1 | Bootstrap 4.6 (MDB-based) |
| FontAwesome 5 | FontAwesome via academicons |
| Social links in `_config.yml` | Social links in `_data/socials.yml` |
| `news: true` in about frontmatter | `announcements: enabled: true` |
| `news_scrollable` in config | `scrollable` in about frontmatter |
| `rss_icon` in config | `rss_icon` in `_data/socials.yml` |
| `cv_pdf` in page frontmatter | `cv_pdf` in `_data/socials.yml` |
| Simple CV YAML | RenderCV-style YAML |
| `jekyll-diagrams` plugin | Mermaid via JS |
| No search | Built-in search |
| No bib search | `bib_search` feature |
