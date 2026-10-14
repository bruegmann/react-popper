"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;
var React = _interopRequireWildcard(require("react"));
var _ = require("..");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, "default": e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) { "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); } return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) { ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } } return n; }, _extends.apply(null, arguments); } // Please remember to update also the TypeScript test files that can
// be found under `/typings/tests` please. Thanks! 🤗
var Test = function Test() {
  var _React$createElement;
  return /*#__PURE__*/React.createElement(_.Manager, null, /*#__PURE__*/React.createElement(_.Reference, null), /*#__PURE__*/React.createElement(_.Reference, null, function (_ref) {
    var ref = _ref.ref;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref
    });
  }), /*#__PURE__*/React.createElement(_.Popper
  // $FlowExpectError: should be one of allowed placements
  , (_React$createElement = {
    placement: "custom"
  }, _React$createElement["placement"] = "top", _React$createElement.strategy = "custom", _React$createElement["strategy"] = "fixed", _React$createElement.modifiers = [{
    name: 'flip',
    enabled: 'bar',
    order: 'foo'
  }], _React$createElement["modifiers"] = [{
    name: 'flip',
    enabled: false
  }], _React$createElement), function (_ref2) {
    var ref = _ref2.ref,
      style = _ref2.style,
      placement = _ref2.placement,
      isReferenceHidden = _ref2.isReferenceHidden,
      hasPopperEscaped = _ref2.hasPopperEscaped,
      update = _ref2.update,
      arrowProps = _ref2.arrowProps;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: _extends({}, style, {
        opacity: isReferenceHidden === true || hasPopperEscaped === true ? 0 : 1
      }),
      "data-placement": placement,
      onClick: function onClick() {
        return update();
      }
    }, "Popper", /*#__PURE__*/React.createElement("div", {
      ref: arrowProps.ref,
      style: arrowProps.style
    }));
  }), /*#__PURE__*/React.createElement(_.Popper, null, function (_ref3) {
    var ref = _ref3.ref,
      style = _ref3.style,
      placement = _ref3.placement;
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: style,
      "data-placement": placement
    }, "Popper");
  }));
};
exports.Test = Test;