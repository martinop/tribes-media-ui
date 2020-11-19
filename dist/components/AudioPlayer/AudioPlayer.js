"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _hls = _interopRequireDefault(require("hls.js"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function AudioPlayer(props) {
  var open = props.open,
      onClose = props.onClose,
      url = props.url,
      image = props.image,
      title = props.title,
      subTitle = props.subTitle;

  var _React$useState = _react.default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      paused = _React$useState2[0],
      setPaused = _React$useState2[1];

  var audioRef = _react.default.useRef();

  _react.default.useEffect(function () {
    if (open) {
      var hls = new _hls.default({});
      hls.loadSource(url);
      hls.attachMedia(audioRef.current);
      audioRef.current.currentTime = 0; // hls.on(Hls.Events.MANIFEST_PARSED, () => {
      // 	audioRef.current.play();
      // });
    }
  }, [audioRef, url, open]);

  function onPressPause() {
    setPaused(true);
    audioRef.current.pause();
  }

  function onPressPlay() {
    setPaused(false);
    audioRef.current.play();
  }

  if (!open) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tribes-audio-player"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between items-center flex-1 h-full"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: image,
    alt: "".concat(title, " - ").concat(subTitle),
    className: "h-16 object-cover mr-4"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col justify-center text-white"
  }, /*#__PURE__*/_react.default.createElement("span", null, title), /*#__PURE__*/_react.default.createElement("span", {
    className: "font-bold"
  }, subTitle))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, paused ? /*#__PURE__*/_react.default.createElement("svg", {
    onClick: onPressPlay,
    className: "opacity-75 hover:opacity-50 cursor-pointer",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40px",
    height: "40px",
    fill: "white",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M50,0C22.39,0,0,22.39,0,50c0,27.61,22.39,50,50,50c27.61,0,50-22.39,50-50C100,22.39,77.61,0,50,0z M68.84,50.69c-0.14,0.28-0.29,0.42-0.57,0.56L41.2,66.53c-0.29,0.14-0.43,0.14-0.71,0.14c-0.85,0-1.42-0.56-1.42-1.39V34.72 c0-0.83,0.57-1.39,1.42-1.39c0.29,0,0.43,0,0.71,0.14l27.08,15.28C68.98,49.17,69.13,50,68.84,50.69z"
  })) : /*#__PURE__*/_react.default.createElement("svg", {
    onClick: onPressPause,
    className: "opacity-75 hover:opacity-50 cursor-pointer",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40px",
    height: "40px",
    fill: "white",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M50,0C22.39,0,0,22.39,0,50c0,27.61,22.39,50,50,50c27.61,0,50-22.39,50-50C100,22.39,77.61,0,50,0z M40.63,67.07c0,1.62-1.68,2.93-3.76,2.93c-2.07,0-3.75-1.31-3.75-2.93V30.03c0-1.62,1.68-2.93,3.75-2.93 c2.07,0,3.76,1.31,3.76,2.93V67.07z M67.49,67.07c0,1.62-1.68,2.93-3.75,2.93c-2.07,0-3.76-1.31-3.76-2.93V30.03 c0-1.62,1.68-2.93,3.76-2.93c2.07,0,3.75,1.31,3.75,2.93V67.07z"
  })), /*#__PURE__*/_react.default.createElement("svg", {
    onClick: onClose,
    className: "ml-4 opacity-75 hover:opacity-50 cursor-pointer",
    clssversion: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "40px",
    height: "40px",
    fill: "white",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M50,0C22.39,0,0,22.39,0,50c0,27.61,22.39,50,50,50c27.61,0,50-22.39,50-50C100,22.39,77.61,0,50,0z M68.98,64.31c1.3,1.3,1.3,3.41-0.01,4.71c-1.3,1.3-3.41,1.3-4.71-0.01L50,54.72l-14.26,14.3c-1.3,1.3-3.41,1.31-4.71,0.01 c-1.3-1.3-1.31-3.41-0.01-4.71L45.29,50L31.02,35.69c-1.3-1.3-1.3-3.41,0.01-4.71c1.3-1.3,3.41-1.3,4.71,0.01L50,45.28l14.26-14.3 c1.3-1.3,3.41-1.31,4.71-0.01c1.3,1.3,1.31,3.41,0.01,4.71L54.71,50L68.98,64.31z"
  })))), /*#__PURE__*/_react.default.createElement(ProgressBar, {
    audioRef: audioRef
  }), /*#__PURE__*/_react.default.createElement("audio", {
    ref: audioRef
  }));
}

function ProgressBar(props) {
  var audioRef = props.audioRef;

  var _React$useState3 = _react.default.useState({
    current: 0,
    duration: 0
  }),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      times = _React$useState4[0],
      setTimes = _React$useState4[1];

  _react.default.useEffect(function () {
    var ref = audioRef.current;

    function onTimeUpdate() {
      setTimes({
        current: ref.currentTime,
        duration: ref.duration
      });
    }

    ref.addEventListener("timeupdate", onTimeUpdate);
    return function () {
      return ref.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [audioRef, setTimes]);

  var progressPercentage = times.current * 100 / times.duration;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full h-1 relative"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute left-0 top-0 h-full bg-white ap-progress-animation",
    style: {
      width: "".concat(progressPercentage, "%")
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute h-full bg-white w-full left-0 top-0 opacity-50"
  }));
}

var _default = AudioPlayer;
exports.default = _default;