"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Button = require("../Button/Button");

require("slick-carousel/slick/slick.css");

require("slick-carousel/slick/slick-theme.css");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DummyDiv = function DummyDiv(_ref) {
  var slideCount = _ref.slideCount,
      currentSlide = _ref.currentSlide,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["slideCount", "currentSlide", "className"]);

  var sliderLength = slideCount - 1;
  var isLeftFirst = currentSlide === 0 && className.includes('prev');
  var isRightLast = currentSlide === sliderLength && className.includes('next');
  if (isLeftFirst || isRightLast) return null;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: className
  }, props));
};

function OnboardingModal(props) {
  var open = props.open,
      onClose = props.onClose,
      ctaText = props.ctaText,
      logo = props.logo,
      slides = props.slides;
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: open,
    allowClose: false,
    id: "onboarding-modal",
    onClose: onClose,
    className: "onboarding-modal"
  }, /*#__PURE__*/_react.default.createElement(_reactSlick.default, {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: /*#__PURE__*/_react.default.createElement(DummyDiv, null, /*#__PURE__*/_react.default.createElement("svg", {
      width: "12",
      height: "20",
      viewBox: "0 0 12 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M11.9996 10L1.99961 20L0.599609 18.6L9.19961 10L0.599609 1.4L1.99961 0L11.9996 10Z",
      fill: "#E5E5E5"
    }))),
    prevArrow: /*#__PURE__*/_react.default.createElement(DummyDiv, null, /*#__PURE__*/_react.default.createElement("svg", {
      width: "12",
      height: "20",
      viewBox: "0 0 12 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M0 10L10 0L11.4 1.4L2.8 10L11.4 18.6L10 20L0 10Z",
      fill: "#E5E5E5"
    })))
  }, slides.map(function (slide, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "slide"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "details"
    }, /*#__PURE__*/_react.default.createElement("div", null, logo, /*#__PURE__*/_react.default.createElement("p", {
      className: "mt-12 text-sm text-white font-bold uppercase px-8"
    }, slide.title)), index === slides.length - 1 && /*#__PURE__*/_react.default.createElement(_Button.Button, {
      label: ctaText,
      className: "w-4/6 sm:w-1/2 uppercase",
      onClick: onClose,
      primary: true
    })), /*#__PURE__*/_react.default.createElement("img", {
      src: slide.imageSrc,
      alt: "onboarding ".concat(index),
      className: "object-cover object-center h-full w-full"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "overlay"
    }));
  })));
}

OnboardingModal.propTypes = {
  open: _propTypes.default.bool,
  slides: _propTypes.default.arrayOf(_propTypes.default.shape({
    imageSrc: _propTypes.default.string,
    title: _propTypes.default.string
  })),
  logo: _propTypes.default.element,
  onClose: _propTypes.default.func,
  ctaText: _propTypes.default.string
};
var _default = OnboardingModal;
exports.default = _default;