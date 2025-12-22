# Pantry Desig System Guidelines

Use this file to provide Figma Make with the rules and expectations needed to generate components and documentation consistent with our design system philosophy. Keep the tone light, yet professional.

---

# General Guidelines

These rules apply to all generations (components, documentation, patterns, layouts).

- Always use **Auto Layout** by default — avoid absolute positioning unless the layout requires layering.
- Favor **responsive, flexible structures** using padding, spacing, and alignment.
- Keep layers clean:
  - Minimize nesting.
  - Keep names short and semantic.
  - Avoid unnecessary frames.
- Ensure everything is **accessible by design**:
  - Sufficient contrast between foreground/background.
  - Minimum 44px interactive target size.
  - Preserve logical reading order.
- Prefer **Figma variables** and tokens over manual values.
- Choose clarity over decoration. Every UI element should have a purpose.
- Any interactive component should show a pointer cursor onHover.

---

# Design System Guidelines  
Guidelines inspired by Pantry Design System principles.

## Foundation Tokens  
When creating elements, use tokens whenever applicable:
- **Spacing scale:** Use consistent spacing increments (4/8-based scales are typical).  
- **Typography:** Apply semantic text styles (e.g., heading, body, caption) based on hierarchy.  
- **Color:** Use semantic color tokens for text, surfaces, borders, and states (success, warning, error).  
- **BorderRadius:** Use standard radius sizes from the foundation tokens — avoid custom rounding.  
- **BorderWidth:** Use border width from the foundation tokens (1px or 2px).  

---

# Component Guidelines

## Regular and Icon Buttons

All buttons must:
- Have a minimum touch target of 48*48px
- Use the 'button' textstyle

## 1. Levels

**Primary (Filled)**
- Background uses variant default / hover / pressed / disabled tokens.
- Label uses `--color-foreground-inverted-default`.
- No stroke.

**Secondary (Outline)**
- Transparent background.
- Stroke + label use the same variant tokens.

## 2. Sizes

**Regular** : Fixed height; large horizontal + medium vertical padding.
**Small** : Reduced height and proportionally smaller padding.

## 3. Variants

**Primary Action**
- `--color-action-primary-default`
- `--color-action-primary-hover`
- `--color-action-primary-pressed`
- `--color-action-primary-disabled`

**Discount**
- `--color-action-discount-default`
- `--color-action-discount-hover`
- `--color-action-discount-pressed`
- `--color-action-discount-disabled`

**Premium**
- `--color-action-premium-default`
- `--color-action-premium-hover`
- `--color-action-premium-pressed`
- `--color-action-premium-disabled`

**Destructive**
- `--color-action-destructive-default`
- `--color-action-destructive-hover`
- `--color-action-destructive-pressed`
- `--color-action-destructive-disabled`

## 4. States

**Default**
- Primary: solid = variant default token.
- Secondary: transparent + stroke = variant default.
- Text: inverted (primary) or variant color (secondary).

**Hover**
- Background/stroke = variant hover token.

**Pressed**
- Background/stroke = variant pressed token; reduced elevation.

**Loading**
- Label replaced by spinner (inverted color); fixed width; background unchanged.

**Disabled**
- Background/stroke = variant disabled token.
- Text uses disabled token or neutral at reduced opacity; no interaction.

---

# Checkbox Component — Documentation (Token-Based)

## 1. States

### Unchecked
- Box: neutral stroke + transparent fill.
- Label: default foreground.
- Error variant: error stroke.

### Checked
- Box: filled with primary token + check icon.
- Label: default foreground.
- Error variant: error-colored box + check icon.

### Indeterminate
- Box: filled with primary token + minus icon.
- Label: default foreground.
- Error variant: error-colored box + minus icon.

## 2. Variants

### Regular
- Standard sizing and spacing across all states.

### Error: False
- Uses primary or neutral tokens for stroke, fill, and icon.

### Error: True
- Uses error tokens for stroke, fill, and icon in all states.

## 3. Interaction

**Default**: Shows the appropriate icon (none / check / minus) based on state. Label remains unchanged unless disabled.
**Hover / Focus**: Stroke or fill uses hover tokens. Focus adds visible outline per system guidelines.
**Disabled**: Reduced-opacity stroke, fill, and label. No hover, no interaction.

---

## Inputs and Form Fields
- Inputs always include:
  - Label
  - Field container
  - Optional helper text
- Error states must use the system error color tokens.
- Hit area must be at least 48px in height.
- Icons should align visually and follow tokenized color behavior.

---

## Cards
- Use --color-background-primary-default: #FFF as the default color
- Use --color-background-primary-hover: #f3f6f8 onHover
- Maintain consistent padding from spacing tokens.
- Auto Layout should wrap internal content semantically.

---

## Icons
- Use icons from the design system library only.
- Use #26313a as the default color 
- Use sizes 16px or 24px.

---

## Layout & Spacing
- Use even spacing increments.
- Maintain vertical rhythm using typography and spacing tokens.
- Prefer stack‑based layouts over canvas‑placed elements.

---

# Documentation Guidelines (for AI-written docs)

Generated component documentation should include:
- **Overview:** Clear, concise purpose.
- **Anatomy:** Numbered list of structural parts.
- **Usage:** Best practices + examples.
- **Variants:** When and why to use each.
- **States:** Default, hover, focus, disabled, error.
- **Accessibility:** Keyboard, semantics, WCAG rules.
- **Content Guidelines:** Tone, label rules, clarity expectations.

## Tone of voice:  
→ Light, friendly, yet professional.  
→ Always focused on clarity and helpfulness.

---

# Accessibility

Always apply:
- Color contrast ratios meeting **WCAG AA**.
- Keyboard focus visibility, from the tokens.
- Logical layer and reading order.
- Clear, action‑oriented labels.

Avoid:
- Conveying meaning only through color.
- Decorative or ambiguous labels.

---

This file should evolve as the Design System grows. Add or refine sections as needed.
