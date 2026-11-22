# ☞ DesignSystM

Welcome to **DesignSystM** — my personal design system playground.  
(Yes, the **M** stands for **Mathieu** ✌️).  

This repo is where I explore, experiment, and learn about building a design system from the ground up.  
It’s not about being “production-perfect” — it’s about **ideation, iteration, and fun**.



## Purpose

- 📚 **Learning**: deep dive into design systems, tokens, and multi-platform thinking  
- 🧪 **Experimenting**: trying out different approaches, tools, and structures  
- 💡 **Ideating**: shaping concepts for future, more robust systems  



## 📂 Structure (work in progress)

The repo separates **foundations** (the building blocks) from **components** (the UI pieces).  
Here’s the current (and evolving) structure:

```bash
designsystm/
│
├── data/                          # Design tokens, source of truth (Tokens Studio format)
│   ├── global.json                # Primitives (core colors, dimensions, text styles, ...)
│   ├── light.json                 # Light theme semantic tokens
│   ├── dark.json                  # Dark theme semantic tokens
│   ├── themes.json                # Theme definitions (light / dark = global + theme)
│   ├── $metadata.json             # Token set order
│   ├── style-dictionary.config.js # Style Dictionary build config
│   └── dictionary/                # Hand-written foundations CSS
│
├── my-tokens/       # npm package @mathieu.nauleau/tokens (CSS custom properties)
│
├── components/      # One md file per component spec (start from _template.md)
│
├── resources/       # Brand assets
│   ├── font/        # Inter, Montserrat, Product Sans
│   └── icon/        # SVG icons + Figma export presets
│
├── doc/             # Guides
│   ├── singleSourceOfTruth.md
│   ├── storybook.md
│   └── versioning.md
│
├── foundations.md   # Foundations overview
├── components.md    # Components overview
├── roadmap.md       # What's next
└── CHANGELOG.md
```



## 🚀 Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 22 or later and npm.

Install [Style Dictionary](https://styledictionary.com/getting-started/installation/) (v4+):

```bash
npm install -g style-dictionary
```



## 💻 Useful command lines

Build the tokens with Style Dictionary. The config lives in `data/`, so run it from there:

```bash
cd data
style-dictionary build --config style-dictionary.config.js
style-dictionary build --config style-dictionary.config.js --verbose
```

This generates one file per theme and platform in `data/build/`:

| Output | Contents |
| --- | --- |
| `build/css/light.css` | CSS variables: global + light |
| `build/css/dark.css` | CSS variables: global + dark |
| `build/js/light.js` | ES6 exports: global + light |
| `build/js/dark.js` | ES6 exports: global + dark |



## 📦 Using the tokens

The tokens are published on npm as [`@mathieu.nauleau/tokens`](https://www.npmjs.com/package/@mathieu.nauleau/tokens):

```bash
npm install @mathieu.nauleau/tokens
```

```css
@import "@mathieu.nauleau/tokens/css";
```

See [my-tokens/README.md](my-tokens/README.md) for usage, theming, and the token list.



## 🤝 Contributing

Right now, **DesignSystM** is a personal side project.  
That said, I love feedback, inspiration, or fun ideas. If you stumble here, feel free to:
- Open an issue
- Suggest a cool experiment
- Share your own learnings

Pull requests follow the [PR template](.github/PULL_REQUEST_TEMPLATE.md): remember to update the [CHANGELOG](CHANGELOG.md).  
Versioning follows [Semantic Versioning](https://semver.org/), see [doc/versioning.md](doc/versioning.md).



## ☝️ Note

This repo is **work in progress**. Expect half-baked ideas, scrappy experiments, and sudden shifts in structure.  
That’s the point.  

## 📌 Resources

Various inspiring links or repos.
- https://turborepo.com/docs (Use pseudo-code to describe each component)
- [fluttericon.com](https://www.fluttericon.com)
- [Style Dictionary](https://styledictionary.com)

## 🪄 Figma Plugins
- [SVG Export](https://www.figma.com/community/plugin/814345141907543603/svg-export)
- [Fill rule](https://www.figma.com/community/plugin/771155994770327940)


Made with <❤> by Mathieu
