"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStripeElements = require("react-stripe-elements");

var _Modal = _interopRequireDefault(require("../Modal"));

var _StripeForm = _interopRequireDefault(require("../StripeForm/StripeForm"));

require("./styles.css");

var _PlansBox = _interopRequireDefault(require("../PlansBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function SubscribeModal(props) {
  var open = props.open,
      onClose = props.onClose,
      logo = props.logo,
      color = props.color,
      plans = props.plans,
      apiKey = props.apiKey,
      onClickLogin = props.onClickLogin,
      success = props.success,
      disabled = props.disabled,
      labels = props.labels,
      onSubmit = props.onSubmit,
      error = props.error,
      validateCoupon = props.validateCoupon,
      onProcessStarted = props.onProcessStarted;

  var _React$useState = _react.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      planSelected = _React$useState2[0],
      setPlanSelected = _React$useState2[1];

  function _onClose() {
    onClose();
    setTimeout(function () {
      setPlanSelected(null);
    }, 300);
  }

  function onChangePlan(planId) {
    setPlanSelected(planId);
    onProcessStarted(planId);
  }

  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "login-modal",
    onClose: _onClose,
    className: "login-modal pt-20 font-poppins"
  }, /*#__PURE__*/_react.default.createElement(_reactStripeElements.StripeProvider, {
    apiKey: apiKey
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, logo), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-sm uppercase text-center text-white font-bold mt-6 mb-3"
  }, labels.title), !planSelected && /*#__PURE__*/_react.default.createElement(_PlansBox.default, {
    color: color,
    onClickLogin: onClickLogin,
    plans: plans,
    onChangePlan: onChangePlan,
    labels: {
      subTitle: labels.subTitle,
      details: labels.details,
      termsAndConditions: labels.termsAndConditions,
      login: labels.login
    }
  }), planSelected && /*#__PURE__*/_react.default.createElement(_reactStripeElements.Elements, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full sm:w-2/3 flex flex-col mt-6"
  }, /*#__PURE__*/_react.default.createElement(_StripeForm.default, {
    onSubmit: onSubmit,
    disabled: disabled,
    planSelected: planSelected,
    hasCoupon: plans.some(function (plan) {
      return plan.id === planSelected && plan.hasCoupon;
    }),
    validateCoupon: validateCoupon,
    error: error,
    success: success,
    labels: {
      cardNumber: labels.cardNumber,
      cardExpiration: labels.cardExpiration,
      cardCVC: labels.cardCVC,
      confirm: labels.confirm,
      coupon: labels.coupon
    }
  }))))));
}

SubscribeModal.propTypes = {
  open: _propTypes.default.bool,
  logo: _propTypes.default.element,
  onClose: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  apiKey: _propTypes.default.string,
  hasCoupon: _propTypes.default.bool,
  onClickLogin: _propTypes.default.func,
  error: _propTypes.default.string,
  success: _propTypes.default.string,
  labels: _propTypes.default.shape({
    title: _propTypes.default.string,
    subTitle: _propTypes.default.string,
    details: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.object]),
    termsAndConditions: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    login: _propTypes.default.string,
    cardNumber: _propTypes.default.string,
    cardExpiration: _propTypes.default.string,
    cardCVC: _propTypes.default.string,
    confirm: _propTypes.default.string,
    coupon: _propTypes.default.string
  }),
  validateCoupon: _propTypes.default.func,
  onProcessStarted: _propTypes.default.func,
  plans: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    hasCoupon: _propTypes.default.bool,
    label: _propTypes.default.string,
    discountLabel: _propTypes.default.string
  })),
  color: _propTypes.default.oneOf(["primary", "secondary"])
};
SubscribeModal.defaultProps = {
  color: "primary"
};
var _default = SubscribeModal;
exports.default = _default;