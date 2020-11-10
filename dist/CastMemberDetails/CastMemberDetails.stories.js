"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Main = void 0;

var _react = _interopRequireDefault(require("react"));

var _CastMemberDetails = _interopRequireDefault(require("./CastMemberDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var story = {
  title: 'Example/CastMemberDetails',
  component: _CastMemberDetails.default
};

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-8 bg-black"
  }, /*#__PURE__*/_react.default.createElement(_CastMemberDetails.default, args));
};

var Main = Template.bind({});
exports.Main = Main;
Main.args = {
  castLabel: "ACTRESS",
  name: "LIANA DAINE LIBERATO",
  imgSrc: "https://vignette.wikia.nocookie.net/genealogy/images/a/a6/Liana-liberato.jpg",
  filmographyLabel: "Filmography",
  emptyLabel: "There's no data",
  biography: "Liana Liberato is an actress born in Galveston, Texas. She's been working professionally since she was 9 years old. Most notably known for her roles in Trust, Best of Me, If I Stay, and To the Bone.",
  movies: [{
    name: "The Box",
    year: "2009"
  }, {
    name: "Southland Tales",
    year: "2006"
  }, {
    name: "Donnie Darko",
    year: "2001"
  }, {
    name: "Visceral Matter	",
    year: "1997"
  }, {
    name: "The Goodbye Place",
    year: "1996"
  }]
};
var _default = story;
exports.default = _default;