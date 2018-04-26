"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

require("./styles.css");

var _Home = _interopRequireDefault(require("src/sections/Home"));

var _PreviewMe = _interopRequireDefault(require("src/sections/PreviewMe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components.
function Demo() {
  return _react.default.createElement("div", null, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", {
    className: "PageContainer"
  }, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    component: _Home.default
  }), _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/preview-me",
    component: _PreviewMe.default
  }))));
}

(0, _reactDom.render)(_react.default.createElement(Demo, null), document.getElementById("app"));