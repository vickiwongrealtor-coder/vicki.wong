# Handoff: Vicki Wong Realtor Website Redesign

## Overview
A single-page trilingual (English / Cantonese / Mandarin) marketing website for Vicki Wong, a Bay Area realtor with eXp Realty (member of the Garrick Yan Group). The goal: build trust (ratings, transaction volume, reviews), showcase active and sold listings, and drive contact-form submissions from buyers and sellers.

## About the Design Files
The file in this bundle (`Vicki Wong.dc.html`) is a **design reference built in HTML** — a working prototype showing the intended look, content, and interactive behavior (button states, conditional form fields, hover states), not production code to copy directly. The task is to **recreate this design in your target codebase's environment** (React, Vue, plain static site, CMS theme, etc.) using its established patterns — or, if no environment exists yet, choose the most appropriate stack (a static site generator or lightweight React app is a good fit for a single-page marketing site like this) and implement the design there.

The prototype uses a small custom templating runtime (`support.js`, `<sc-for>`/`<sc-if>` loop/conditional tags, `{{ }}` bindings) that is **specific to this prototyping tool** — do not attempt to reuse `support.js` or the `<x-dc>` wrapper in production. Treat the rendered HTML/CSS/copy as the source of truth for what to build.

## Fidelity
**High-fidelity (hifi)**: Final colors, typography, spacing, and copy are all intentional and should be recreated pixel-for-pixel. Interactive behaviors (buyer/seller toggle, conditional form sections) are functional in the prototype and should be replicated with equivalent logic.

## Design System
Built on a "Modernist" design language:
- **Colors**: background `#f3f2f2` (light warm gray), text `#201e1d` (near-black), accent `#ec3013` (red) with a darker accent `#ae1800` used for labels/links, dark section background `#201e1d` (contact section, footer)
- **Typography**: Archivo (headings + body, weights 400/600/700/800) paired with Noto Sans TC for Chinese text, loaded from Google Fonts
- **Structure**: strong 2px solid rules (`rgba(32,30,29,0.4)`) divide every major section — no rounded corners anywhere, no drop shadows, flat and architectural
- **Grid**: content max-width 1240px, centered; stat rows and card grids use CSS Grid with `repeat(auto-fit, minmax(...))` for responsive reflow
- Bilingual copy pattern throughout: Chinese headline/label paired with an italic English subtitle or inline translation — preserve this pairing exactly, don't collapse to one language

## Screens / Sections
Single scrolling page, in this order:

1. **Header** (sticky) — logo (VickiWong + eXp Realty lockup, `logo.png`), nav links (About/Video/Services/Results/Areas/Listings/Reviews, each bilingual), phone CTA button (red, `tel:` link)
2. **Hero** — two-column: headline + subhead + two CTA buttons (primary red "Free Valuation", secondary outlined "Book a Consultation") on the left, portrait image slot (4:5 ratio) on the right
3. **Trust stats bar** — 4-column stat row (Zillow rating, highest sale, team transactions, cities served), divided by vertical 2px rules
4. **About** — portrait image (2:4 ratio, 340px max width) + bio copy (Chinese paragraphs + English summary) + 3-stat credential row (UCLA / trilingual / #1 on team) + Zillow profile link + "Book a Consultation" CTA
5. **Why Different** — comparison rows (label / "from" pain point / arrow icon / "to" value prop), 4 rows, each a css grid row with a top divider; CTA below
6. **Video** — centered YouTube embed (16:9, bordered), subscribe link, "Book a Consultation" + Instagram (`@tourwithvicki`) CTAs side by side
7. **Services** — 3-column card grid (Buyer Agency / Seller Strategy / Investment), icon + title + body each; CTA below
8. **Seller Strategy** (gray `#eae9e9` background) — 4-phase marketing framework, each phase a card with a number, English + Chinese title, and a list of tactics each showing Chinese detail + italic English translation side by side in a 2-column sub-grid; CTA below
9. **Service Areas** — 8-city grid (South Bay / East Bay regions), each cell: region label, city name, note; CTA below
10. **Real Results** — 2 case studies (Challenge / Strategy / Outcome format); CTA below
11. **Listings** (gray background) — team stats row (313 sales, $265M volume, etc.), "Currently For Sale" grid (image + price + address + beds, red price), "Vicki's Closed Transactions" grid (grayscale photos, black price, sold date + role badge); CTA below
12. **Reviews** — 2 testimonial cards, each: 5-star row, English quote, Chinese translation, name (first name + last initial only — anonymized), meta line; CTA below
13. **Contact** (dark `#201e1d` background) — two-column: contact info (phone/email/address) on left, form on right. Form includes: name/phone (2-col), email, **interactive Buyer/Seller toggle** (clicking changes active button styling and reveals role-specific fields below), message textarea, submit button
    - **Buyer fields** (shown when Buyer selected, default state): Budget Range dropdown, Bedrooms Needed dropdown, Financing radio group (Pre-Approved / Not Yet Pre-Approved / All Cash)
    - **Seller fields** (shown when Seller selected): Selling Goal radio group (6 options: Maximize Price, Sell Quickly, Sell & Buy Simultaneously, Relocating, Downsizing, Investment/Estate), Ideal Timeline dropdown
14. **Footer** — copyright line + language tagline

## Interactions & Behavior
- **Buyer/Seller toggle**: two buttons, mutually exclusive selection state (starts on "Buyer"). Active button: dark background (`#201e1d`), red border (`#ec3013`), light text. Inactive: transparent background, subtle border (`rgba(243,242,242,0.25)`). Clicking swaps which set of extra form fields renders below (buyer fields vs. seller fields) — implement as component state (e.g. `useState('buyer' | 'seller')`), not page navigation.
- All section CTA buttons link to `#contact` (anchor scroll) except the Instagram link (opens `instagram.com/tourwithvicki` in a new tab) and listing/Zillow links (external, new tab recommended).
- No animations/transitions beyond default link hover color changes (`a:hover { color: #ec3013 }`).
- Hero, About, and listing images are placeholder "image slots" — replace with actual photography (portrait shots, listing photos) before launch. Sold-listing photos render with `filter: grayscale(1) contrast(1.08)` to visually distinguish sold from active inventory — replicate that treatment.
- Responsive: grids use `auto-fit`/`minmax` so columns naturally reflow to fewer columns on narrow viewports; verify header nav collapses to a mobile menu (not implemented in the prototype — needs a mobile nav treatment, e.g. a hamburger drawer, since the desktop nav will not fit on small screens).

## SEO / Metadata (already authored — carry over as-is)
- `<title>`, meta description, canonical URL, Open Graph + Twitter Card tags
- JSON-LD `RealEstateAgent` structured data block (name, phone, email, service areas, address, aggregate rating, languages, org affiliation) — keep this in the `<head>` of the production page and keep it in sync with any data changes

## Data / Content Notes
All copy, stats, and listing data are populated from Vicki Wong's and the Garrick Yan Group's real Zillow profiles as of this writing (July 2026) — team stats (313 transactions, $265M career volume, 19 team members, 62 reviews, 5.0★), Vicki's personal closed transactions (6 sales), and active/sold listing details. **These are live business figures that will go stale** — in production, pull these from a CMS field, a small JSON data file, or a periodic Zillow sync rather than hardcoding them in markup.

## Assets
- `logo.png` — VickiWong + eXp Realty lockup (red square wordmark + eXp Realty logo side by side)
- Google Fonts: Archivo (400/600/700/800), Noto Sans TC (400/600/700) — loaded via `fonts.googleapis.com`
- Image slots (no real assets yet): hero portrait, about portrait, 5 active-listing photos, 5 sold-listing photos — all placeholders pending real photography
- YouTube video: embedded via iframe (`youtube.com/embed/WZ7B0YEkON4`)

## City Guide Pages (added since initial handoff)
The site now includes 14 city-guide pages under `cities/` — one per service area (Cupertino, Palo Alto, San Jose, Mountain View, Castro Valley, Fremont, Hayward, Dublin, Union City, Daly City, San Leandro, San Lorenzo, Alameda, San Francisco). Each is a real, independently-navigable page (not a modal/tab), linked from the main site's Service Areas grid.

**Shared layout**: `cities/CityPage.dc.html` is a props-driven template reused by all 14 pages — it owns the section order/markup (hero, stats bar, home prices, school-by-level table, why-buy grid, restaurants, notable/famous homes, contact CTA, footer). Each per-city file (e.g. `cities/cupertino.dc.html`) is a thin wrapper that only supplies that city's data object (narrative copy, stats, restaurants, schools array, price ranges, landmarks). When recreating this in production, this is a strong signal to build one `CityPage` component/template and pass city data as props/CMS entries — don't hand-copy the layout 14 times.

**Per-city sections**:
- Hero + trust-stat row (school rating summary, bachelor's-degree %, crime rate, median income/commute)
- "Why People Buy & Stay" — 4 bullet cards specific to that city
- **Typical Home Prices** — single-family (3bd/2ba), townhouse, and condo price ranges (approximate; meant to be refreshed regularly, see Data Notes)
- **School District Breakdown** — a table of real schools with level (Elementary/Middle/High, plus Private/Charter where applicable), type, and a GreatSchools-style 1–10 rating. Coverage varies by city: Palo Alto, Cupertino, Castro Valley, Mountain View, Dublin, Union City, San Leandro, Alameda, Fremont, and Hayward list most/all schools in their primary K-12 district; San Jose and San Francisco (each spanning many districts/50+ schools) list a curated representative set only — flag this to stakeholders if full coverage is wanted there too.
- Local restaurant picks (real, named establishments)
- "Notable Homes" — genuine famous/landmark houses only where one actually exists (HP Garage & Steve Jobs House in Palo Alto, Winchester Mystery House in San Jose, Postcard Row & Haas-Lilienthal House in San Francisco); intentionally omitted elsewhere rather than inventing a landmark
- CTA back to the main site's contact form (`../Vicki Wong.dc.html#contact`)
- Independent SEO metadata per page (title, meta description, canonical URL, Open Graph, JSON-LD `Place` schema)

## Hero Video
The homepage hero is now a full-bleed video background (`hero-luxury-home.mp4`, included in this package) with a dark gradient overlay and white Archivo headline/CTAs on top — replaces the earlier static portrait hero. `autoplay muted loop playsinline` on the `<video>` tag; keep those attributes for autoplay to work across browsers/mobile. Compress/optimize the video for web delivery before deploying (check file size and consider serving a poster frame + lower-res mobile variant).

## Files
- `Vicki Wong.dc.html` — the full design/prototype (reference this for exact markup, inline styles, and copy)
- `cities/CityPage.dc.html` — shared city-guide page layout/logic (props-driven)
- `cities/*.dc.html` — the 14 per-city data files (thin wrappers around CityPage)
- `logo.png` — logo asset
- `image-slot.js`, `support.js`, `cities/support.js` — prototyping-tool runtime files, **not needed in production** (included only so the reference files render if opened directly)

## Data Notes — City Pages
School ratings, crime rates, home price ranges, and demographic figures on the city pages were compiled from public sources (GreatSchools, Niche, NeighborhoodScout, U.S. Census/ACS) as of mid-2026, with a mix of individually-confirmed and reasonably-estimated values (each city's `schoolDistrictNote` and price section carry a disclaimer to this effect). **Treat all of this as a starting point, not a live feed** — before launch, verify current figures against GreatSchools.org and current MLS/Zillow data, and set up a periodic refresh (quarterly at minimum for home prices, annually for school ratings) rather than leaving these hardcoded indefinitely.
