"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popper = Popper;
var React = _interopRequireWildcard(require("react"));
var _Manager = require("./Manager");
var _utils = require("./utils");
var _usePopper2 = require("./usePopper");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, "default": e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) { "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); } return n; }
var NOOP = function NOOP() {
  return void 0;
};
var NOOP_PROMISE = function NOOP_PROMISE() {
  return Promise.resolve(null);
};
var EMPTY_MODIFIERS = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement,
    placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
    _ref$strategy = _ref.strategy,
    strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
    _ref$modifiers = _ref.modifiers,
    modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
    referenceElement = _ref.referenceElement,
    onFirstUpdate = _ref.onFirstUpdate,
    innerRef = _ref.innerRef,
    children = _ref.children;
  var referenceNode = React.useContext(_Manager.ManagerReferenceNodeContext);
  var _React$useState = React.useState(null),
    popperElement = _React$useState[0],
    setPopperElement = _React$useState[1];
  var _React$useState2 = React.useState(null),
    arrowElement = _React$useState2[0],
    setArrowElement = _React$useState2[1];
  React.useEffect(function () {
    (0, _utils.setRef)(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = React.useMemo(function () {
    return {
      placement: placement,
      strategy: strategy,
      onFirstUpdate: onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: 'arrow',
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);
  var _usePopper = (0, _usePopper2.usePopper)(referenceElement || referenceNode, popperElement, options),
    state = _usePopper.state,
    styles = _usePopper.styles,
    forceUpdate = _usePopper.forceUpdate,
    update = _usePopper.update;
  var childrenProps = React.useMemo(function () {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return (0, _utils.unwrapArray)(children)(childrenProps);
}