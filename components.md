# Components

Components are the **reusable UI building blocks** of our system. They are built on **foundations** and configured through **variants, states, and properties**. Each component has a consistent structure across design and code.

---

## 1. Anatomy

A component = **Base structure + Variants + States + Properties**  
Example: Button
- Base: label + container
- Variants: primary / secondary / tertiary
- States: default / hover / pressed / disabled / focus
- Properties: size, icon, loading

---

## 2. Variants

Variants capture meaningful differences of the same component.  
Examples:
- Button → Primary / Secondary / Destructive
- Input → Text / Password / Search

Variants should:
- Use **semantic names** (not visual names like “blue button”).  
- Be limited to meaningful differences (avoid variant explosion).

---

## 3. States

States represent **UI feedback** or **system interaction**.  
Common states:
- **Default**: base appearance
- **Hover**: visual cue on pointer interaction
- **Active / Pressed**: interaction confirmation
- **Focus**: keyboard navigation or accessibility state
- **Disabled**: unavailable action

Each state should have tokens defined (e.g. `button-primary-hover-background`).

---

## 4. Properties

Properties are configurable options of a component.  
Examples:
- **Size**: small / medium / large
- **Icon**: with / without leading/trailing icon
- **Label**: text or empty
- **Responsive behavior**: how the component adapts to different breakpoints

---

## 5. Responsiveness

Components must adapt across devices and contexts.  
Guidelines:
- Define **breakpoints** (mobile / tablet / desktop).  
- Ensure components scale consistently using spacing and typography tokens.  
- Test component behavior in different layouts (fluid width, grid systems).

---

## 6. Cross-platform Alignment

- Designers use **Figma components** with variants and properties.  
- Developers use **code components** in React, SwiftUI, Jetpack Compose, or Flutter.  
- Both should reference the same **tokens** (exported from Token Studio).  

---

## 7. Code Generation

- Figma components can generate starter code snippets.  
- We align **component properties** in Figma and code:
  - Figma property: `size = large`  
  - Code API: `<Button size="large" />`

This keeps design and development speaking the same language.

---

## 8. Best Practices

- Prefer **reusable variants** over creating new components for small differences.  
- Keep a **clear mapping** between Figma variants and code props.  
- Document edge cases (e.g. loading state, error state).  
- Ensure accessibility (focus states, screen reader labels).  