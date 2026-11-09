# Eddy marketing

Static marketing site for https://eddy.bondoc.cloud. No build step, dependencies, analytics, or third-party fonts. The browser demo reproduces the first Campaign level; it does not implement Endless wakes.

## Preview

Run `python3 -m http.server 8080` here, then open http://localhost:8080. Root-relative links assume the custom domain or a server root.

## Formatting

Keep HTML, CSS, and JavaScript readable in source control. From this directory, run:

```sh
bunx prettier@3.8.3 --write index.html privacy/index.html support/index.html 404.html style.css demo.js .prettierrc.json
```

Use `--check` instead of `--write` to verify formatting. The sitemap uses two-space XML indentation. Formatting requires Bun and an initial package download; the site itself still has no build step.

## Publish

Push to `main` when ready. In GitHub → Settings → Pages, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Set custom domain `eddy.bondoc.cloud` and enable HTTPS once available. CNAME and .nojekyll are included.

Cloudflare DNS: `eddy` CNAME `rodxavier.github.io`, DNS only. Optional `www.eddy` CNAME to the same hostname. Do not change apex records.

## Launch checklist

- Verify the site in Google Search Console, submit `/sitemap.xml`, and inspect the homepage for indexing.
- Keep page metadata and homepage structured data aligned with visible content; add the real App Store URL and availability details when released.
- Replace the Coming soon copy with the actual App Store link once the listing exists; do not invent a store ID.
- Verify /privacy/, /support/, /app-ads.txt and HTTPS after deployment.
- Use https://eddy.bondoc.cloud as the App Store marketing URL and the corresponding support/privacy paths.
- Verify AdMob can discover app-ads.txt from the App Store developer website; subdomain crawling may require additional setup on bondoc.cloud.
- Keep the support and privacy text aligned with the app when behavior changes.

The social image is a branded website preview, not an app screenshot. No App Store screenshots or availability claims are fabricated.
