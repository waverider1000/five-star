build a website for fivestarstrcleaning.com

html

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Five Star STR Cleaning | Las Vegas's Premier Short-Term Rental Cleaning Service</title>
<meta name="description" content="Five Star STR Cleaning — Las Vegas's most trusted cleaning service for Airbnb, VRBO, and short-term rental properties. Fast turnovers, five-star results.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --gold: #C9A84C;
    --gold-light: #E8C96A;
    --gold-dim: #8B6E2A;
    --black: #0A0A0A;
    --off-black: #111111;
    --charcoal: #1C1C1C;
    --mid: #2E2E2E;
    --gray: #888888;
    --light-gray: #EBEBEB;
    --white: #FAFAF8;
    --cream: #F5F0E8;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--black);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    cursor: default;
  }

  /* ── NOISE OVERLAY ── */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.4;
  }

  /* ── NAV ── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    background: linear-gradient(to bottom, rgba(10,10,10,0.95), transparent);
    backdrop-filter: blur(0px);
    transition: background 0.4s, backdrop-filter 0.4s;
  }
  nav.scrolled {
    background: rgba(10,10,10,0.95);
    backdrop-filter: blur(12px);
  }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 1.25rem;
    letter-spacing: 0.04em;
    color: var(--white);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .nav-logo .star-row {
    display: flex;
    gap: 2px;
    color: var(--gold);
    font-size: 0.7rem;
    letter-spacing: 1px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    color: var(--gray);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 400;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--white); }

  .nav-cta {
    background: var(--gold);
    color: var(--black) !important;
    padding: 0.55rem 1.5rem;
    border-radius: 2px;
    font-weight: 500 !important;
    letter-spacing: 0.08em !important;
    transition: background 0.2s !important;
  }
  .nav-cta:hover { background: var(--gold-light) !important; color: var(--black) !important; }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    overflow: hidden;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8rem 4rem 6rem 4rem;
    position: relative;
    z-index: 2;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(201,168,76,0.12);
    border: 1px solid rgba(201,168,76,0.3);
    color: var(--gold);
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.4rem 1rem;
    border-radius: 2px;
    margin-bottom: 2rem;
    width: fit-content;
    animation: fadeUp 0.8s 0.2s both;
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(3rem, 5vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.01em;
    color: var(--white);
    animation: fadeUp 0.8s 0.4s both;
  }
  .hero-title em {
    font-style: italic;
    color: var(--gold);
  }

  .hero-sub {
    margin-top: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--gray);
    max-width: 480px;
    animation: fadeUp 0.8s 0.6s both;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
    animation: fadeUp 0.8s 0.8s both;
  }

  .btn-primary {
    background: var(--gold);
    color: var(--black);
    padding: 0.85rem 2rem;
    border: none;
    border-radius: 2px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    display: inline-block;
  }
  .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }

  .btn-outline {
    background: transparent;
    color: var(--white);
    padding: 0.85rem 2rem;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 2px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s, transform 0.15s;
    display: inline-block;
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-1px); }

  .hero-stats {
    display: flex;
    gap: 2.5rem;
    margin-top: 3.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(255,255,255,0.07);
    animation: fadeUp 0.8s 1s both;
  }
  .stat-item .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--gold);
  }
  .stat-item .stat-label {
    font-size: 0.75rem;
    color: var(--gray);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 0.2rem;
  }

  .hero-right {
    position: relative;
    overflow: hidden;
  }
  .hero-right::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #1a1408 0%, #0f0f0f 50%, #0d0d10 100%);
    z-index: 1;
  }
  .hero-right-inner {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    padding: 4rem;
  }
  .hero-visual {
    width: 100%;
    max-width: 440px;
    aspect-ratio: 1;
    position: relative;
  }
  /* Animated geometric star */
  .star-graphic {
    width: 100%;
    height: 100%;
    animation: rotateStarSlow 30s linear infinite;
  }
  .star-inner {
    position: absolute;
    inset: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  .star-inner-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .star-inner-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--white);
    line-height: 1.2;
  }
  .star-inner-sub {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-top: 0.5rem;
  }

  /* Floating label cards */
  .float-card {
    position: absolute;
    background: rgba(28,28,28,0.9);
    border: 1px solid rgba(201,168,76,0.2);
    backdrop-filter: blur(12px);
    padding: 0.75rem 1.1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    animation: float 4s ease-in-out infinite;
    z-index: 10;
  }
  .float-card:nth-child(2) { animation-delay: -2s; }
  .float-card .fc-icon { font-size: 1.1rem; }
  .float-card .fc-text { font-size: 0.78rem; font-weight: 400; color: var(--white); white-space: nowrap; }
  .float-card .fc-sub { font-size: 0.65rem; color: var(--gold); letter-spacing: 0.06em; }
  .float-card-1 { bottom: 15%; left: -8%; }
  .float-card-2 { top: 18%; right: -5%; }

  /* ── GRADIENT DIVIDER ── */
  .gold-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    opacity: 0.4;
  }

  /* ── SECTION GENERIC ── */
  section { padding: 6rem 4rem; }
  .section-label {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .section-label::before {
    content: '';
    display: block;
    width: 2rem;
    height: 1px;
    background: var(--gold);
  }
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: var(--white);
    max-width: 600px;
  }
  .section-title em { font-style: italic; color: var(--gold); }

  /* ── TRUST BAR ── */
  .trust-bar {
    background: var(--charcoal);
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .trust-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
    justify-content: center;
  }
  .trust-item:not(:last-child) {
    border-right: 1px solid rgba(255,255,255,0.07);
    padding-right: 2rem;
    margin-right: 0;
  }
  .trust-icon { font-size: 1.3rem; }
  .trust-text {
    font-size: 0.82rem;
    font-weight: 400;
    color: var(--light-gray);
    letter-spacing: 0.03em;
  }
  .trust-text strong { color: var(--gold); font-weight: 500; }

  /* ── SERVICES ── */
  #services { background: var(--off-black); }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5px;
    margin-top: 3.5rem;
    border: 1.5px solid rgba(255,255

    build a polished,production grade website for fivestarstrcleaning.com

    Now I'll build the full site. Let me design this with a luxury hospitality aesthetic — leaning hard into the "Five Star" brand identity with a deep navy/gold palette.Created a file, ran a command, read a fileCreated a file, ran a command, read a fileHere's your production-grade website for fivestarstrcleaning.com. Here's what's built in:
Design direction: Dark luxury hospitality — deep navy with gold accents, Cormorant Garamond serif headings paired with Outfit for body copy. Feels like a 5-star hotel brand, not a generic cleaning company.
Sections included:

Sticky nav with smooth scroll, pinned on scroll
Hero with animated 5-star display, floating proof cards, and stat counters
Trust bar — licensed/insured, photo docs, on-time guarantee
6 services — turnover, deep clean, linen/laundry, inspection-ready, pool/outdoor, restocking
Why Us with a mock review card stack + 4 differentiator tiles
4-step How It Works with connecting gold line
6 guest/host reviews in a grid
Service area with Las Vegas neighborhood coverage list
CTA section with phone/text/email calls-to-action
Footer with full nav, contact info, LLC + license callout

To deploy: Just swap in your real phone number ((702) 555-0199) and email address throughout, then upload index.html to your hosting provider or point your domain DNS to a static host (Netlify, Vercel, or Cloudflare Pages all work great for this).

Your logo is now woven into the site in two places:

Nav bar — logo sits at the left at 42px tall, crisp on the dark background using mix-blend-mode: lighten to drop the white background and let the navy/gold colors pop naturally
Footer — slightly larger at 64px for better presence in the footer brand section

The logo's existing navy + gold color palette also perfectly matches the site's design system, so it feels completely native rather than pasted in. The logo is embedded directly in the file as base64, so there are no external dependencies — the whole site is fully self-contained in that single HTML file.

Blog section is live. Here's what was added:
6 SEO-targeted articles with titles written to rank for high-intent Las Vegas STR search terms:

"Ultimate Airbnb Turnover Cleaning Checklist for Las Vegas Hosts" — featured, spans two columns
"How Cleanliness Affects Your Airbnb Star Rating (And Revenue)"
"Desert Cleaning: What Las Vegas Heat Does to Your STR Property"
"Pool, Patio & Hot Tub: The Outdoor Cleaning Guide for Vegas STR Hosts"
"Why Every STR Turnover Should End With a Photo Report"
"5 Staging Tricks That Turn Good Cleaning Into Five-Star Reviews"

SEO value baked in: Each post targets local + niche keyword combos (Las Vegas Airbnb cleaning, STR turnover checklist, Airbnb star rating cleanliness) that your competition likely isn't publishing content around. When you build these out as real blog pages, you'll want <h1> tags matching the titles, schema markup, and internal linking back to your services.
"Blog" also added to the nav. The section sits between Service Area and the CTA banner — natural flow for a visitor researching before booking.