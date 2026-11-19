# Eddy marketing

Static marketing site for https://eddy.bondoc.cloud. No build step, dependencies, analytics, or third-party fonts. The browser demo reproduces the first Campaign level; it does not implement Endless wakes.

## Preview

Run `python3 -m http.server 8080` here, then open http://localhost:8080. Root-relative links assume the custom domain or a server root.

## Formatting

Keep HTML, CSS, and JavaScript readable in source control. From this directory, run:

```sh
bunx prettier@3.8.3 --write index.html privacy/index.html support/index.html terms/index.html 404.html style.css demo.js .prettierrc.json
```

Use `--check` instead of `--write` to verify formatting. The sitemap uses two-space XML indentation. Formatting requires Bun and an initial package download; the site itself still has no build step.

## Publish

Push to `main` when ready. In GitHub → Settings → Pages, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Set custom domain `eddy.bondoc.cloud` and enable HTTPS once available. CNAME and .nojekyll are included.

Cloudflare DNS: `eddy` CNAME `rodxavier.github.io`, DNS only. Optional `www.eddy` CNAME to the same hostname. Do not change apex records.

## Launch checklist

- Verify the site in Google Search Console, submit `/sitemap.xml`, and inspect the homepage for indexing.
- Keep page metadata and homepage structured data aligned with visible content; keep the App Store link current and add Google Play availability when released.
- Replace the Android Coming soon copy with the actual Google Play link at launch; do not invent store links or announce availability before release.
- Verify /privacy/, /support/, /terms/, /app-ads.txt and HTTPS after deployment.
- Use https://eddy.bondoc.cloud as the App Store marketing URL and the corresponding support/privacy paths.
- Verify AdMob can discover app-ads.txt from the App Store developer website; subdomain crawling may require additional setup on bondoc.cloud.
- Keep the support, privacy, and terms text aligned with the app when behavior changes.

The social image is a branded website preview.

## Search and sharing

Each page has a distinct title, description, canonical URL, and Open Graph metadata. Public pages include matching Twitter cards; the shared image is 1200×630. Homepage SoftwareApplication data describes iOS, Android, and supported features. It does not fabricate store availability, ratings, reviews, or download links. The 404 page is noindex; robots.txt permits crawling and points to the sitemap.

The Google Play website and privacy URLs are `https://eddy.bondoc.cloud/` and `https://eddy.bondoc.cloud/privacy/`; support email is `rod@bondoc.cloud`. The iOS download link is https://apps.apple.com/app/id6832378080. Add the Google Play download link at launch. Search Console verification and indexing depend on the owner's account; metadata alone does not guarantee search placement or app rich results.

References: [Google Play listing guidance](https://support.google.com/googleplay/android-developer/answer/13393723), [Google software application structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app).

The App Store badge is Apple’s unmodified [official SVG](https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg), used according to its [marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/). Android retains a Coming soon label until release.
