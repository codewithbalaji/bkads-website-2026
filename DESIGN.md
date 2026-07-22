# BKADS Design System

The design language established by the Hero section and Navbar. Dark is the
**only** mode — there is no light-mode variant, no toggle, and no
`prefers-color-scheme` branching. New sections should stay consistent with
what's documented here rather than introducing new colors or patterns.

## Palette

All tokens live in `app/globals.css` under a single `:root` block (Tailwind
v4 `@theme inline`, OKLCH color space). These were the site's `.dark` values;
they are now the permanent, only values.

| Token | Value | Usage |
|---|---|---|
| `--background` | `oklch(0.145 0 0)` | ink-black page background |
| `--foreground` | `oklch(0.985 0 0)` | off-white body text |
| `--card` / `--popover` | `oklch(0.205 0 0)` | slightly lighter surface than background |
| `--primary` | `oklch(0.922 0 0)` | light-gray, used for filled/primary buttons |
| `--primary-foreground` | `oklch(0.205 0 0)` | dark text on primary |
| `--secondary` / `--muted` / `--accent` | `oklch(0.269 0 0)` | dark-gray surfaces |
| `--muted-foreground` | `oklch(0.708 0 0)` | secondary/dimmed text |
| `--border` | `oklch(1 0 0 / 10%)` | hairline white border at 10% opacity |
| `--input` | `oklch(1 0 0 / 15%)` | input border/background |
| `--destructive` | `oklch(0.704 0.191 22.216)` | error/destructive red |

This is a **monochrome** system — no brand hue (no lime/sky-blue) is in use
today. If a brand color is introduced later, add it as new tokens rather than
replacing these neutrals.

## Typography

- `font-sans`: Geist (via `next/font/google`, `--font-geist-sans`)
- `font-mono`: Geist Mono (`--font-geist-mono`)
- Hero heading pattern: a large bold statement paired with a smaller
  italic/thin lead-in line, e.g.:
  ```tsx
  <h1 className="text-7xl font-semibold whitespace-pre-wrap">
    <span className="text-6xl font-thin italic">Lead-in phrase</span>
    Bold closing statement
  </h1>
  ```

## Layout & Spacing

- `--radius: 0.625rem` is the base radius; `--radius-sm/md/lg/xl/2xl/3xl/4xl`
  are derived from it in `@theme inline` — use the derived scale, don't
  hardcode `rounded-[Npx]`.
- Site container convention: `mx-auto max-w-5xl px-6` (used by the Navbar).
  Reuse this for any new full-width section that needs a centered content
  column.

## Component Patterns

- **Buttons** — `components/ui/button.tsx` (shadcn "base-nova" on
  `@base-ui/react`). Variants: `default | outline | secondary | ghost |
  destructive | link`. Sizes: `default | xs | sm | lg | icon | icon-*`.
  Reuse this component; don't create new button primitives. To render a
  `Button` as a link, use the `render` prop (base-ui's polymorphic API, not
  `asChild`) and set `nativeButton={false}` — otherwise base-ui warns that a
  non-`<button>` element (the `<a>`) was rendered while it still expected
  native button semantics:
  ```tsx
  <Button
    variant="default"
    size="lg"
    nativeButton={false}
    render={<Link href="#contact" />}
  >
    Book a Free Strategy Call
  </Button>
  ```
- **Glass surface** — the reusable "glass" treatment for floating UI over
  the hero's WebGL background: `border border-white/10 bg-white/5
  backdrop-blur-xl shadow-lg`, `rounded-full` for pill-shaped containers
  (nav) or a smaller radius for cards. Use this pattern for any future
  floating CTA banners or overlay cards that need to sit on top of imagery.

## Per-Section Notes

### Hero (`components/sections/hero.tsx`)
- Full-bleed `GLSLHills` WebGL background (`components/ui/glsl-hills.tsx`),
  a semi-transparent grayscale noise-plane terrain.
- Container: `min-h-screen w-full` so it always fills the viewport
  (`h-full` alone collapses with no ancestor of explicit height).
- Text overlay: centered, absolutely positioned, `pointer-events-none` so
  clicks pass through to the canvas — except the button row, which needs
  `pointer-events-auto`.
- Two-CTA pattern: one `variant="default"` (primary/high-intent) + one
  `variant="outline"` (secondary/lower-intent), both `size="lg"`. No body
  paragraph under the heading — CTAs follow directly.

### Navbar (`components/layout/navbar.tsx`)
- Fixed, floating glass pill: `fixed inset-x-0 top-4 z-50`, inner container
  `mx-auto max-w-5xl rounded-full` with the glass surface treatment above.
- Layout: `grid grid-cols-[auto_1fr_auto]` — wordmark left, nav links
  centered in the middle column, CTA button right. This grid keeps the nav
  links visually centered regardless of how wide the logo or CTA are.
- Nav links collapse (`hidden md:flex`) below the `md` breakpoint; there is
  no mobile hamburger menu yet — logo and CTA remain visible on mobile.
