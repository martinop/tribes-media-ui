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

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SignupModal(props) {
  var open = props.open,
      onClose = props.onClose,
      color = props.color,
      labels = props.labels,
      logo = props.logo,
      disabled = props.disabled,
      _onSubmit = props.onSubmit,
      language = props.language;
  var formik = (0, _formik.useFormik)({
    initialValues: {
      email: '',
      password: '',
      termsAndConditions: false,
      repeatPassword: ''
    },
    validate: (0, _utils.validate)(language),
    onSubmit: function onSubmit(values) {
      _onSubmit(values);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "signup-modal",
    onClose: onClose,
    className: "signup-modal pt-20"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden lg:block"
  }, logo), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-sm uppercase text-center text-white font-bold mt-6 mb-16 hidden lg:block"
  }, labels.title), /*#__PURE__*/_react.default.createElement("form", {
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
    containerClassname: "mb-3",
    className: "w-full",
    id: "password",
    name: "password",
    type: "password",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.password,
    error: formik.touched.password && formik.errors.password
  }), /*#__PURE__*/_react.default.createElement(_Input.default, {
    placeholder: language === "en" ? "Repeat Password" : "Repetir Contraseña",
    containerClassname: "mb-3",
    className: "w-full",
    id: "repeatPassword",
    name: "repeatPassword",
    type: "password",
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values.repeatPassword,
    error: formik.touched.repeatPassword && formik.errors.repeatPassword
  }), /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
    onChange: formik.handleChange,
    className: "mb-12",
    id: "termsAndConditions",
    name: "termsAndConditions",
    value: formik.values.termsAndConditions,
    color: color,
    label: labels.termsAndConditions
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: labels.confirm,
    className: "uppercase w-full",
    type: "submit",
    color: color,
    disabled: !(0, _isEmpty.default)(formik.errors) || disabled || !formik.dirty
  }))));
}

SignupModal.propTypes = {
  open: _propTypes.default.bool,
  logo: _propTypes.default.element,
  disabled: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  color: _propTypes.default.oneOf(["primary", "secondary"]),
  onClose: _propTypes.default.func,
  language: _propTypes.default.oneOf(["en", "es"]),
  labels: _propTypes.default.shape({
    title: _propTypes.default.string,
    confirm: _propTypes.default.string,
    termsAndConditions: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node])
  })
};
SignupModal.defaultProps = {
  color: "secondary"
};
var _default = SignupModal;
exports.default = _default;