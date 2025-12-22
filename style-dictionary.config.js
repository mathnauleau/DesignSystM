const StyleDictionary = require('style-dictionary');

const StyleDictionaryExtended = StyleDictionary.extend({
  source: ['data/global.json'],
  platforms: {
    'css-light': {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables'
        }
      ]
    },
    'css-dark': {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables'
        }
      ]
    }
  }
});

// Build light theme with light.json tokens
StyleDictionaryExtended.extend({
  source: ['data/light.json'],
  platforms: {
    'css-light': {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'light.css',
          format: 'css/variables'
        }
      ]
    }
  }
}).buildPlatform('css-light');

// Build dark theme with dark.json tokens
StyleDictionaryExtended.extend({
  source: ['data/dark.json'],
  platforms: {
    'css-dark': {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'dark.css',
          format: 'css/variables'
        }
      ]
    }
  }
}).buildPlatform('css-dark');

