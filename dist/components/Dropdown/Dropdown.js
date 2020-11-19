"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropdown = _interopRequireDefault(require("react-dropdown"));

require("react-dropdown/style.css");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dropdown(props) {
  var options = props.options,
      value = props.value,
      onChange = props.onChange,
      placeholder = props.placeholder;
  return /*#__PURE__*/_react.default.createElement(_reactDropdown.default, {
    options: options,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    arrowOpen: /*#__PURE__*/_react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "ml-8",
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "white"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"
    })),
    arrowClosed: /*#__PURE__*/_react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "ml-8",
      width: "15",
      height: "15",
      viewBox: "0 0 24 24",
      fill: "white"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
    })),
    className: "tribes-media-dropdown font-poppins"
  });
}

Dropdown.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  })),
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onChange: _propTypes.default.func,
  plcaeholder: _propTypes.default.string
};
var _default = Dropdown;
exports.default = _default;