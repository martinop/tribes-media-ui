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

var _PlansBox = _interopRequireDefault(require("../PlansBox"));

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
      onChangePlan = props.onChangePlan,
      onCancel = props.onCancel,
      color = props.color,
      logo = props.logo,
      list = props.list,
      language = props.language,
      errorMessage = props.errorMessage,
      successMessage = props.successMessage,
      couponError = props.couponError,
      couponSuccess = props.couponSuccess,
      validateCoupon = props.validateCoupon,
      plans = props.plans;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showForm = _React$useState2[0],
      setShowForm = _React$useState2[1];

  var _React$useState3 = _react.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showAgree = _React$useState4[0],
      setShowAgree = _React$useState4[1];

  var showUpdateSection = !showForm && !successMessage && planSelected;
  var showAllPlans = !showUpdateSection && !showForm;

  function _onClose() {
    onClose();
    setTimeout(function () {
      setShowForm(false);
      setShowAgree(false);
    }, 300);
  }

  function _onCancel() {
    setShowForm(false);
    onCancel();
  }

  function _onChangePlan(planId) {
    onChangePlan(planId);
    setShowForm(true);
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
  }, labels.title), successMessage && !errorMessage && !showForm && /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-success w-full text-white inline-flex items-center py-2 px-4 mb-10"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.5 0C5.60621 0 0 5.60621 0 12.5C0 19.3938 5.60621 25 12.5 25C19.3938 25 25 19.3938 25 12.5C25 5.60621 19.3938 0 12.5 0ZM12.5 24.0759C6.11755 24.0759 0.924101 18.8825 0.924101 12.5C0.924101 6.11755 6.11755 0.924101 12.5 0.924101C18.8825 0.924101 24.0759 6.11755 24.0759 12.5C24.0759 18.8825 18.8825 24.0759 12.5 24.0759Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.5074 11.0705C17.0654 11.0705 17.5178 10.6182 17.5178 10.0602C17.5178 9.50215 17.0654 9.0498 16.5074 9.0498C15.9494 9.0498 15.4971 9.50215 15.4971 10.0602C15.4971 10.6182 15.9494 11.0705 16.5074 11.0705Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.49277 11.0705C9.05077 11.0705 9.50312 10.6182 9.50312 10.0602C9.50312 9.50215 9.05077 9.0498 8.49277 9.0498C7.93477 9.0498 7.48242 9.50215 7.48242 10.0602C7.48242 10.6182 7.93477 11.0705 8.49277 11.0705Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M18.2546 12.5587C18.0852 12.4231 17.848 12.4231 17.6786 12.5587C17.6108 12.6141 16.4434 13.5598 15.7842 14.9213C14.7677 14.413 13.6434 14.1451 12.5006 14.1451C10.1225 14.1451 7.94167 15.2632 6.51855 17.21C6.36762 17.4164 6.41382 17.7059 6.6202 17.8569C6.70337 17.9185 6.79886 17.9462 6.89127 17.9462C7.03297 17.9462 7.17466 17.8815 7.26399 17.7552C8.51153 16.0487 10.4213 15.0692 12.5006 15.0692C13.5325 15.0692 14.5459 15.3217 15.4608 15.7961C15.3838 16.0918 15.3375 16.3968 15.3375 16.711C15.3375 18.1618 16.5173 19.3416 17.9682 19.3416C19.419 19.3416 20.5988 18.1618 20.5988 16.711C20.5988 14.45 18.3501 12.6357 18.2546 12.5587ZM17.9682 18.4144C17.0287 18.4144 16.2616 17.6505 16.2616 16.7079C16.2616 15.3248 17.4168 14.0619 17.9682 13.5382C18.5195 14.0619 19.6747 15.3248 19.6747 16.7079C19.6747 17.6505 18.9077 18.4144 17.9682 18.4144Z",
    fill: "white"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "ml-2 my-auto leading-tight"
  }, successMessage)), errorMessage && !successMessage && !showForm && /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-error w-full text-white inline-flex items-center py-2 px-4 mb-10"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.5 25C5.60621 25 0 19.3938 0 12.5C0 5.60621 5.60621 0 12.5 0C19.3938 0 25 5.60929 25 12.5C25 19.3907 19.3938 25 12.5 25ZM12.5 0.924101C6.11755 0.924101 0.924101 6.11755 0.924101 12.5C0.924101 18.8825 6.11755 24.0759 12.5 24.0759C18.8825 24.0759 24.0759 18.8825 24.0759 12.5C24.0759 6.11755 18.8825 0.924101 12.5 0.924101Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.56775 14.8718C5.40536 14.8718 3.64648 13.113 3.64648 10.9506C3.64648 8.78817 5.40536 7.0293 7.56775 7.0293C9.73015 7.0293 11.489 8.78817 11.489 10.9506C11.489 13.113 9.73015 14.8718 7.56775 14.8718ZM7.56775 7.9534C5.91669 7.9534 4.57058 9.29642 4.57058 10.9506C4.57058 12.6016 5.91361 13.9477 7.56775 13.9477C9.21881 13.9477 10.5649 12.6047 10.5649 10.9506C10.5618 9.2995 9.21881 7.9534 7.56775 7.9534Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.56914 11.7457C7.13173 11.7457 6.77441 11.3884 6.77441 10.951C6.77441 10.5136 7.13173 10.1562 7.56914 10.1562C8.00655 10.1562 8.36387 10.5136 8.36387 10.951C8.36387 11.3884 8.00655 11.7457 7.56914 11.7457Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.431 14.8718C15.2686 14.8718 13.5098 13.113 13.5098 10.9506C13.5098 8.78817 15.2686 7.0293 17.431 7.0293C19.5934 7.0293 21.3523 8.78817 21.3523 10.9506C21.3523 13.113 19.5934 14.8718 17.431 14.8718ZM17.431 7.9534C15.78 7.9534 14.4339 9.29642 14.4339 10.9506C14.4339 12.6016 15.7769 13.9477 17.431 13.9477C19.0852 13.9477 20.4282 12.6047 20.4282 10.9506C20.4282 9.2995 19.0852 7.9534 17.431 7.9534Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.4324 11.7457C16.995 11.7457 16.6377 11.3884 16.6377 10.951C16.6377 10.5136 16.995 10.1562 17.4324 10.1562C17.8698 10.1562 18.2271 10.5136 18.2271 10.951C18.2271 11.3884 17.8729 11.7457 17.4324 11.7457Z",
    fill: "white"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M8.90192 19.5012C8.82491 19.5012 8.74482 19.4827 8.67397 19.4395C8.45527 19.3133 8.37518 19.0329 8.50147 18.8112C8.58156 18.6725 10.5068 15.4043 16.227 16.3284C16.4795 16.3685 16.649 16.6056 16.6089 16.8582C16.5689 17.1108 16.3317 17.2833 16.0791 17.2402C11.0273 16.427 9.37013 19.1531 9.30236 19.2701C9.21611 19.418 9.06209 19.5012 8.90192 19.5012Z",
    fill: "white"
  }))), /*#__PURE__*/_react.default.createElement("p", {
    className: "ml-2 my-auto leading-tight"
  }, errorMessage)), showAllPlans && /*#__PURE__*/_react.default.createElement(_PlansBox.default, {
    color: color,
    plans: plans,
    onChangePlan: _onChangePlan,
    labels: {
      subTitle: labels.plansSubTitle,
      details: labels.plansDetails,
      termsAndConditions: labels.termsAndConditions
    }
  }), showUpdateSection && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h1", {
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
    disabled: disabled,
    color: color
  }), labels.discount && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-white text-sm my-1 text-center font-medium"
  }, labels.discount)), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return setShowAgree(!showAgree);
    },
    disabled: disabled,
    className: "text-center text-white font-bold text-sm mt-4"
  }, labels.cancel), showAgree && /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: labels.yesAgree,
    onClick: _onCancel,
    className: "mt-4",
    type: "submit",
    color: color,
    disabled: disabled
  })), showForm && /*#__PURE__*/_react.default.createElement(_reactStripeElements.Elements, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full sm:w-2/3 flex flex-col mt-6"
  }, /*#__PURE__*/_react.default.createElement(_StripeForm.default, {
    onSubmit: onSubmit,
    disabled: disabled,
    planSelected: planSelected,
    hasCoupon: plans.some(function (plan) {
      return plan.id === planSelected && plan.hasCoupon;
    }),
    validateCoupon: validateCoupon,
    error: couponError,
    success: couponSuccess,
    labels: {
      cardNumber: labels.cardNumber,
      cardExpiration: labels.cardExpiration,
      cardCVC: labels.cardCVC,
      confirm: labels.confirm,
      coupon: labels.coupon
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
  successMessage: _propTypes.default.string,
  errorMessage: _propTypes.default.string,
  onChangePlan: _propTypes.default.func,
  validateCoupon: _propTypes.default.func,
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
    confirm: _propTypes.default.string,
    plansSubTitle: _propTypes.default.string,
    plansDetails: _propTypes.default.string,
    termsAndConditions: _propTypes.default.string,
    coupon: _propTypes.default.string
  }),
  plans: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    hasCoupon: _propTypes.default.bool,
    label: _propTypes.default.string,
    discountLabel: _propTypes.default.string
  }))
};
EditSubModal.defaultProps = {
  color: "secondary"
};
var _default = EditSubModal;
exports.default = _default;