# Using a Central Repository as a Single Source of Truth for Foundations

Our design system foundations (colors, typography, spacing, etc.) live in **one central GitHub repository**.  
This repository is the **source of truth** for all design tokens and their outputs (e.g. CSS variables, JSON, platform-specific files).  

By separating foundations into a dedicated repo, we ensure:
- **Consistency** across all projects and platforms.
- **Single point of maintenance** (updates flow everywhere).
- **Automation** of code generation from tokens.

---

## 1. Repository Setup

### Foundations Repository
This repo contains:
- **Token definitions** (JSON, YAML, etc. exported from Figma/Token Studio).  
- **Build pipeline** to transform tokens into platform-specific formats:
  - CSS variables (`tokens.css`)
  - SCSS (`tokens.scss`)
  - JSON for JavaScript/TypeScript projects (`tokens.json`)
  - iOS/Android output if needed  

Example structure:

''' bash
foundations/
├─ tokens/               # Source tokens (exported from Figma/Token Studio)
│  └─ tokens.json
├─ build/                # Build scripts (e.g. Style Dictionary)
├─ dist/                 # Generated outputs
│  ├─ tokens.css
│  ├─ tokens.json
│  ├─ tokens.scss
└─ package.json
'''

The repo can be published as an **NPM package** (for web) or exported via GitHub Releases (for mobile platforms).

---

## 2. Consuming Foundations

### Option 1: NPM (recommended for web projects)
Projects install the foundations package:
```bash
npm install @your-org/foundations

Then import the generated CSS or JSON:

'''
@import "@your-org/foundations/dist/tokens.css";
'''

.button {
  background: var(--color-background-primary);
}
'''

---

## 3. Workflow
	1.	Designers define tokens in Figma (via Figma Variables).
	2.	Token Studio exports them as JSON into the foundations repo.
	3.	Developers run the build script (npm run build) to generate outputs for each platform.
	4.	Projects consume the generated CSS/JSON from the package.
	5.	When tokens change → update version in foundations repo → bump version in consuming projects.

---

## 4. Example: Two Repositories
	•	Repo A (Foundations)
Contains tokens and builds outputs (tokens.css, tokens.json).
	•	Repo B (App)
References Repo A’s package:

''' bash
npm install @your-org/foundations
'''

Uses tokens in styles:
''' css
body {
  color: var(--color-text-primary);
}
'''

---

## 5. Benefits
	•	Scalable: multiple apps share the same base.
	•	Automated: update once, propagate everywhere.
	•	Aligned: design tokens remain in sync across design and code.

---

## 6. Best Practices
	•	Never hardcode values in apps – always reference tokens.
	•	Use semantic tokens (e.g. color-background-primary) instead of raw colors.
	•	Keep build outputs minimal and platform-agnostic.
	•	Version foundations carefully (semantic versioning).
    
---

## 7. Sample GitHub Actions Workflow (CI/CD)

Here’s an example workflow that:
	1.	Runs tests and builds tokens on push to main.
	2.	Publishes a new package version to npm (or GitHub Packages).

Save as .github/workflows/release.yml:

''' yaml
name: Release Foundations

on:
  push:
    branches:
      - main
  workflow_dispatch: # Allow manual trigger

jobs:
  build-and-publish:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: "https://registry.npmjs.org" # Change to GitHub Packages if needed

      - name: Install dependencies
        run: npm ci

      - name: Build tokens
        run: npm run build

      - name: Run tests
        run: npm test

      - name: Publish package
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }} # Or GITHUB_TOKEN if publishing to GitHub Packages
'''