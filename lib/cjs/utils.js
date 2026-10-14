"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsomorphicLayoutEffect = exports.fromEntries = exports.setRef = exports.safeInvoke = exports.unwrapArray = void 0;
var React = _interopRequireWildcard(require("react"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, "default": e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) { "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); } return n; }
/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};

/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */
exports.unwrapArray = unwrapArray;
var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return fn.apply(void 0, args);
  }
};

/**
 * Sets a ref using either a ref callback or a ref object
 */
exports.safeInvoke = safeInvoke;
var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  }
  // otherwise we should treat it as a ref object
  else if (ref != null) {
    ref.current = node;
  }
};

/**
 * Simple ponyfill for Object.fromEntries
 */
exports.setRef = setRef;
var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
      value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */
exports.fromEntries = fromEntries;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? React.useLayoutEffect : React.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;