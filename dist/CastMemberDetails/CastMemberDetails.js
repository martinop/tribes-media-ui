"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CastMemberDetails(props) {
  var castLabel = props.castLabel,
      moviesLabel = props.moviesLabel,
      biography = props.biography,
      name = props.name,
      imgSrc = props.imgSrc,
      movies = props.movies;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cast-member-details bg-black text-white font-poppins"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-4/5 pr-6"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "mb-3"
  }, castLabel), /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-3xl font-bold mb-3"
  }, name), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-sm leading-7"
  }, biography)), /*#__PURE__*/_react.default.createElement("div", {
    className: "relative w-1/5"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imgSrc,
    alt: name,
    className: "cmd-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "cmd-image-overlay"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", {
    className: "font-bold text-lg mb-1"
  }, moviesLabel), /*#__PURE__*/_react.default.createElement("ul", null, movies.map(function (movie) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
      className: "flex justify-between py-3 text-xs"
    }, /*#__PURE__*/_react.default.createElement("span", null, movie.name), /*#__PURE__*/_react.default.createElement("span", null, movie.year)), /*#__PURE__*/_react.default.createElement("div", {
      className: "cmd-movie-divider"
    })));
  }))));
}

CastMemberDetails.propTypes = {
  castLabel: _propTypes.default.string,
  name: _propTypes.default.string,
  imgSrc: _propTypes.default.string,
  moviesLabel: _propTypes.default.string,
  biography: _propTypes.default.string,
  movies: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    year: _propTypes.default.string
  }))
};
var _default = CastMemberDetails;
exports.default = _default;