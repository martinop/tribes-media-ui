"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var story = {
  title: 'Example/Button',
  component: _Button.Button,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.Button, args);
};

var Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Button'
};
var Secondary = Template.bind({});
exports.Secondary = Secondary;
Secondary.args = {
  label: 'Button'
};
var Large = Template.bind({});
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Button'
};
var Small = Template.bind({});
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Button'
};
var _default = story;
exports.default = _default;