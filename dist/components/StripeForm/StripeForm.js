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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function StripeForm(props) {
  var onSubmit = props.onSubmit,
      disabled = props.disabled,
      labels = props.labels,
      stripe = props.stripe,
      planSelected = props.planSelected;
  var elementClass = "card-form-input text-base text-center p-3";

  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      error = _React$useState2[0],
      setError = _React$useState2[1];

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

              setError(token.error.message);
              return _context.abrupt("return");

            case 7:
              onSubmit(planSelected, token.token.id);

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
  }, error && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-red-500 mb-4"
  }, error), /*#__PURE__*/_react.default.createElement("div", {
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
    disabled: disabled,
    className: "w-full mt-10",
    label: labels.confirm,
    type: undefined
  }));
}

StripeForm.propTypes = {
  onSubmit: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  planSelected: _propTypes.default.string,
  labels: _propTypes.default.shape({
    cardNumber: _propTypes.default.string,
    cardExpiration: _propTypes.default.string,
    cardCVC: _propTypes.default.string,
    confirm: _propTypes.default.string
  })
};

var _default = (0, _reactStripeElements.injectStripe)(StripeForm);

exports.default = _default;