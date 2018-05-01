"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ismobilejs = _interopRequireDefault(require("ismobilejs"));

var _reactRouterDom = require("react-router-dom");

var _LinkPreview = _interopRequireDefault(require("./LinkPreview.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Constants.
var MODAL_POPUP_ANIMATION_TIME = 200;
var IOS_3D_TOUCH_THRESHOLD = 0.14;

var LinkPreview =
/*#__PURE__*/
function (_React$Component) {
  _createClass(LinkPreview, null, [{
    key: "propTypes",
    get: function get() {
      return {
        previewComponent: _propTypes.default.element.isRequired,
        clickWindow: _propTypes.default.number,
        longPressTime: _propTypes.default.number,
        mobileOnly: _propTypes.default.bool,
        loadBarAbove: _propTypes.default.bool
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        clickWindow: 500,
        longPressTime: 1000,
        mobileOnly: true,
        loadBarAbove: true
      };
    }
  }]);

  function LinkPreview(props) {
    var _this;

    _classCallCheck(this, LinkPreview);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinkPreview).call(this, props));
    _this.state = {
      disabled: _this.props.mobileOnly && !_ismobilejs.default.any,
      pressing: false,
      pressStart: 0,
      longpressing: false
    };
    _this.timer = null;
    return _this;
  }

  _createClass(LinkPreview, [{
    key: "clickHandler",
    value: function clickHandler(e) {
      // Check for a generic click, otherwise prevent the click-through
      if (!this.state.disabled && Date.now() - this.state.pressStart > this.props.clickWindow) {
        e.preventDefault();
        e.nativeEvent && e.nativeEvent.stopImmediatePropagation();
      }
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler() {
      var _this2 = this;

      this.setState({
        pressing: true
      });
      if (!this.state.pressStart) this.setState({
        pressStart: Date.now()
      });
      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this2.setState({
          longpressing: true
        });
      }, this.props.longPressTime);
    }
  }, {
    key: "mouseUpHandler",
    value: function mouseUpHandler() {
      this.setState({
        pressing: false,
        longpressing: false
      });
      clearTimeout(this.timer);
      this.timer = null;
    }
  }, {
    key: "previewEnd",
    value: function previewEnd() {
      this.setState({
        pressing: false,
        longpressing: false,
        pressStart: 0
      });
      if (this.timer) clearTimeout(this.timer);
      this.timer = null;
    }
    /*
     * Fixes for iOS Safari and macOS Safari
     */

  }, {
    key: "mouseLeave",
    value: function mouseLeave(e) {
      // In the space during press, before longpress, if you move the mouse off the element on Safari it won't always call mouseup.
      if (this.state.pressing && !this.state.longpressing) {
        this.previewEnd(e);
      }
    }
  }, {
    key: "touchForceChange",
    value: function touchForceChange(e) {
      // To prevent 3D peek from interfering with our own peek, we'll stop ours at this threshold and let the iOS one take over.
      if (e.touches && e.touches.length && e.touches[0].force > IOS_3D_TOUCH_THRESHOLD) {
        this.previewEnd(e);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.mobileOnly) {
        this.wrapper.addEventListener("mousedown", this.mouseDownHandler.bind(this));
        this.wrapper.addEventListener("mouseup", this.mouseUpHandler.bind(this));
      }

      this.wrapper.addEventListener("touchstart", this.mouseDownHandler.bind(this));
      this.wrapper.addEventListener("touchend", this.mouseUpHandler.bind(this));
      this.wrapper.addEventListener("contextmenu", this.mouseUpHandler.bind(this));
      this.wrapper.addEventListener("touchforcechange", this.touchForceChange.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _classnames2,
          _this3 = this;

      var classes = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, _LinkPreview.default.LinkPreview, true), _defineProperty(_classnames, _LinkPreview.default.pressing, this.state.pressing), _defineProperty(_classnames, _LinkPreview.default.LongPress, this.state.longpressing), _defineProperty(_classnames, _LinkPreview.default["load-bar-above"], this.props.loadBarAbove), _classnames));
      var modalClasses = (0, _classnames3.default)((_classnames2 = {}, _defineProperty(_classnames2, _LinkPreview.default.LinkPreviewModal, true), _defineProperty(_classnames2, _LinkPreview.default["modal-show"], this.state.pressing), _classnames2));
      var dynamicWrapperStyles = {
        animationDuration: "".concat(this.props.longPressTime, "ms")
      };
      var dynamicModalStyles = {
        animationDelay: "".concat(this.props.longPressTime + MODAL_POPUP_ANIMATION_TIME, "ms"),
        animationDuration: "".concat(MODAL_POPUP_ANIMATION_TIME, "ms")
      }; // Create the passable props object

      var _this$props = this.props,
          clickWindow = _this$props.clickWindow,
          mobileOnly = _this$props.mobileOnly,
          longPressTime = _this$props.longPressTime,
          loadBarAbove = _this$props.loadBarAbove,
          previewComponent = _this$props.previewComponent,
          passableProps = _objectWithoutProperties(_this$props, ["clickWindow", "mobileOnly", "longPressTime", "loadBarAbove", "previewComponent"]);

      return _react.default.createElement("div", {
        className: classes,
        style: dynamicWrapperStyles,
        ref: function ref(el) {
          return _this3.wrapper = el;
        }
      }, _react.default.createElement("div", {
        className: modalClasses,
        style: dynamicModalStyles
      }, previewComponent), _react.default.createElement(_reactRouterDom.Link, _extends({}, passableProps, {
        onClick: this.clickHandler.bind(this),
        onDragEnd: this.previewEnd.bind(this),
        onMouseLeave: this.mouseLeave.bind(this)
      }), this.props.children));
    }
  }]);

  _inherits(LinkPreview, _React$Component);

  return LinkPreview;
}(_react.default.Component);

exports.default = LinkPreview;