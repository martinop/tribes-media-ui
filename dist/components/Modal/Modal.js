"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _framerMotion = require("framer-motion");

var _usePrevious = _interopRequireDefault(require("../../hooks/usePrevious"));

var _utils = require("./utils");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Modal(props) {
  var open = props.open,
      id = props.id,
      children = props.children,
      size = props.size,
      onClose = props.onClose,
      allowClose = props.allowClose,
      className = props.className;
  var prevOpen = (0, _usePrevious.default)(open);

  var _React$useState = React.useState(open),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  React.useEffect(function () {
    if (open && !show) setShow(true);
  }, [open, show]);
  React.useEffect(function () {
    if (prevOpen && !open) {
      hide();
    }
  }, [open, prevOpen]);

  function hide() {
    setTimeout(function () {
      setShow(false);
    }, 400);
  }

  return /*#__PURE__*/React.createElement(_reactModal.default, {
    isOpen: show,
    testId: id,
    ariaHideApp: false,
    onRequestClose: onClose,
    shouldCloseOnEsc: allowClose,
    shouldCloseOnOverlayClick: allowClose,
    overlayClassName: "bm-blur inset-0 flex fixed",
    className: "flex flex-col w-full"
  }, /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    className: (0, _classnames.default)('bm-body font-poppins relative flex flex-col h-auto m-auto bg-white shadow-md p-8 pt-12 overflow-y-auto', className, {
      'bm-small': size === 'small',
      'bm-medium': size === 'medium'
    }),
    variants: _utils.bodyAnimation,
    transition: {
      duration: 0.3
    },
    initial: "close",
    animate: open ? 'open' : 'close'
  }, allowClose && /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    className: "bm-close cursor-pointer z-10",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
  })), children));
}

;
Modal.defaultProps = {
  size: 'medium',
  allowClose: true
};
Modal.propTypes = {
  open: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  allowClose: _propTypes.default.bool,
  children: _propTypes.default.element,
  size: _propTypes.default.oneOf(["small", "medium"]),
  id: _propTypes.default.string
};
var _default = Modal;
exports.default = _default;