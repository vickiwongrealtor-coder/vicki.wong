# vicki-wong.com

Static website for Vicki Wong, REALTOR® (eXp Realty of California, DRE #02234809).
Plain HTML, no build step. Open `index.html` in a browser to preview.

## Structure

```
index.html                 Homepage
cities/<city>.html         City guides (19)
cities/CityPage.dc.html    Shared city-guide layout (loaded by every city page)
lifestyles/index.html      Lifestyles hub
lifestyles/<slug>.html     Lifestyle pages (equestrian, golf, metropolitan, wine-vineyard)
lifestyles/contact.html    Private seller inquiry form
lifestyles/*.dc.html       Shared lifestyle layout and header
lifestyles/lifestyles-data.js  All lifestyle copy (English + Traditional Chinese)
zh-hans.js                 Traditional → Simplified Chinese conversion for the language toggle
support.js                 Page runtime (one copy per folder; keep all three)
image-slot.js              Image placeholder component
sitemap.xml, robots.txt    Search engine files
```

Keep the `.dc.html` files: the city and lifestyle pages load them by name.

## Publish on GitHub Pages

1. Create a new repository and upload the contents of this folder to the root (not the folder itself).
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. For the custom domain, enter `www.vicki-wong.com` under Settings → Pages → Custom domain, then add a CNAME record at your domain registrar pointing `www` to `<your-github-username>.github.io`.
4. Submit `https://www.vicki-wong.com/sitemap.xml` in Google Search Console.

## Before launch

- Replace placeholder images (empty image boxes) with licensed photos.
- Lifestyle tile photos load from Pexels (free commercial license).
- Listing data, school ratings and prices are fixed as of October 2026; update them periodically.
