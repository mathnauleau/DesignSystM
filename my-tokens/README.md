# @mathieu.nauleau/tokens

Design tokens from [DesignSystM](https://github.com/mathnauleau/DesignSystM) as CSS custom properties, with light and dark themes.

## Install

```bash
npm install @mathieu.nauleau/tokens
```

## Usage

Import once in your CSS (Vite, webpack, PostCSS):

```css
@import "@mathieu.nauleau/tokens/css";
```

Or load it from a CDN, no install needed:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mathieu.nauleau/tokens/tokens.css">
```

Then use the variables:

```css
.button {
  font: var(--font-label-button);
  color: var(--color-text-inverted);
  background: var(--color-action-default);
  padding: var(--space-xsmall) var(--space-small);
  border-radius: var(--border-radius-medium);
  transition: background var(--transition-fast);
}

.button:active {
  background: var(--color-action-active);
}
```

## Theming

Light is the default (on `:root`). Add the `dark` class to switch to dark. It redefines the color tokens, so components don't need to change:

```html
<html class="dark">
```

To follow the OS setting:

```js
const dark = window.matchMedia("(prefers-color-scheme: dark)");
document.documentElement.classList.toggle("dark", dark.matches);
```

## Fonts

The tokens use **Inter** (body) and **Bricolage Grotesque** (display), but don't load them. Add them yourself, for example from Google Fonts:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&family=Bricolage+Grotesque:wght@700&display=swap">
```

## Tokens

All sizes are in `rem`, based on a 4px unit (`--base-unit: 0.25rem`).

### Color

| Group | Tokens |
| --- | --- |
| Neutral scale | `--color-neutral-0` → `--color-neutral-900` (0, 50, 100…900) |
| Brand | `--color-brand-primary`, `--color-brand-accent` (each with `-light` / `-dark`), `--color-accent-purple` |
| Text | `--color-text-primary`, `--color-text-secondary`, `--color-text-inverted` |
| Background | `--color-background`, `--color-background-secondary`, `--color-background-secondary-hover` |
| Border | `--color-border` |
| Interactive | `--color-action-default`, `--color-action-active`, `--color-nav-default`, `--color-nav-hover` |
| Status | `--color-status-warning`, `--color-status-info`, `--color-status-critical` |

Use the semantic tokens (text, background, action…) in components. They're the ones that adapt to dark mode in a meaningful way.

### Typography

Shorthand `font` tokens (weight, size, line height, family):

| Token | Size | Use |
| --- | --- | --- |
| `--font-display-1` | 56px (44px under 768px) | Hero headlines |
| `--font-display-2` | 40px | Page titles |
| `--font-heading-1` | 32px | |
| `--font-heading-2` | 24px | |
| `--font-heading-3` | 20px | Section headings |
| `--font-body-regular-large` | 24px | Subheads |
| `--font-body-regular` / `--font-body-bold` | 16px | Body text |
| `--font-label` | 16px | Labels, overlines |
| `--font-label-button` | 16px | Buttons |
| `--font-caption` | 14px | Small text |

Also available: `--font-family-body`, `--font-family-display`, `--font-size-12` → `--font-size-64`, `--line-height-small` / `-medium` / `-large`.

### Space

| Scale | Tokens |
| --- | --- |
| T-shirt (8px steps) | `--space-xsmall` (8) · `--space-small` (16) · `--space-medium` (24) · `--space-large` (32) · `--space-xlarge` (40) · `--space-xxlarge` (64) · `--space-xxxlarge` (96) |
| Numeric (px value in the name) | `--space-8`, `-16`, `-24`, `-32`, `-40`, `-48`, `-64`, `-72` |
| Layout | `--space-section` (80px) |

### Border radius

`--border-radius-small` (4px) · `-medium` (8px) · `-large` (16px) · `-xlarge` (24px) · `-xxlarge` (32px) · `-circle` (9999px)

### Transition

`--transition-faster` (0.1s) · `-fast` (0.2s) · `-normal` (0.3s) · `-slow` (0.4s) · `-slower` (0.5s)

### Breakpoints

`--breakpoint-small` (544px) · `--breakpoint-medium` (768px) · `--breakpoint-large` (1012px)

> CSS variables can't be used inside `@media` queries. These are for reference or JS (`getComputedStyle`). Write the px value in your media queries.

## License

MIT
