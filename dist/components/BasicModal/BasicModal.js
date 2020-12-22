"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Modal = _interopRequireDefault(require("../Modal"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BasicModal(props) {
  var open = props.open,
      onClose = props.onClose,
      title = props.title,
      logo = props.logo,
      content = props.content;
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "basic-modal",
    onClose: onClose,
    padded: false,
    className: "basic-modal px-8 py-10"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-12"
  }, logo), title && /*#__PURE__*/_react.default.createElement("h2", {
    className: (0, _classnames.default)("text-white font-semibold text-2xl text-center", content && "mb-4")
  }, title), typeof content === 'string' ? /*#__PURE__*/_react.default.createElement("p", {
    className: "text-white"
  }, content) : content);
}

var _default = BasicModal;
exports.default = _default;