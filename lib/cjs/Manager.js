"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Manager = Manager;
exports.ManagerReferenceNodeSetterContext = exports.ManagerReferenceNodeContext = void 0;
var React = _interopRequireWildcard(require("react"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, "default": e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) { "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); } return n; }
var ManagerReferenceNodeContext = React.createContext();
exports.ManagerReferenceNodeContext = ManagerReferenceNodeContext;
var ManagerReferenceNodeSetterContext = React.createContext();
exports.ManagerReferenceNodeSetterContext = ManagerReferenceNodeSetterContext;
function Manager(_ref) {
  var children = _ref.children;
  var _React$useState = React.useState(null),
    referenceNode = _React$useState[0],
    setReferenceNode = _React$useState[1];
  var hasUnmounted = React.useRef(false);
  React.useEffect(function () {
    hasUnmounted.current = false;
    return function () {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = React.useCallback(function (node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return /*#__PURE__*/React.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, /*#__PURE__*/React.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}