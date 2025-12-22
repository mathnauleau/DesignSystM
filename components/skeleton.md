# Skeleton --- Component Documentation

## Task

Create complete and production-ready component documentation using the
design system template. Make sure that when copying the design, it has
auto-layout and as few layers as possible.

------------------------------------------------------------------------

## Inputs

### `component_name` and `component_description`

-   **Component name:** Skeleton
-   **Description:** The Skeleton component provides a temporary visual
    placeholder for content that is still loading. It gives users a
    sense of structure and layout before actual data appears.

------------------------------------------------------------------------

### `component_overview`

The Skeleton component is a visual loading placeholder used to represent
UI elements that have not yet loaded. It helps reduce perceived waiting
time by showing the approximate shape and size of the incoming content.\
Skeletons appear in areas such as cards, lists, product details, forms,
banners, and any data-driven layout.\
They support content predictability, create layout stability, and
prevent layout shift (CLS) during loading.

------------------------------------------------------------------------

### `component_behaviours`

-   Skeletons **do not respond** to user input---they are
    **non-interactive placeholders**.\
-   They should **adapt responsively** to the size of the content they
    represent (e.g., full-width for text blocks, aspect-ratio preserved
    for media placeholders).\
-   When real content loads, Skeletons should **fade out smoothly**
    using motion tokens (e.g., `motion.duration.xs`,
    `motion.ease.out`).\
-   Skeletons should **not scroll independently**; they move with their
    parent container.\
-   Platform specifics:
    -   **Web**: Prefer minimal motion to avoid motion sensitivity
        conflicts.\
    -   **Native**: May use slightly more expressive transitions if
        consistent with platform guidelines.

------------------------------------------------------------------------

### `component_states`

Skeleton components typically have *one primary visual
state*---**Loading**. However, some systems include optional variations:

-   **Default (Loading)**
    -   Background: `color.background.skeleton`\
    -   Highlight shimmer (optional): `motion.shimmer.xslow`\
    -   Border radius: `borderRadius.sm` (or matches the element
        represented)
-   **No-Animation Mode (Reduced Motion)**
    -   Solid fill only\
    -   Disabled shimmer and transitions\
    -   Triggered when user has OS-level reduced-motion settings enabled
-   **Error (Optional, if supported by product)**
    -   Used when content fails to load after retries\
    -   Background: `color.background.skeletonError`\
    -   Icon or label: "Failed to load" (optional system warning
        indicator)

------------------------------------------------------------------------

### `component_variants`

Skeletons vary based on the content they represent:

-   **Text Line**
    -   Single-line or multi-line\
    -   Adjustable width (e.g., 100%, 75%, 50%)\
    -   Used for paragraphs, labels, descriptions
-   **Avatar / Image Placeholder**
    -   Square or circular shape\
    -   Used for profile photos, product images, thumbnails
-   **Rectangular Block**
    -   Represents cards, banners, or large media
-   **Button Skeleton**
    -   Mimics the size of primary/secondary buttons\
    -   No interactive states
-   **Custom Shape**
    -   Rare\
    -   Used for uniquely shaped UI elements (e.g., price tag, badge)

------------------------------------------------------------------------

### `component_styles`

-   **Regular Skeleton**
    -   Base fill: `color.background.skeleton`\
    -   Highlight shine (if used): `color.background.skeletonHighlight`\
    -   Border radius: context-dependent (usually `borderRadius.sm`)
-   **Shimmer / Animated**
    -   Motion: `motion.shimmer.xslow`\
    -   Opacity animation: `motion.opacity.soft`

#### Token references

-   **Color tokens**
    -   `color.background.skeleton`\
    -   `color.background.skeletonHighlight`\
    -   `color.border.skeleton` (optional)
-   **Spacing tokens**
    -   Follow spacing structure of the represented content\
    -   Skeletons should maintain `spacing.xxx` gaps identical to the
        final layout
-   **Border Radius tokens**
    -   `borderRadius.none | sm | md | full` (match the real component
        shape)
-   **Motion tokens**
    -   `motion.duration.xs`\
    -   `motion.ease.out`\
    -   `motion.shimmer.xslow`\
    -   `motion.opacity.soft`

------------------------------------------------------------------------

### `design_notes`

-   Always match the **approximate size** of the actual component to
    prevent layout shifts.\
-   Do not display Skeletons for loading times shorter than **300ms** to
    avoid flicker.\
-   Avoid overusing Skeletons---use them only when content structure
    matters.\
-   Ensure compliance with **reduced-motion preferences** by disabling
    shimmer.\
-   For responsive layouts, Skeletons should scale fluidly (width = 100%
    by default).\
-   Don't nest too many Skeletons; keep the DOM/layer structure minimal.

------------------------------------------------------------------------

## Actions

### 1. Load Template

Load the component documentation base: - Source file:
`{FIGMA_TEMPLATE_LINK}`

### 2. Duplicate Frame

Create a new working file: - Name: `Skeleton — Documentation`

### 3. Fill: Overview

Insert: - Title: **Skeleton** - Summary: *(content from
component_overview above)*

### 4. Fill: Anatomy

Annotated diagram should include: 1. **Container** (auto-layout, width
and height match destination content)\
2. **Skeleton Shape** (rectangular, circular, or line-based)\
3. **Optional shimmer layer**\
4. **Spacing structure** matching the final component layout

### 5. Fill: States

Use the state list defined earlier.

### 6. Fill: Variants

Include all contextual variants with images.

### 7. Fill: Styles

Insert the styles and token references.

### 8. Fill: Usage

Add best practices, do's and don'ts.

### 9. Fill: Content Guidelines

Skeletons contain no text; follow structural rules.

### 10. Fill: Accessibility

Document keyboard behaviour, ARIA roles, motion, WCAG refs.

### 11. Append Notes

Add the design notes at the end of the Overview section.

------------------------------------------------------------------------

## Output

**Documentation for `Skeleton` created successfully using the design
system template. You can now copy and edit the documentation.**
