"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _mrT = _interopRequireDefault(require("src/static/img/mr-t.jpg"));

var _PreviewMe = _interopRequireDefault(require("./PreviewMe.css"));

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

var PreviewMe =
/*#__PURE__*/
function (_React$Component) {
  function PreviewMe() {
    _classCallCheck(this, PreviewMe);

    return _possibleConstructorReturn(this, _getPrototypeOf(PreviewMe).apply(this, arguments));
  }

  _createClass(PreviewMe, [{
    key: "render",
    value: function render() {
      var classes = (0, _classnames2.default)(_defineProperty({}, _PreviewMe.default.PreviewMe, true));
      return _react.default.createElement("div", {
        className: classes
      }, _react.default.createElement("h1", null, "This is the page to be previewed"), _react.default.createElement("img", {
        src: _mrT.default
      }));
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

  _inherits(PreviewMe, _React$Component);

  return PreviewMe;
}(_react.default.Component);

exports.default = PreviewMe;