"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStripeElements = require("react-stripe-elements");

require("./style.css");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function StripeForm(props) {
  var onSubmit = props.onSubmit,
      labels = props.labels,
      stripe = props.stripe;
  var elementClass = "card-form-input text-base text-center p-3";

  function _onSubmit(_x) {
    return _onSubmit2.apply(this, arguments);
  }

  function _onSubmit2() {
    _onSubmit2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var token;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return stripe.createToken();

            case 3:
              token = _context.sent;

              if (!token.error) {
                _context.next = 7;
                break;
              }

              console.log(token.error.message);
              return _context.abrupt("return");

            case 7:
              onSubmit("yay");

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSubmit2.apply(this, arguments);
  }

  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: _onSubmit,
    className: "w-full stripe-form font-poppins"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-white font-normal"
  }, labels.cardNumber), /*#__PURE__*/_react.default.createElement(_reactStripeElements.CardNumberElement, {
    className: elementClass
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-white font-normal"
  }, labels.cardExpiration), /*#__PURE__*/_react.default.createElement(_reactStripeElements.CardExpiryElement, {
    className: elementClass
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-xs text-white font-normal"
  }, labels.cardCVC), /*#__PURE__*/_react.default.createElement(_reactStripeElements.CardCvcElement, {
    className: elementClass
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "w-full mt-10",
    label: labels.confirm,
    type: undefined
  }));
}

StripeForm.propTypes = {
  onSubmit: _propTypes.default.func,
  labels: _propTypes.default.shape({
    cardNumber: _propTypes.default.string,
    cardExpiration: _propTypes.default.string,
    cardCVC: _propTypes.default.string,
    confirm: _propTypes.default.string
  })
};

var _default = (0, _reactStripeElements.injectStripe)(StripeForm);

exports.default = _default;