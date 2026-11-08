# Eddy marketing

Static marketing site for https://eddy.bondoc.cloud. No build step, dependencies, analytics, or third-party fonts. The browser demo reproduces the first Campaign level; it does not implement Endless wakes.

## Preview

Run `python3 -m http.server 8080` here, then open http://localhost:8080. Root-relative links assume the custom domain or a server root.

## Publish

Push to `main` when ready. In GitHub → Settings → Pages, choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Set custom domain `eddy.bondoc.cloud` and enable HTTPS once available. CNAME and .nojekyll are included.

Cloudflare DNS: `eddy` CNAME `rodxavier.github.io`, DNS only. Optional `www.eddy` CNAME to the same hostname. Do not change apex records.

## Launch checklist

- Replace the Coming soon copy with the actual App Store link once the listing exists; do not invent a store ID.
- Verify /privacy/, /support/, /app-ads.txt and HTTPS after deployment.
- Use https://eddy.bondoc.cloud as the App Store marketing URL and the corresponding support/privacy paths.
- Verify AdMob can discover app-ads.txt from the App Store developer website; subdomain crawling may require additional setup on bondoc.cloud.
- Keep the support and privacy text aligned with the app when behavior changes.

The social image is a branded website preview, not an app screenshot. No App Store screenshots or availability claims are fabricated.
