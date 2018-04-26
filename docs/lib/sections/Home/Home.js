"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _LinkPreview = _interopRequireDefault(require("src/components/LinkPreview"));

var _PreviewMe = _interopRequireDefault(require("src/sections/PreviewMe/PreviewMe"));

var _Home = _interopRequireDefault(require("./Home.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

// Constants.
var AVAILABLE_PROPS = [{
  name: 'previewComponent',
  def: 'N/A',
  req: 'yes',
  desc: "A component to show in the preview."
}, {
  name: 'clickWindow',
  def: '500',
  req: 'no',
  desc: "The window of time (ms) where a regular click is registered."
}, {
  name: 'longPressTime',
  def: '1000',
  req: 'no',
  desc: "The time (ms) it takes the user to hold before it's considered a longpress."
}, {
  name: 'mobileOnly',
  def: 'true',
  req: 'no',
  desc: "Setting this to false allows the preview to work on desktop, too."
}, {
  name: 'loadBarAbove',
  def: 'true',
  req: 'no',
  desc: "Settings this to false moves the longpress bar below your link."
}];

var Home =
/*#__PURE__*/
function (_React$Component) {
  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var homeClasses = (0, _classnames2.default)(_defineProperty({}, _Home.default.Home, true));
      return _react.default.createElement("div", {
        className: homeClasses
      }, _react.default.createElement("h1", null, "LinkPreview Demo"), _react.default.createElement("em", null, "A Thinkingbox endeavour"), _react.default.createElement("p", null, "This link will show a loading bar when you long press."), _react.default.createElement(_LinkPreview.default, {
        to: "/preview-me",
        mobileOnly: false,
        previewComponent: _react.default.createElement(_PreviewMe.default, null)
      }, "Preview this link by long pressing"), _react.default.createElement("p", null, "Here's a link with the loading bar below. Set the property ", _react.default.createElement("code", null, "loadBarAbove"), " to ", _react.default.createElement("code", null, "false"), " (the default is ", _react.default.createElement("code", null, "true"), ".)"), _react.default.createElement(_LinkPreview.default, {
        to: "/preview-me",
        mobileOnly: false,
        loadBarAbove: false,
        previewComponent: _react.default.createElement(_PreviewMe.default, null)
      }, "This link will have the bar below it"), _react.default.createElement("p", null, "You can also enable this component for desktop by setting the ", _react.default.createElement("code", null, "mobileOnly"), " property to ", _react.default.createElement("code", null, "false"), " (the default is ", _react.default.createElement("code", null, "true"), ".) We use package ", _react.default.createElement("code", null, _react.default.createElement("a", {
        href: "https://www.npmjs.com/package/ismobilejs"
      }, "isMobileJs")), " to determine what's mobile."), _react.default.createElement(_LinkPreview.default, {
        to: "/preview-me",
        previewComponent: _react.default.createElement(_PreviewMe.default, null)
      }, "This link is just a normal link, except on mobile"), _react.default.createElement("p", null, "Clicking on the link will take you directly to the route. Internally, this component uses a ", _react.default.createElement("code", null, "react-router-dom <Link />"), ". Pass any normal properties you'd like."), _react.default.createElement("h3", null, "Example usage:"), _react.default.createElement("pre", {
        className: "prettyprint lang-js linenums"
      }, "<LinkPreview to=\"/preview-me\"\n              mobileOnly={false}\n              loadBarAbove={false}\n              previewComponent={<PreviewMe />}>\n  This text can be any element you like instead\n</LinkPreview>"), _react.default.createElement("h3", null, "Here are the available properties:"), _react.default.createElement("table", null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Property"), _react.default.createElement("th", null, "Default"), _react.default.createElement("th", null, "Required?"), _react.default.createElement("th", null, "Description"))), _react.default.createElement("tbody", null, AVAILABLE_PROPS.map(function (prop, i) {
        return _react.default.createElement("tr", {
          key: i
        }, _react.default.createElement("td", null, prop.name), _react.default.createElement("td", null, prop.def), _react.default.createElement("td", null, prop.req), _react.default.createElement("td", null, prop.desc));
      }))));
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {};
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {};
    }
  }]);

  _inherits(Home, _React$Component);

  return Home;
}(_react.default.Component);

exports.default = Home;