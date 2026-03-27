# Kaiser Omnia — Comprehensive SEO Plan

## Context
Kaiser Omnia (kaiser-omnia.com) is a Greek construction company website built with Next.js 16. The site is bilingual (Greek/English) and showcases 40+ years of high-end architecture and construction experience. Currently the site has **significant SEO gaps** — no sitemap, no robots.txt, no structured data, missing metadata on half the pages, and no Google Business integration. This plan addresses both **technical SEO** (code changes) and **strategic SEO** (off-site factors, Google Business, content strategy).

---

## Part 1: Technical SEO (Code Changes)

### 1.1 — Robots.txt (CRITICAL)
**File to create:** `app/robots.ts`
- Allow all crawlers on all pages
- Point to sitemap URL: `https://kaiser-omnia.com/sitemap.xml`
- Disallow crawling of `/api/` routes if any exist

### 1.2 — XML Sitemap (CRITICAL)
**File to create:** `app/sitemap.ts`
- List all 6 main pages: `/`, `/projects`, `/company`, `/services`, `/technology`, `/contact`
- Set `lastModified` dates
- Set `changeFrequency` and `priority` per page (homepage = 1.0, services = 0.9, etc.)

### 1.3 — Missing Page Metadata (HIGH)
**Files to modify:**
- `app/services/page.tsx` — Add metadata export (title, description with keywords)
- `app/company/page.tsx` — Add metadata export
- `app/technology/page.tsx` — Add metadata export
- `app/projects/page.tsx` — Fix "Studio" branding → "Kaiser Omnia"

Example metadata for services:
```
title: "Υπηρεσίες | Kaiser Omnia"
description: "Σχεδιασμός, Μηχανική, Κατασκευή και Διαχείριση Έργων. 40+ χρόνια εμπειρίας στην κατασκευή υψηλών προδιαγραφών."
```

### 1.4 — JSON-LD Structured Data (CRITICAL)
**File to create:** `app/components/StructuredData.tsx`
Add schemas to relevant pages:

| Schema | Page | Purpose |
|--------|------|---------|
| `Organization` | Root layout | Company name, logo, URL, social links |
| `LocalBusiness` / `GeneralContractor` | Root layout | Address, phone, hours, service area |
| `BreadcrumbList` | All pages | Navigation trail for Google |
| `WebSite` | Homepage | Sitelinks search box potential |
| `Service` | Services page | Each service as structured data |
| `ImageGallery` | Projects page | Project showcase |
| `FAQPage` | Contact page | FAQ section already exists — mark it up |

### 1.5 — Open Graph & Twitter Cards (HIGH)
**File to modify:** `app/layout.tsx`
- Add `og:image` (create a 1200x630 branded share image in `/public/`)
- Add `og:url` per page
- Add Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)

### 1.6 — Canonical URLs (HIGH)
**File to modify:** `app/layout.tsx`
- Add `alternates.canonical` in metadata
- Prevents duplicate content issues

### 1.7 — HTML Lang Attribute Fix (HIGH)
**File to modify:** `app/layout.tsx`
- Currently hardcoded to `lang="el"` — should dynamically reflect the user's language choice
- Add `hreflang` alternate links for Greek and English versions

### 1.8 — Image Optimization (MEDIUM)
**File to modify:** `app/components/ParallaxImage/ParallaxImage.tsx`
- Replace plain `<img>` tags with Next.js `<Image>` component for automatic WebP/AVIF conversion, responsive sizing, and lazy loading
- Add descriptive `alt` attributes to all images across the site (keyword-rich but natural)

### 1.9 — Performance Optimizations (MEDIUM)
**File to modify:** `next.config.ts`
- Consider adding image optimization config (formats, quality)
- Verify Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Part 2: Google Business Profile (Off-Site — Manual Steps)

### 2.1 — Create/Claim Google Business Profile
1. Go to [business.google.com](https://business.google.com)
2. Search for "Kaiser Omnia" — claim if exists, create if not
3. **Category:** "General Contractor" (primary), "Construction Company" (secondary), "Architectural Designer" (additional)
4. **Verify** via postcard, phone, or email

### 2.2 — Optimize the Profile
- **Business Name:** Kaiser Omnia (exact match — no keyword stuffing)
- **Address:** Full physical address in Greece
- **Phone:** Local Greek number (consistent with website)
- **Website:** https://kaiser-omnia.com
- **Hours:** Accurate business hours
- **Description:** 750 characters max — include keywords naturally: "κατασκευαστική εταιρεία", "αρχιτεκτονική", "διπλό τοίχωμα", "construction company Greece"
- **Services:** List all services with descriptions
- **Photos:** Upload 20+ high-quality photos:
  - Logo, cover photo, exterior, interior
  - Project photos (before/after), team at work
  - Add new photos monthly

### 2.3 — Google Reviews Strategy
- Ask satisfied clients to leave reviews (Google reviews are the #1 local ranking factor)
- Respond to ALL reviews — positive and negative — within 24-48 hours
- Target: 10+ reviews with 4.5+ star average
- Create a simple review link to share with clients

### 2.4 — Google Business Posts
- Post weekly updates: project completions, behind-the-scenes, tips
- Use the "Update", "Offer", and "Event" post types
- Include CTAs like "Learn More" linking to your website

---

## Part 3: Content Strategy for SEO

### 3.1 — Target Keywords

**Primary (Greek):**
- κατασκευαστική εταιρεία (construction company)
- αρχιτεκτονικό γραφείο (architecture office)
- κατασκευή κτιρίων (building construction)
- ανακαίνιση σπιτιού (house renovation)

**Primary (English):**
- construction company Greece
- architecture and construction Athens
- high-end construction Greece
- double wall construction

**Long-tail:**
- κατασκευαστική εταιρεία με εμπειρία 40 χρόνων
- τεχνολογία διπλού τοιχώματος κατασκευή
- κατασκευή υψηλών προδιαγραφών Ελλάδα

### 3.2 — Content Recommendations
1. **Blog/Articles section** (future addition — highest impact for organic traffic):
   - Construction tips and guides
   - Project case studies with before/after
   - Industry news and trends
   - "How much does X cost in Greece?" articles (high search volume)

2. **Enhance existing pages:**
   - Add more text content to Services page (each service should have 300+ words)
   - Add project descriptions with keywords to Projects page
   - Add team bios and company history detail to Company page

### 3.3 — Internal Linking
- Link services mentioned on the homepage to their detail sections
- Link projects to the services used in them
- Use descriptive anchor text (not "click here")

---

## Part 4: Off-Page SEO & Other Ranking Factors

### 4.1 — Backlink Strategy
- **Local directories:** Register on Greek business directories (e.g., vrisko.gr, xo.gr, yellowpages.gr)
- **Industry directories:** Construction/architecture-specific directories
- **Supplier links:** Ask material suppliers to link to your company
- **Press/PR:** Project completions, awards, milestones
- **Social profiles:** Ensure consistent NAP (Name, Address, Phone) across all platforms

### 4.2 — Social Media Signals
- Maintain active profiles on: Instagram (visual projects), Facebook, LinkedIn
- Link social profiles from the website footer (already has social links)
- Share website content on social platforms

### 4.3 — Technical Off-Page
- **Google Search Console:** Register and submit sitemap
- **Google Analytics (GA4):** Install for traffic monitoring
- **Bing Webmaster Tools:** Submit sitemap there too
- **Schema markup testing:** Use Google's Rich Results Test after implementation

### 4.4 — Local SEO Signals
- Consistent NAP across all citations (Name, Address, Phone — exact match everywhere)
- Embed Google Maps on contact page (already done ✓)
- Local phone number in website header/footer
- City/region names in page content and metadata

---

## Part 5: What Actually Makes the Biggest Difference

### Ranked by Impact:

| Rank | Factor | Why It Matters | Current Status |
|------|--------|---------------|----------------|
| 1 | **Google Business Profile** | #1 factor for local search ("construction near me") | ❌ Not set up |
| 2 | **Reviews** | Social proof + ranking signal | ❌ None |
| 3 | **Structured Data (JSON-LD)** | Rich snippets in search results = higher CTR | ❌ Missing |
| 4 | **Sitemap + Robots.txt** | Google can't efficiently crawl without these | ❌ Missing |
| 5 | **Page metadata** | Title/description = what appears in search results | ⚠️ Partial |
| 6 | **Content depth** | More relevant content = more keywords ranked | ⚠️ Thin |
| 7 | **Core Web Vitals** | Page speed is a ranking factor | ✅ Decent (Next.js) |
| 8 | **Backlinks** | Authority signal from other sites | ❌ Unknown |
| 9 | **Mobile experience** | Google uses mobile-first indexing | ✅ Responsive |
| 10 | **HTTPS + Security** | Trust signal | ✅ Done |

---

## Implementation Order (Priority)

### Phase A — Immediate (Technical SEO fixes)
1. Create `app/robots.ts`
2. Create `app/sitemap.ts`
3. Add metadata to Services, Company, Technology pages
4. Fix Projects page branding
5. Add JSON-LD structured data (Organization + LocalBusiness)
6. Add Open Graph image and Twitter cards
7. Add canonical URLs
8. Fix dynamic `lang` attribute

### Phase B — Soon After (Google Setup)
1. Create/claim Google Business Profile
2. Register Google Search Console → submit sitemap
3. Install Google Analytics (GA4)
4. Register Bing Webmaster Tools

### Phase C — Ongoing (Growth)
1. Collect Google reviews from clients
2. Post weekly on Google Business
3. Build local directory citations
4. Enhance page content depth
5. Consider adding a blog section
6. Image alt tag audit and optimization

---

## Verification
After implementing Phase A:
- Run `npm run build` to verify no build errors
- Test sitemap at `https://kaiser-omnia.com/sitemap.xml`
- Test robots at `https://kaiser-omnia.com/robots.txt`
- Use [Google Rich Results Test](https://search.google.com/test/rich-results) for structured data
- Use [Google PageSpeed Insights](https://pagespeed.web.dev/) for Core Web Vitals
- Use [Google Search Console](https://search.google.com/search-console) URL inspection tool
- Check Open Graph tags with [opengraph.xyz](https://www.opengraph.xyz/)
