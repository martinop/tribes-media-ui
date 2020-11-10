"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Image(props) {
  var src = props.src,
      name = props.name;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: name,
    className: "cmd-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "cmd-image-overlay"
  }));
}

function CastMemberDetails(props) {
  var castLabel = props.castLabel,
      filmographyLabel = props.filmographyLabel,
      biography = props.biography,
      emptyLabel = props.emptyLabel,
      name = props.name,
      imgSrc = props.imgSrc,
      movies = props.movies;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cast-member-details bg-black text-white font-poppins p-8 md:p-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col md:flex-row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full md:w-4/5 md:pr-6"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "mb-3 uppercase text-center md:text-left"
  }, castLabel), /*#__PURE__*/_react.default.createElement("div", {
    className: "block relative w-3/5 mx-auto md:hidden"
  }, /*#__PURE__*/_react.default.createElement(Image, {
    src: imgSrc,
    name: name
  })), /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-base md:text-3xl font-bold mb-3 uppercase text-center md:text-left"
  }, name), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xs md:text-sm leading-7 font-normal mb-6 mt-6 md:mt-0 md:mb-0"
  }, biography)), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:block relative w-1/5"
  }, /*#__PURE__*/_react.default.createElement(Image, {
    src: imgSrc,
    name: name
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", {
    className: "font-bold text-lg mb-1 uppercase"
  }, filmographyLabel), !(movies === null || movies === void 0 ? void 0 : movies.length) && /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-4"
  }, emptyLabel), (movies === null || movies === void 0 ? void 0 : movies.length) > 0 && /*#__PURE__*/_react.default.createElement("ul", null, movies.map(function (movie) {
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
  filmographyLabel: _propTypes.default.string,
  emptyLabel: _propTypes.default.string,
  biography: _propTypes.default.string,
  movies: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    year: _propTypes.default.string
  }))
};
var _default = CastMemberDetails;
exports.default = _default;