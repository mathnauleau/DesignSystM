# Quantity Stepper [Latest:V1.3]

## Introduction
A **Quantity Stepper** allows the user to add or delete a certain number of items from their list through incremental steps.

- Design: [🧬 Quantity Stepper](https://www.figma.com/design/9pLmMEgO8LZdartvEt4dkd/%F0%9F%A7%AC-Quantity-Stepper?node-id=3968-10392)
- Documentation: [design.ah.nl](https://design.ah.nl/6d94170d9/p/1730b7-quantity-stepper)

---

## Use Cases

**Use:**
- Users need to change quantity of a product on product cards

**Avoid when:**
- Users need to enter large or complex numbers → use a plain numeric input.
- Input requires formatting (e.g. currency, phone numbers) → use a formatted input field.
- Free-form text is needed → use a text input.

---

## Anatomy
The quantity stepper consists of a delete/minus button, a quantity, an add button, and an optional 'swap' button.
| Part            | Description                                      |
|-----------------|--------------------------------------------------|
| Increment Button | Based on Icon Button Level=Primary. Increases value by the step amount         |
| Quantity Field     | Allows direct number input                   |
| Decrement Button | Based on Icon Button Level=Secondary. Decreases value by the step amount         |
| Swap button (optional, Web only)     | Used to trigger a product swap        |

![image](https://github.com/user-attachments/assets/e2357313-cd61-4302-a05d-dea53ba9e65f)

---

## Properties

### Style
| Variant              | Description                                           |
|----------------------|-------------------------------------------------------|
| Default             | Icon button with action.primary.default color  |
| Discount            | Icon button with action.discount.default color  |

### Size
| Variant              | Description                                           |
|----------------------|-------------------------------------------------------|
| Small             | Used on Product Cards               |
| Large              | Used on Product Detail Page           |

## States

| State      | Description                                                             |
|------------|-------------------------------------------------------------------------|
| Collapsed   | Default property. Shows the "+" button or current value.  |
| Expanded    | Buttons show hover styling for interactivity                            |
| Disabled   | Input and buttons grayed out; non-interactive                           |

---

## Responsiveness
- The quantity stepper can have different widths depending on the space available and the device it is displayed on.
- When resizing, the buttons always stick to the left and right while the counter is centered.

---

## Behaviours

- Clicking "+" increases the value by `step`.
- Clicking "–" decreases the value by `step`.
- Value respects `min` and `max` bounds (optional).
- Keyboard support:
  - Up Arrow = increment
  - Down Arrow = decrement
  - Typing manually allowed; invalid characters are ignored
- Press-and-hold on buttons continuously increases/decreases value (optional)
- On focus lost (blur):
  - If input is empty → set value to 0
  - If input is invalid (non-numeric) → revert to last valid value
  - If below `min` or above `max` → clamp to nearest bound
- 1 unit step values supported (not 0,5)
- Use numeric software keyboard
- If the plus or minus is tapped while the quantity text field is focused, it should lose focus
- Do not play the scale animation when the quantity is edited via the text input

---

## Accessibility
- Buttons must be `role="slider"` and focusable
- Input field uses `type="number"` and `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- State: only needed if loading or disabled
  
- Ensure focus ring is visible when using keyboard
- Label must be programmatically associated via `for` and `id`, or `aria-labelledby`
- Error messages must use `aria-describedby`

---

## Code Examples

```html
<!-- HTML -->
<div class="stepper">
  <button class="stepper__button" aria-label="Decrease">–</button>
  <input type="number" min="0" max="10" step="1" value="1" aria-valuemin="0" aria-valuemax="10" aria-valuenow="1" />
  <button class="stepper__button" aria-label="Increase">+</button>
</div>
```

---

# Changelog

## [1.3] - 2025-04-00
### Changed
- The plus button is now disabled when reaching the max quantity.

## [1.2] - 2025-03-00
### Changed
- Add a plus and minus icon to the Quantity child component.

## [1.1] - 2024-11-00
### Changed:
- Add horizontal padding (spacing.s2) to the Quantity Stepper for the small variant in CollapsedState.
- Add horizontal padding (spacing.s1) to the Quantity Stepper for the large variant in CollapsedState.

## [1.0] - 2025-06-11
### Added
- First component