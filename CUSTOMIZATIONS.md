# Al-Folio Customization Best Practices

Guidelines for keeping the site easy to sync with upstream al-folio.

## Core Principle

Keep customizations as separated from al-folio's code as possible. The less you edit upstream files, the easier future merges will be.

## Rules

### 1. Track Upstream as a Remote

```bash
git remote add upstream https://github.com/alshedivat/al-folio.git
```

Periodic syncs become:

```bash
git fetch upstream
git merge upstream/master
```

Conflicts will be limited to the few files you actually modified.

### 2. Prefer Config Over Code

Before editing a layout or include file, check if the behavior you want is already available via `_config.yml`. Newer al-folio versions have many configurable options. A config change never causes a merge conflict.

### 3. Put All Custom CSS in One File

Create `_sass/_custom.scss` for all your styling changes. Import it from the main stylesheet. Never edit `_base.scss`, `_themes.scss`, or `_variables.scss` directly — upstream changes to those files will conflict.

### 4. Minimize Layout/Include Edits

- If you must override a layout or include, copy it and note the original version at the top of the file with a comment (e.g., `<!-- Customized from al-folio v0.14.0 -->`).
- Prefer CSS-only solutions over HTML structure changes.
- The biggest pain point in the v1 site was `_layouts/bib.html` — check if the latest al-folio's bib layout and Jekyll Scholar config options cover your needs before customizing.

### 5. Keep Custom Collections Cleanly Separated

Custom directories like `courses/`, `_students/`, and `internal/` are yours alone and will never conflict with upstream. This is the safest place for custom content.

### 6. Content Directories Are Safe

These are your content and won't conflict with upstream:

- `_bibliography/` (papers.bib, scripts, student bibs)
- `_news/`
- `_projects/`
- `_pages/`
- `_posts/`
- `_data/`
- `assets/img/`, `assets/pdf/`

### 7. Document Every Upstream File You Modify

Maintain the list below. When merging upstream updates, these are the only files that need manual attention.

## Modified Upstream Files

| File | What Changed | Can It Be Avoided? |
|---|---|---|
| `_config.yml` | Personal info, social links, collections, max_width, analytics | No — but conflicts are easy to resolve |
| `_layouts/bib.html` | Custom bibliography rendering | Check if new al-folio covers your needs |
| `_layouts/about.html` | Minor tweaks | Possibly via config/CSS |
| `_layouts/page.html` | Minor tweaks | Possibly via config/CSS |
| `_includes/news.html` | Custom news display | Check new al-folio options |
| `_includes/projects.html` | Added customizations | Check new al-folio options |
| `_includes/projects_horizontal.html` | Added customizations | Check new al-folio options |
| `_includes/selected_papers.html` | Minor tweaks | Possibly via config |
| `_sass/_base.scss` | +164 lines custom CSS | Move to `_custom.scss` |
| `_sass/_layout.scss` | Small additions | Move to `_custom.scss` |
| `_sass/_themes.scss` | Color tweaks | Move to `_custom.scss` |
| `_sass/_variables.scss` | Variable customizations | Move to `_custom.scss` |
| `Gemfile` | Modified dependencies | Minimize changes |

## New Files (No Conflict Risk)

- `_layouts/selected_bib.html`
- `_layouts/student.html`
- `_includes/news-old.html`
- `courses/*.md`
- `internal/`
- `_students/`

## Sync Workflow

1. `git fetch upstream`
2. `git merge upstream/master`
3. Resolve conflicts only in files listed in the table above
4. Test locally with `bundle exec jekyll serve`
5. Update the table above if new files were modified
