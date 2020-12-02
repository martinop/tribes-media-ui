"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getIsLightColor = _interopRequireDefault(require("../../utils/getIsLightColor"));

require("./button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
      backgroundColor = _ref.backgroundColor,
      size = _ref.size,
      label = _ref.label,
      disabled = _ref.disabled,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["primary", "backgroundColor", "size", "label", "disabled", "className"]);

  var mode = primary ? 'button--primary' : 'button--secondary';
  var primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary');
  var isLightColor = (0, _getIsLightColor.default)(primaryColor);
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ['font-poppins button', isLightColor ? 'text-black' : 'text-white', "button--".concat(size), className && className, disabled ? 'disabled' : '', mode].join(' ')
  }, props), label);
};

exports.Button = Button;
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes.default.bool,

  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,

  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /**
   * Button contents
   */
  label: _propTypes.default.string.isRequired,

  /**
   * Optional click handler
   */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined
};