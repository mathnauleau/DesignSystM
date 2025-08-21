# Foundations

Foundations are the **building blocks** of our design system. They define the **visual language** (colors, typography, spacing, etc.) and provide the **tokens** that bridge design and code. Foundations ensure consistency and scalability across platforms.

---

## 1. Design Tokens

Tokens are **named values** that store the smallest, reusable design decisions. Instead of hard-coding values (e.g. `#000000` or `16px`), we use tokens to define them once and reference them everywhere.

### Token Levels
- **Global tokens**  
  Base definitions, independent of usage (e.g. `color-blue-500`, `font-size-16`).
- **Alias tokens (semantic tokens)**  
  Tokens mapped to a purpose (e.g. `color-background-primary`, `font-heading-large`).
- **Component tokens**  
  Values tied to a specific component (e.g. `button-primary-background`, `input-border-radius`).

This hierarchy allows flexibility: global tokens can change (e.g. brand refresh) without breaking semantic usage.

---

## 2. Figma Variables & Token Studio

- We manage foundations in **Figma Variables** (colors, typography, radii, spacing, etc.).  
- With **Token Studio**, we export variables into a `.json` file to synchronize design and development.  
- Example JSON output:
  ```json
  {
    "color": {
      "background": {
        "primary": { "value": "#FFFFFF" },
        "secondary": { "value": "#F4F4F4" }
      }
    },
    "font": {
      "heading": {
        "large": { "value": "24px" }
      }
    }
  }