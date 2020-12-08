"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Checkbox(props) {
  var color = props.color,
      className = props.className,
      label = props.label,
      onChange = props.onChange,
      id = props.id,
      value = props.value,
      restProps = _objectWithoutProperties(props, ["color", "className", "label", "onChange", "id", "value"]);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("tribes-checkbox mx-auto flex items-center", className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)("checkbox-round", color)
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "checkbox",
    id: id,
    onChange: onChange,
    checked: value
  }, restProps)), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: id
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-white leading-snug text-xs"
  }, label));
}

Checkbox.defaultProps = {
  id: "checkbox"
};
Checkbox.propTypes = {
  className: _propTypes.default.string,
  onChange: _propTypes.default.func,
  value: _propTypes.default.bool,
  id: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  color: _propTypes.default.oneOf(["primary", "secondary"])
};
Checkbox.defaultProps = {
  color: "primary"
};
var _default = Checkbox;
exports.default = _default;