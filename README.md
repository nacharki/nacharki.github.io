# nacharki.github.io

Personal site of Naoufal Acharki, built with Jekyll and hosted on GitHub Pages.

## Where things live

| What | Where |
| --- | --- |
| Experience, education, skills, training, awards | `_data/cv.yml` (used by the home page and `/cv/`) |
| Publications | `_data/publications.yml` |
| Talks | `_data/talks.yml` |
| Case studies | `_portfolio/*.md` (front matter holds role, period, stack and outcomes; the body is the write-up) |
| Contact details, headline, availability | `author:` block in `_config.yml` |
| Navigation | `_data/navigation.yml` |
| Pages | `_pages/*.html` |
| Layouts and includes | `_layouts/`, `_includes/` |
| Styles | `_sass/` (tokens, base, layout, components, one partial per page) compiled from `assets/css/main.scss` |
| Downloadable CV | `files/Naoufal_resume.pdf` (replace the file to update the download link) |

## Editing content

- Add a talk: append an entry to `_data/talks.yml` (newest first).
- Add a publication: append to `_data/publications.yml`; set `selected: true` to show it on the home page.
- Add a case study: copy one of the files in `_portfolio/`, set `order`, and fill in the front matter. Outcomes marked `delta: true` are shown in the accent colour, which the site reserves for measured treatment effects.
- Change a role or metric: edit `_data/cv.yml` once; every page updates.

## Running locally

```
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

On Windows with a recent Ruby you may also need `gem "bigdecimal"` (already in the Gemfile) and `tzinfo-data`.
