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

var _Button = _interopRequireDefault(require("../Button"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LoginModal(props) {
  var open = props.open,
      onClose = props.onClose,
      signupLabel = props.signupLabel,
      loginLabel = props.loginLabel,
      onClickSignup = props.onClickSignup,
      color = props.color,
      logo = props.logo,
      title = props.title,
      disabled = props.disabled,
      onClickForgot = props.onClickForgot,
      _onSubmit = props.onSubmit,
      language = props.language,
      forgotLabel = props.forgotLabel;
  var formik = (0, _formik.useFormik)({
    initialValues: {
      email: '',
      password: ''
    },
    validate: (0, _utils.validate)(language),
    onSubmit: function onSubmit(values) {
      _onSubmit(values);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "login-modal",
    onClose: onClose,
    className: "login-modal pt-12"
  }, /*#__PURE__*/_react.default.createElement("div", null, logo), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-sm uppercase text-center text-white font-bold mt-6 mb-12"
  }, title), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "w-full sm:w-3/5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col w-full"
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    placeholder: language === "en" ? "Email Address" : "Correo Electronico",
    containerClassname: "mb-3",
    className: "w-full",
    id: "email",
    name: "email",
    type: "email",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.email,
    error: formik.touched.email && formik.errors.email
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    placeholder: language === "en" ? "Password" : "Contraseña",
    containerClassname: "mb-12",
    className: "w-full",
    id: "password",
    name: "password",
    type: "password",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.password,
    error: formik.touched.password && formik.errors.password
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: loginLabel,
    className: "uppercase w-full",
    type: "submit",
    color: color,
    disabled: !(0, _isEmpty.default)(formik.errors) || disabled || !formik.dirty
  })), forgotLabel && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClickForgot,
    className: "mx-auto block mt-6 text-white text-center underline text-sm self-center"
  }, forgotLabel), signupLabel && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClickSignup,
    className: "mx-auto block mt-10 text-white text-center underline text-sm self-center"
  }, signupLabel)));
}

LoginModal.propTypes = {
  open: _propTypes.default.bool,
  loginLabel: _propTypes.default.string,
  signupLabel: _propTypes.default.string,
  logo: _propTypes.default.element,
  onClickForgot: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  color: _propTypes.default.oneOf(["primary", "secondary"]),
  onClose: _propTypes.default.func,
  onClickSignup: _propTypes.default.func,
  language: _propTypes.default.oneOf(["en", "es"])
};
LoginModal.defaultProps = {
  color: "secondary"
};
var _default = LoginModal;
exports.default = _default;