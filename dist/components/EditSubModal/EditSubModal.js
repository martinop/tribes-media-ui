"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStripeElements = require("react-stripe-elements");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Button = _interopRequireDefault(require("../Button"));

require("./styles.css");

var _StripeForm = _interopRequireDefault(require("../StripeForm/StripeForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function EditSubModal(props) {
  var open = props.open,
      labels = props.labels,
      disabled = props.disabled,
      onClose = props.onClose,
      apiKey = props.apiKey,
      planSelected = props.planSelected,
      onSubmit = props.onSubmit,
      onCancel = props.onCancel,
      color = props.color,
      logo = props.logo,
      list = props.list,
      language = props.language;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showForm = _React$useState2[0],
      setShowForm = _React$useState2[1];

  function _onClose() {
    onClose();
    setTimeout(function () {
      setShowForm(false);
    }, 300);
  }

  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "edit-sub-modal",
    onClose: _onClose,
    padded: false,
    className: "edit-sub-modal px-8 pt-10 pb-6"
  }, /*#__PURE__*/_react.default.createElement(_reactStripeElements.StripeProvider, {
    apiKey: apiKey
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, logo), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-sm uppercase text-center text-white font-bold mt-6 mb-8"
  }, labels.title), !showForm && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", {
    className: "font-bold uppercase text-white text-2xl"
  }, language === "es" ? "Mi cuenta" : "My Account"), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white px-6 py-2 rounded-full border border-white mt-2 mb-8 border-opacity-25"
  }, /*#__PURE__*/_react.default.createElement("span", null, labels.subscription)), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full sm:w-2/4 sm:mx-auto"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: (0, _classnames.default)(labels.unavailable ? "mb-8" : "mb-16")
  }, list.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _classnames.default)("flex items-center", index > 0 && "mt-3"),
      key: "edit-sub-list-detail-".concat(index)
    }, /*#__PURE__*/_react.default.createElement("svg", {
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M12.5 0C5.60621 0 0 5.60621 0 12.5C0 19.3938 5.60621 25 12.5 25C19.3938 25 25 19.3938 25 12.5C25 5.60621 19.3938 0 12.5 0ZM12.5 24.0759C6.11755 24.0759 0.924101 18.8825 0.924101 12.5C0.924101 6.11755 6.11755 0.924101 12.5 0.924101C18.8825 0.924101 24.0759 6.11755 24.0759 12.5C24.0759 18.8825 18.8825 24.0759 12.5 24.0759Z",
      fill: "white"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M18.5929 14.8044C16.7785 15.4543 14.6716 15.7963 12.5 15.7963C10.3283 15.7963 8.22137 15.4543 6.40705 14.8044C6.24995 14.7489 6.07745 14.7797 5.95116 14.8876C5.82487 14.9954 5.76634 15.1617 5.79714 15.325C6.41937 18.5254 9.2348 20.848 12.4969 20.848C15.7589 20.848 18.5775 18.5254 19.1997 15.325C19.2305 15.1617 19.172 14.9954 19.0457 14.8876C18.9225 14.7828 18.7469 14.7489 18.5929 14.8044ZM12.5 19.927C9.9556 19.927 7.72543 18.2944 6.91838 15.9441C8.63105 16.4555 10.5439 16.7204 12.5 16.7204C14.456 16.7204 16.3689 16.4524 18.0815 15.9441C17.2745 18.2944 15.0443 19.927 12.5 19.927Z",
      fill: "white"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M7.99292 12.94C8.05453 12.9677 8.11922 12.98 8.1839 12.98C8.24859 12.98 8.31328 12.9677 8.37488 12.94C8.51042 12.8784 11.6585 11.4245 11.6585 9.11115C11.6585 7.9899 10.7467 7.07812 9.6255 7.07812C9.07104 7.07812 8.55662 7.29991 8.18082 7.67879C7.80502 7.29991 7.29061 7.07812 6.73615 7.07812C5.6149 7.07812 4.70312 7.9899 4.70312 9.11115C4.70929 11.4245 7.86047 12.8784 7.99292 12.94ZM6.73923 8.00223C7.18279 8.00223 7.58324 8.26713 7.75882 8.67374C7.83275 8.84316 7.99908 8.95405 8.1839 8.95405C8.36872 8.95405 8.53506 8.84316 8.60899 8.67374C8.78457 8.26713 9.18501 8.00223 9.62858 8.00223C10.2385 8.00223 10.7375 8.49816 10.7375 9.11115C10.7375 10.562 8.80921 11.6801 8.18698 12.0036C7.56476 11.6801 5.63647 10.5589 5.63647 9.11115C5.63339 8.49816 6.12932 8.00223 6.73923 8.00223Z",
      fill: "white"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M18.2603 7.07812C17.7058 7.07812 17.1914 7.29991 16.8156 7.67879C16.4398 7.29991 15.9254 7.07812 15.3709 7.07812C14.2497 7.07812 13.3379 7.9899 13.3379 9.11115C13.3379 11.4245 16.4891 12.8815 16.6215 12.94C16.6831 12.9677 16.7478 12.98 16.8125 12.98C16.8772 12.98 16.9419 12.9677 17.0035 12.94C17.139 12.8784 20.2871 11.4245 20.2871 9.11115C20.2902 7.9899 19.3815 7.07812 18.2603 7.07812ZM16.8156 12.0036C16.1934 11.6801 14.2651 10.5589 14.2651 9.11115C14.2651 8.50124 14.761 8.00223 15.374 8.00223C15.8176 8.00223 16.218 8.26713 16.3936 8.67374C16.4675 8.84316 16.6338 8.95405 16.8187 8.95405C17.0035 8.95405 17.1698 8.84316 17.2438 8.67374C17.4193 8.26713 17.8198 8.00223 18.2633 8.00223C18.8732 8.00223 19.3723 8.49816 19.3723 9.11115C19.3661 10.5589 17.4378 11.6771 16.8156 12.0036Z",
      fill: "white"
    })), /*#__PURE__*/_react.default.createElement("span", {
      className: "ml-3 text-white text-sm"
    }, item));
  }))), labels.unavailable ? /*#__PURE__*/_react.default.createElement("p", {
    className: "text-white mb-4"
  }, labels.unavailable) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: labels.subscriptionBtn,
    onClick: function onClick() {
      return setShowForm(true);
    },
    className: "w-full sm:w-4/5 md:mx-auto",
    type: "submit",
    color: color
  }), labels.discount && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-white text-sm my-1 text-center font-medium"
  }, labels.discount)), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onCancel,
    className: "text-center text-white font-bold text-sm mt-4"
  }, labels.cancel)), showForm && /*#__PURE__*/_react.default.createElement(_reactStripeElements.Elements, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full sm:w-2/3 flex flex-col mt-6"
  }, /*#__PURE__*/_react.default.createElement(_StripeForm.default, {
    onSubmit: onSubmit,
    disabled: disabled,
    planSelected: planSelected,
    labels: {
      cardNumber: labels.cardNumber,
      cardExpiration: labels.cardExpiration,
      cardCVC: labels.cardCVC,
      confirm: labels.confirm
    }
  }))))));
}

EditSubModal.propTypes = {
  open: _propTypes.default.bool,
  logo: _propTypes.default.element,
  disabled: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  apiKey: _propTypes.default.string,
  color: _propTypes.default.oneOf(["primary", "secondary"]),
  onClose: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  planSelected: _propTypes.default.string,
  language: _propTypes.default.oneOf(["en", "es"]),
  list: _propTypes.default.arrayOf(_propTypes.default.string),
  labels: _propTypes.default.shape({
    cancel: _propTypes.default.string,
    title: _propTypes.default.string,
    discount: _propTypes.default.string,
    password: _propTypes.default.string,
    subscription: _propTypes.default.string,
    subscriptionBtn: _propTypes.default.string,
    cardNumber: _propTypes.default.string,
    cardExpiration: _propTypes.default.string,
    cardCVC: _propTypes.default.string,
    confirm: _propTypes.default.string
  })
};
EditSubModal.defaultProps = {
  color: "secondary"
};
var _default = EditSubModal;
exports.default = _default;