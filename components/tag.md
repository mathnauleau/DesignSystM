# Tag [Latest:V1]

## Introduction
A Tag is a small label used to categorize or highlight an item. Use it to display brief information such as statuses or categories.

- Design: [🧬 Tag 1.1](https://www.figma.com/design/OzdzRSqpnrvfOnrXphuiiL/%F0%9F%A7%AC-Tag---EX?t=z9RDJcDik42FrDvl-0)
- Documentation: [design.ah.nl](https://design.ah.nl/6d94170d9/p/079ff1-tag)

---

## Use Cases

**Use when:**
- [Specific use case]
- [Another valid situation]

**Avoid when:**
- [Inappropriate usage]
- [Better suited alternatives]

---

## Anatomy

| Part      | Description                             |
|-----------|-----------------------------------------|
| Container | Holds the structure of the tag |
| Content   | Primary text or visual elements         |

> [diagram of anatomy]

---

## States (reactive)

| State      | Description                             |
|------------|-----------------------------------------|
| Default    | Neutral state before interaction        |
| Hover      | Shows affordance for interaction        |
| Focus      | Highlights when using keyboard          |
| Disabled   | Greyed out or non-interactive state     |
| Selected   | Indicates active or chosen state        |

---

## Variants (situational)

| Variant         | Description                        |
|-----------------|------------------------------------|
| Size            | Small, Medium, Large               |
| Style           | Icon, Text only, Dismissible       |

---

## Behaviours

- Appears/disappears based on interaction
- May support drag or swipe (e.g., bottom sheet)
- Resizes responsively based on device width

## Rules
- **Given** the component is focused  
  **When** the user presses Enter  
  **Then** the primary action is triggered

---

## Accessibility

### Relevant WCAG AA compliance
- [1.4.3 Contrast](https://www.w3.org/TR/WCAG22/#contrast-minimum)

### Keyboard navigation
- Tab to focus
- Enter/Space to activate
- ESC to dismiss (if dismissible)

- `role="region"`
- `aria-label` describes the purpose
- Ensures screen reader feedback

---

## Do's and Don'ts

| ✅ Do                                          | 🚫 Don’t                                     |
|-----------------------------------------------|---------------------------------------------|
| Use with clear labels                         | Overload with too much content              |
| Make it visually distinct                     | Break navigation flow unnecessarily         |

---

# Changelog

## [1.1] - Unreleased
### Added
- Added Action button
- Added 'New' Variant

## [1.0] - 2025-06-11
### Added
- First component