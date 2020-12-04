"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyTheme = exports.mapTheme = void 0;
var defaultTheme = {
  primary: '#61DAFB',
  secondary: '#254E70'
};

var mapTheme = function mapTheme(variables) {
  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
    '--text-color-primary': variables.primaryText || '',
    '--text-color-secondary': variables.secondaryText || ''
  };
};

exports.mapTheme = mapTheme;

var applyTheme = function applyTheme(theme) {
  var themeObject = mapTheme(theme || defaultTheme);
  if (!themeObject) return;
  var root = document.documentElement;
  Object.keys(themeObject).forEach(function (property) {
    if (property === 'name') {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};

exports.applyTheme = applyTheme;