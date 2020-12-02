"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLightColor;

function isLightColor() {
  var hex = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').replace('#', '');
  var cr = parseInt(hex.substr(0, 2), 16);
  var cg = parseInt(hex.substr(2, 2), 16);
  var cb = parseInt(hex.substr(4, 2), 16);
  var brightness = (cr * 299 + cg * 587 + cb * 114) / 1000;
  return brightness > 155;
}