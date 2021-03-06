"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("./Button"));

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PlansBox(props) {
  var labels = props.labels,
      plans = props.plans,
      color = props.color,
      onClickLogin = props.onClickLogin,
      onChangePlan = props.onChangePlan;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      termsAndConditions = _React$useState2[0],
      setTermsAndConditions = _React$useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full flex items-center flex-col"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-2xl uppercase text-center text-white font-bold"
  }, labels.subTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center text-white text-sm leading-7 my-2"
  }, labels.details), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full sm:w-2/3"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col w-full"
  }, plans.map(function (plan) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "mt-8",
      key: "plan-".concat(plan.id)
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      className: "w-full",
      disabled: !termsAndConditions,
      onClick: function onClick() {
        return onChangePlan(plan.id);
      },
      color: color,
      label: plan.label
    }), plan.discountLabel && /*#__PURE__*/_react.default.createElement("p", {
      className: "text-white text-sm mt-1 text-center font-medium"
    }, plan.discountLabel));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "mx-auto w-full sm:w-5/6"
  }, /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: function onChange() {
      return setTermsAndConditions(!termsAndConditions);
    },
    className: "mt-4",
    color: color,
    id: "subscribe-modal-terms",
    value: termsAndConditions,
    label: labels.termsAndConditions
  })), onClickLogin && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClickLogin,
    className: "mx-auto block mt-10 text-white text-center underline text-base self-center"
  }, labels.login)));
}

PlansBox.propTypes = {
  color: _propTypes.default.oneOf(["primary", "secondary"]),
  onClickLogin: _propTypes.default.func,
  plans: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string,
    hasCoupon: _propTypes.default.bool,
    label: _propTypes.default.string,
    discountLabel: _propTypes.default.string
  })),
  onChangePlan: _propTypes.default.func,
  labels: _propTypes.default.shape({
    subTitle: _propTypes.default.string,
    details: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.object]),
    termsAndConditions: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
    login: _propTypes.default.string
  })
};
var _default = PlansBox;
exports.default = _default;