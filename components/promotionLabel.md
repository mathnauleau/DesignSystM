# Promotion Label [Latest:V1.1]

## Introduction
A **Promotion Label** allows the user to add or delete a certain number of items from their list through incremental steps.

- Design: [🧬 Promotion Label](https://www.figma.com/design/lTI9AxsH8FLpPZBfkZWO9e/%F0%9F%A7%AC-Promotion-label?node-id=2315-3492)
- Documentation: [design.ah.nl](https://design.ah.nl/6d94170d9/p/49c2de-promotion-label)

![image](https://github.com/user-attachments/assets/50d7ed27-ecea-4d4d-aaff-257033d6f23c)

---

## Use Cases
**Use:**
- x
- x

**Avoid when:**
- x
- x

---

## Anatomy
The quantity stepper consists of a delete/minus button, a quantity, an add button, and an optional 'swap' button.
| Part            | Description                                      |
|-----------------|--------------------------------------------------|
| Increment Button | Based on Icon Button Level=Primary. Increases value by the step amount         |
| Quantity Field     | Allows direct number input                   |
| Decrement Button | Based on Icon Button Level=Secondary. Decreases value by the step amount         |
| Swap button (optional, Web only)     | Used to trigger a product swap        |

![image](https://github.com/user-attachments/assets/1b149547-c244-459f-9a03-2a2c096f3251)t

---

## States

| State      | Description                                                             |
|------------|-------------------------------------------------------------------------|
| Default    | Shows current value; buttons active within range                        |
| Expanded      | Buttons show hover styling for interactivity                            |
| Collapsed      | Input field has focus ring; allows keyboard entry                       |
| Disabled   | Input and buttons grayed out; non-interactive                           |

---

## Variants

### Style
| Variant              | Description                                           |
|----------------------|-------------------------------------------------------|
| Default             | Horizontal layout with “– [input] +”                 |
| Discount            | “+” above and “–” below input                        |

### Size
| Variant              | Description                                           |
|----------------------|-------------------------------------------------------|
| Small             | Used on Product Cards               |
| Medium - Horizontal    | Used on Product Cards                  |
| Medium - Vertical    | Used on Product Cards                   |
| Large    | Used on Product Detail Page                   |
| XLarge    | Used on Product Detail Page                   |

---

## Responsiveness
- 

---

## Behaviours

General (all Promotion Labels)
- PromotionLabel expands with the title/label, until reaching the maximum width available of the content of the vertical card.
- If Title and Label are too long, we apply the 50/50 rule
- If only the Title is too long, then it will be truncated
- If only the Label is too long, then it will be truncated
- So the rule applies ONLY if totalWidth of them - is bigger than 100% of the width. If label is 45%, and title is 54% - no rule is applied, since 99% < 100%. Label remains as 45% and title remains as 54%

Promotion Label - Tiered
- In case of 2 or 3 Tiers, if the Promotion Label exceeds the available space, its layout changes from horizontal to vertical.

Ratio of the Title/Label
- If both are bigger than 50%, then both are set to 50%
- If title is 30%, label is 80% -> Label is cut
- If title is 70% and label is 35% -> Title is cut

---

## Accessibility
- 

---

## Do's and Don'ts

| ✅ Do                                                                 | 🚫 Don’t                                                |
|----------------------------------------------------------------------|----------------------------------------------------------|
| Keep the copy short                            | Use the wrong size (check use case above)                     |

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

## ChangeLog
### [Version 1.1] - 2025-06-00
Added
- x

Changed
- M - horizontal variant for tiered labels
- Multi-lined default variant for XL and L sized labels

### [Version 1] - 2025-06-00
Added
- First iteration of the component

Changed
- ’Miles’ component name to ‘Air Air Miles’
