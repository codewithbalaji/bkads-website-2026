<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# BKADS project

This repo is the **BKADS** marketing landing page. BKADS is a Chennai-based technology services
company (custom software, AI, automation, IT consulting, cloud). All brand facts live in `ABOUT.md`.

## Where things live
- **`ABOUT.md`** — canonical brand/company content. Copy must trace back here.
- **`content/*.md`** — per-section final copy (numbered `00-navbar` → `10-footer`), generated from `ABOUT.md`.
- **`DESIGN.md`** — the design system (palette, typography, layout, component patterns, per-section notes). Read before touching UI.
- **`screenshots/*.png`** — the reference "Aeline" template design being recreated.
- **`components/sections/*`** — one component per landing section. **`components/layout/`** — navbar, footer.
- **`components/ui/*`** — shared primitives (`button`, `section-label`). **`lib/utils.ts`** — `cn()`.

## Stack facts (don't re-derive)
- Next.js 16 + React 19, **Tailwind CSS v4** (CSS `@theme` in `app/globals.css`, no `tailwind.config`).
- UI = **shadcn "base-nova" on `@base-ui/react`** (NOT Radix). Icons: **lucide-react**.
- Brand tokens: `bg-brand`/`text-brand` (lime), `bg-ink` (near-black); sky gradient for hero/CTA.

## Rules
- Reuse `Button` and `cn`; don't reinvent primitives. Use `next/image` for images.
- Server components by default; add `"use client"` only where interactive (navbar menu, carousels).
- Stock imagery via Unsplash — `images.unsplash.com` is allow-listed in `next.config.ts` (`remotePatterns`).
- Keep the lime + sky-blue + ink palette; keep `.dark` mode from breaking.
