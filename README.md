# fangchengji.github.io

Personal site of Fangcheng Ji (Felix) — autonomous driving perception · VLA · E2E · BEV.
Static, self-contained (no external CSS/JS/CDN), bilingual (EN / 中文 toggle).

- Homepage: <https://fangchengji.github.io/>
- Résumé: `assets/Felix-resume-v0.4.3.pdf` (phone number removed)

## Structure

```
index.html            single page: hero · experience · highlights · education · expertise · milestones · contact
404.html              custom not-found page
assets/css/style.css  all styling
assets/js/site.js     EN/中文 toggle + section highlight (data-en / data-zh attributes)
assets/img/           favicon (inline SVG) and myphoto.jpg (optional avatar, see below)
```

## Editing

Text lives in `index.html`. Translated nodes carry both `data-en="…"` and
`data-zh="…"`; the element's own text content is the English default. Keep the two
counts equal, or a missing pair silently stays English when switching.

To use a photo as the avatar, save it as `assets/img/myphoto.jpg`; without the
file the site shows the gradient "F" monogram instead.

## Publish

```bash
./publish.sh "what changed"      # git add -A && commit && push
```

GitHub Pages rebuilds in ~30s. `main` branch, repo root, no build step
(`.nojekyll` keeps the files byte-for-byte as committed).

## Verify

```bash
bash deploy/verify_pages.sh      # external check: every route 200, bogus path 404,
                                 # local-vs-published checksums, no phone in page or CV
```

The script ends with `RESULT: ALL_200` when the published site matches the working
copy. `deploy/` is gitignored on purpose (it holds the pre-redaction résumé and the
retired nginx config), so it is never published.

## History

Was self-hosted on a Tencent Cloud VPS behind nginx (IP access, no ICP filing).
Moved to GitHub Pages in 2026-10; the VPS web service was stopped and removed.
The old nginx config and the pre-redaction résumé live in the gitignored
`deploy/` directory.
