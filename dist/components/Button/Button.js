"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var color = _ref.color,
      size = _ref.size,
      label = _ref.label,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["color", "size", "label", "disabled", "onClick", "className"]);

  var mode = "button--".concat(color);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    className: ['font-poppins button', "button--".concat(size), className && className, disabled ? 'disabled' : '', mode].join(' ')
  }, !disabled && onClick && {
    onClick: onClick
  }, props), label);
};

Button.propTypes = {
  primary: _propTypes.default.bool,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  color: "secondary",
  size: 'medium',
  onClick: undefined
};
var _default = Button;
exports.default = _default;