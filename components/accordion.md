# Accordion

## Introduction
A **Accordion** is a vertically stacked list of items that can expand/collapse. Use it to show or hide related content under expandable sections..

- Design: [🧬 Accordion 1.3](link)
- Documentation: [link]

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
| Container | Holds the structure of the accordion |
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

## Code Examples

```html
<div class="accordion"><button>Toggle</button><div class="content">Hidden content</div></div>
```