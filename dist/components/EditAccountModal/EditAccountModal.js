"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _formik = require("formik");

var _Modal = _interopRequireDefault(require("../Modal"));

require("./styles.css");

var _Input = _interopRequireDefault(require("../Input"));

var _Button = _interopRequireDefault(require("../Button"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EditAccountModal(props) {
  var open = props.open,
      labels = props.labels,
      email = props.email,
      onClose = props.onClose,
      color = props.color,
      logo = props.logo,
      disabled = props.disabled,
      _onSubmit = props.onSubmit,
      language = props.language;
  var formik = (0, _formik.useFormik)({
    initialValues: {
      email: email,
      password: ''
    },
    validate: (0, _utils.validate)(language),
    onSubmit: function onSubmit(values) {
      _onSubmit(values);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    id: "edit-account-modal",
    onClose: onClose,
    className: "edit-account-modal pt-20"
  }, /*#__PURE__*/_react.default.createElement("div", null, logo), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-sm uppercase text-center text-white font-bold mt-6 mb-8"
  }, labels.title), /*#__PURE__*/_react.default.createElement("h1", {
    className: (0, _classnames.default)("font-bold uppercase text-white text-2xl", !labels.subscription && 'mb-8')
  }, language === "es" ? "Mi cuenta" : "My Account"), labels.subscription && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-white px-6 py-2 rounded-full border border-white mt-2 mb-8 border-opacity-25"
  }, /*#__PURE__*/_react.default.createElement("span", null, labels.subscription)), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: formik.handleSubmit,
    className: "w-full sm:w-3/5 flex flex-col"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col w-full"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-white text-xs uppercase"
  }, labels.email), /*#__PURE__*/_react.default.createElement(_Input.default, {
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
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "text-white text-xs uppercase"
  }, labels.password), /*#__PURE__*/_react.default.createElement(_Input.default, {
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
    label: labels.save,
    className: "uppercase w-full",
    type: "submit",
    color: color,
    disabled: !(0, _isEmpty.default)(formik.errors) || disabled || !formik.dirty
  }))));
}

EditAccountModal.propTypes = {
  open: _propTypes.default.bool,
  email: _propTypes.default.string,
  logo: _propTypes.default.element,
  disabled: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  color: _propTypes.default.oneOf(["primary", "secondary"]),
  onClose: _propTypes.default.func,
  language: _propTypes.default.oneOf(["en", "es"]),
  labels: _propTypes.default.shape({
    title: _propTypes.default.string,
    save: _propTypes.default.string,
    email: _propTypes.default.string,
    password: _propTypes.default.string,
    subscription: _propTypes.default.string
  })
};
EditAccountModal.defaultProps = {
  color: "secondary"
};
var _default = EditAccountModal;
exports.default = _default;