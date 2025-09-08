
const StyleDictionary = require('style-dictionary');

module.exports = {
  source: ["global.json", "tokens-light.json", "tokens-dark.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "variables-light.css",
          format: "css/variables",
          filter: (token) => !token.filePath.includes("tokens-dark.json")
        },
        {
          destination: "variables-dark.css",
          format: "css/variables",
          filter: (token) => !token.filePath.includes("tokens-light.json")
        }
      ]
    },
    js: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "tokens-light.js",
          format: "javascript/es6",
          filter: (token) => !token.filePath.includes("tokens-dark.json")
        },
        {
          destination: "tokens-dark.js",
          format: "javascript/es6",
          filter: (token) => !token.filePath.includes("tokens-light.json")
        }
      ]
    }
  }
};
