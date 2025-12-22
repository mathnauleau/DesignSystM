# Figma Make - Component Documentation Prompt

## Task
Create complete and production‑ready component documentation using the design system template.
Make sure that when copying the design, it has auto-layout and as few layers as possible.
(Note to designer: replace all placeholder fields with details for your component.)

------------------------------------------------------------------------

## Inputs

### `component_name` and `component_description` 
- Name of the component
- Description of the component

### `component_overview`
A concise explanation of:
- What the component is
- What problem it solves
- Where it is used within the product

### `component_behaviours`
Describe interaction logic and system behaviours:
- How it responds to user input
- Constraints
- Interaction rules
- Platform‑specific differences (if any)

### `component_states`
Define all relevant UI states:
- Default
- Hover
- Focus
- Pressed
- Disabled
- Loading
*(Include token‑based styling rules.)*

### `component_variants`
List contextual variants with purpose and differences.
Example:
- **Primary** -- main action
- **Secondary** -- alternative action

### `component_styles`
Include:
- Regular
- Discount

Include tokens (if known):
- `color.xxx`
- `typography.xxx`
- `spacing.xxx`
- `borderRadius.xxx`
- `motion.xxx`

### `design_notes`
Additional insights for future designers:
- Edge cases.
- Layout constraints.
- Known limitations.
- Considerations for responsive or adaptive use

------------------------------------------------------------------------

## Actions

### 1. Load Template
Load the component documentation base:
- Source file: `{FIGMA_TEMPLATE_LINK}` : https://www.figma.com/design/yH3LaNjU6pL3lBZdVlTVij/Pantry-AH---Internal-Assets?node-id=1826-1517&t=hPXs5HHBPHX9u2JX-11

### 2. Duplicate Frame
Create a new working file: - Name: `{{component_name}} — Documentation`

### 3. Fill: Overview
Insert: - Title: `{{component_name}}` - Summary:
`{{component_overview}}`

### 4. Fill: Anatomy
Produce an annotated diagram: - Clearly label component parts\
- Use design token names, not raw values\
- Keep platform‑agnostic wording

### 5. Fill: States
Insert state descriptions:
- `{{component_states}}`
Include: - Token‑driven rendering instructions
- Visual behavior in transitions
- Motion tokens where applicable

### 6. Fill: Variants
Insert: - `{{component_variants}}`
Add: - Variant matrix
- Visual differences
- Token references

### 7. Fill: Styles
Insert: - `{{component_styles}}`
Explicitly list: - Color tokens
- Typography tokens
- Spacing tokens
- Border radius tokens
- Icon assets
- Motion tokens

### 8. Fill: Usage
Add practical guidance: - Best practices
- Do's and don'ts
- Examples of correct vs incorrect usage
- Cross‑component consistency notes

### 9. Fill: Content Guidelines
Specify content rules: - Tone of voice
- Microcopy conventions
- Placeholder formats
- Character limits
- Error text patterns

### 10. Fill: Content Guidelines

### 11. Fill: Implementation example
Generate a code snippet of the basic component implementation.

### 12. Fill: Accessibility
Document:
- Keyboard behaviour.
- Focus order and visible focus cues.
- ARIA roles and semantics.
- Screen reader labels and announcements.
- WCAG references.
- Accessibility edge cases

### 13. Append Notes
Add: - Do's and Don'ts
Add: - `{{design_notes}}`
Place at the end of the Overview section.
