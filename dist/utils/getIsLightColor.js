"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLightColor;

function isLightColor() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'primary';
  var hex = getComputedStyle(document.documentElement).getPropertyValue("--color-".concat(color)).replace('#', '');
  var cr = parseInt(hex.substr(0, 2), 16);
  var cg = parseInt(hex.substr(2, 2), 16);
  var cb = parseInt(hex.substr(4, 2), 16);
  var brightness = (cr * 299 + cg * 587 + cb * 114) / 1000;
  return brightness > 155;
}