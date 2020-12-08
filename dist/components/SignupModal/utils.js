"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = void 0;

var validate = function validate(language) {
  return function (values) {
    var errors = {};

    if (!values.password) {
      errors.password = language === "en" ? "Required" : "Requerido";
    } else if (values.password.length < 8) {
      errors.password = language === "en" ? "Password is too short" : "La contraseña es muy corta";
    }

    if (!values.email) {
      errors.email = language === "en" ? "Required" : "Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = language === "en" ? "Invalid email address" : "Dirección de email invalido";
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = language === "en" ? "Required" : "Requerido";
    } else if (values.repeatPassword !== values.password) {
      errors.repeatPassword = language === "en" ? "Passwords don't match" : "Las contraseñas no coinciden";
    }

    if (values.termsAndConditions === false) {
      errors.termsAndConditions = language === "en" ? "Required" : "Requerido";
    }

    return errors;
  };
};

exports.validate = validate;