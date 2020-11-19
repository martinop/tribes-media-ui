"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AudiosList(props) {
  var list = props.list,
      _onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "w-full text-white tribes-media-audios-list"
  }, list.map(function (audio, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "flex justify-between py-3 al-border",
      key: "tribe-audio-list-".concat(index)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex flex-col text-sm"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "leading-tight"
    }, audio.title), /*#__PURE__*/_react.default.createElement("span", {
      className: "font-bold"
    }, audio.subTitle)), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex"
    }, /*#__PURE__*/_react.default.createElement("svg", {
      onClick: function onClick() {
        return _onClick(audio);
      },
      className: "my-auto cursor-pointer",
      width: "31",
      height: "30",
      viewBox: "0 0 31 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/_react.default.createElement("circle", {
      cx: "15.0851",
      cy: "15",
      r: "15",
      fill: "white",
      fillOpacity: "0.7"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M10.6429 20C10.3864 20 10.2154 19.8333 10.2154 19.5833V10.4167C10.2154 10.1667 10.3864 10 10.6429 10C10.7284 10 10.7711 10 10.8566 10.0417L18.9792 14.625C19.1929 14.75 19.2357 15 19.1502 15.2083C19.1074 15.2917 19.0647 15.3333 18.9792 15.375L10.8566 19.9583C10.7711 20 10.7284 20 10.6429 20Z",
      className: "text-primary",
      fill: "currentColor"
    }))));
  }));
}

var _default = AudiosList;
exports.default = _default;