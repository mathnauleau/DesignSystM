
const StyleDictionary = require('style-dictionary');

module.exports = {
  source: ["global.json", "light.json", "dark.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "light.css",
          format: "css/variables",
          filter: (token) => !token.filePath.includes("dark.json")
        },
        {
          destination: "dark.css",
          format: "css/variables",
          filter: (token) => !token.filePath.includes("light.json")
        }
      ]
    },
    js: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "light.js",
          format: "javascript/es6",
          filter: (token) => !token.filePath.includes("dark.json")
        },
        {
          destination: "dark.js",
          format: "javascript/es6",
          filter: (token) => !token.filePath.includes("light.json")
        }
      ]
    }
  }
};
