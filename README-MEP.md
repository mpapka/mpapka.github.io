# MEP Website v2

Personal academic website for Michael E. Papka, built on [al-folio v0.16.3](https://github.com/alshedivat/al-folio).

- **Live site:** [mpapka.github.io](https://mpapka.github.io)
- **Source repo:** [github.com/mpapka/MEPWebsite2](https://github.com/mpapka/MEPWebsite2)
- **Upstream:** [github.com/alshedivat/al-folio](https://github.com/alshedivat/al-folio)

## Branch Workflow

- `dev` — working branch, all changes go here
- `main` — production, merges via PR trigger deploy to `mpapka.github.io`
- `upstream` remote tracks al-folio for future syncs

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Site available at http://127.0.0.1:4000
```

## Syncing with Upstream al-folio

```bash
git fetch upstream
git merge upstream/main
# Resolve conflicts only in files listed in the changelog below
bundle exec jekyll serve  # test locally
```

## Changelog: Modifications from al-folio v0.16.3

Everything below documents what was changed from the stock al-folio template. If starting fresh from a newer al-folio version, re-apply these changes.

### _config.yml

| Setting | al-folio Default | MEP Value |
|---|---|---|
| `title` | `blank` | `Michael E. Papka` |
| `first_name` / `middle_name` / `last_name` | `You R. Name` | `Michael E. Papka` |
| `contact_note` | generic | `The best way to reach me is via email.` |
| `keywords` | `jekyll, jekyll-theme...` | `hpc, data, education` |
| `icon` | ⚛️ | `mepascii.png` |
| `url` | `https://alshedivat.github.io` | `https://mpapka.github.io` |
| `baseurl` | `/al-folio` | (blank) |
| `last_updated` | `false` | `true` |
| `max_width` | `930px` | `1000px` |
| `google_analytics` | (blank) | `G-RDB7MC9C75` |
| `enable_google_analytics` | `false` | `true` |
| `blog_name` | `al-folio` | (blank) |
| `scholar.last_name` | `[Einstein]` | `[Papka]` |
| `scholar.first_name` | `[Albert, A.]` | `[Michael E.]` |
| `max_author_limit` | `3` | (blank — show all) |
| `enable_darkmode` | `true` | `false` |
| `enable_navbar_social` | `false` | `true` |
| `serve_og_meta` | `false` | `true` |
| `serve_schema_org` | `false` | `true` |
| `display_categories` (projects) | `[work, fun]` | `[active, past]` |
| `news permalink` | (none) | `/news/:path/` |
| `projects permalink` | (none) | `/projects/:path/` |

### _data/socials.yml

Replaced al-folio demo values with:
- `email: papka@uic.edu`
- `github_username: mpapka`
- `scholar_userid: pQwfBFwAAAAJ`
- `linkedin_username: michaelpapka`
- `orcid_id: 0000-0002-6418-5767`
- `research_gate_profile: Michael-Papka`
- `spotify_id: mrpizza1967`
- `cv_pdf: /assets/pdf/mepcv.pdf`
- Removed: `mastodon_username`, `inspirehep_id`, `rss_icon`, `custom_social`

### _data/cv.yml

Replaced Einstein demo with full CV:
- Education: UChicago PhD/MS, UIC MS, NIU BS (with dissertation/thesis titles)
- Experience: UIC (McCulloch Professor), Argonne (Distinguished Fellow, Crabtree Institute, ALCF Director, DALB, Research Scientist), UChicago, NIU, IIT
- Executive Education: Harvard, Booth, Stanford d.school
- 25+ awards (Gordon Bell, Secretary of Energy, Best Papers, etc.)

### _data/citations.yml

Generated from Google Scholar profile `pQwfBFwAAAAJ` using `_bibliography/fetch_scholar_ids.py`. Contains citation counts for 378 papers.

### _data/repositories.yml

Changed `github_users` to `[mpapka, alshedivat]`.

### _sass/_themes.scss

| Variable | al-folio Default | MEP Value |
|---|---|---|
| `--global-theme-color` | `$purple-color` | `$red-color-dark` (#B71C1C) |
| `--global-hover-color` | `$purple-color` | `$red-color-dark` (#B71C1C) |

### _sass/_variables.scss

| Variable | al-folio Default | MEP Value |
|---|---|---|
| `$code-bg-color-light` | `rgba($purple-color, 0.05)` | `rgba($red-color-dark, 0.05)` |

### _sass/_publications.scss

- `.links a.btn`: changed to red outline style (`color` and `border` use `--global-theme-color`, hover fills with theme color)
- `.title`: added `display: inline`
- `.author`: added `display: inline`
- `.periodical`: added `display: inline`

### _layouts/bib.liquid

- Changed from stacked layout (Title → Author → Journal) to **compact inline** (Author, **Title**, *Journal*, Year)
- Changed `<div class="title">` and `<div class="author">` to inline `<span>` elements
- Changed `<div class="periodical">` to `<span class="periodical">`
- Added **Copy button** to BibTeX blocks with clipboard API and "Copied!" feedback

### _layouts/course.liquid

- Added conditional column rendering: Week, Date, and Materials columns only appear if any entry has data for them
- Added blank check for `location` and `time` fields so they don't render when empty

### _includes/course_schedule.liquid

- Same conditional column rendering as `course.liquid` (for when courses are embedded via include)

### _pages/ (Modified)

| Page | Changes |
|---|---|
| `about.md` | Personal bio, profile image, `announcements` config, `latest_posts: false` |
| `publications.md` | Year-by-year listing with bib search, years 1993-2025 |
| `projects.md` | `display_categories: [active, past]`, nav_order 1 |
| `students.md` | New page — full student roster (current + alumni) |
| `teaching.md` | Links to `_teachings/` collection pages, nav_order 4 |
| `internal.md` | New page — lab resources and machine inventory |
| `news.md` | Added `nav: true`, nav_order 5 |
| `cv.md` | `nav: true`, nav_order 7, `cv_pdf: mepcv.pdf` |
| `blog.md` | nav_order 6 |
| `repositories.md` | `nav: false` |

### _pages/ (Removed)

- `about_einstein.md`, `dropdown.md`, `profiles.md`, `books.md`

### _teachings/ (New — replaced courses/)

All courses converted from plain markdown in `courses/` to structured `_teachings/` collection:

- `cs494-edge-computing.md` — Edge Computing Systems (UIC)
- `cs427-creative-coding.md` — Creative Coding (UIC)
- `cs455-hpc.md` — Intro to HPC (UIC)
- `cs340-data-structures.md` — Data Structures (NIU)
- `cs559-virtual-reality.md` — Intro to VR (NIU)
- `cs600-big-ideas.md` — Big Ideas in CS (NIU)
- `cs627-data-visualization.md` — Data Visualization (NIU)
- `cs628-information-visualization.md` — Information Visualization (NIU)

Removed al-folio demos: `data-science-fundamentals.md`, `introduction-to-machine-learning.md`

### _bibliography/papers.bib

- Added `google_scholar_id` field to 265 entries (via `fetch_scholar_ids.py`)
- All entries have `bibtex_show`, `dimensions`, `altmetric` fields

### _bibliography/ (New utility scripts)

- `fetch_scholar_ids.py` — fetches Google Scholar paper IDs and adds them to papers.bib
- `scholar_id_mapping.json` — mapping of bib keys to Google Scholar IDs

### .github/workflows/deploy.yml

- Modified to deploy to `mpapka/mpapka.github.io` repo (not gh-pages branch)
- Requires `DEPLOY_TOKEN` secret (see `DEPLOY_SETUP.md`)
- Triggers only on push to `main`

### Content (Added)

| Directory | Count | Description |
|---|---|---|
| `_news/` | 72 items | News items (2022-2025) |
| `_projects/` | 10 projects | Research projects with categories |
| `assets/img/` | ~40 images | Profile pic, project logos, photos |
| `assets/pdf/` | Multiple | Course evals, posters, talks, CV |
| `internal/` | 1 page | Password-protected lab resources |
| `favicon.ico` | 1 | Custom favicon |
| `apple-touch-icon*.png` | 2 | iOS icons |

### Content (Removed)

- All al-folio demo blog posts (`_posts/`)
- Al-folio demo projects (`_projects/1_project.md` through `9_project.md`)
- Al-folio demo news announcements
- `_books/` demo content
- `courses/` directory (replaced by `_teachings/`)

### .gitignore

Added: `.claude/`, `CLAUDE.md`, `AGENTS.md`

### Other Files Added

- `CUSTOMIZATIONS.md` — best practices for keeping customizations separated from upstream
- `DEPLOY_SETUP.md` — instructions for setting up the deploy token
- `newfeatures.md` — overview of new al-folio features vs the old site
