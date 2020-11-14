"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyAnimation = exports.containerAnimation = void 0;
var containerAnimation = {
  close: {
    opacity: 0,
    transition: {
      delay: 1
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};
exports.containerAnimation = containerAnimation;
var bodyAnimation = {
  close: {
    scale: 0.7,
    opacity: 0
  },
  open: {
    scale: 1,
    opacity: 1
  }
};
exports.bodyAnimation = bodyAnimation;