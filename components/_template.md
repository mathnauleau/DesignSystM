# [Component Name]

## Introduction
A **[Component Name]** is a [brief description]. Use it for [primary purpose].

- Design: [🧬 Quantity Stepper 1.3]((HTTP://link.com))
- Documentation: [link](HTTP://link.com)
  
---

## Implementation plan
1. Prompt for the main container and the basic structure with 
2. Prompt for the child components
3. Prompt for the variants of the master component
4. Prompt for the component logic.

---

## Design specifications
The tokens mentioned below are based on {userName/designSystem} repository.
- **Container Layout:**
  - Background: `color.background.primary.default` (#ffffff)
  - Width: `248px` (expanded state)
  - Height: Auto-fit content
  - Shadow: `4px 0px 4px rgba(38,49,58,0.04), 8px 0px 16px rgba(38,49,58,0.08)`
  - Border radius: `borderRadius-core-M` (8px)

- **Typography System:**
  - Primary text: `fontFamily-core-mainFont` (Hamburg Serial)
  - Title: `heading-3` variant (Typography component)
  - Section headers: `body-strong`
  - Menu items: `body-regular`
  - Color: `foreground-primary-default` (#26313a)

- **Spacing:**
  - Internal padding: `spacing.core.md` (16px)
  - Vertical gaps: `spacing.core.md` (16px)

- **Child component 1:**
  - Background: `background-primary-default` (#ffffff)
  - Padding: `spacing-core-2` (8px)
  - Border radius: `borderRadius-core-M` (8px)
  - Typography: `body-regular`
  - Text color: `foreground-primary-default`

- **Child component 1:**
  - Background: `background-primary-default` (#ffffff)
  - Padding: `spacing-core-2` (8px)
  - Border radius: `borderRadius-core-M` (8px)
  - Typography: `body-regular`
  - Text color: `foreground-primary-default`
  - Section icons: `storeTask`, `order`, `store`, `settlement`, `document`, `settings`
  - Interaction icons: `chevron-up`, `chevron-down`

---

## Use Cases

**Use when:**
- [Use case 1]
- [Use case 2]

**Avoid when:**
- [Avoid case 1]
- [Avoid case 2]

---

## Gherkin Rules
- **Given** a user focuses on the stepper,  
  **When** they press the up arrow,  
  **Then** the value increases by 1
  
---

## Anatomy

| Part      | Description                             |
|-----------|-----------------------------------------|
| [Part 1]  | [What it does / how it's used]          |
| [Part 2]  | [e.g. optional icon, supporting label]  |

> [diagram of anatomy]

---

## States (reactive)

| State      | Description                             |
|------------|-----------------------------------------|
| Default    | [Visual style and behavior]             |
| Hover      | [Interaction feedback]                  |
| Focus      | [Accessibility support]                 |
| Disabled   | [Visual reduction and interaction lock] |
| Selected   | [Active or toggled version]             |

---

## Variants (situational)

| Variant         | Description                        |
|-----------------|------------------------------------|
| [Variant name]  | [e.g. Size, Icon, Color scheme]    |
| [Variant name]  | [e.g. Removable, Clickable]        |

---

## Behaviours

- [Describe key interactions]
- [Include keyboard interactions if relevant]
- [Note responsive/adaptive behavior]

 ## Rules
- Given-When-Then

---

## Accessibility

### Relevant WCAG AA compliance
- i.e. [1.4.3 Contrast](https://www.w3.org/TR/WCAG22/#contrast-minimum)

### Keyboard navigation
- [Keyboard navigation rules]

### Keyboard navigation
- `role="[role]"`
- `aria-label` for [use case]
- WCAG AA contrast compliance


---

## Do's and Don'ts

| ✅ Do                                              | 🚫 Don’t                                      |
|---------------------------------------------------|-----------------------------------------------|
| Use [example of good usage]                       | Use [example of misuse]                       |
| Keep [text/label size short]                      | Stack [too many components close together]    |

---

## Code Examples

```html
<!-- HTML / Web example -->
<span class="tag tag--small">Label</span>

# Changelog

## [1.0] - 2024-04