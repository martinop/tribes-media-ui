"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Input(props) {
  var className = props.className,
      error = props.error,
      containerClassname = props.containerClassname,
      restProps = _objectWithoutProperties(props, ["className", "error", "containerClassname"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: containerClassname
  }, /*#__PURE__*/_react.default.createElement("input", _extends({}, restProps, {
    className: (0, _classnames.default)("tribes-input text-base text-center p-3", className)
  })), error && /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-1 text-red-200 text-sm"
  }, error));
}

var _default = Input;
exports.default = _default;