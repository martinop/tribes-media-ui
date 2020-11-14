"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("../Modal"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LanguagesModal(props) {
  var open = props.open,
      onClose = props.onClose,
      languages = props.languages,
      onChange = props.onChange;
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "languages-modal",
    onClose: onClose,
    className: "languages-modal"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "languages-modal-list"
  }, languages && languages.map(function (language) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "language-modal-item-".concat(language.value)
    }, /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return [onChange(language.value), onClose()];
      },
      className: "cursor-pointer"
    }, language.label));
  })));
}

LanguagesModal.propTypes = {
  open: _propTypes.default.bool,
  languages: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  onChange: _propTypes.default.func,
  onClose: _propTypes.default.func
};
var _default = LanguagesModal;
exports.default = _default;