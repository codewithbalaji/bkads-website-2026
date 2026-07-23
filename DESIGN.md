---
name: BKADS
description: Technology Partner for Modern Businesses — a quiet, confident monochrome dark system
colors:
  ink-black: "oklch(0.145 0 0)"
  off-white: "oklch(0.985 0 0)"
  surface-raised: "oklch(0.205 0 0)"
  pale-silver: "oklch(0.922 0 0)"
  graphite: "oklch(0.269 0 0)"
  muted-silver: "oklch(0.708 0 0)"
  hairline-white: "oklch(1 0 0 / 10%)"
  input-white: "oklch(1 0 0 / 15%)"
  focus-ring: "oklch(0.556 0 0)"
  destructive-red: "oklch(0.704 0.191 22.216)"
typography:
  display:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  leadIn:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3.75rem)"
    fontWeight: 100
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    letterSpacing: "normal"
  mono:
    fontFamily: "var(--font-geist-mono), ui-monospace, monospace"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  2xl: "1.125rem"
  3xl: "1.375rem"
  4xl: "1.625rem"
  full: "9999px"
spacing:
  container-x: "1.5rem"
  nav-gap: "2rem"
  cta-gap: "1rem"
  hero-stack: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.pale-silver}"
    textColor: "{colors.surface-raised}"
    rounded: "{rounded.xl}"
    padding: "0 1.5rem"
    height: "3rem"
  button-outline:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.off-white}"
    rounded: "{rounded.xl}"
    padding: "0 1.5rem"
    height: "3rem"
  button-nav-cta:
    backgroundColor: "{colors.pale-silver}"
    textColor: "{colors.surface-raised}"
    rounded: "{rounded.lg}"
    padding: "0 1.25rem"
    height: "2rem"
---

# Design System: BKADS

## Overview

**Creative North Star: "The Quiet Signal"**

A calm, confident technical presence on a dark field. The palette is fully
desaturated — every surface, from the near-black page background to the
lightest button fill, sits at chroma 0 in OKLCH — so the only variables left
to carry personality are weight, scale, and motion. The hero's WebGL noise
terrain drifts slowly behind the type instead of demanding attention, and the
thin italic lead-in ("Your Technology Partner") softens the bold grotesk
closing line ("For Modern Businesses") that follows it. Nothing shouts; the
confidence is in the restraint. Buttons and floating surfaces read as
restrained and functional — flat by default, glass only where it earns its
keep (floating over imagery), never as decoration on ordinary content.

Dark is the **only** mode: there is no light-mode variant, no toggle, and no
`prefers-color-scheme` branching anywhere the system is applied correctly
(see the Do's and Don'ts note on `dark:`-prefixed utilities, which is a
confirmed exception to that rule today).

**Key Characteristics:**
- Fully monochrome (zero chroma) palette; any brand hue is a deliberate, not-yet-made decision.
- Two-weight type drama: font-thin italic lead-ins against font-semibold display closes, on one shared sans (Geist).
- Flat-by-default surfaces; glass/blur reserved for UI that floats over imagery or the WebGL hero.
- Generous, breakpoint-aware type scale — display type steps down at each breakpoint rather than holding one fixed size.

## Colors

The palette is a single achromatic ramp — every token below has chroma 0; only lightness changes.

### Primary
- **Pale Silver** (`oklch(0.922 0 0)`): the fill for primary/high-intent buttons (hero's "Book a Free Strategy Call", navbar's "Contact"). The brightest surface color in the system after Off-White — reserved for the one action per screen the visitor should take.

### Neutral
- **Ink Black** (`oklch(0.145 0 0)`): page background. The base the entire system sits on.
- **Off-White** (`oklch(0.985 0 0)`): primary text color on Ink Black.
- **Surface Raised** (`oklch(0.205 0 0)`): card/popover backgrounds, and doubles as the dark text color sitting on Pale Silver buttons (`--primary-foreground` shares this value — one token, two roles).
- **Graphite** (`oklch(0.269 0 0)`): secondary/muted/accent surfaces — one value backing all three roles today.
- **Muted Silver** (`oklch(0.708 0 0)`): secondary/dimmed text.
- **Hairline White** (`oklch(1 0 0 / 10%)`): borders and dividers — a 10%-opacity white, not a solid gray, so it reads correctly over both Ink Black and imagery.
- **Input White** (`oklch(1 0 0 / 15%)`): input borders/backgrounds.
- **Focus Ring** (`oklch(0.556 0 0)`): focus-visible ring color, at 50% opacity in practice.

### System
- **Destructive Red** (`oklch(0.704 0.191 22.216)`): the one intentional hue break in the system, reserved for error/destructive states. Not yet used in any shipped surface.

### Named Rules
**The Monochrome Rule.** No brand hue (no lime, no sky-blue) is in use today. If one is introduced later, add it as new tokens — never repurpose or retint one of the neutrals above.

## Typography

**Display Font:** Geist (via `next/font/google`, `--font-geist-sans`)
**Body Font:** Geist (same family — the system currently uses one typeface throughout, distinguishing roles by weight and style rather than by a second family)
**Label/Mono Font:** Geist Mono (`--font-geist-mono`) — declared but not yet used anywhere in shipped UI.

**Character:** One grotesk sans carrying every role. Drama comes from pairing a `font-thin italic` lead-in against a `font-semibold` display close in the same heading — an editorial gesture inside an otherwise plain, technical typeface.

### Hierarchy
- **Display** (600 / `clamp(2.25rem, 5vw, 4.5rem)` desktop max `text-7xl` / line-height 1.05 / tracking `-0.025em`): the bold closing statement in the hero heading ("For Modern Businesses"). Steps down through `text-4xl → text-5xl → text-6xl → text-7xl` at `base/sm/md/lg` so it never touches the viewport edge on narrow screens.
- **Lead-in** (100, italic / `clamp(1.875rem, 4vw, 3.75rem)` desktop max `text-6xl` / line-height 1.1): the thin italic line preceding the Display line ("Your Technology Partner"), rendered as its own block row. Steps `text-3xl → text-4xl → text-5xl → text-6xl` alongside Display.
- **Body** (400 / `1rem` / line-height 1.5): not yet rendered in any shipped section (Hero deliberately has no body paragraph; Services/Testimonials/Featured Work/CTA Banner/Trust Bar are still empty stub components). When body copy ships, keep it on `font-sans` at a 65–75ch measure rather than inventing a new family.
- **Label** (500 / `0.875rem`): navbar links and button text. Nav links sit at `text-foreground/80`, brightening to full `text-foreground` on hover.

### Named Rules
**The Wired Font Rule.** `--font-sans` in `app/globals.css` must resolve to `var(--font-geist-sans)`. A prior edit briefly redefined it as the self-referential `var(--font-sans)` — invalid CSS that silently fell back to the browser's default serif site-wide, with no console error. Never let `--font-sans` reference itself.

## Layout

- Site container convention: `mx-auto max-w-5xl px-6` (Navbar; reuse for any new full-width section needing a centered content column).
- The Hero heading + CTA stack uses `space-y-10` (2.5rem) between the heading block and the button row, and `gap-4` (1rem) between the two CTA buttons, with `flex-wrap` so the pair stacks vertically rather than overflowing at narrow widths.
- The Navbar's nav-link row uses `gap-8` (2rem) between links, and only renders at the `md` breakpoint and up (`hidden md:flex`) — there is no mobile hamburger menu yet; logo and CTA stay visible at every width.

### Named Rules
**The Five-Link Rule.** At `md` (768px), the navbar's `1fr` middle column has room for five links at `gap-8` before flex-shrink starts wrapping a multi-word label mid-row (observed: a sixth link, "Contact", wrapped "Case Studies" onto two lines and broke the pill's vertical rhythm). Keep the primary nav at five items or fewer, or revisit the layout before adding a sixth.

## Elevation & Depth

Flat by default, glass for floating UI. Ordinary surfaces (page background, buttons, cards) carry no shadow at all. The one elevation idiom in the system is the "glass" treatment, reserved for UI that floats over imagery or the WebGL hero rather than sitting in normal document flow.

### Shadow Vocabulary
- **Glass float** (`shadow-lg`, paired with `backdrop-blur-xl`): the floating navbar pill and any future floating CTA banner or overlay card. Always paired with `border border-white/10 bg-white/5 backdrop-blur-xl` — the shadow alone is not the pattern; the blur + translucency + hairline border together are.

### Named Rules
**The Glass-Is-Not-Decoration Rule.** `border-white/10 bg-white/5 backdrop-blur-xl shadow-lg` is reserved for UI that must float legibly over imagery or the WebGL terrain (navbar, hero CTA context). Don't reach for it as a default card or section-background treatment — it earns its keep by solving a real legibility problem, not by looking premium.

## Shapes

Radius scale derives entirely from one base: `--radius: 0.625rem`, with `--radius-sm/md/lg/xl/2xl/3xl/4xl` calculated from it in `@theme inline` (0.6× / 0.8× / 1× / 1.4× / 1.8× / 2.2× / 2.6×). Always reach for the derived scale (`rounded-lg`, `rounded-xl`, …) rather than hardcoding `rounded-[Npx]`. Pill shapes (`rounded-full`) are reserved for the floating navbar and glass CTA containers, not for buttons or cards.

## Components

Buttons and the navbar's glass pill are the only components with shipped, rendered implementations today. Everything else in `components/sections/*` is an empty stub.

### Buttons
- **Component:** `components/ui/button.tsx` — shadcn "base-nova" on `@base-ui/react`. Variants defined: `default | outline | secondary | ghost | destructive | link`. Sizes defined: `default | xs | sm | lg | icon | icon-*`. Only `default`, `outline`, and the `default`/`lg` sizes are actually used in shipped UI today; `secondary`/`ghost`/`destructive`/`link` and `xs`/`sm`/`icon*` exist on the primitive but are unused so far — don't assume they're battle-tested.
- **Shape:** `rounded-xl` (0.875rem) at the `lg` size used for high-intent marketing CTAs; `rounded-lg` (0.625rem) at `default` size used for the navbar CTA.
- **Primary** (`variant="default"`): background Pale Silver, text Surface Raised, hover fades to Pale Silver at 80% opacity (`bg-primary/80`). Used for the hero's "Book a Free Strategy Call" (size `lg`: `h-12`, `px-6`, `text-base`) and the navbar's "Contact" (size `default`: `h-8`, `px-5` override, `text-sm`).
- **Outline** (`variant="outline"`): background Ink Black, border Hairline White, hover background Graphite. Used for the hero's "Explore Services" (size `lg`).
- **Focus/active:** focus-visible ring in Focus Ring color at 50% opacity plus a 3px border; active state nudges the button down 1px (`translate-y-px`) for a pressed feel.
- **To render as a link:** use the `render` prop (base-ui's polymorphic API, not `asChild`) and set `nativeButton={false}` — otherwise base-ui warns that a non-`<button>` element was rendered while it still expected native button semantics.

### Navigation
- **Style:** fixed, floating glass pill (`fixed inset-x-0 top-4 z-50`), inner container `mx-auto max-w-5xl rounded-full` with the glass treatment from Elevation & Depth.
- **Layout:** `grid grid-cols-[auto_1fr_auto]` — wordmark (now the `public/logo.png` image, `h-10 w-auto`) left, links centered in the middle column, CTA button right. The grid keeps links visually centered regardless of how wide the logo or CTA render.
- **Default/hover:** links sit at `text-foreground/80`, `font-medium`, `text-sm`; hover brightens to full `text-foreground` via `transition-colors`.
- **Mobile:** links collapse below `md` (`hidden md:flex`) with no hamburger replacement yet — logo and CTA remain visible at every width.

### Signature Component: Glass Floating Surface
The reusable pattern behind the navbar pill, documented separately because it's meant to be reused: `border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg`, `rounded-full` for pill-shaped containers or a smaller radius (`rounded-xl`/`rounded-2xl`) for cards. Use for any future floating CTA banner or overlay card that needs to sit legibly on top of imagery or the WebGL hero.

## Do's and Don'ts

### Do:
- **Do** keep the palette fully desaturated (chroma 0). If a brand hue is introduced later, add it as new tokens — never retint an existing neutral.
- **Do** give any hero-scale heading breakpoint steps (`text-4xl → text-7xl`, not one fixed size) — a fixed `text-7xl` overflowed the viewport at mobile widths before this was fixed.
- **Do** reserve the `lg` button size for high-visibility marketing CTAs (hero, future banners) and `default`/smaller sizes for denser UI controls like the navbar CTA.
- **Do** reserve the glass treatment for UI floating over imagery/WebGL (navbar, hero-adjacent banners), per the Glass-Is-Not-Decoration Rule.
- **Do** keep the primary nav at five links or fewer at the `md` breakpoint, per the Five-Link Rule.

### Don't:
- **Don't** redefine `--font-sans` as `var(--font-sans)` (self-referential) — always `var(--font-geist-sans)`. See the Wired Font Rule; this exact regression happened once and silently broke every heading and button's typeface with no error.
- **Don't** trust `dark:`-prefixed Tailwind utilities inside shared components (e.g. `button.tsx`'s `outline` variant still carries `dark:border-input dark:bg-input/30 dark:hover:bg-input/50`). This project defines no `.dark` class and no `@custom-variant dark` override, so those utilities resolve to the OS-level `prefers-color-scheme: dark` media query — meaning a visitor with a light OS preference sees different button styling than one with dark, silently contradicting this system's own "no `prefers-color-scheme` branching" principle. Treat existing `dark:` classes in shared components as inert leftovers, not active theming, until someone either removes them or wires up a proper `@custom-variant dark (&:where(.dark, .dark *))` override.
- **Don't** use `size="sm"`/tight padding for a CTA that sits next to a visually taller neighbor (e.g. a 40px logo) — the mismatch reads as an afterthought, not a deliberate hierarchy choice.
- **Don't** grow the primary nav-link list past five items without revisiting the layout first (see the Five-Link Rule).
