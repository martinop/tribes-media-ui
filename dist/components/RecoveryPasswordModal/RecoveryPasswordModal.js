"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _formik = require("formik");

var _Modal = _interopRequireDefault(require("../Modal"));

require("./styles.css");

var _Input = _interopRequireDefault(require("../Input"));

var _Button = require("../Button/Button");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RecoveryPasswordModal(props) {
  var open = props.open,
      onClose = props.onClose,
      recoveryLabel = props.recoveryLabel,
      logo = props.logo,
      onReturnLogin = props.onReturnLogin,
      returnLoginLabel = props.returnLoginLabel,
      title = props.title,
      sentMessage = props.sentMessage,
      disabled = props.disabled,
      _onSubmit = props.onSubmit,
      language = props.language,
      emailSent = props.emailSent;
  var formik = (0, _formik.useFormik)({
    initialValues: {
      email: ''
    },
    validate: (0, _utils.validate)(language),
    onSubmit: function onSubmit(values) {
      formik.resetForm();

      _onSubmit(values);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "recovery-password-modal",
    onClose: onClose,
    className: "recovery-password-modal pt-20 pb-16"
  }, /*#__PURE__*/_react.default.createElement("div", null, logo), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-sm uppercase text-center text-white font-bold mt-6 mb-20"
  }, title), !emailSent && /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "w-3/5 flex flex-col"
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    placeholder: language === "en" ? "Email Address" : "Correo Electronico",
    containerClassname: "mb-10",
    className: "w-full",
    id: "email",
    name: "email",
    type: "email",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.email,
    error: formik.touched.email && formik.errors.email
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: recoveryLabel,
    className: "uppercase w-full",
    type: "submit",
    disabled: !(0, _isEmpty.default)(formik.errors) || disabled
  })), emailSent && /*#__PURE__*/_react.default.createElement("div", {
    className: "w-3/5 flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: ["text-white text-center", onReturnLogin && 'mb-10'].join(" ")
  }, sentMessage), onReturnLogin && /*#__PURE__*/_react.default.createElement(_Button.Button, {
    label: returnLoginLabel,
    className: "uppercase w-full",
    onClick: onReturnLogin
  })));
}

RecoveryPasswordModal.propTypes = {
  open: _propTypes.default.bool,
  recoveryLabel: _propTypes.default.string,
  logo: _propTypes.default.element,
  onClickForgot: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  onReturnLogin: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  onClose: _propTypes.default.func,
  sentMessage: _propTypes.default.string,
  emailSent: _propTypes.default.bool,
  returnLoginLabel: _propTypes.default.string,
  language: _propTypes.default.oneOf(["en", "es"])
};
var _default = RecoveryPasswordModal;
exports.default = _default;