"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AudiosList(props) {
  var list = props.list,
      _onClick = props.onClick,
      showLessLabel = props.showLessLabel,
      showAllLabel = props.showAllLabel;

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showAll = _React$useState2[0],
      setShowAll = _React$useState2[1];

  var _list = showAll ? list : list.slice(0, 5);

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "font-poppins"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "w-full text-white tribes-media-audios-list"
  }, _list.map(function (audio, index) {
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
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "mt-3 font-bold uppercase text-primary",
    onClick: function onClick() {
      return setShowAll(!showAll);
    }
  }, showAll ? showLessLabel : showAllLabel)));
}

AudiosList.propTypes = {
  onClick: _propTypes.default.func,
  showAllLabel: _propTypes.default.string,
  showLessLabel: _propTypes.default.string,
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string,
    subTitle: _propTypes.default.string
  }))
};
var _default = AudiosList;
exports.default = _default;