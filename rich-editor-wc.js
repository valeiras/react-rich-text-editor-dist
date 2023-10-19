var bv = Object.defineProperty;
var e_ = (e, t, n) =>
  t in e
    ? bv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Rp = (e, t, n) => (e_(e, typeof t != 'symbol' ? t + '' : t, n), n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const l of o.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Ud(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var nm = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Il = Symbol.for('react.element'),
  t_ = Symbol.for('react.portal'),
  n_ = Symbol.for('react.fragment'),
  r_ = Symbol.for('react.strict_mode'),
  i_ = Symbol.for('react.profiler'),
  o_ = Symbol.for('react.provider'),
  l_ = Symbol.for('react.context'),
  s_ = Symbol.for('react.forward_ref'),
  u_ = Symbol.for('react.suspense'),
  a_ = Symbol.for('react.memo'),
  c_ = Symbol.for('react.lazy'),
  Dp = Symbol.iterator;
function d_(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Dp && e[Dp]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var rm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  im = Object.assign,
  om = {};
function oo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = om),
    (this.updater = n || rm);
}
oo.prototype.isReactComponent = {};
oo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
oo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function lm() {}
lm.prototype = oo.prototype;
function Kd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = om),
    (this.updater = n || rm);
}
var Vd = (Kd.prototype = new lm());
Vd.constructor = Kd;
im(Vd, oo.prototype);
Vd.isPureReactComponent = !0;
var Mp = Array.isArray,
  sm = Object.prototype.hasOwnProperty,
  Yd = { current: null },
  um = { key: !0, ref: !0, __self: !0, __source: !0 };
function am(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      sm.call(t, r) && !um.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Il,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: Yd.current,
  };
}
function f_(e, t) {
  return {
    $$typeof: Il,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gd(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Il;
}
function p_(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pp = /\/+/g;
function Ca(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? p_('' + e.key)
    : t.toString(36);
}
function ws(e, t, n, r, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Il:
          case t_:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === '' ? '.' + Ca(l, 0) : r),
      Mp(i)
        ? ((n = ''),
          e != null && (n = e.replace(Pp, '$&/') + '/'),
          ws(i, t, n, '', function (a) {
            return a;
          }))
        : i != null &&
          (Gd(i) &&
            (i = f_(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Pp, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Mp(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Ca(o, s);
      l += ws(o, t, n, u, i);
    }
  else if (((u = d_(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Ca(o, s++)), (l += ws(o, t, n, u, i));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return l;
}
function Xl(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ws(e, r, '', '', function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function h_(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var gt = { current: null },
  Ts = { transition: null },
  g_ = {
    ReactCurrentDispatcher: gt,
    ReactCurrentBatchConfig: Ts,
    ReactCurrentOwner: Yd,
  };
G.Children = {
  map: Xl,
  forEach: function (e, t, n) {
    Xl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gd(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
G.Component = oo;
G.Fragment = n_;
G.Profiler = i_;
G.PureComponent = Kd;
G.StrictMode = r_;
G.Suspense = u_;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g_;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = im({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = Yd.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      sm.call(t, u) &&
        !um.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Il, type: e.type, key: i, ref: o, props: r, _owner: l };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: l_,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: o_, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = am;
G.createFactory = function (e) {
  var t = am.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: s_, render: e };
};
G.isValidElement = Gd;
G.lazy = function (e) {
  return { $$typeof: c_, _payload: { _status: -1, _result: e }, _init: h_ };
};
G.memo = function (e, t) {
  return { $$typeof: a_, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = Ts.transition;
  Ts.transition = {};
  try {
    e();
  } finally {
    Ts.transition = t;
  }
};
G.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
G.useCallback = function (e, t) {
  return gt.current.useCallback(e, t);
};
G.useContext = function (e) {
  return gt.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return gt.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return gt.current.useEffect(e, t);
};
G.useId = function () {
  return gt.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return gt.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return gt.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return gt.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return gt.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return gt.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return gt.current.useRef(e);
};
G.useState = function (e) {
  return gt.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return gt.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return gt.current.useTransition();
};
G.version = '18.2.0';
nm.exports = G;
var R = nm.exports;
const K = Ud(R);
var cm = { exports: {} },
  It = {},
  dm = { exports: {} },
  fm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, F) {
    var B = D.length;
    D.push(F);
    e: for (; 0 < B; ) {
      var b = (B - 1) >>> 1,
        ue = D[b];
      if (0 < i(ue, F)) (D[b] = F), (D[B] = ue), (B = b);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var F = D[0],
      B = D.pop();
    if (B !== F) {
      D[0] = B;
      e: for (var b = 0, ue = D.length, nt = ue >>> 1; b < nt; ) {
        var Pe = 2 * (b + 1) - 1,
          Ft = D[Pe],
          rt = Pe + 1,
          Qe = D[rt];
        if (0 > i(Ft, B))
          rt < ue && 0 > i(Qe, Ft)
            ? ((D[b] = Qe), (D[rt] = B), (b = rt))
            : ((D[b] = Ft), (D[Pe] = B), (b = Pe));
        else if (rt < ue && 0 > i(Qe, B)) (D[b] = Qe), (D[rt] = B), (b = rt);
        else break e;
      }
    }
    return F;
  }
  function i(D, F) {
    var B = D.sortIndex - F.sortIndex;
    return B !== 0 ? B : D.id - F.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    d = 1,
    c = null,
    p = 3,
    f = !1,
    h = !1,
    y = !1,
    _ = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(D) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= D)
        r(a), (F.sortIndex = F.expirationTime), t(u, F);
      else break;
      F = n(a);
    }
  }
  function x(D) {
    if (((y = !1), v(D), !h))
      if (n(u) !== null) (h = !0), re(S);
      else {
        var F = n(a);
        F !== null && se(x, F.startTime - D);
      }
  }
  function S(D, F) {
    (h = !1), y && ((y = !1), g(k), (k = -1)), (f = !0);
    var B = p;
    try {
      for (
        v(F), c = n(u);
        c !== null && (!(c.expirationTime > F) || (D && !Q()));

      ) {
        var b = c.callback;
        if (typeof b == 'function') {
          (c.callback = null), (p = c.priorityLevel);
          var ue = b(c.expirationTime <= F);
          (F = e.unstable_now()),
            typeof ue == 'function' ? (c.callback = ue) : c === n(u) && r(u),
            v(F);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var nt = !0;
      else {
        var Pe = n(a);
        Pe !== null && se(x, Pe.startTime - F), (nt = !1);
      }
      return nt;
    } finally {
      (c = null), (p = B), (f = !1);
    }
  }
  var T = !1,
    w = null,
    k = -1,
    V = 5,
    z = -1;
  function Q() {
    return !(e.unstable_now() - z < V);
  }
  function ee() {
    if (w !== null) {
      var D = e.unstable_now();
      z = D;
      var F = !0;
      try {
        F = w(!0, D);
      } finally {
        F ? te() : ((T = !1), (w = null));
      }
    } else T = !1;
  }
  var te;
  if (typeof m == 'function')
    te = function () {
      m(ee);
    };
  else if (typeof MessageChannel < 'u') {
    var ne = new MessageChannel(),
      Me = ne.port2;
    (ne.port1.onmessage = ee),
      (te = function () {
        Me.postMessage(null);
      });
  } else
    te = function () {
      _(ee, 0);
    };
  function re(D) {
    (w = D), T || ((T = !0), te());
  }
  function se(D, F) {
    k = _(function () {
      D(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      h || f || ((h = !0), re(S));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (V = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = p;
      }
      var B = p;
      p = F;
      try {
        return D();
      } finally {
        p = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, F) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var B = p;
      p = D;
      try {
        return F();
      } finally {
        p = B;
      }
    }),
    (e.unstable_scheduleCallback = function (D, F, B) {
      var b = e.unstable_now();
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? b + B : b))
          : (B = b),
        D)
      ) {
        case 1:
          var ue = -1;
          break;
        case 2:
          ue = 250;
          break;
        case 5:
          ue = 1073741823;
          break;
        case 4:
          ue = 1e4;
          break;
        default:
          ue = 5e3;
      }
      return (
        (ue = B + ue),
        (D = {
          id: d++,
          callback: F,
          priorityLevel: D,
          startTime: B,
          expirationTime: ue,
          sortIndex: -1,
        }),
        B > b
          ? ((D.sortIndex = B),
            t(a, D),
            n(u) === null &&
              D === n(a) &&
              (y ? (g(k), (k = -1)) : (y = !0), se(x, B - b)))
          : ((D.sortIndex = ue), t(u, D), h || f || ((h = !0), re(S))),
        D
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (D) {
      var F = p;
      return function () {
        var B = p;
        p = F;
        try {
          return D.apply(this, arguments);
        } finally {
          p = B;
        }
      };
    });
})(fm);
dm.exports = fm;
var m_ = dm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pm = R,
  Lt = m_;
function O(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var hm = new Set(),
  ul = {};
function si(e, t) {
  Vi(e, t), Vi(e + 'Capture', t);
}
function Vi(e, t) {
  for (ul[e] = t, e = 0; e < t.length; e++) hm.add(t[e]);
}
var Bn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  gc = Object.prototype.hasOwnProperty,
  y_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Lp = {},
  Ap = {};
function v_(e) {
  return gc.call(Ap, e)
    ? !0
    : gc.call(Lp, e)
    ? !1
    : y_.test(e)
    ? (Ap[e] = !0)
    : ((Lp[e] = !0), !1);
}
function __(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function x_(e, t, n, r) {
  if (t === null || typeof t > 'u' || __(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function mt(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var Ge = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new mt(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Ge[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ge[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ge[e] = new mt(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ge[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ge[e] = new mt(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Ge[e] = new mt(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ge[e] = new mt(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Ge[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qd = /[\-:]([a-z])/g;
function Jd(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qd, Jd);
    Ge[t] = new mt(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Qd, Jd);
    Ge[t] = new mt(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Qd, Jd);
  Ge[t] = new mt(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ge[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ge.xlinkHref = new mt(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ge[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xd(e, t, n, r) {
  var i = Ge.hasOwnProperty(t) ? Ge[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (x_(t, n, i, r) && (n = null),
    r || i === null
      ? v_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Un = pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zl = Symbol.for('react.element'),
  xi = Symbol.for('react.portal'),
  Ci = Symbol.for('react.fragment'),
  Zd = Symbol.for('react.strict_mode'),
  mc = Symbol.for('react.profiler'),
  gm = Symbol.for('react.provider'),
  mm = Symbol.for('react.context'),
  qd = Symbol.for('react.forward_ref'),
  yc = Symbol.for('react.suspense'),
  vc = Symbol.for('react.suspense_list'),
  bd = Symbol.for('react.memo'),
  bn = Symbol.for('react.lazy'),
  ym = Symbol.for('react.offscreen'),
  Ip = Symbol.iterator;
function _o(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ip && e[Ip]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Se = Object.assign,
  Sa;
function Ro(e) {
  if (Sa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sa = (t && t[1]) || '';
    }
  return (
    `
` +
    Sa +
    e
  );
}
var Ea = !1;
function Na(e, t) {
  if (!e || Ea) return '';
  Ea = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var u =
                  `
` + i[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Ea = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ro(e) : '';
}
function C_(e) {
  switch (e.tag) {
    case 5:
      return Ro(e.type);
    case 16:
      return Ro('Lazy');
    case 13:
      return Ro('Suspense');
    case 19:
      return Ro('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Na(e.type, !1)), e;
    case 11:
      return (e = Na(e.type.render, !1)), e;
    case 1:
      return (e = Na(e.type, !0)), e;
    default:
      return '';
  }
}
function _c(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Ci:
      return 'Fragment';
    case xi:
      return 'Portal';
    case mc:
      return 'Profiler';
    case Zd:
      return 'StrictMode';
    case yc:
      return 'Suspense';
    case vc:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case mm:
        return (e.displayName || 'Context') + '.Consumer';
      case gm:
        return (e._context.displayName || 'Context') + '.Provider';
      case qd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case bd:
        return (
          (t = e.displayName || null), t !== null ? t : _c(e.type) || 'Memo'
        );
      case bn:
        (t = e._payload), (e = e._init);
        try {
          return _c(e(t));
        } catch {}
    }
  return null;
}
function S_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return _c(t);
    case 8:
      return t === Zd ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function vr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function vm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function E_(e) {
  var t = vm(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = '' + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ql(e) {
  e._valueTracker || (e._valueTracker = E_(e));
}
function _m(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = vm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gs(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xc(e, t) {
  var n = t.checked;
  return Se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zp(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function xm(e, t) {
  (t = t.checked), t != null && Xd(e, 'checked', t, !1);
}
function Cc(e, t) {
  xm(e, t);
  var n = vr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Sc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Sc(e, t.type, vr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fp(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Sc(e, t, n) {
  (t !== 'number' || Gs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Do = Array.isArray;
function Ii(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + vr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ec(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Bp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Do(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: vr(n) };
}
function Cm(e, t) {
  var n = vr(t.value),
    r = vr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function jp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Sm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Nc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Sm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var bl,
  Em = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        bl = bl || document.createElement('div'),
          bl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = bl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function al(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  N_ = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Wo).forEach(function (e) {
  N_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wo[t] = Wo[e]);
  });
});
function Nm(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Wo.hasOwnProperty(e) && Wo[e])
    ? ('' + t).trim()
    : t + 'px';
}
function wm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Nm(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var w_ = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wc(e, t) {
  if (t) {
    if (w_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(O(62));
  }
}
function Tc(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var $c = null;
function ef(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var kc = null,
  zi = null,
  Fi = null;
function Wp(e) {
  if ((e = Bl(e))) {
    if (typeof kc != 'function') throw Error(O(280));
    var t = e.stateNode;
    t && ((t = ju(t)), kc(e.stateNode, e.type, t));
  }
}
function Tm(e) {
  zi ? (Fi ? Fi.push(e) : (Fi = [e])) : (zi = e);
}
function $m() {
  if (zi) {
    var e = zi,
      t = Fi;
    if (((Fi = zi = null), Wp(e), t)) for (e = 0; e < t.length; e++) Wp(t[e]);
  }
}
function km(e, t) {
  return e(t);
}
function Om() {}
var wa = !1;
function Rm(e, t, n) {
  if (wa) return e(t, n);
  wa = !0;
  try {
    return km(e, t, n);
  } finally {
    (wa = !1), (zi !== null || Fi !== null) && (Om(), $m());
  }
}
function cl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ju(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(O(231, t, typeof n));
  return n;
}
var Oc = !1;
if (Bn)
  try {
    var xo = {};
    Object.defineProperty(xo, 'passive', {
      get: function () {
        Oc = !0;
      },
    }),
      window.addEventListener('test', xo, xo),
      window.removeEventListener('test', xo, xo);
  } catch {
    Oc = !1;
  }
function T_(e, t, n, r, i, o, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Ho = !1,
  Qs = null,
  Js = !1,
  Rc = null,
  $_ = {
    onError: function (e) {
      (Ho = !0), (Qs = e);
    },
  };
function k_(e, t, n, r, i, o, l, s, u) {
  (Ho = !1), (Qs = null), T_.apply($_, arguments);
}
function O_(e, t, n, r, i, o, l, s, u) {
  if ((k_.apply(this, arguments), Ho)) {
    if (Ho) {
      var a = Qs;
      (Ho = !1), (Qs = null);
    } else throw Error(O(198));
    Js || ((Js = !0), (Rc = a));
  }
}
function ui(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Dm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hp(e) {
  if (ui(e) !== e) throw Error(O(188));
}
function R_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ui(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Hp(i), e;
        if (o === r) return Hp(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Mm(e) {
  return (e = R_(e)), e !== null ? Pm(e) : null;
}
function Pm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Lm = Lt.unstable_scheduleCallback,
  Up = Lt.unstable_cancelCallback,
  D_ = Lt.unstable_shouldYield,
  M_ = Lt.unstable_requestPaint,
  we = Lt.unstable_now,
  P_ = Lt.unstable_getCurrentPriorityLevel,
  tf = Lt.unstable_ImmediatePriority,
  Am = Lt.unstable_UserBlockingPriority,
  Xs = Lt.unstable_NormalPriority,
  L_ = Lt.unstable_LowPriority,
  Im = Lt.unstable_IdlePriority,
  Iu = null,
  mn = null;
function A_(e) {
  if (mn && typeof mn.onCommitFiberRoot == 'function')
    try {
      mn.onCommitFiberRoot(Iu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rn = Math.clz32 ? Math.clz32 : F_,
  I_ = Math.log,
  z_ = Math.LN2;
function F_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((I_(e) / z_) | 0)) | 0;
}
var es = 64,
  ts = 4194304;
function Mo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = Mo(s)) : ((o &= l), o !== 0 && (r = Mo(o)));
  } else (l = n & ~i), l !== 0 ? (r = Mo(l)) : o !== 0 && (r = Mo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - rn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function B_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function j_(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - rn(o),
      s = 1 << l,
      u = i[l];
    u === -1
      ? (!(s & n) || s & r) && (i[l] = B_(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Dc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zm() {
  var e = es;
  return (es <<= 1), !(es & 4194240) && (es = 64), e;
}
function Ta(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rn(t)),
    (e[t] = n);
}
function W_(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - rn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function nf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var q = 0;
function Fm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Bm,
  rf,
  jm,
  Wm,
  Hm,
  Mc = !1,
  ns = [],
  ar = null,
  cr = null,
  dr = null,
  dl = new Map(),
  fl = new Map(),
  nr = [],
  H_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Kp(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ar = null;
      break;
    case 'dragenter':
    case 'dragleave':
      cr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      dr = null;
      break;
    case 'pointerover':
    case 'pointerout':
      dl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      fl.delete(t.pointerId);
  }
}
function Co(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Bl(t)), t !== null && rf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function U_(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (ar = Co(ar, e, t, n, r, i)), !0;
    case 'dragenter':
      return (cr = Co(cr, e, t, n, r, i)), !0;
    case 'mouseover':
      return (dr = Co(dr, e, t, n, r, i)), !0;
    case 'pointerover':
      var o = i.pointerId;
      return dl.set(o, Co(dl.get(o) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (o = i.pointerId), fl.set(o, Co(fl.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Um(e) {
  var t = jr(e.target);
  if (t !== null) {
    var n = ui(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Dm(n)), t !== null)) {
          (e.blockedOn = t),
            Hm(e.priority, function () {
              jm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $s(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ($c = r), n.target.dispatchEvent(r), ($c = null);
    } else return (t = Bl(n)), t !== null && rf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Vp(e, t, n) {
  $s(e) && n.delete(t);
}
function K_() {
  (Mc = !1),
    ar !== null && $s(ar) && (ar = null),
    cr !== null && $s(cr) && (cr = null),
    dr !== null && $s(dr) && (dr = null),
    dl.forEach(Vp),
    fl.forEach(Vp);
}
function So(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mc ||
      ((Mc = !0),
      Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, K_)));
}
function pl(e) {
  function t(i) {
    return So(i, e);
  }
  if (0 < ns.length) {
    So(ns[0], e);
    for (var n = 1; n < ns.length; n++) {
      var r = ns[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ar !== null && So(ar, e),
      cr !== null && So(cr, e),
      dr !== null && So(dr, e),
      dl.forEach(t),
      fl.forEach(t),
      n = 0;
    n < nr.length;
    n++
  )
    (r = nr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nr.length && ((n = nr[0]), n.blockedOn === null); )
    Um(n), n.blockedOn === null && nr.shift();
}
var Bi = Un.ReactCurrentBatchConfig,
  qs = !0;
function V_(e, t, n, r) {
  var i = q,
    o = Bi.transition;
  Bi.transition = null;
  try {
    (q = 1), of(e, t, n, r);
  } finally {
    (q = i), (Bi.transition = o);
  }
}
function Y_(e, t, n, r) {
  var i = q,
    o = Bi.transition;
  Bi.transition = null;
  try {
    (q = 4), of(e, t, n, r);
  } finally {
    (q = i), (Bi.transition = o);
  }
}
function of(e, t, n, r) {
  if (qs) {
    var i = Pc(e, t, n, r);
    if (i === null) Ia(e, t, r, bs, n), Kp(e, r);
    else if (U_(i, e, t, n, r)) r.stopPropagation();
    else if ((Kp(e, r), t & 4 && -1 < H_.indexOf(e))) {
      for (; i !== null; ) {
        var o = Bl(i);
        if (
          (o !== null && Bm(o),
          (o = Pc(e, t, n, r)),
          o === null && Ia(e, t, r, bs, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ia(e, t, r, null, n);
  }
}
var bs = null;
function Pc(e, t, n, r) {
  if (((bs = null), (e = ef(r)), (e = jr(e)), e !== null))
    if (((t = ui(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Dm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bs = e), null;
}
function Km(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (P_()) {
        case tf:
          return 1;
        case Am:
          return 4;
        case Xs:
        case L_:
          return 16;
        case Im:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ir = null,
  lf = null,
  ks = null;
function Vm() {
  if (ks) return ks;
  var e,
    t = lf,
    n = t.length,
    r,
    i = 'value' in ir ? ir.value : ir.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (ks = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Os(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function rs() {
  return !0;
}
function Yp() {
  return !1;
}
function zt(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? rs
        : Yp),
      (this.isPropagationStopped = Yp),
      this
    );
  }
  return (
    Se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = rs));
      },
      persist: function () {},
      isPersistent: rs,
    }),
    t
  );
}
var lo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sf = zt(lo),
  Fl = Se({}, lo, { view: 0, detail: 0 }),
  G_ = zt(Fl),
  $a,
  ka,
  Eo,
  zu = Se({}, Fl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: uf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Eo &&
            (Eo && e.type === 'mousemove'
              ? (($a = e.screenX - Eo.screenX), (ka = e.screenY - Eo.screenY))
              : (ka = $a = 0),
            (Eo = e)),
          $a);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ka;
    },
  }),
  Gp = zt(zu),
  Q_ = Se({}, zu, { dataTransfer: 0 }),
  J_ = zt(Q_),
  X_ = Se({}, Fl, { relatedTarget: 0 }),
  Oa = zt(X_),
  Z_ = Se({}, lo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  q_ = zt(Z_),
  b_ = Se({}, lo, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ex = zt(b_),
  tx = Se({}, lo, { data: 0 }),
  Qp = zt(tx),
  nx = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  rx = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  ix = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function ox(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ix[e]) ? !!t[e] : !1;
}
function uf() {
  return ox;
}
var lx = Se({}, Fl, {
    key: function (e) {
      if (e.key) {
        var t = nx[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Os(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? rx[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uf,
    charCode: function (e) {
      return e.type === 'keypress' ? Os(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Os(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  sx = zt(lx),
  ux = Se({}, zu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Jp = zt(ux),
  ax = Se({}, Fl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uf,
  }),
  cx = zt(ax),
  dx = Se({}, lo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fx = zt(dx),
  px = Se({}, zu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hx = zt(px),
  gx = [9, 13, 27, 32],
  af = Bn && 'CompositionEvent' in window,
  Uo = null;
Bn && 'documentMode' in document && (Uo = document.documentMode);
var mx = Bn && 'TextEvent' in window && !Uo,
  Ym = Bn && (!af || (Uo && 8 < Uo && 11 >= Uo)),
  Xp = String.fromCharCode(32),
  Zp = !1;
function Gm(e, t) {
  switch (e) {
    case 'keyup':
      return gx.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Qm(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Si = !1;
function yx(e, t) {
  switch (e) {
    case 'compositionend':
      return Qm(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Zp = !0), Xp);
    case 'textInput':
      return (e = t.data), e === Xp && Zp ? null : e;
    default:
      return null;
  }
}
function vx(e, t) {
  if (Si)
    return e === 'compositionend' || (!af && Gm(e, t))
      ? ((e = Vm()), (ks = lf = ir = null), (Si = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Ym && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var _x = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!_x[e.type] : t === 'textarea';
}
function Jm(e, t, n, r) {
  Tm(r),
    (t = eu(t, 'onChange')),
    0 < t.length &&
      ((n = new sf('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ko = null,
  hl = null;
function xx(e) {
  l0(e, 0);
}
function Fu(e) {
  var t = wi(e);
  if (_m(t)) return e;
}
function Cx(e, t) {
  if (e === 'change') return t;
}
var Xm = !1;
if (Bn) {
  var Ra;
  if (Bn) {
    var Da = 'oninput' in document;
    if (!Da) {
      var bp = document.createElement('div');
      bp.setAttribute('oninput', 'return;'),
        (Da = typeof bp.oninput == 'function');
    }
    Ra = Da;
  } else Ra = !1;
  Xm = Ra && (!document.documentMode || 9 < document.documentMode);
}
function eh() {
  Ko && (Ko.detachEvent('onpropertychange', Zm), (hl = Ko = null));
}
function Zm(e) {
  if (e.propertyName === 'value' && Fu(hl)) {
    var t = [];
    Jm(t, hl, e, ef(e)), Rm(xx, t);
  }
}
function Sx(e, t, n) {
  e === 'focusin'
    ? (eh(), (Ko = t), (hl = n), Ko.attachEvent('onpropertychange', Zm))
    : e === 'focusout' && eh();
}
function Ex(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Fu(hl);
}
function Nx(e, t) {
  if (e === 'click') return Fu(t);
}
function wx(e, t) {
  if (e === 'input' || e === 'change') return Fu(t);
}
function Tx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sn = typeof Object.is == 'function' ? Object.is : Tx;
function gl(e, t) {
  if (sn(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!gc.call(t, i) || !sn(e[i], t[i])) return !1;
  }
  return !0;
}
function th(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nh(e, t) {
  var n = th(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = th(n);
  }
}
function qm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? qm(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bm() {
  for (var e = window, t = Gs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gs(e.document);
  }
  return t;
}
function cf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function $x(e) {
  var t = bm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    qm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = nh(n, o));
        var l = nh(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var kx = Bn && 'documentMode' in document && 11 >= document.documentMode,
  Ei = null,
  Lc = null,
  Vo = null,
  Ac = !1;
function rh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ac ||
    Ei == null ||
    Ei !== Gs(r) ||
    ((r = Ei),
    'selectionStart' in r && cf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vo && gl(Vo, r)) ||
      ((Vo = r),
      (r = eu(Lc, 'onSelect')),
      0 < r.length &&
        ((t = new sf('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ei))));
}
function is(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Ni = {
    animationend: is('Animation', 'AnimationEnd'),
    animationiteration: is('Animation', 'AnimationIteration'),
    animationstart: is('Animation', 'AnimationStart'),
    transitionend: is('Transition', 'TransitionEnd'),
  },
  Ma = {},
  e0 = {};
Bn &&
  ((e0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Ni.animationend.animation,
    delete Ni.animationiteration.animation,
    delete Ni.animationstart.animation),
  'TransitionEvent' in window || delete Ni.transitionend.transition);
function Bu(e) {
  if (Ma[e]) return Ma[e];
  if (!Ni[e]) return e;
  var t = Ni[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in e0) return (Ma[e] = t[n]);
  return e;
}
var t0 = Bu('animationend'),
  n0 = Bu('animationiteration'),
  r0 = Bu('animationstart'),
  i0 = Bu('transitionend'),
  o0 = new Map(),
  ih =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Nr(e, t) {
  o0.set(e, t), si(t, [e]);
}
for (var Pa = 0; Pa < ih.length; Pa++) {
  var La = ih[Pa],
    Ox = La.toLowerCase(),
    Rx = La[0].toUpperCase() + La.slice(1);
  Nr(Ox, 'on' + Rx);
}
Nr(t0, 'onAnimationEnd');
Nr(n0, 'onAnimationIteration');
Nr(r0, 'onAnimationStart');
Nr('dblclick', 'onDoubleClick');
Nr('focusin', 'onFocus');
Nr('focusout', 'onBlur');
Nr(i0, 'onTransitionEnd');
Vi('onMouseEnter', ['mouseout', 'mouseover']);
Vi('onMouseLeave', ['mouseout', 'mouseover']);
Vi('onPointerEnter', ['pointerout', 'pointerover']);
Vi('onPointerLeave', ['pointerout', 'pointerover']);
si(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
si(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
si('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
si(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
si(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
si(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Po =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Dx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Po));
function oh(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), O_(r, t, void 0, e), (e.currentTarget = null);
}
function l0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== o && i.isPropagationStopped())) break e;
          oh(i, s, a), (o = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          oh(i, s, a), (o = u);
        }
    }
  }
  if (Js) throw ((e = Rc), (Js = !1), (Rc = null), e);
}
function ae(e, t) {
  var n = t[jc];
  n === void 0 && (n = t[jc] = new Set());
  var r = e + '__bubble';
  n.has(r) || (s0(t, e, 2, !1), n.add(r));
}
function Aa(e, t, n) {
  var r = 0;
  t && (r |= 4), s0(n, e, r, t);
}
var os = '_reactListening' + Math.random().toString(36).slice(2);
function ml(e) {
  if (!e[os]) {
    (e[os] = !0),
      hm.forEach(function (n) {
        n !== 'selectionchange' && (Dx.has(n) || Aa(n, !1, e), Aa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[os] || ((t[os] = !0), Aa('selectionchange', !1, t));
  }
}
function s0(e, t, n, r) {
  switch (Km(t)) {
    case 1:
      var i = V_;
      break;
    case 4:
      i = Y_;
      break;
    default:
      i = of;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Oc ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ia(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = jr(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Rm(function () {
    var a = o,
      d = ef(n),
      c = [];
    e: {
      var p = o0.get(e);
      if (p !== void 0) {
        var f = sf,
          h = e;
        switch (e) {
          case 'keypress':
            if (Os(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            f = sx;
            break;
          case 'focusin':
            (h = 'focus'), (f = Oa);
            break;
          case 'focusout':
            (h = 'blur'), (f = Oa);
            break;
          case 'beforeblur':
          case 'afterblur':
            f = Oa;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            f = Gp;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            f = J_;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            f = cx;
            break;
          case t0:
          case n0:
          case r0:
            f = q_;
            break;
          case i0:
            f = fx;
            break;
          case 'scroll':
            f = G_;
            break;
          case 'wheel':
            f = hx;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            f = ex;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            f = Jp;
        }
        var y = (t & 4) !== 0,
          _ = !y && e === 'scroll',
          g = y ? (p !== null ? p + 'Capture' : null) : p;
        y = [];
        for (var m = a, v; m !== null; ) {
          v = m;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              g !== null && ((x = cl(m, g)), x != null && y.push(yl(m, x, v)))),
            _)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((p = new f(p, h, null, n, d)), c.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (f = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== $c &&
            (h = n.relatedTarget || n.fromElement) &&
            (jr(h) || h[jn]))
        )
          break e;
        if (
          (f || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          f
            ? ((h = n.relatedTarget || n.toElement),
              (f = a),
              (h = h ? jr(h) : null),
              h !== null &&
                ((_ = ui(h)), h !== _ || (h.tag !== 5 && h.tag !== 6)) &&
                (h = null))
            : ((f = null), (h = a)),
          f !== h)
        ) {
          if (
            ((y = Gp),
            (x = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Jp),
              (x = 'onPointerLeave'),
              (g = 'onPointerEnter'),
              (m = 'pointer')),
            (_ = f == null ? p : wi(f)),
            (v = h == null ? p : wi(h)),
            (p = new y(x, m + 'leave', f, n, d)),
            (p.target = _),
            (p.relatedTarget = v),
            (x = null),
            jr(d) === a &&
              ((y = new y(g, m + 'enter', h, n, d)),
              (y.target = v),
              (y.relatedTarget = _),
              (x = y)),
            (_ = x),
            f && h)
          )
            t: {
              for (y = f, g = h, m = 0, v = y; v; v = fi(v)) m++;
              for (v = 0, x = g; x; x = fi(x)) v++;
              for (; 0 < m - v; ) (y = fi(y)), m--;
              for (; 0 < v - m; ) (g = fi(g)), v--;
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = fi(y)), (g = fi(g));
              }
              y = null;
            }
          else y = null;
          f !== null && lh(c, p, f, y, !1),
            h !== null && _ !== null && lh(c, _, h, y, !0);
        }
      }
      e: {
        if (
          ((p = a ? wi(a) : window),
          (f = p.nodeName && p.nodeName.toLowerCase()),
          f === 'select' || (f === 'input' && p.type === 'file'))
        )
          var S = Cx;
        else if (qp(p))
          if (Xm) S = wx;
          else {
            S = Ex;
            var T = Sx;
          }
        else
          (f = p.nodeName) &&
            f.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (S = Nx);
        if (S && (S = S(e, a))) {
          Jm(c, S, n, d);
          break e;
        }
        T && T(e, p, a),
          e === 'focusout' &&
            (T = p._wrapperState) &&
            T.controlled &&
            p.type === 'number' &&
            Sc(p, 'number', p.value);
      }
      switch (((T = a ? wi(a) : window), e)) {
        case 'focusin':
          (qp(T) || T.contentEditable === 'true') &&
            ((Ei = T), (Lc = a), (Vo = null));
          break;
        case 'focusout':
          Vo = Lc = Ei = null;
          break;
        case 'mousedown':
          Ac = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Ac = !1), rh(c, n, d);
          break;
        case 'selectionchange':
          if (kx) break;
        case 'keydown':
        case 'keyup':
          rh(c, n, d);
      }
      var w;
      if (af)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart';
              break e;
            case 'compositionend':
              k = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              k = 'onCompositionUpdate';
              break e;
          }
          k = void 0;
        }
      else
        Si
          ? Gm(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart');
      k &&
        (Ym &&
          n.locale !== 'ko' &&
          (Si || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && Si && (w = Vm())
            : ((ir = d),
              (lf = 'value' in ir ? ir.value : ir.textContent),
              (Si = !0))),
        (T = eu(a, k)),
        0 < T.length &&
          ((k = new Qp(k, e, null, n, d)),
          c.push({ event: k, listeners: T }),
          w ? (k.data = w) : ((w = Qm(n)), w !== null && (k.data = w)))),
        (w = mx ? yx(e, n) : vx(e, n)) &&
          ((a = eu(a, 'onBeforeInput')),
          0 < a.length &&
            ((d = new Qp('onBeforeInput', 'beforeinput', null, n, d)),
            c.push({ event: d, listeners: a }),
            (d.data = w)));
    }
    l0(c, t);
  });
}
function yl(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function eu(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = cl(e, n)),
      o != null && r.unshift(yl(e, o, i)),
      (o = cl(e, t)),
      o != null && r.push(yl(e, o, i))),
      (e = e.return);
  }
  return r;
}
function fi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lh(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      i
        ? ((u = cl(n, o)), u != null && l.unshift(yl(n, u, s)))
        : i || ((u = cl(n, o)), u != null && l.push(yl(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Mx = /\r\n?/g,
  Px = /\u0000|\uFFFD/g;
function sh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Mx,
      `
`
    )
    .replace(Px, '');
}
function ls(e, t, n) {
  if (((t = sh(t)), sh(e) !== t && n)) throw Error(O(425));
}
function tu() {}
var Ic = null,
  zc = null;
function Fc(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bc = typeof setTimeout == 'function' ? setTimeout : void 0,
  Lx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  uh = typeof Promise == 'function' ? Promise : void 0,
  Ax =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof uh < 'u'
      ? function (e) {
          return uh.resolve(null).then(e).catch(Ix);
        }
      : Bc;
function Ix(e) {
  setTimeout(function () {
    throw e;
  });
}
function za(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), pl(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  pl(t);
}
function fr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function ah(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var so = Math.random().toString(36).slice(2),
  hn = '__reactFiber$' + so,
  vl = '__reactProps$' + so,
  jn = '__reactContainer$' + so,
  jc = '__reactEvents$' + so,
  zx = '__reactListeners$' + so,
  Fx = '__reactHandles$' + so;
function jr(e) {
  var t = e[hn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[jn] || n[hn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ah(e); e !== null; ) {
          if ((n = e[hn])) return n;
          e = ah(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Bl(e) {
  return (
    (e = e[hn] || e[jn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function wi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function ju(e) {
  return e[vl] || null;
}
var Wc = [],
  Ti = -1;
function wr(e) {
  return { current: e };
}
function pe(e) {
  0 > Ti || ((e.current = Wc[Ti]), (Wc[Ti] = null), Ti--);
}
function oe(e, t) {
  Ti++, (Wc[Ti] = e.current), (e.current = t);
}
var _r = {},
  tt = wr(_r),
  Et = wr(!1),
  Zr = _r;
function Yi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _r;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Nt(e) {
  return (e = e.childContextTypes), e != null;
}
function nu() {
  pe(Et), pe(tt);
}
function ch(e, t, n) {
  if (tt.current !== _r) throw Error(O(168));
  oe(tt, t), oe(Et, n);
}
function u0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, S_(e) || 'Unknown', i));
  return Se({}, n, r);
}
function ru(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _r),
    (Zr = tt.current),
    oe(tt, e),
    oe(Et, Et.current),
    !0
  );
}
function dh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = u0(e, t, Zr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(Et),
      pe(tt),
      oe(tt, e))
    : pe(Et),
    oe(Et, n);
}
var Mn = null,
  Wu = !1,
  Fa = !1;
function a0(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function Bx(e) {
  (Wu = !0), a0(e);
}
function Tr() {
  if (!Fa && Mn !== null) {
    Fa = !0;
    var e = 0,
      t = q;
    try {
      var n = Mn;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mn = null), (Wu = !1);
    } catch (i) {
      throw (Mn !== null && (Mn = Mn.slice(e + 1)), Lm(tf, Tr), i);
    } finally {
      (q = t), (Fa = !1);
    }
  }
  return null;
}
var $i = [],
  ki = 0,
  iu = null,
  ou = 0,
  Ut = [],
  Kt = 0,
  qr = null,
  An = 1,
  In = '';
function Lr(e, t) {
  ($i[ki++] = ou), ($i[ki++] = iu), (iu = e), (ou = t);
}
function c0(e, t, n) {
  (Ut[Kt++] = An), (Ut[Kt++] = In), (Ut[Kt++] = qr), (qr = e);
  var r = An;
  e = In;
  var i = 32 - rn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - rn(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (An = (1 << (32 - rn(t) + i)) | (n << i) | r),
      (In = o + e);
  } else (An = (1 << o) | (n << i) | r), (In = e);
}
function df(e) {
  e.return !== null && (Lr(e, 1), c0(e, 1, 0));
}
function ff(e) {
  for (; e === iu; )
    (iu = $i[--ki]), ($i[ki] = null), (ou = $i[--ki]), ($i[ki] = null);
  for (; e === qr; )
    (qr = Ut[--Kt]),
      (Ut[Kt] = null),
      (In = Ut[--Kt]),
      (Ut[Kt] = null),
      (An = Ut[--Kt]),
      (Ut[Kt] = null);
}
var Dt = null,
  Rt = null,
  me = !1,
  tn = null;
function d0(e, t) {
  var n = Gt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Dt = e), (Rt = fr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Dt = e), (Rt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = qr !== null ? { id: An, overflow: In } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Gt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Dt = e),
            (Rt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Hc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Uc(e) {
  if (me) {
    var t = Rt;
    if (t) {
      var n = t;
      if (!fh(e, t)) {
        if (Hc(e)) throw Error(O(418));
        t = fr(n.nextSibling);
        var r = Dt;
        t && fh(e, t)
          ? d0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (me = !1), (Dt = e));
      }
    } else {
      if (Hc(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (me = !1), (Dt = e);
    }
  }
}
function ph(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Dt = e;
}
function ss(e) {
  if (e !== Dt) return !1;
  if (!me) return ph(e), (me = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Fc(e.type, e.memoizedProps))),
    t && (t = Rt))
  ) {
    if (Hc(e)) throw (f0(), Error(O(418)));
    for (; t; ) d0(e, t), (t = fr(t.nextSibling));
  }
  if ((ph(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Rt = fr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Rt = null;
    }
  } else Rt = Dt ? fr(e.stateNode.nextSibling) : null;
  return !0;
}
function f0() {
  for (var e = Rt; e; ) e = fr(e.nextSibling);
}
function Gi() {
  (Rt = Dt = null), (me = !1);
}
function pf(e) {
  tn === null ? (tn = [e]) : tn.push(e);
}
var jx = Un.ReactCurrentBatchConfig;
function bt(e, t) {
  if (e && e.defaultProps) {
    (t = Se({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var lu = wr(null),
  su = null,
  Oi = null,
  hf = null;
function gf() {
  hf = Oi = su = null;
}
function mf(e) {
  var t = lu.current;
  pe(lu), (e._currentValue = t);
}
function Kc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ji(e, t) {
  (su = e),
    (hf = Oi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_t = !0), (e.firstContext = null));
}
function Jt(e) {
  var t = e._currentValue;
  if (hf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Oi === null)) {
      if (su === null) throw Error(O(308));
      (Oi = e), (su.dependencies = { lanes: 0, firstContext: e });
    } else Oi = Oi.next = e;
  return t;
}
var Wr = null;
function yf(e) {
  Wr === null ? (Wr = [e]) : Wr.push(e);
}
function p0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), yf(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Wn(e, r)
  );
}
function Wn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var er = !1;
function vf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function h0(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function zn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Wn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), yf(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Wn(e, n)
  );
}
function Rs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nf(e, n);
  }
}
function hh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function uu(e, t, n, r) {
  var i = e.updateQueue;
  er = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (o = a) : (l.next = a), (l = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = a) : (s.next = a),
        (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var c = i.baseState;
    (l = 0), (d = a = u = null), (s = o);
    do {
      var p = s.lane,
        f = s.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: f,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var h = e,
            y = s;
          switch (((p = t), (f = n), y.tag)) {
            case 1:
              if (((h = y.payload), typeof h == 'function')) {
                c = h.call(f, c, p);
                break e;
              }
              c = h;
              break e;
            case 3:
              h.flags = (h.flags & -65537) | 128;
            case 0:
              if (
                ((h = y.payload),
                (p = typeof h == 'function' ? h.call(f, c, p) : h),
                p == null)
              )
                break e;
              c = Se({}, c, p);
              break e;
            case 2:
              er = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        (f = {
          eventTime: f,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((a = d = f), (u = c)) : (d = d.next = f),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (u = c),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (ei |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function gh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var g0 = new pm.Component().refs;
function Vc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Hu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ui(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ht(),
      i = gr(e),
      o = zn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = pr(e, o, i)),
      t !== null && (on(t, e, i, r), Rs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ht(),
      i = gr(e),
      o = zn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = pr(e, o, i)),
      t !== null && (on(t, e, i, r), Rs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ht(),
      r = gr(e),
      i = zn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = pr(e, i, r)),
      t !== null && (on(t, e, r, n), Rs(t, e, r));
  },
};
function mh(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gl(n, r) || !gl(i, o)
      : !0
  );
}
function m0(e, t, n) {
  var r = !1,
    i = _r,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Jt(o))
      : ((i = Nt(t) ? Zr : tt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Yi(e, i) : _r)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Hu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function yh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Hu.enqueueReplaceState(t, t.state, null);
}
function Yc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = g0), vf(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (i.context = Jt(o))
    : ((o = Nt(t) ? Zr : tt.current), (i.context = Yi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Vc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Hu.enqueueReplaceState(i, i.state, null),
      uu(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function No(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === g0 && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function us(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function vh(e) {
  var t = e._init;
  return t(e._payload);
}
function y0(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) t(g, m), (m = m.sibling);
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function i(g, m) {
    return (g = mr(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, m, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function l(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, m, v, x) {
    return m === null || m.tag !== 6
      ? ((m = Va(v, g.mode, x)), (m.return = g), m)
      : ((m = i(m, v)), (m.return = g), m);
  }
  function u(g, m, v, x) {
    var S = v.type;
    return S === Ci
      ? d(g, m, v.props.children, x, v.key)
      : m !== null &&
        (m.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === bn &&
            vh(S) === m.type))
      ? ((x = i(m, v.props)), (x.ref = No(g, m, v)), (x.return = g), x)
      : ((x = Is(v.type, v.key, v.props, null, g.mode, x)),
        (x.ref = No(g, m, v)),
        (x.return = g),
        x);
  }
  function a(g, m, v, x) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Ya(v, g.mode, x)), (m.return = g), m)
      : ((m = i(m, v.children || [])), (m.return = g), m);
  }
  function d(g, m, v, x, S) {
    return m === null || m.tag !== 7
      ? ((m = Vr(v, g.mode, x, S)), (m.return = g), m)
      : ((m = i(m, v)), (m.return = g), m);
  }
  function c(g, m, v) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = Va('' + m, g.mode, v)), (m.return = g), m;
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case Zl:
          return (
            (v = Is(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = No(g, null, m)),
            (v.return = g),
            v
          );
        case xi:
          return (m = Ya(m, g.mode, v)), (m.return = g), m;
        case bn:
          var x = m._init;
          return c(g, x(m._payload), v);
      }
      if (Do(m) || _o(m))
        return (m = Vr(m, g.mode, v, null)), (m.return = g), m;
      us(g, m);
    }
    return null;
  }
  function p(g, m, v, x) {
    var S = m !== null ? m.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return S !== null ? null : s(g, m, '' + v, x);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Zl:
          return v.key === S ? u(g, m, v, x) : null;
        case xi:
          return v.key === S ? a(g, m, v, x) : null;
        case bn:
          return (S = v._init), p(g, m, S(v._payload), x);
      }
      if (Do(v) || _o(v)) return S !== null ? null : d(g, m, v, x, null);
      us(g, v);
    }
    return null;
  }
  function f(g, m, v, x, S) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (g = g.get(v) || null), s(m, g, '' + x, S);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Zl:
          return (g = g.get(x.key === null ? v : x.key) || null), u(m, g, x, S);
        case xi:
          return (g = g.get(x.key === null ? v : x.key) || null), a(m, g, x, S);
        case bn:
          var T = x._init;
          return f(g, m, v, T(x._payload), S);
      }
      if (Do(x) || _o(x)) return (g = g.get(v) || null), d(m, g, x, S, null);
      us(m, x);
    }
    return null;
  }
  function h(g, m, v, x) {
    for (
      var S = null, T = null, w = m, k = (m = 0), V = null;
      w !== null && k < v.length;
      k++
    ) {
      w.index > k ? ((V = w), (w = null)) : (V = w.sibling);
      var z = p(g, w, v[k], x);
      if (z === null) {
        w === null && (w = V);
        break;
      }
      e && w && z.alternate === null && t(g, w),
        (m = o(z, m, k)),
        T === null ? (S = z) : (T.sibling = z),
        (T = z),
        (w = V);
    }
    if (k === v.length) return n(g, w), me && Lr(g, k), S;
    if (w === null) {
      for (; k < v.length; k++)
        (w = c(g, v[k], x)),
          w !== null &&
            ((m = o(w, m, k)), T === null ? (S = w) : (T.sibling = w), (T = w));
      return me && Lr(g, k), S;
    }
    for (w = r(g, w); k < v.length; k++)
      (V = f(w, g, k, v[k], x)),
        V !== null &&
          (e && V.alternate !== null && w.delete(V.key === null ? k : V.key),
          (m = o(V, m, k)),
          T === null ? (S = V) : (T.sibling = V),
          (T = V));
    return (
      e &&
        w.forEach(function (Q) {
          return t(g, Q);
        }),
      me && Lr(g, k),
      S
    );
  }
  function y(g, m, v, x) {
    var S = _o(v);
    if (typeof S != 'function') throw Error(O(150));
    if (((v = S.call(v)), v == null)) throw Error(O(151));
    for (
      var T = (S = null), w = m, k = (m = 0), V = null, z = v.next();
      w !== null && !z.done;
      k++, z = v.next()
    ) {
      w.index > k ? ((V = w), (w = null)) : (V = w.sibling);
      var Q = p(g, w, z.value, x);
      if (Q === null) {
        w === null && (w = V);
        break;
      }
      e && w && Q.alternate === null && t(g, w),
        (m = o(Q, m, k)),
        T === null ? (S = Q) : (T.sibling = Q),
        (T = Q),
        (w = V);
    }
    if (z.done) return n(g, w), me && Lr(g, k), S;
    if (w === null) {
      for (; !z.done; k++, z = v.next())
        (z = c(g, z.value, x)),
          z !== null &&
            ((m = o(z, m, k)), T === null ? (S = z) : (T.sibling = z), (T = z));
      return me && Lr(g, k), S;
    }
    for (w = r(g, w); !z.done; k++, z = v.next())
      (z = f(w, g, k, z.value, x)),
        z !== null &&
          (e && z.alternate !== null && w.delete(z.key === null ? k : z.key),
          (m = o(z, m, k)),
          T === null ? (S = z) : (T.sibling = z),
          (T = z));
    return (
      e &&
        w.forEach(function (ee) {
          return t(g, ee);
        }),
      me && Lr(g, k),
      S
    );
  }
  function _(g, m, v, x) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Ci &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Zl:
          e: {
            for (var S = v.key, T = m; T !== null; ) {
              if (T.key === S) {
                if (((S = v.type), S === Ci)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (m = i(T, v.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === bn &&
                    vh(S) === T.type)
                ) {
                  n(g, T.sibling),
                    (m = i(T, v.props)),
                    (m.ref = No(g, T, v)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            v.type === Ci
              ? ((m = Vr(v.props.children, g.mode, x, v.key)),
                (m.return = g),
                (g = m))
              : ((x = Is(v.type, v.key, v.props, null, g.mode, x)),
                (x.ref = No(g, m, v)),
                (x.return = g),
                (g = x));
          }
          return l(g);
        case xi:
          e: {
            for (T = v.key; m !== null; ) {
              if (m.key === T)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(g, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            (m = Ya(v, g.mode, x)), (m.return = g), (g = m);
          }
          return l(g);
        case bn:
          return (T = v._init), _(g, m, T(v._payload), x);
      }
      if (Do(v)) return h(g, m, v, x);
      if (_o(v)) return y(g, m, v, x);
      us(g, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = i(m, v)), (m.return = g), (g = m))
          : (n(g, m), (m = Va(v, g.mode, x)), (m.return = g), (g = m)),
        l(g))
      : n(g, m);
  }
  return _;
}
var Qi = y0(!0),
  v0 = y0(!1),
  jl = {},
  yn = wr(jl),
  _l = wr(jl),
  xl = wr(jl);
function Hr(e) {
  if (e === jl) throw Error(O(174));
  return e;
}
function _f(e, t) {
  switch ((oe(xl, t), oe(_l, e), oe(yn, jl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nc(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nc(t, e));
  }
  pe(yn), oe(yn, t);
}
function Ji() {
  pe(yn), pe(_l), pe(xl);
}
function _0(e) {
  Hr(xl.current);
  var t = Hr(yn.current),
    n = Nc(t, e.type);
  t !== n && (oe(_l, e), oe(yn, n));
}
function xf(e) {
  _l.current === e && (pe(yn), pe(_l));
}
var ve = wr(0);
function au(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ba = [];
function Cf() {
  for (var e = 0; e < Ba.length; e++)
    Ba[e]._workInProgressVersionPrimary = null;
  Ba.length = 0;
}
var Ds = Un.ReactCurrentDispatcher,
  ja = Un.ReactCurrentBatchConfig,
  br = 0,
  xe = null,
  Re = null,
  Ae = null,
  cu = !1,
  Yo = !1,
  Cl = 0,
  Wx = 0;
function Je() {
  throw Error(O(321));
}
function Sf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!sn(e[n], t[n])) return !1;
  return !0;
}
function Ef(e, t, n, r, i, o) {
  if (
    ((br = o),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ds.current = e === null || e.memoizedState === null ? Vx : Yx),
    (e = n(r, i)),
    Yo)
  ) {
    o = 0;
    do {
      if (((Yo = !1), (Cl = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (Ae = Re = null),
        (t.updateQueue = null),
        (Ds.current = Gx),
        (e = n(r, i));
    } while (Yo);
  }
  if (
    ((Ds.current = du),
    (t = Re !== null && Re.next !== null),
    (br = 0),
    (Ae = Re = xe = null),
    (cu = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function Nf() {
  var e = Cl !== 0;
  return (Cl = 0), e;
}
function dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ae === null ? (xe.memoizedState = Ae = e) : (Ae = Ae.next = e), Ae;
}
function Xt() {
  if (Re === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Ae === null ? xe.memoizedState : Ae.next;
  if (t !== null) (Ae = t), (Re = e);
  else {
    if (e === null) throw Error(O(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Ae === null ? (xe.memoizedState = Ae = e) : (Ae = Ae.next = e);
  }
  return Ae;
}
function Sl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Wa(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = o;
    do {
      var d = a.lane;
      if ((br & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var c = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = c), (l = r)) : (u = u.next = c),
          (xe.lanes |= d),
          (ei |= d);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (l = r) : (u.next = s),
      sn(r, t.memoizedState) || (_t = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (xe.lanes |= o), (ei |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ha(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    sn(o, t.memoizedState) || (_t = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function x0() {}
function C0(e, t) {
  var n = xe,
    r = Xt(),
    i = t(),
    o = !sn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (_t = !0)),
    (r = r.queue),
    wf(N0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ae !== null && Ae.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      El(9, E0.bind(null, n, r, i, t), void 0, null),
      je === null)
    )
      throw Error(O(349));
    br & 30 || S0(n, t, i);
  }
  return i;
}
function S0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function E0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), w0(t) && T0(e);
}
function N0(e, t, n) {
  return n(function () {
    w0(t) && T0(e);
  });
}
function w0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !sn(e, n);
  } catch {
    return !0;
  }
}
function T0(e) {
  var t = Wn(e, 1);
  t !== null && on(t, e, 1, -1);
}
function _h(e) {
  var t = dn();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kx.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function El(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (xe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $0() {
  return Xt().memoizedState;
}
function Ms(e, t, n, r) {
  var i = dn();
  (xe.flags |= e),
    (i.memoizedState = El(1 | t, n, void 0, r === void 0 ? null : r));
}
function Uu(e, t, n, r) {
  var i = Xt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Re !== null) {
    var l = Re.memoizedState;
    if (((o = l.destroy), r !== null && Sf(r, l.deps))) {
      i.memoizedState = El(t, n, o, r);
      return;
    }
  }
  (xe.flags |= e), (i.memoizedState = El(1 | t, n, o, r));
}
function xh(e, t) {
  return Ms(8390656, 8, e, t);
}
function wf(e, t) {
  return Uu(2048, 8, e, t);
}
function k0(e, t) {
  return Uu(4, 2, e, t);
}
function O0(e, t) {
  return Uu(4, 4, e, t);
}
function R0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function D0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Uu(4, 4, R0.bind(null, t, e), n)
  );
}
function Tf() {}
function M0(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function P0(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Sf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function L0(e, t, n) {
  return br & 21
    ? (sn(n, t) || ((n = zm()), (xe.lanes |= n), (ei |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_t = !0)), (e.memoizedState = n));
}
function Hx(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ja.transition;
  ja.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (ja.transition = r);
  }
}
function A0() {
  return Xt().memoizedState;
}
function Ux(e, t, n) {
  var r = gr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    I0(e))
  )
    z0(t, n);
  else if (((n = p0(e, t, n, r)), n !== null)) {
    var i = ht();
    on(n, e, r, i), F0(n, t, r);
  }
}
function Kx(e, t, n) {
  var r = gr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (I0(e)) z0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), sn(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), yf(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = p0(e, t, i, r)),
      n !== null && ((i = ht()), on(n, e, r, i), F0(n, t, r));
  }
}
function I0(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function z0(e, t) {
  Yo = cu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function F0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nf(e, n);
  }
}
var du = {
    readContext: Jt,
    useCallback: Je,
    useContext: Je,
    useEffect: Je,
    useImperativeHandle: Je,
    useInsertionEffect: Je,
    useLayoutEffect: Je,
    useMemo: Je,
    useReducer: Je,
    useRef: Je,
    useState: Je,
    useDebugValue: Je,
    useDeferredValue: Je,
    useTransition: Je,
    useMutableSource: Je,
    useSyncExternalStore: Je,
    useId: Je,
    unstable_isNewReconciler: !1,
  },
  Vx = {
    readContext: Jt,
    useCallback: function (e, t) {
      return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Jt,
    useEffect: xh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ms(4194308, 4, R0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ms(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ms(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ux.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: _h,
    useDebugValue: Tf,
    useDeferredValue: function (e) {
      return (dn().memoizedState = e);
    },
    useTransition: function () {
      var e = _h(!1),
        t = e[0];
      return (e = Hx.bind(null, e[1])), (dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        i = dn();
      if (me) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(O(349));
        br & 30 || S0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        xh(N0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        El(9, E0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dn(),
        t = je.identifierPrefix;
      if (me) {
        var n = In,
          r = An;
        (n = (r & ~(1 << (32 - rn(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Cl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Wx++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Yx = {
    readContext: Jt,
    useCallback: M0,
    useContext: Jt,
    useEffect: wf,
    useImperativeHandle: D0,
    useInsertionEffect: k0,
    useLayoutEffect: O0,
    useMemo: P0,
    useReducer: Wa,
    useRef: $0,
    useState: function () {
      return Wa(Sl);
    },
    useDebugValue: Tf,
    useDeferredValue: function (e) {
      var t = Xt();
      return L0(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Wa(Sl)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: x0,
    useSyncExternalStore: C0,
    useId: A0,
    unstable_isNewReconciler: !1,
  },
  Gx = {
    readContext: Jt,
    useCallback: M0,
    useContext: Jt,
    useEffect: wf,
    useImperativeHandle: D0,
    useInsertionEffect: k0,
    useLayoutEffect: O0,
    useMemo: P0,
    useReducer: Ha,
    useRef: $0,
    useState: function () {
      return Ha(Sl);
    },
    useDebugValue: Tf,
    useDeferredValue: function (e) {
      var t = Xt();
      return Re === null ? (t.memoizedState = e) : L0(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Ha(Sl)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: x0,
    useSyncExternalStore: C0,
    useId: A0,
    unstable_isNewReconciler: !1,
  };
function Xi(e, t) {
  try {
    var n = '',
      r = t;
    do (n += C_(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ua(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qx = typeof WeakMap == 'function' ? WeakMap : Map;
function B0(e, t, n) {
  (n = zn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      pu || ((pu = !0), (rd = r)), Gc(e, t);
    }),
    n
  );
}
function j0(e, t, n) {
  (n = zn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Gc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Gc(e, t),
          typeof r != 'function' &&
            (hr === null ? (hr = new Set([this])) : hr.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function Ch(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qx();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = uC.bind(null, e, t, n)), t.then(e, e));
}
function Sh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Eh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = zn(-1, 1)), (t.tag = 2), pr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jx = Un.ReactCurrentOwner,
  _t = !1;
function st(e, t, n, r) {
  t.child = e === null ? v0(t, null, n, r) : Qi(t, e.child, n, r);
}
function Nh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ji(t, i),
    (r = Ef(e, t, n, r, o, i)),
    (n = Nf()),
    e !== null && !_t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Hn(e, t, i))
      : (me && n && df(t), (t.flags |= 1), st(e, t, r, i), t.child)
  );
}
function wh(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Lf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), W0(e, t, o, r, i))
      : ((e = Is(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gl), n(l, r) && e.ref === t.ref)
    )
      return Hn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = mr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function W0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (gl(o, r) && e.ref === t.ref)
      if (((_t = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (_t = !0);
      else return (t.lanes = e.lanes), Hn(e, t, i);
  }
  return Qc(e, t, n, r, i);
}
function H0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        oe(Di, Ot),
        (Ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          oe(Di, Ot),
          (Ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        oe(Di, Ot),
        (Ot |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      oe(Di, Ot),
      (Ot |= r);
  return st(e, t, i, n), t.child;
}
function U0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Qc(e, t, n, r, i) {
  var o = Nt(n) ? Zr : tt.current;
  return (
    (o = Yi(t, o)),
    ji(t, i),
    (n = Ef(e, t, n, r, o, i)),
    (r = Nf()),
    e !== null && !_t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Hn(e, t, i))
      : (me && r && df(t), (t.flags |= 1), st(e, t, n, i), t.child)
  );
}
function Th(e, t, n, r, i) {
  if (Nt(n)) {
    var o = !0;
    ru(t);
  } else o = !1;
  if ((ji(t, i), t.stateNode === null))
    Ps(e, t), m0(t, n, r), Yc(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Jt(a))
      : ((a = Nt(n) ? Zr : tt.current), (a = Yi(t, a)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && yh(t, l, r, a)),
      (er = !1);
    var p = t.memoizedState;
    (l.state = p),
      uu(t, r, l, i),
      (u = t.memoizedState),
      s !== r || p !== u || Et.current || er
        ? (typeof d == 'function' && (Vc(t, n, d, r), (u = t.memoizedState)),
          (s = er || mh(t, n, s, r, p, u, a))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      h0(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : bt(t.type, s)),
      (l.props = a),
      (c = t.pendingProps),
      (p = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = Jt(u))
        : ((u = Nt(n) ? Zr : tt.current), (u = Yi(t, u)));
    var f = n.getDerivedStateFromProps;
    (d =
      typeof f == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== c || p !== u) && yh(t, l, r, u)),
      (er = !1),
      (p = t.memoizedState),
      (l.state = p),
      uu(t, r, l, i);
    var h = t.memoizedState;
    s !== c || p !== h || Et.current || er
      ? (typeof f == 'function' && (Vc(t, n, f, r), (h = t.memoizedState)),
        (a = er || mh(t, n, a, r, p, h, u) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, h, u),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, h, u)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = h)),
        (l.props = r),
        (l.state = h),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Jc(e, t, n, r, o, i);
}
function Jc(e, t, n, r, i, o) {
  U0(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && dh(t, n, !1), Hn(e, t, o);
  (r = t.stateNode), (Jx.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Qi(t, e.child, null, o)), (t.child = Qi(t, null, s, o)))
      : st(e, t, s, o),
    (t.memoizedState = r.state),
    i && dh(t, n, !0),
    t.child
  );
}
function K0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ch(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ch(e, t.context, !1),
    _f(e, t.containerInfo);
}
function $h(e, t, n, r, i) {
  return Gi(), pf(i), (t.flags |= 256), st(e, t, n, r), t.child;
}
var Xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function V0(e, t, n) {
  var r = t.pendingProps,
    i = ve.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    oe(ve, i & 1),
    e === null)
  )
    return (
      Uc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Yu(l, r, 0, null)),
              (e = Vr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Zc(n)),
              (t.memoizedState = Xc),
              e)
            : $f(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return Xx(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = mr(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = mr(s, o)) : ((o = Vr(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Zc(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Xc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = mr(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function $f(e, t) {
  return (
    (t = Yu({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function as(e, t, n, r) {
  return (
    r !== null && pf(r),
    Qi(t, e.child, null, n),
    (e = $f(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xx(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ua(Error(O(422)))), as(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Yu({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = Vr(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Qi(t, e.child, null, l),
        (t.child.memoizedState = Zc(l)),
        (t.memoizedState = Xc),
        o);
  if (!(t.mode & 1)) return as(e, t, l, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(O(419))), (r = Ua(o, r, void 0)), as(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), _t || s)) {
    if (((r = je), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Wn(e, i), on(r, e, i, -1));
    }
    return Pf(), (r = Ua(Error(O(421)))), as(e, t, l, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = aC.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Rt = fr(i.nextSibling)),
      (Dt = t),
      (me = !0),
      (tn = null),
      e !== null &&
        ((Ut[Kt++] = An),
        (Ut[Kt++] = In),
        (Ut[Kt++] = qr),
        (An = e.id),
        (In = e.overflow),
        (qr = t)),
      (t = $f(t, r.children)),
      (t.flags |= 4096),
      t);
}
function kh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Kc(e.return, t, n);
}
function Ka(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Y0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((st(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kh(e, n, t);
        else if (e.tag === 19) kh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((oe(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && au(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ka(t, !1, i, n, o);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && au(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ka(t, !0, n, null, o);
        break;
      case 'together':
        Ka(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ps(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Hn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ei |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = mr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = mr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zx(e, t, n) {
  switch (t.tag) {
    case 3:
      K0(t), Gi();
      break;
    case 5:
      _0(t);
      break;
    case 1:
      Nt(t.type) && ru(t);
      break;
    case 4:
      _f(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      oe(lu, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (oe(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? V0(e, t, n)
          : (oe(ve, ve.current & 1),
            (e = Hn(e, t, n)),
            e !== null ? e.sibling : null);
      oe(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Y0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        oe(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), H0(e, t, n);
  }
  return Hn(e, t, n);
}
var G0, qc, Q0, J0;
G0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
qc = function () {};
Q0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Hr(yn.current);
    var o = null;
    switch (n) {
      case 'input':
        (i = xc(e, i)), (r = xc(e, r)), (o = []);
        break;
      case 'select':
        (i = Se({}, i, { value: void 0 })),
          (r = Se({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (i = Ec(e, i)), (r = Ec(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = tu);
    }
    wc(n, r);
    var l;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === 'style') {
          var s = i[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (ul.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === 'style')
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(a, u))
            : a === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (o = o || []).push(a, '' + u)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (ul.hasOwnProperty(a)
                ? (u != null && a === 'onScroll' && ae('scroll', e),
                  o || s === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
J0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wo(e, t) {
  if (!me)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qx(e, t, n) {
  var r = t.pendingProps;
  switch ((ff(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Xe(t), null;
    case 1:
      return Nt(t.type) && nu(), Xe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ji(),
        pe(Et),
        pe(tt),
        Cf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ss(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), tn !== null && (ld(tn), (tn = null)))),
        qc(e, t),
        Xe(t),
        null
      );
    case 5:
      xf(t);
      var i = Hr(xl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Q0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Xe(t), null;
        }
        if (((e = Hr(yn.current)), ss(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[hn] = t), (r[vl] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ae('cancel', r), ae('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ae('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Po.length; i++) ae(Po[i], r);
              break;
            case 'source':
              ae('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ae('error', r), ae('load', r);
              break;
            case 'details':
              ae('toggle', r);
              break;
            case 'input':
              zp(r, o), ae('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ae('invalid', r);
              break;
            case 'textarea':
              Bp(r, o), ae('invalid', r);
          }
          wc(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ls(r.textContent, s, e),
                    (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      ls(r.textContent, s, e),
                    (i = ['children', '' + s]))
                : ul.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  ae('scroll', r);
            }
          switch (n) {
            case 'input':
              ql(r), Fp(r, o, !0);
              break;
            case 'textarea':
              ql(r), jp(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = tu);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Sm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[hn] = t),
            (e[vl] = r),
            G0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Tc(n, r)), n)) {
              case 'dialog':
                ae('cancel', e), ae('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ae('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Po.length; i++) ae(Po[i], e);
                i = r;
                break;
              case 'source':
                ae('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ae('error', e), ae('load', e), (i = r);
                break;
              case 'details':
                ae('toggle', e), (i = r);
                break;
              case 'input':
                zp(e, r), (i = xc(e, r)), ae('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Se({}, r, { value: void 0 })),
                  ae('invalid', e);
                break;
              case 'textarea':
                Bp(e, r), (i = Ec(e, r)), ae('invalid', e);
                break;
              default:
                i = r;
            }
            wc(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === 'style'
                  ? wm(e, u)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && Em(e, u))
                  : o === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && al(e, u)
                    : typeof u == 'number' && al(e, '' + u)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (ul.hasOwnProperty(o)
                      ? u != null && o === 'onScroll' && ae('scroll', e)
                      : u != null && Xd(e, o, u, l));
              }
            switch (n) {
              case 'input':
                ql(e), Fp(e, r, !1);
                break;
              case 'textarea':
                ql(e), jp(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + vr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ii(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Ii(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = tu);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Xe(t), null;
    case 6:
      if (e && t.stateNode != null) J0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(O(166));
        if (((n = Hr(xl.current)), Hr(yn.current), ss(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[hn] = t),
            (o = r.nodeValue !== n) && ((e = Dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ls(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ls(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[hn] = t),
            (t.stateNode = r);
      }
      return Xe(t), null;
    case 13:
      if (
        (pe(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (me && Rt !== null && t.mode & 1 && !(t.flags & 128))
          f0(), Gi(), (t.flags |= 98560), (o = !1);
        else if (((o = ss(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[hn] = t;
          } else
            Gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Xe(t), (o = !1);
        } else tn !== null && (ld(tn), (tn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? De === 0 && (De = 3) : Pf())),
          t.updateQueue !== null && (t.flags |= 4),
          Xe(t),
          null);
    case 4:
      return (
        Ji(), qc(e, t), e === null && ml(t.stateNode.containerInfo), Xe(t), null
      );
    case 10:
      return mf(t.type._context), Xe(t), null;
    case 17:
      return Nt(t.type) && nu(), Xe(t), null;
    case 19:
      if ((pe(ve), (o = t.memoizedState), o === null)) return Xe(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) wo(o, !1);
        else {
          if (De !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = au(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    wo(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return oe(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            we() > Zi &&
            ((t.flags |= 128), (r = !0), wo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = au(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wo(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !l.alternate && !me)
            )
              return Xe(t), null;
          } else
            2 * we() - o.renderingStartTime > Zi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = we()),
          (t.sibling = null),
          (n = ve.current),
          oe(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Xe(t), null);
    case 22:
    case 23:
      return (
        Mf(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ot & 1073741824 && (Xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function bx(e, t) {
  switch ((ff(t), t.tag)) {
    case 1:
      return (
        Nt(t.type) && nu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ji(),
        pe(Et),
        pe(tt),
        Cf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xf(t), null;
    case 13:
      if (
        (pe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        Gi();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(ve), null;
    case 4:
      return Ji(), null;
    case 10:
      return mf(t.type._context), null;
    case 22:
    case 23:
      return Mf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var cs = !1,
  be = !1,
  eC = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null;
function Ri(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function bc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Oh = !1;
function tC(e, t) {
  if (((Ic = qs), (e = bm()), cf(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            d = 0,
            c = e,
            p = null;
          t: for (;;) {
            for (
              var f;
              c !== n || (i !== 0 && c.nodeType !== 3) || (s = l + i),
                c !== o || (r !== 0 && c.nodeType !== 3) || (u = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (f = c.firstChild) !== null;

            )
              (p = c), (c = f);
            for (;;) {
              if (c === e) break t;
              if (
                (p === n && ++a === i && (s = l),
                p === o && ++d === r && (u = l),
                (f = c.nextSibling) !== null)
              )
                break;
              (c = p), (p = c.parentNode);
            }
            c = f;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zc = { focusedElem: e, selectionRange: n }, qs = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var h = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (h !== null) {
                  var y = h.memoizedProps,
                    _ = h.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : bt(t.type, y),
                      _
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (x) {
          Ee(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (h = Oh), (Oh = !1), h;
}
function Go(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && bc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ku(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ed(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function X0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), X0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[hn], delete t[vl], delete t[jc], delete t[zx], delete t[Fx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Z0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Z0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function td(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = tu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (td(e, t, n), e = e.sibling; e !== null; ) td(e, t, n), (e = e.sibling);
}
function nd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nd(e, t, n), e = e.sibling; e !== null; ) nd(e, t, n), (e = e.sibling);
}
var Ke = null,
  en = !1;
function Jn(e, t, n) {
  for (n = n.child; n !== null; ) q0(e, t, n), (n = n.sibling);
}
function q0(e, t, n) {
  if (mn && typeof mn.onCommitFiberUnmount == 'function')
    try {
      mn.onCommitFiberUnmount(Iu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      be || Ri(n, t);
    case 6:
      var r = Ke,
        i = en;
      (Ke = null),
        Jn(e, t, n),
        (Ke = r),
        (en = i),
        Ke !== null &&
          (en
            ? ((e = Ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ke.removeChild(n.stateNode));
      break;
    case 18:
      Ke !== null &&
        (en
          ? ((e = Ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? za(e.parentNode, n)
              : e.nodeType === 1 && za(e, n),
            pl(e))
          : za(Ke, n.stateNode));
      break;
    case 4:
      (r = Ke),
        (i = en),
        (Ke = n.stateNode.containerInfo),
        (en = !0),
        Jn(e, t, n),
        (Ke = r),
        (en = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !be &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && bc(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      Jn(e, t, n);
      break;
    case 1:
      if (
        !be &&
        (Ri(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Ee(n, t, s);
        }
      Jn(e, t, n);
      break;
    case 21:
      Jn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((be = (r = be) || n.memoizedState !== null), Jn(e, t, n), (be = r))
        : Jn(e, t, n);
      break;
    default:
      Jn(e, t, n);
  }
}
function Dh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new eC()),
      t.forEach(function (r) {
        var i = cC.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ke = s.stateNode), (en = !1);
              break e;
            case 3:
              (Ke = s.stateNode.containerInfo), (en = !0);
              break e;
            case 4:
              (Ke = s.stateNode.containerInfo), (en = !0);
              break e;
          }
          s = s.return;
        }
        if (Ke === null) throw Error(O(160));
        q0(o, l, i), (Ke = null), (en = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        Ee(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) b0(t, e), (t = t.sibling);
}
function b0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qt(t, e), an(e), r & 4)) {
        try {
          Go(3, e, e.return), Ku(3, e);
        } catch (y) {
          Ee(e, e.return, y);
        }
        try {
          Go(5, e, e.return);
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      break;
    case 1:
      qt(t, e), an(e), r & 512 && n !== null && Ri(n, n.return);
      break;
    case 5:
      if (
        (qt(t, e),
        an(e),
        r & 512 && n !== null && Ri(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          al(i, '');
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && xm(i, o),
              Tc(s, l);
            var a = Tc(s, o);
            for (l = 0; l < u.length; l += 2) {
              var d = u[l],
                c = u[l + 1];
              d === 'style'
                ? wm(i, c)
                : d === 'dangerouslySetInnerHTML'
                ? Em(i, c)
                : d === 'children'
                ? al(i, c)
                : Xd(i, d, c, a);
            }
            switch (s) {
              case 'input':
                Cc(i, o);
                break;
              case 'textarea':
                Cm(i, o);
                break;
              case 'select':
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var f = o.value;
                f != null
                  ? Ii(i, !!o.multiple, f, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ii(i, !!o.multiple, o.defaultValue, !0)
                      : Ii(i, !!o.multiple, o.multiple ? [] : '', !1));
            }
            i[vl] = o;
          } catch (y) {
            Ee(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((qt(t, e), an(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          Ee(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (qt(t, e), an(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pl(t.containerInfo);
        } catch (y) {
          Ee(e, e.return, y);
        }
      break;
    case 4:
      qt(t, e), an(e);
      break;
    case 13:
      qt(t, e),
        an(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Rf = we())),
        r & 4 && Dh(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((be = (a = be) || d), qt(t, e), (be = a)) : qt(t, e),
        an(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && e.mode & 1)
        )
          for (A = e, d = e.child; d !== null; ) {
            for (c = A = d; A !== null; ) {
              switch (((p = A), (f = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Go(4, p, p.return);
                  break;
                case 1:
                  Ri(p, p.return);
                  var h = p.stateNode;
                  if (typeof h.componentWillUnmount == 'function') {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (h.props = t.memoizedProps),
                        (h.state = t.memoizedState),
                        h.componentWillUnmount();
                    } catch (y) {
                      Ee(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Ri(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ph(c);
                    continue;
                  }
              }
              f !== null ? ((f.return = p), (A = f)) : Ph(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (i = c.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = c.stateNode),
                      (u = c.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = Nm('display', l)));
              } catch (y) {
                Ee(e, e.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = a ? '' : c.memoizedProps;
              } catch (y) {
                Ee(e, e.return, y);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      qt(t, e), an(e), r & 4 && Dh(e);
      break;
    case 21:
      break;
    default:
      qt(t, e), an(e);
  }
}
function an(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Z0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (al(i, ''), (r.flags &= -33));
          var o = Rh(e);
          nd(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Rh(e);
          td(e, s, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (u) {
      Ee(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nC(e, t, n) {
  (A = e), e1(e);
}
function e1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || cs;
      if (!l) {
        var s = i.alternate,
          u = (s !== null && s.memoizedState !== null) || be;
        s = cs;
        var a = be;
        if (((cs = l), (be = u) && !a))
          for (A = i; A !== null; )
            (l = A),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Lh(i)
                : u !== null
                ? ((u.return = l), (A = u))
                : Lh(i);
        for (; o !== null; ) (A = o), e1(o), (o = o.sibling);
        (A = i), (cs = s), (be = a);
      }
      Mh(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (A = o)) : Mh(e);
  }
}
function Mh(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              be || Ku(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !be)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && gh(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gh(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && pl(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        be || (t.flags & 512 && ed(t));
      } catch (p) {
        Ee(t, t.return, p);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Ph(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Lh(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ku(4, t);
          } catch (u) {
            Ee(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Ee(t, i, u);
            }
          }
          var o = t.return;
          try {
            ed(t);
          } catch (u) {
            Ee(t, o, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ed(t);
          } catch (u) {
            Ee(t, l, u);
          }
      }
    } catch (u) {
      Ee(t, t.return, u);
    }
    if (t === e) {
      A = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (A = s);
      break;
    }
    A = t.return;
  }
}
var rC = Math.ceil,
  fu = Un.ReactCurrentDispatcher,
  kf = Un.ReactCurrentOwner,
  Qt = Un.ReactCurrentBatchConfig,
  J = 0,
  je = null,
  $e = null,
  Ye = 0,
  Ot = 0,
  Di = wr(0),
  De = 0,
  Nl = null,
  ei = 0,
  Vu = 0,
  Of = 0,
  Qo = null,
  vt = null,
  Rf = 0,
  Zi = 1 / 0,
  On = null,
  pu = !1,
  rd = null,
  hr = null,
  ds = !1,
  or = null,
  hu = 0,
  Jo = 0,
  id = null,
  Ls = -1,
  As = 0;
function ht() {
  return J & 6 ? we() : Ls !== -1 ? Ls : (Ls = we());
}
function gr(e) {
  return e.mode & 1
    ? J & 2 && Ye !== 0
      ? Ye & -Ye
      : jx.transition !== null
      ? (As === 0 && (As = zm()), As)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Km(e.type))),
        e)
    : 1;
}
function on(e, t, n, r) {
  if (50 < Jo) throw ((Jo = 0), (id = null), Error(O(185)));
  zl(e, n, r),
    (!(J & 2) || e !== je) &&
      (e === je && (!(J & 2) && (Vu |= n), De === 4 && rr(e, Ye)),
      wt(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((Zi = we() + 500), Wu && Tr()));
}
function wt(e, t) {
  var n = e.callbackNode;
  j_(e, t);
  var r = Zs(e, e === je ? Ye : 0);
  if (r === 0)
    n !== null && Up(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Up(n), t === 1))
      e.tag === 0 ? Bx(Ah.bind(null, e)) : a0(Ah.bind(null, e)),
        Ax(function () {
          !(J & 6) && Tr();
        }),
        (n = null);
    else {
      switch (Fm(r)) {
        case 1:
          n = tf;
          break;
        case 4:
          n = Am;
          break;
        case 16:
          n = Xs;
          break;
        case 536870912:
          n = Im;
          break;
        default:
          n = Xs;
      }
      n = u1(n, t1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function t1(e, t) {
  if (((Ls = -1), (As = 0), J & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (Wi() && e.callbackNode !== n) return null;
  var r = Zs(e, e === je ? Ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gu(e, r);
  else {
    t = r;
    var i = J;
    J |= 2;
    var o = r1();
    (je !== e || Ye !== t) && ((On = null), (Zi = we() + 500), Kr(e, t));
    do
      try {
        lC();
        break;
      } catch (s) {
        n1(e, s);
      }
    while (1);
    gf(),
      (fu.current = o),
      (J = i),
      $e !== null ? (t = 0) : ((je = null), (Ye = 0), (t = De));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Dc(e)), i !== 0 && ((r = i), (t = od(e, i)))), t === 1)
    )
      throw ((n = Nl), Kr(e, 0), rr(e, r), wt(e, we()), n);
    if (t === 6) rr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !iC(i) &&
          ((t = gu(e, r)),
          t === 2 && ((o = Dc(e)), o !== 0 && ((r = o), (t = od(e, o)))),
          t === 1))
      )
        throw ((n = Nl), Kr(e, 0), rr(e, r), wt(e, we()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          Ar(e, vt, On);
          break;
        case 3:
          if (
            (rr(e, r), (r & 130023424) === r && ((t = Rf + 500 - we()), 10 < t))
          ) {
            if (Zs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ht(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Bc(Ar.bind(null, e, vt, On), t);
            break;
          }
          Ar(e, vt, On);
          break;
        case 4:
          if ((rr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - rn(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rC(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bc(Ar.bind(null, e, vt, On), r);
            break;
          }
          Ar(e, vt, On);
          break;
        case 5:
          Ar(e, vt, On);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return wt(e, we()), e.callbackNode === n ? t1.bind(null, e) : null;
}
function od(e, t) {
  var n = Qo;
  return (
    e.current.memoizedState.isDehydrated && (Kr(e, t).flags |= 256),
    (e = gu(e, t)),
    e !== 2 && ((t = vt), (vt = n), t !== null && ld(t)),
    e
  );
}
function ld(e) {
  vt === null ? (vt = e) : vt.push.apply(vt, e);
}
function iC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!sn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rr(e, t) {
  for (
    t &= ~Of,
      t &= ~Vu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ah(e) {
  if (J & 6) throw Error(O(327));
  Wi();
  var t = Zs(e, 0);
  if (!(t & 1)) return wt(e, we()), null;
  var n = gu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Dc(e);
    r !== 0 && ((t = r), (n = od(e, r)));
  }
  if (n === 1) throw ((n = Nl), Kr(e, 0), rr(e, t), wt(e, we()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ar(e, vt, On),
    wt(e, we()),
    null
  );
}
function Df(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((Zi = we() + 500), Wu && Tr());
  }
}
function ti(e) {
  or !== null && or.tag === 0 && !(J & 6) && Wi();
  var t = J;
  J |= 1;
  var n = Qt.transition,
    r = q;
  try {
    if (((Qt.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (Qt.transition = n), (J = t), !(J & 6) && Tr();
  }
}
function Mf() {
  (Ot = Di.current), pe(Di);
}
function Kr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Lx(n)), $e !== null))
    for (n = $e.return; n !== null; ) {
      var r = n;
      switch ((ff(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && nu();
          break;
        case 3:
          Ji(), pe(Et), pe(tt), Cf();
          break;
        case 5:
          xf(r);
          break;
        case 4:
          Ji();
          break;
        case 13:
          pe(ve);
          break;
        case 19:
          pe(ve);
          break;
        case 10:
          mf(r.type._context);
          break;
        case 22:
        case 23:
          Mf();
      }
      n = n.return;
    }
  if (
    ((je = e),
    ($e = e = mr(e.current, null)),
    (Ye = Ot = t),
    (De = 0),
    (Nl = null),
    (Of = Vu = ei = 0),
    (vt = Qo = null),
    Wr !== null)
  ) {
    for (t = 0; t < Wr.length; t++)
      if (((n = Wr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Wr = null;
  }
  return e;
}
function n1(e, t) {
  do {
    var n = $e;
    try {
      if ((gf(), (Ds.current = du), cu)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        cu = !1;
      }
      if (
        ((br = 0),
        (Ae = Re = xe = null),
        (Yo = !1),
        (Cl = 0),
        (kf.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (Nl = t), ($e = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = Ye),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var a = u,
            d = s,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var f = Sh(l);
          if (f !== null) {
            (f.flags &= -257),
              Eh(f, l, s, o, t),
              f.mode & 1 && Ch(o, a, t),
              (t = f),
              (u = a);
            var h = t.updateQueue;
            if (h === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else h.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ch(o, a, t), Pf();
              break e;
            }
            u = Error(O(426));
          }
        } else if (me && s.mode & 1) {
          var _ = Sh(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Eh(_, l, s, o, t),
              pf(Xi(u, s));
            break e;
          }
        }
        (o = u = Xi(u, s)),
          De !== 4 && (De = 2),
          Qo === null ? (Qo = [o]) : Qo.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = B0(o, u, t);
              hh(o, g);
              break e;
            case 1:
              s = u;
              var m = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (hr === null || !hr.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = j0(o, s, t);
                hh(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      o1(n);
    } catch (S) {
      (t = S), $e === n && n !== null && ($e = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function r1() {
  var e = fu.current;
  return (fu.current = du), e === null ? du : e;
}
function Pf() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    je === null || (!(ei & 268435455) && !(Vu & 268435455)) || rr(je, Ye);
}
function gu(e, t) {
  var n = J;
  J |= 2;
  var r = r1();
  (je !== e || Ye !== t) && ((On = null), Kr(e, t));
  do
    try {
      oC();
      break;
    } catch (i) {
      n1(e, i);
    }
  while (1);
  if ((gf(), (J = n), (fu.current = r), $e !== null)) throw Error(O(261));
  return (je = null), (Ye = 0), De;
}
function oC() {
  for (; $e !== null; ) i1($e);
}
function lC() {
  for (; $e !== null && !D_(); ) i1($e);
}
function i1(e) {
  var t = s1(e.alternate, e, Ot);
  (e.memoizedProps = e.pendingProps),
    t === null ? o1(e) : ($e = t),
    (kf.current = null);
}
function o1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bx(n, t)), n !== null)) {
        (n.flags &= 32767), ($e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), ($e = null);
        return;
      }
    } else if (((n = qx(n, t, Ot)), n !== null)) {
      $e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      $e = t;
      return;
    }
    $e = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function Ar(e, t, n) {
  var r = q,
    i = Qt.transition;
  try {
    (Qt.transition = null), (q = 1), sC(e, t, n, r);
  } finally {
    (Qt.transition = i), (q = r);
  }
  return null;
}
function sC(e, t, n, r) {
  do Wi();
  while (or !== null);
  if (J & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (W_(e, o),
    e === je && (($e = je = null), (Ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ds ||
      ((ds = !0),
      u1(Xs, function () {
        return Wi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Qt.transition), (Qt.transition = null);
    var l = q;
    q = 1;
    var s = J;
    (J |= 4),
      (kf.current = null),
      tC(e, n),
      b0(n, e),
      $x(zc),
      (qs = !!Ic),
      (zc = Ic = null),
      (e.current = n),
      nC(n),
      M_(),
      (J = s),
      (q = l),
      (Qt.transition = o);
  } else e.current = n;
  if (
    (ds && ((ds = !1), (or = e), (hu = i)),
    (o = e.pendingLanes),
    o === 0 && (hr = null),
    A_(n.stateNode),
    wt(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (pu) throw ((pu = !1), (e = rd), (rd = null), e);
  return (
    hu & 1 && e.tag !== 0 && Wi(),
    (o = e.pendingLanes),
    o & 1 ? (e === id ? Jo++ : ((Jo = 0), (id = e))) : (Jo = 0),
    Tr(),
    null
  );
}
function Wi() {
  if (or !== null) {
    var e = Fm(hu),
      t = Qt.transition,
      n = q;
    try {
      if (((Qt.transition = null), (q = 16 > e ? 16 : e), or === null))
        var r = !1;
      else {
        if (((e = or), (or = null), (hu = 0), J & 6)) throw Error(O(331));
        var i = J;
        for (J |= 4, A = e.current; A !== null; ) {
          var o = A,
            l = o.child;
          if (A.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (A = a; A !== null; ) {
                  var d = A;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(8, d, o);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (A = c);
                  else
                    for (; A !== null; ) {
                      d = A;
                      var p = d.sibling,
                        f = d.return;
                      if ((X0(d), d === a)) {
                        A = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = f), (A = p);
                        break;
                      }
                      A = f;
                    }
                }
              }
              var h = o.alternate;
              if (h !== null) {
                var y = h.child;
                if (y !== null) {
                  h.child = null;
                  do {
                    var _ = y.sibling;
                    (y.sibling = null), (y = _);
                  } while (y !== null);
                }
              }
              A = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (A = l);
          else
            e: for (; A !== null; ) {
              if (((o = A), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Go(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (A = g);
                break e;
              }
              A = o.return;
            }
        }
        var m = e.current;
        for (A = m; A !== null; ) {
          l = A;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (A = v);
          else
            e: for (l = m; A !== null; ) {
              if (((s = A), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ku(9, s);
                  }
                } catch (S) {
                  Ee(s, s.return, S);
                }
              if (s === l) {
                A = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (A = x);
                break e;
              }
              A = s.return;
            }
        }
        if (
          ((J = i), Tr(), mn && typeof mn.onPostCommitFiberRoot == 'function')
        )
          try {
            mn.onPostCommitFiberRoot(Iu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (Qt.transition = t);
    }
  }
  return !1;
}
function Ih(e, t, n) {
  (t = Xi(n, t)),
    (t = B0(e, t, 1)),
    (e = pr(e, t, 1)),
    (t = ht()),
    e !== null && (zl(e, 1, t), wt(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Ih(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ih(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (hr === null || !hr.has(r)))
        ) {
          (e = Xi(n, e)),
            (e = j0(t, e, 1)),
            (t = pr(t, e, 1)),
            (e = ht()),
            t !== null && (zl(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function uC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ht()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (Ye & n) === n &&
      (De === 4 || (De === 3 && (Ye & 130023424) === Ye && 500 > we() - Rf)
        ? Kr(e, 0)
        : (Of |= n)),
    wt(e, t);
}
function l1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ts), (ts <<= 1), !(ts & 130023424) && (ts = 4194304))
      : (t = 1));
  var n = ht();
  (e = Wn(e, t)), e !== null && (zl(e, t, n), wt(e, n));
}
function aC(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), l1(e, n);
}
function cC(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), l1(e, n);
}
var s1;
s1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Et.current) _t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_t = !1), Zx(e, t, n);
      _t = !!(e.flags & 131072);
    }
  else (_t = !1), me && t.flags & 1048576 && c0(t, ou, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ps(e, t), (e = t.pendingProps);
      var i = Yi(t, tt.current);
      ji(t, n), (i = Ef(null, t, r, e, i, n));
      var o = Nf();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Nt(r) ? ((o = !0), ru(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            vf(t),
            (i.updater = Hu),
            (t.stateNode = i),
            (i._reactInternals = t),
            Yc(t, r, e, n),
            (t = Jc(null, t, r, !0, o, n)))
          : ((t.tag = 0), me && o && df(t), st(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ps(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = fC(r)),
          (e = bt(r, e)),
          i)
        ) {
          case 0:
            t = Qc(null, t, r, e, n);
            break e;
          case 1:
            t = Th(null, t, r, e, n);
            break e;
          case 11:
            t = Nh(null, t, r, e, n);
            break e;
          case 14:
            t = wh(null, t, r, bt(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : bt(r, i)),
        Qc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : bt(r, i)),
        Th(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((K0(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          h0(e, t),
          uu(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Xi(Error(O(423)), t)), (t = $h(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Xi(Error(O(424)), t)), (t = $h(e, t, r, n, i));
            break e;
          } else
            for (
              Rt = fr(t.stateNode.containerInfo.firstChild),
                Dt = t,
                me = !0,
                tn = null,
                n = v0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gi(), r === i)) {
            t = Hn(e, t, n);
            break e;
          }
          st(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _0(t),
        e === null && Uc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Fc(r, i) ? (l = null) : o !== null && Fc(r, o) && (t.flags |= 32),
        U0(e, t),
        st(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Uc(t), null;
    case 13:
      return V0(e, t, n);
    case 4:
      return (
        _f(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Qi(t, null, r, n)) : st(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : bt(r, i)),
        Nh(e, t, r, i, n)
      );
    case 7:
      return st(e, t, t.pendingProps, n), t.child;
    case 8:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return st(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          oe(lu, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (sn(o.value, l)) {
            if (o.children === i.children && !Et.current) {
              t = Hn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = zn(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (u.next = u)
                          : ((u.next = d.next), (d.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Kc(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Kc(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        st(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ji(t, n),
        (i = Jt(i)),
        (r = r(i)),
        (t.flags |= 1),
        st(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = bt(r, t.pendingProps)),
        (i = bt(r.type, i)),
        wh(e, t, r, i, n)
      );
    case 15:
      return W0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : bt(r, i)),
        Ps(e, t),
        (t.tag = 1),
        Nt(r) ? ((e = !0), ru(t)) : (e = !1),
        ji(t, n),
        m0(t, r, i),
        Yc(t, r, i, n),
        Jc(null, t, r, !0, e, n)
      );
    case 19:
      return Y0(e, t, n);
    case 22:
      return H0(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function u1(e, t) {
  return Lm(e, t);
}
function dC(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Gt(e, t, n, r) {
  return new dC(e, t, n, r);
}
function Lf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fC(e) {
  if (typeof e == 'function') return Lf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qd)) return 11;
    if (e === bd) return 14;
  }
  return 2;
}
function mr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Gt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Is(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Lf(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case Ci:
        return Vr(n.children, i, o, t);
      case Zd:
        (l = 8), (i |= 8);
        break;
      case mc:
        return (
          (e = Gt(12, n, t, i | 2)), (e.elementType = mc), (e.lanes = o), e
        );
      case yc:
        return (e = Gt(13, n, t, i)), (e.elementType = yc), (e.lanes = o), e;
      case vc:
        return (e = Gt(19, n, t, i)), (e.elementType = vc), (e.lanes = o), e;
      case ym:
        return Yu(n, i, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case gm:
              l = 10;
              break e;
            case mm:
              l = 9;
              break e;
            case qd:
              l = 11;
              break e;
            case bd:
              l = 14;
              break e;
            case bn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Gt(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Vr(e, t, n, r) {
  return (e = Gt(7, e, r, t)), (e.lanes = n), e;
}
function Yu(e, t, n, r) {
  return (
    (e = Gt(22, e, r, t)),
    (e.elementType = ym),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Va(e, t, n) {
  return (e = Gt(6, e, null, t)), (e.lanes = n), e;
}
function Ya(e, t, n) {
  return (
    (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pC(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ta(0)),
    (this.expirationTimes = Ta(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ta(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Af(e, t, n, r, i, o, l, s, u) {
  return (
    (e = new pC(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Gt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vf(o),
    e
  );
}
function hC(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: xi,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function a1(e) {
  if (!e) return _r;
  e = e._reactInternals;
  e: {
    if (ui(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Nt(n)) return u0(e, n, t);
  }
  return t;
}
function c1(e, t, n, r, i, o, l, s, u) {
  return (
    (e = Af(n, r, !0, e, i, o, l, s, u)),
    (e.context = a1(null)),
    (n = e.current),
    (r = ht()),
    (i = gr(n)),
    (o = zn(r, i)),
    (o.callback = t ?? null),
    pr(n, o, i),
    (e.current.lanes = i),
    zl(e, i, r),
    wt(e, r),
    e
  );
}
function Gu(e, t, n, r) {
  var i = t.current,
    o = ht(),
    l = gr(i);
  return (
    (n = a1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = zn(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pr(i, t, l)),
    e !== null && (on(e, i, l, o), Rs(e, i, l)),
    l
  );
}
function mu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function If(e, t) {
  zh(e, t), (e = e.alternate) && zh(e, t);
}
function gC() {
  return null;
}
var d1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function zf(e) {
  this._internalRoot = e;
}
Qu.prototype.render = zf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Gu(e, t, null, null);
};
Qu.prototype.unmount = zf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ti(function () {
      Gu(null, e, null, null);
    }),
      (t[jn] = null);
  }
};
function Qu(e) {
  this._internalRoot = e;
}
Qu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Wm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nr.length && t !== 0 && t < nr[n].priority; n++);
    nr.splice(n, 0, e), n === 0 && Um(e);
  }
};
function Ff(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ju(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Fh() {}
function mC(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = mu(l);
        o.call(a);
      };
    }
    var l = c1(t, r, e, 0, null, !1, !1, '', Fh);
    return (
      (e._reactRootContainer = l),
      (e[jn] = l.current),
      ml(e.nodeType === 8 ? e.parentNode : e),
      ti(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var a = mu(u);
      s.call(a);
    };
  }
  var u = Af(e, 0, !1, null, null, !1, !1, '', Fh);
  return (
    (e._reactRootContainer = u),
    (e[jn] = u.current),
    ml(e.nodeType === 8 ? e.parentNode : e),
    ti(function () {
      Gu(t, u, n, r);
    }),
    u
  );
}
function Xu(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == 'function') {
      var s = i;
      i = function () {
        var u = mu(l);
        s.call(u);
      };
    }
    Gu(t, l, e, i);
  } else l = mC(n, t, e, i, r);
  return mu(l);
}
Bm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mo(t.pendingLanes);
        n !== 0 &&
          (nf(t, n | 1), wt(t, we()), !(J & 6) && ((Zi = we() + 500), Tr()));
      }
      break;
    case 13:
      ti(function () {
        var r = Wn(e, 1);
        if (r !== null) {
          var i = ht();
          on(r, e, 1, i);
        }
      }),
        If(e, 1);
  }
};
rf = function (e) {
  if (e.tag === 13) {
    var t = Wn(e, 134217728);
    if (t !== null) {
      var n = ht();
      on(t, e, 134217728, n);
    }
    If(e, 134217728);
  }
};
jm = function (e) {
  if (e.tag === 13) {
    var t = gr(e),
      n = Wn(e, t);
    if (n !== null) {
      var r = ht();
      on(n, e, t, r);
    }
    If(e, t);
  }
};
Wm = function () {
  return q;
};
Hm = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
kc = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Cc(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ju(r);
            if (!i) throw Error(O(90));
            _m(r), Cc(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Cm(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Ii(e, !!n.multiple, t, !1);
  }
};
km = Df;
Om = ti;
var yC = { usingClientEntryPoint: !1, Events: [Bl, wi, ju, Tm, $m, Df] },
  To = {
    findFiberByHostInstance: jr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  vC = {
    bundleType: To.bundleType,
    version: To.version,
    rendererPackageName: To.rendererPackageName,
    rendererConfig: To.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: To.findFiberByHostInstance || gC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fs.isDisabled && fs.supportsFiber)
    try {
      (Iu = fs.inject(vC)), (mn = fs);
    } catch {}
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yC;
It.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ff(t)) throw Error(O(200));
  return hC(e, t, null, n);
};
It.createRoot = function (e, t) {
  if (!Ff(e)) throw Error(O(299));
  var n = !1,
    r = '',
    i = d1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Af(e, 1, !1, null, null, n, !1, r, i)),
    (e[jn] = t.current),
    ml(e.nodeType === 8 ? e.parentNode : e),
    new zf(t)
  );
};
It.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(O(188))
      : ((e = Object.keys(e).join(',')), Error(O(268, e)));
  return (e = Mm(t)), (e = e === null ? null : e.stateNode), e;
};
It.flushSync = function (e) {
  return ti(e);
};
It.hydrate = function (e, t, n) {
  if (!Ju(t)) throw Error(O(200));
  return Xu(null, e, t, !0, n);
};
It.hydrateRoot = function (e, t, n) {
  if (!Ff(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    l = d1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = c1(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[jn] = t.current),
    ml(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Qu(t);
};
It.render = function (e, t, n) {
  if (!Ju(t)) throw Error(O(200));
  return Xu(null, e, t, !1, n);
};
It.unmountComponentAtNode = function (e) {
  if (!Ju(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (ti(function () {
        Xu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[jn] = null);
        });
      }),
      !0)
    : !1;
};
It.unstable_batchedUpdates = Df;
It.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ju(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Xu(e, t, n, !1, r);
};
It.version = '18.2.0-next-9e3b772b8-20220608';
function f1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1);
    } catch (e) {
      console.error(e);
    }
}
f1(), (cm.exports = It);
var Wl = cm.exports,
  p1,
  Bh = Wl;
(p1 = Bh.createRoot), Bh.hydrateRoot;
var _C = Object.defineProperty,
  xC = (e, t, n) =>
    t in e
      ? _C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ps = (e, t, n) => (xC(e, typeof t != 'symbol' ? t + '' : t, n), n);
const CC = { stringify: (e) => e, parse: (e) => e },
  SC = { stringify: (e) => `${e}`, parse: (e) => parseFloat(e) },
  EC = {
    stringify: (e) => (e ? 'true' : 'false'),
    parse: (e) => /^[ty1-9]/i.test(e),
  },
  NC = {
    stringify: (e) => e.name,
    parse: (e, t) => {
      const n = (() => {
        if (typeof window < 'u' && e in window) return window[e];
        if (typeof global < 'u' && e in global) return global[e];
      })();
      return typeof n == 'function' ? n.bind(t) : void 0;
    },
  },
  wC = { stringify: (e) => JSON.stringify(e), parse: (e) => JSON.parse(e) },
  Ga = { string: CC, number: SC, boolean: EC, function: NC, json: wC },
  Qa = Symbol.for('r2wc.render'),
  hs = Symbol.for('r2wc.connected'),
  Dr = Symbol.for('r2wc.context'),
  Xn = Symbol.for('r2wc.props');
function TC(e, t, n) {
  var r, i, o;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []);
  const l = (
      Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props)
    ).filter((c) => c !== 'container'),
    s = {},
    u = {},
    a = {};
  for (const c of l) {
    s[c] = Array.isArray(t.props) ? 'string' : t.props[c];
    const p = $C(c);
    (u[c] = p), (a[p] = c);
  }
  class d extends HTMLElement {
    constructor() {
      super(),
        ps(this, r, !0),
        ps(this, i),
        ps(this, o, {}),
        ps(this, 'container'),
        t.shadow
          ? (this.container = this.attachShadow({ mode: t.shadow }))
          : (this.container = this),
        (this[Xn].container = this.container);
      for (const p of l) {
        const f = u[p],
          h = this.getAttribute(f),
          y = s[p],
          _ = Ga[y];
        h && _ != null && _.parse && (this[Xn][p] = _.parse(h, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(a);
    }
    connectedCallback() {
      (this[hs] = !0), this[Qa]();
    }
    disconnectedCallback() {
      (this[hs] = !1), this[Dr] && n.unmount(this[Dr]), delete this[Dr];
    }
    attributeChangedCallback(p, f, h) {
      const y = a[p],
        _ = s[y],
        g = Ga[_];
      y in s &&
        g != null &&
        g.parse &&
        ((this[Xn][y] = g.parse(h, this)), this[Qa]());
    }
    [((r = hs), (i = Dr), (o = Xn), Qa)]() {
      this[hs] &&
        (this[Dr]
          ? n.update(this[Dr], this[Xn])
          : (this[Dr] = n.mount(this.container, e, this[Xn])));
    }
  }
  for (const c of l) {
    const p = u[c],
      f = s[c];
    Object.defineProperty(d.prototype, c, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Xn][c];
      },
      set(h) {
        this[Xn][c] = h;
        const y = Ga[f];
        if (y != null && y.stringify) {
          const _ = y.stringify(h);
          this.getAttribute(p) !== _ && this.setAttribute(p, _);
        }
      },
    });
  }
  return d;
}
function $C(e = '') {
  return e.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
function kC(e, t, n) {
  const r = p1(e),
    i = K.createElement(t, n);
  return r.render(i), { root: r, ReactComponent: t };
}
function OC({ root: e, ReactComponent: t }, n) {
  const r = K.createElement(t, n);
  e.render(r);
}
function RC({ root: e }) {
  e.unmount();
}
function DC(e, t = {}) {
  return TC(e, t, { mount: kC, update: OC, unmount: RC });
}
var h1 = { exports: {} },
  Zu = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var MC = R,
  PC = Symbol.for('react.element'),
  LC = Symbol.for('react.fragment'),
  AC = Object.prototype.hasOwnProperty,
  IC = MC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zC = { key: !0, ref: !0, __self: !0, __source: !0 };
function g1(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) AC.call(t, r) && !zC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: PC,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: IC.current,
  };
}
Zu.Fragment = LC;
Zu.jsx = g1;
Zu.jsxs = g1;
h1.exports = Zu;
var E = h1.exports,
  xt = function () {
    return (
      (xt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      xt.apply(this, arguments)
    );
  };
function yu(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var ce = '-ms-',
  Xo = '-moz-',
  Z = '-webkit-',
  m1 = 'comm',
  qu = 'rule',
  Bf = 'decl',
  FC = '@import',
  y1 = '@keyframes',
  BC = '@layer',
  jC = Math.abs,
  jf = String.fromCharCode,
  sd = Object.assign;
function WC(e, t) {
  return Ie(e, 0) ^ 45
    ? (((((((t << 2) ^ Ie(e, 0)) << 2) ^ Ie(e, 1)) << 2) ^ Ie(e, 2)) << 2) ^
        Ie(e, 3)
    : 0;
}
function v1(e) {
  return e.trim();
}
function Rn(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function U(e, t, n) {
  return e.replace(t, n);
}
function zs(e, t) {
  return e.indexOf(t);
}
function Ie(e, t) {
  return e.charCodeAt(t) | 0;
}
function qi(e, t, n) {
  return e.slice(t, n);
}
function pn(e) {
  return e.length;
}
function _1(e) {
  return e.length;
}
function Lo(e, t) {
  return t.push(e), e;
}
function HC(e, t) {
  return e.map(t).join('');
}
function jh(e, t) {
  return e.filter(function (n) {
    return !Rn(n, t);
  });
}
var bu = 1,
  bi = 1,
  x1 = 0,
  Zt = 0,
  Te = 0,
  uo = '';
function ea(e, t, n, r, i, o, l, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: bu,
    column: bi,
    length: l,
    return: '',
    siblings: s,
  };
}
function qn(e, t) {
  return sd(
    ea('', null, null, '', null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function pi(e) {
  for (; e.root; ) e = qn(e.root, { children: [e] });
  Lo(e, e.siblings);
}
function UC() {
  return Te;
}
function KC() {
  return (
    (Te = Zt > 0 ? Ie(uo, --Zt) : 0), bi--, Te === 10 && ((bi = 1), bu--), Te
  );
}
function ln() {
  return (
    (Te = Zt < x1 ? Ie(uo, Zt++) : 0), bi++, Te === 10 && ((bi = 1), bu++), Te
  );
}
function Yr() {
  return Ie(uo, Zt);
}
function Fs() {
  return Zt;
}
function ta(e, t) {
  return qi(uo, e, t);
}
function ud(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function VC(e) {
  return (bu = bi = 1), (x1 = pn((uo = e))), (Zt = 0), [];
}
function YC(e) {
  return (uo = ''), e;
}
function Ja(e) {
  return v1(ta(Zt - 1, ad(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function GC(e) {
  for (; (Te = Yr()) && Te < 33; ) ln();
  return ud(e) > 2 || ud(Te) > 3 ? '' : ' ';
}
function QC(e, t) {
  for (
    ;
    --t &&
    ln() &&
    !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97));

  );
  return ta(e, Fs() + (t < 6 && Yr() == 32 && ln() == 32));
}
function ad(e) {
  for (; ln(); )
    switch (Te) {
      case e:
        return Zt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ad(Te);
        break;
      case 40:
        e === 41 && ad(e);
        break;
      case 92:
        ln();
        break;
    }
  return Zt;
}
function JC(e, t) {
  for (; ln() && e + Te !== 47 + 10; )
    if (e + Te === 42 + 42 && Yr() === 47) break;
  return '/*' + ta(t, Zt - 1) + '*' + jf(e === 47 ? e : ln());
}
function XC(e) {
  for (; !ud(Yr()); ) ln();
  return ta(e, Zt);
}
function ZC(e) {
  return YC(Bs('', null, null, null, [''], (e = VC(e)), 0, [0], e));
}
function Bs(e, t, n, r, i, o, l, s, u) {
  for (
    var a = 0,
      d = 0,
      c = l,
      p = 0,
      f = 0,
      h = 0,
      y = 1,
      _ = 1,
      g = 1,
      m = 0,
      v = '',
      x = i,
      S = o,
      T = r,
      w = v;
    _;

  )
    switch (((h = m), (m = ln()))) {
      case 40:
        if (h != 108 && Ie(w, c - 1) == 58) {
          zs((w += U(Ja(m), '&', '&\f')), '&\f') != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Ja(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += GC(h);
        break;
      case 92:
        w += QC(Fs() - 1, 7);
        continue;
      case 47:
        switch (Yr()) {
          case 42:
          case 47:
            Lo(qC(JC(ln(), Fs()), t, n, u), u);
            break;
          default:
            w += '/';
        }
        break;
      case 123 * y:
        s[a++] = pn(w) * g;
      case 125 * y:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            _ = 0;
          case 59 + d:
            g == -1 && (w = U(w, /\f/g, '')),
              f > 0 &&
                pn(w) - c &&
                Lo(
                  f > 32
                    ? Hh(w + ';', r, n, c - 1, u)
                    : Hh(U(w, ' ', '') + ';', r, n, c - 2, u),
                  u
                );
            break;
          case 59:
            w += ';';
          default:
            if (
              (Lo(
                (T = Wh(w, t, n, a, d, i, s, v, (x = []), (S = []), c, o)),
                o
              ),
              m === 123)
            )
              if (d === 0) Bs(w, t, T, T, x, o, c, s, S);
              else
                switch (p === 99 && Ie(w, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Bs(
                      e,
                      T,
                      T,
                      r && Lo(Wh(e, T, T, 0, 0, i, s, v, i, (x = []), c, S), S),
                      i,
                      S,
                      c,
                      s,
                      r ? x : S
                    );
                    break;
                  default:
                    Bs(w, T, T, T, [''], S, 0, s, S);
                }
        }
        (a = d = f = 0), (y = g = 1), (v = w = ''), (c = l);
        break;
      case 58:
        (c = 1 + pn(w)), (f = h);
      default:
        if (y < 1) {
          if (m == 123) --y;
          else if (m == 125 && y++ == 0 && KC() == 125) continue;
        }
        switch (((w += jf(m)), m * y)) {
          case 38:
            g = d > 0 ? 1 : ((w += '\f'), -1);
            break;
          case 44:
            (s[a++] = (pn(w) - 1) * g), (g = 1);
            break;
          case 64:
            Yr() === 45 && (w += Ja(ln())),
              (p = Yr()),
              (d = c = pn((v = w += XC(Fs())))),
              m++;
            break;
          case 45:
            h === 45 && pn(w) == 2 && (y = 0);
        }
    }
  return o;
}
function Wh(e, t, n, r, i, o, l, s, u, a, d, c) {
  for (
    var p = i - 1, f = i === 0 ? o : [''], h = _1(f), y = 0, _ = 0, g = 0;
    y < r;
    ++y
  )
    for (var m = 0, v = qi(e, p + 1, (p = jC((_ = l[y])))), x = e; m < h; ++m)
      (x = v1(_ > 0 ? f[m] + ' ' + v : U(v, /&\f/g, f[m]))) && (u[g++] = x);
  return ea(e, t, n, i === 0 ? qu : s, u, a, d, c);
}
function qC(e, t, n, r) {
  return ea(e, t, n, m1, jf(UC()), qi(e, 2, -2), 0, r);
}
function Hh(e, t, n, r, i) {
  return ea(e, t, n, Bf, qi(e, 0, r), qi(e, r + 1, -1), r, i);
}
function C1(e, t, n) {
  switch (WC(e, t)) {
    case 5103:
      return Z + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Z + e + e;
    case 4789:
      return Xo + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Z + e + Xo + e + ce + e + e;
    case 5936:
      switch (Ie(e, t + 11)) {
        case 114:
          return Z + e + ce + U(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return Z + e + ce + U(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return Z + e + ce + U(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return Z + e + ce + e + e;
    case 6165:
      return Z + e + ce + 'flex-' + e + e;
    case 5187:
      return (
        Z + e + U(e, /(\w+).+(:[^]+)/, Z + 'box-$1$2' + ce + 'flex-$1$2') + e
      );
    case 5443:
      return (
        Z +
        e +
        ce +
        'flex-item-' +
        U(e, /flex-|-self/g, '') +
        (Rn(e, /flex-|baseline/)
          ? ''
          : ce + 'grid-row-' + U(e, /flex-|-self/g, '')) +
        e
      );
    case 4675:
      return (
        Z +
        e +
        ce +
        'flex-line-pack' +
        U(e, /align-content|flex-|-self/g, '') +
        e
      );
    case 5548:
      return Z + e + ce + U(e, 'shrink', 'negative') + e;
    case 5292:
      return Z + e + ce + U(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        Z +
        'box-' +
        U(e, '-grow', '') +
        Z +
        e +
        ce +
        U(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return Z + U(e, /([^-])(transform)/g, '$1' + Z + '$2') + e;
    case 6187:
      return (
        U(U(U(e, /(zoom-|grab)/, Z + '$1'), /(image-set)/, Z + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return U(e, /(image-set\([^]*)/, Z + '$1$`$1');
    case 4968:
      return (
        U(
          U(e, /(.+:)(flex-)?(.*)/, Z + 'box-pack:$3' + ce + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        Z +
        e +
        e
      );
    case 4200:
      if (!Rn(e, /flex-|baseline/))
        return ce + 'grid-column-align' + qi(e, t) + e;
      break;
    case 2592:
    case 3360:
      return ce + U(e, 'template-', '') + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Rn(r.props, /grid-\w+-end/);
        })
        ? ~zs(e + (n = n[t].value), 'span')
          ? e
          : ce +
            U(e, '-start', '') +
            e +
            ce +
            'grid-row-span:' +
            (~zs(n, 'span') ? Rn(n, /\d+/) : +Rn(n, /\d+/) - +Rn(e, /\d+/)) +
            ';'
        : ce + U(e, '-start', '') + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Rn(r.props, /grid-\w+-start/);
        })
        ? e
        : ce + U(U(e, '-end', '-span'), 'span ', '') + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return U(e, /(.+)-inline(.+)/, Z + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (pn(e) - 1 - t > 6)
        switch (Ie(e, t + 1)) {
          case 109:
            if (Ie(e, t + 4) !== 45) break;
          case 102:
            return (
              U(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  Z +
                  '$2-$3$1' +
                  Xo +
                  (Ie(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~zs(e, 'stretch')
              ? C1(U(e, 'stretch', 'fill-available'), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return U(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, l, s, u, a) {
          return (
            ce +
            i +
            ':' +
            o +
            a +
            (l ? ce + i + '-span:' + (s ? u : +u - +o) + a : '') +
            e
          );
        }
      );
    case 4949:
      if (Ie(e, t + 6) === 121) return U(e, ':', ':' + Z) + e;
      break;
    case 6444:
      switch (Ie(e, Ie(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            U(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                Z +
                (Ie(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                Z +
                '$2$3$1' +
                ce +
                '$2box$3'
            ) + e
          );
        case 100:
          return U(e, ':', ':' + ce) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return U(e, 'scroll-', 'scroll-snap-') + e;
  }
  return e;
}
function vu(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
  return n;
}
function bC(e, t, n, r) {
  switch (e.type) {
    case BC:
      if (e.children.length) break;
    case FC:
    case Bf:
      return (e.return = e.return || e.value);
    case m1:
      return '';
    case y1:
      return (e.return = e.value + '{' + vu(e.children, r) + '}');
    case qu:
      if (!pn((e.value = e.props.join(',')))) return '';
  }
  return pn((n = vu(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function eS(e) {
  var t = _1(e);
  return function (n, r, i, o) {
    for (var l = '', s = 0; s < t; s++) l += e[s](n, r, i, o) || '';
    return l;
  };
}
function tS(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function nS(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Bf:
        e.return = C1(e.value, e.length, n);
        return;
      case y1:
        return vu([qn(e, { value: U(e.value, '@', '@' + Z) })], r);
      case qu:
        if (e.length)
          return HC((n = e.props), function (i) {
            switch (Rn(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                pi(qn(e, { props: [U(i, /:(read-\w+)/, ':' + Xo + '$1')] })),
                  pi(qn(e, { props: [i] })),
                  sd(e, { props: jh(n, r) });
                break;
              case '::placeholder':
                pi(
                  qn(e, { props: [U(i, /:(plac\w+)/, ':' + Z + 'input-$1')] })
                ),
                  pi(qn(e, { props: [U(i, /:(plac\w+)/, ':' + Xo + '$1')] })),
                  pi(qn(e, { props: [U(i, /:(plac\w+)/, ce + 'input-$1')] })),
                  pi(qn(e, { props: [i] })),
                  sd(e, { props: jh(n, r) });
                break;
            }
            return '';
          });
    }
}
var rS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  eo =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  Wf = typeof window < 'u' && 'HTMLElement' in window,
  iS = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
    ? SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < 'u' &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== '' &&
      {}.SC_DISABLE_SPEEDY !== 'false' &&
      {}.SC_DISABLE_SPEEDY),
  na = Object.freeze([]),
  to = Object.freeze({});
function oS(e, t, n) {
  return (
    n === void 0 && (n = to), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var S1 = new Set([
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'u',
    'ul',
    'use',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]),
  lS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  sS = /(^-|-$)/g;
function Uh(e) {
  return e.replace(lS, '-').replace(sS, '');
}
var uS = /(a)(d)/gi,
  Kh = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function cd(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Kh(t % 52) + n;
  return (Kh(t % 52) + n).replace(uS, '$1-$2');
}
var Xa,
  Mi = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  E1 = function (e) {
    return Mi(5381, e);
  };
function aS(e) {
  return cd(E1(e) >>> 0);
}
function cS(e) {
  return e.displayName || e.name || 'Component';
}
function Za(e) {
  return typeof e == 'string' && !0;
}
var N1 = typeof Symbol == 'function' && Symbol.for,
  w1 = N1 ? Symbol.for('react.memo') : 60115,
  dS = N1 ? Symbol.for('react.forward_ref') : 60112,
  fS = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  pS = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  T1 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  hS =
    (((Xa = {})[dS] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Xa[w1] = T1),
    Xa);
function Vh(e) {
  return ('type' in (t = e) && t.type.$$typeof) === w1
    ? T1
    : '$$typeof' in e
    ? hS[e.$$typeof]
    : fS;
  var t;
}
var gS = Object.defineProperty,
  mS = Object.getOwnPropertyNames,
  Yh = Object.getOwnPropertySymbols,
  yS = Object.getOwnPropertyDescriptor,
  vS = Object.getPrototypeOf,
  Gh = Object.prototype;
function $1(e, t, n) {
  if (typeof t != 'string') {
    if (Gh) {
      var r = vS(t);
      r && r !== Gh && $1(e, r, n);
    }
    var i = mS(t);
    Yh && (i = i.concat(Yh(t)));
    for (var o = Vh(e), l = Vh(t), s = 0; s < i.length; ++s) {
      var u = i[s];
      if (!(u in pS || (n && n[u]) || (l && u in l) || (o && u in o))) {
        var a = yS(t, u);
        try {
          gS(e, u, a);
        } catch {}
      }
    }
  }
  return e;
}
function no(e) {
  return typeof e == 'function';
}
function Hf(e) {
  return typeof e == 'object' && 'styledComponentId' in e;
}
function Ur(e, t) {
  return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
}
function Qh(e, t) {
  if (e.length === 0) return '';
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function wl(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    e.constructor.name === Object.name &&
    !('props' in e && e.$$typeof)
  );
}
function dd(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !wl(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = dd(e[r], t[r]);
  else if (wl(t)) for (var r in t) e[r] = dd(e[r], t[r]);
  return e;
}
function Uf(e, t) {
  Object.defineProperty(e, 'toString', { value: t });
}
function Hl(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
      .concat(e, ' for more information.')
      .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : '')
  );
}
var _S = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw Hl(16, ''.concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var l = i; l < o; l++) this.groupSizes[l] = 0;
        }
        for (
          var s = this.indexOfGroup(t + 1), u = ((l = 0), n.length);
          l < u;
          l++
        )
          this.tag.insertRule(s, n[l]) && (this.groupSizes[t]++, s++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = '';
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            l = i;
          l < o;
          l++
        )
          n += ''.concat(this.tag.getRule(l)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  js = new Map(),
  _u = new Map(),
  qa = 1,
  gs = function (e) {
    if (js.has(e)) return js.get(e);
    for (; _u.has(qa); ) qa++;
    var t = qa++;
    return js.set(e, t), _u.set(t, e), t;
  },
  xS = function (e, t) {
    js.set(e, t), _u.set(t, e);
  },
  CS = 'style['
    .concat(eo, '][')
    .concat('data-styled-version', '="')
    .concat('6.0.8', '"]'),
  SS = new RegExp(
    '^'.concat(eo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  ES = function (e, t, n) {
    for (var r, i = n.split(','), o = 0, l = i.length; o < l; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  NS = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : '')
          .split(`/*!sc*/
`),
        i = [],
        o = 0,
        l = r.length;
      o < l;
      o++
    ) {
      var s = r[o].trim();
      if (s) {
        var u = s.match(SS);
        if (u) {
          var a = 0 | parseInt(u[1], 10),
            d = u[2];
          a !== 0 && (xS(d, a), ES(e, d, u[3]), e.getTag().insertRules(a, i)),
            (i.length = 0);
        } else i.push(s);
      }
    }
  };
function wS() {
  return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
}
var k1 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      i = (function (s) {
        var u = Array.from(s.querySelectorAll('style['.concat(eo, ']')));
        return u[u.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(eo, 'active'),
      r.setAttribute('data-styled-version', '6.0.8');
    var l = wS();
    return l && r.setAttribute('nonce', l), n.insertBefore(r, o), r;
  },
  TS = (function () {
    function e(t) {
      (this.element = k1(t)),
        this.element.appendChild(document.createTextNode('')),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var l = r[i];
            if (l.ownerNode === n) return l;
          }
          throw Hl(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : '';
      }),
      e
    );
  })(),
  $S = (function () {
    function e(t) {
      (this.element = k1(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : '';
      }),
      e
    );
  })(),
  kS = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : '';
      }),
      e
    );
  })(),
  Jh = Wf,
  OS = { isServer: !Wf, useCSSOMInjection: !iS },
  O1 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = to), n === void 0 && (n = {});
      var i = this;
      (this.options = xt(xt({}, OS), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Wf &&
          Jh &&
          ((Jh = !1),
          (function (o) {
            for (
              var l = document.querySelectorAll(CS), s = 0, u = l.length;
              s < u;
              s++
            ) {
              var a = l[s];
              a &&
                a.getAttribute(eo) !== 'active' &&
                (NS(o, a), a.parentNode && a.parentNode.removeChild(a));
            }
          })(this)),
        Uf(this, function () {
          return (function (o) {
            for (
              var l = o.getTag(),
                s = l.length,
                u = '',
                a = function (c) {
                  var p = (function (g) {
                    return _u.get(g);
                  })(c);
                  if (p === void 0) return 'continue';
                  var f = o.names.get(p),
                    h = l.getGroup(c);
                  if (f === void 0 || h.length === 0) return 'continue';
                  var y = ''
                      .concat(eo, '.g')
                      .concat(c, '[id="')
                      .concat(p, '"]'),
                    _ = '';
                  f !== void 0 &&
                    f.forEach(function (g) {
                      g.length > 0 && (_ += ''.concat(g, ','));
                    }),
                    (u += ''.concat(h).concat(y, '{content:"').concat(_, '"}')
                      .concat(`/*!sc*/
`));
                },
                d = 0;
              d < s;
              d++
            )
              a(d);
            return u;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return gs(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            xt(xt({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new kS(i) : r ? new TS(i) : new $S(i);
            })(this.options)),
            new _S(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((gs(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(gs(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(gs(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  RS = /&/g,
  DS = /^\s*\/\/.*$/gm;
function R1(e, t) {
  return e.map(function (n) {
    return (
      n.type === 'rule' &&
        ((n.value = ''.concat(t, ' ').concat(n.value)),
        (n.value = n.value.replaceAll(',', ','.concat(t, ' '))),
        (n.props = n.props.map(function (r) {
          return ''.concat(t, ' ').concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== '@keyframes' &&
        (n.children = R1(n.children, t)),
      n
    );
  });
}
function MS(e) {
  var t,
    n,
    r,
    i = e === void 0 ? to : e,
    o = i.options,
    l = o === void 0 ? to : o,
    s = i.plugins,
    u = s === void 0 ? na : s,
    a = function (p, f, h) {
      return h === n ||
        (h.startsWith(n) && h.endsWith(n) && h.replaceAll(n, '').length > 0)
        ? '.'.concat(t)
        : p;
    },
    d = u.slice();
  d.push(function (p) {
    p.type === qu &&
      p.value.includes('&') &&
      (p.props[0] = p.props[0].replace(RS, n).replace(r, a));
  }),
    l.prefix && d.push(nS),
    d.push(bC);
  var c = function (p, f, h, y) {
    f === void 0 && (f = ''),
      h === void 0 && (h = ''),
      y === void 0 && (y = '&'),
      (t = y),
      (n = f),
      (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
    var _ = p.replace(DS, ''),
      g = ZC(h || f ? ''.concat(h, ' ').concat(f, ' { ').concat(_, ' }') : _);
    l.namespace && (g = R1(g, l.namespace));
    var m = [];
    return (
      vu(
        g,
        eS(
          d.concat(
            tS(function (v) {
              return m.push(v);
            })
          )
        )
      ),
      m
    );
  };
  return (
    (c.hash = u.length
      ? u
          .reduce(function (p, f) {
            return f.name || Hl(15), Mi(p, f.name);
          }, 5381)
          .toString()
      : ''),
    c
  );
}
var PS = new O1(),
  fd = MS(),
  D1 = K.createContext({
    shouldForwardProp: void 0,
    styleSheet: PS,
    stylis: fd,
  });
D1.Consumer;
K.createContext(void 0);
function Xh() {
  return R.useContext(D1);
}
var LS = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = fd);
        var l = r.name + o.hash;
        i.hasNameForId(r.id, l) ||
          i.insertRules(r.id, l, o(r.rules, l, '@keyframes'));
      }),
        (this.name = t),
        (this.id = 'sc-keyframes-'.concat(t)),
        (this.rules = n),
        Uf(this, function () {
          throw Hl(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = fd), this.name + t.hash;
      }),
      e
    );
  })(),
  AS = function (e) {
    return e >= 'A' && e <= 'Z';
  };
function Zh(e) {
  for (var t = '', n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === '-' && e[0] === '-') return e;
    AS(r) ? (t += '-' + r.toLowerCase()) : (t += r);
  }
  return t.startsWith('ms-') ? '-' + t : t;
}
var M1 = function (e) {
    return e == null || e === !1 || e === '';
  },
  P1 = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !M1(o) &&
        ((Array.isArray(o) && o.isCss) || no(o)
          ? r.push(''.concat(Zh(i), ':'), o, ';')
          : wl(o)
          ? r.push.apply(r, yu(yu([''.concat(i, ' {')], P1(o), !1), ['}'], !1))
          : r.push(
              ''
                .concat(Zh(i), ': ')
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == 'boolean' || n === ''
                    ? ''
                    : typeof n != 'number' ||
                      n === 0 ||
                      t in rS ||
                      t.startsWith('--')
                    ? String(n).trim()
                    : ''.concat(n, 'px')),
                  ';'
                )
            ));
    }
    return r;
  };
function Gr(e, t, n, r) {
  if (M1(e)) return [];
  if (Hf(e)) return ['.'.concat(e.styledComponentId)];
  if (no(e)) {
    if (!no((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return Gr(i, t, n, r);
  }
  var o;
  return e instanceof LS
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : wl(e)
    ? P1(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        na,
        e.map(function (l) {
          return Gr(l, t, n, r);
        })
      )
    : [e.toString()];
}
function IS(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (no(n) && !Hf(n)) return !1;
  }
  return !0;
}
var zS = E1('6.0.8'),
  FS = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && IS(t)),
        (this.componentId = n),
        (this.baseHash = Mi(zS, n)),
        (this.baseStyle = r),
        O1.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : '';
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = Ur(i, this.staticRulesId);
          else {
            var o = Qh(Gr(this.rules, t, n, r)),
              l = cd(Mi(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, l)) {
              var s = r(o, '.'.concat(l), void 0, this.componentId);
              n.insertRules(this.componentId, l, s);
            }
            (i = Ur(i, l)), (this.staticRulesId = l);
          }
        else {
          for (
            var u = Mi(this.baseHash, r.hash), a = '', d = 0;
            d < this.rules.length;
            d++
          ) {
            var c = this.rules[d];
            if (typeof c == 'string') a += c;
            else if (c) {
              var p = Qh(Gr(c, t, n, r));
              (u = Mi(u, p + d)), (a += p);
            }
          }
          if (a) {
            var f = cd(u >>> 0);
            n.hasNameForId(this.componentId, f) ||
              n.insertRules(
                this.componentId,
                f,
                r(a, '.'.concat(f), void 0, this.componentId)
              ),
              (i = Ur(i, f));
          }
        }
        return i;
      }),
      e
    );
  })(),
  L1 = K.createContext(void 0);
L1.Consumer;
var ba = {};
function BS(e, t, n) {
  var r = Hf(e),
    i = e,
    o = !Za(e),
    l = t.attrs,
    s = l === void 0 ? na : l,
    u = t.componentId,
    a =
      u === void 0
        ? (function (v, x) {
            var S = typeof v != 'string' ? 'sc' : Uh(v);
            ba[S] = (ba[S] || 0) + 1;
            var T = ''.concat(S, '-').concat(aS('6.0.8' + S + ba[S]));
            return x ? ''.concat(x, '-').concat(T) : T;
          })(t.displayName, t.parentComponentId)
        : u,
    d = t.displayName;
  d === void 0 &&
    (function (v) {
      return Za(v) ? 'styled.'.concat(v) : 'Styled('.concat(cS(v), ')');
    })(e);
  var c =
      t.displayName && t.componentId
        ? ''.concat(Uh(t.displayName), '-').concat(t.componentId)
        : t.componentId || a,
    p = r && i.attrs ? i.attrs.concat(s).filter(Boolean) : s,
    f = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var h = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var y = t.shouldForwardProp;
      f = function (v, x) {
        return h(v, x) && y(v, x);
      };
    } else f = h;
  }
  var _ = new FS(n, c, r ? i.componentStyle : void 0);
  function g(v, x) {
    return (function (S, T, w) {
      var k = S.attrs,
        V = S.componentStyle,
        z = S.defaultProps,
        Q = S.foldedComponentIds,
        ee = S.styledComponentId,
        te = S.target,
        ne = K.useContext(L1),
        Me = Xh(),
        re = S.shouldForwardProp || Me.shouldForwardProp,
        se = (function (nt, Pe, Ft) {
          for (
            var rt,
              Qe = xt(xt({}, Pe), { className: void 0, theme: Ft }),
              kr = 0;
            kr < nt.length;
            kr += 1
          ) {
            var Tn = no((rt = nt[kr])) ? rt(Qe) : rt;
            for (var $t in Tn)
              Qe[$t] =
                $t === 'className'
                  ? Ur(Qe[$t], Tn[$t])
                  : $t === 'style'
                  ? xt(xt({}, Qe[$t]), Tn[$t])
                  : Tn[$t];
          }
          return (
            Pe.className && (Qe.className = Ur(Qe.className, Pe.className)), Qe
          );
        })(k, T, oS(T, ne, z) || to),
        D = se.as || te,
        F = {};
      for (var B in se)
        se[B] === void 0 ||
          B[0] === '$' ||
          B === 'as' ||
          B === 'theme' ||
          (B === 'forwardedAs'
            ? (F.as = se.forwardedAs)
            : (re && !re(B, D)) || (F[B] = se[B]));
      var b = (function (nt, Pe) {
          var Ft = Xh(),
            rt = nt.generateAndInjectStyles(Pe, Ft.styleSheet, Ft.stylis);
          return rt;
        })(V, se),
        ue = Ur(Q, ee);
      return (
        b && (ue += ' ' + b),
        se.className && (ue += ' ' + se.className),
        (F[Za(D) && !S1.has(D) ? 'class' : 'className'] = ue),
        (F.ref = w),
        R.createElement(D, F)
      );
    })(m, v, x);
  }
  var m = K.forwardRef(g);
  return (
    (m.attrs = p),
    (m.componentStyle = _),
    (m.shouldForwardProp = f),
    (m.foldedComponentIds = r
      ? Ur(i.foldedComponentIds, i.styledComponentId)
      : ''),
    (m.styledComponentId = c),
    (m.target = r ? i.target : e),
    Object.defineProperty(m, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (v) {
        this._foldedDefaultProps = r
          ? (function (x) {
              for (var S = [], T = 1; T < arguments.length; T++)
                S[T - 1] = arguments[T];
              for (var w = 0, k = S; w < k.length; w++) dd(x, k[w], !0);
              return x;
            })({}, i.defaultProps, v)
          : v;
      },
    }),
    Uf(m, function () {
      return '.'.concat(m.styledComponentId);
    }),
    o &&
      $1(m, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    m
  );
}
function qh(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var bh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function jS(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (no(e) || wl(e)) {
    var r = e;
    return bh(Gr(qh(na, yu([r], t, !0))));
  }
  var i = e;
  return t.length === 0 && i.length === 1 && typeof i[0] == 'string'
    ? Gr(i)
    : bh(Gr(qh(i, t)));
}
function pd(e, t, n) {
  if ((n === void 0 && (n = to), !t)) throw Hl(1, t);
  var r = function (i) {
    for (var o = [], l = 1; l < arguments.length; l++) o[l - 1] = arguments[l];
    return e(t, n, jS.apply(void 0, yu([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return pd(
        e,
        t,
        xt(xt({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return pd(e, t, xt(xt({}, n), i));
    }),
    r
  );
}
var A1 = function (e) {
    return pd(BS, e);
  },
  Cn = A1;
S1.forEach(function (e) {
  Cn[e] = A1(e);
});
var Sn = {},
  Kn = {},
  Kf = {},
  He = {},
  N = {};
let ra = {},
  I1 = {},
  Tl = {},
  Zo = {},
  hd = {},
  Hi = {},
  Vf = {},
  gd = {},
  $l = {},
  kl = {},
  lr = {},
  Yf = {},
  Gf = {},
  z1 = {},
  F1 = {},
  B1 = {},
  j1 = {},
  W1 = {},
  H1 = {},
  U1 = {},
  xu = {},
  K1 = {},
  V1 = {},
  Y1 = {},
  G1 = {},
  Q1 = {},
  J1 = {},
  X1 = {},
  Z1 = {},
  q1 = {},
  Qf = {},
  Jf = {},
  md = {},
  b1 = {},
  ey = {},
  ty = {};
function M(e) {
  let t = new URLSearchParams();
  t.append('code', e);
  for (let n = 1; n < arguments.length; n++) t.append('v', arguments[n]);
  throw Error(
    `Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
let Vn =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  WS = Vn && 'documentMode' in document ? document.documentMode : null,
  Ze = Vn && /Mac|iPod|iPhone|iPad/.test(navigator.platform),
  xr = Vn && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
  Cu =
    Vn && 'InputEvent' in window && !WS
      ? 'getTargetRanges' in new window.InputEvent('input')
      : !1,
  Xf = Vn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
  ia = Vn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  HS = Vn && /^(?=.*Chrome).*/i.test(navigator.userAgent),
  Zf = Vn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !HS,
  oa = Xf || ia || Zf ? ' ' : '​',
  US = xr ? ' ' : oa,
  KS =
    /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/,
  VS =
    /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
  Qr = {
    bold: 1,
    code: 16,
    highlight: 128,
    italic: 2,
    strikethrough: 4,
    subscript: 32,
    superscript: 64,
    underline: 8,
  },
  YS = { directionless: 1, unmergeable: 2 },
  eg = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 },
  GS = {
    2: 'center',
    6: 'end',
    4: 'justify',
    1: 'left',
    3: 'right',
    5: 'start',
  },
  QS = { normal: 0, segmented: 2, token: 1 },
  JS = { 0: 'normal', 2: 'segmented', 1: 'token' },
  yd = !1,
  qf = 0;
function XS(e) {
  qf = e.timeStamp;
}
function ec(e, t, n) {
  return t.__lexicalLineBreak === e || e[`__lexicalKey_${n._key}`] !== void 0;
}
function ZS(e) {
  return e.getEditorState().read(() => {
    let t = fe();
    return t !== null ? t.clone() : null;
  });
}
function ny(e, t, n) {
  yd = !0;
  let r = 100 < performance.now() - qf;
  try {
    At(e, () => {
      let i = fe() || ZS(e);
      var o = new Map(),
        l = e.getRootElement(),
        s = e._editorState,
        u = e._blockCursorElement;
      let a = !1,
        d = '';
      for (var c = 0; c < t.length; c++) {
        var p = t[c],
          f = p.type,
          h = p.target,
          y = Kl(h, s);
        if (!((y === null && h !== l) || de(y))) {
          if (f === 'characterData') {
            if ((p = r && L(y)))
              e: {
                (p = i), (f = h);
                var _ = y;
                if (W(p)) {
                  var g = p.anchor.getNode();
                  if (g.is(_) && p.format !== g.getFormat()) {
                    p = !1;
                    break e;
                  }
                }
                p = f.nodeType === 3 && _.isAttached();
              }
            p &&
              ((_ = Nn(e._window)),
              (f = p = null),
              _ !== null &&
                _.anchorNode === h &&
                ((p = _.anchorOffset), (f = _.focusOffset)),
              (h = h.nodeValue),
              h !== null && ip(y, h, p, f, !1));
          } else if (f === 'childList') {
            for (a = !0, f = p.addedNodes, _ = 0; _ < f.length; _++) {
              g = f[_];
              var m = ay(g),
                v = g.parentNode;
              v == null ||
                g === u ||
                m !== null ||
                (g.nodeName === 'BR' && ec(g, v, e)) ||
                (xr && (m = g.innerText || g.nodeValue) && (d += m),
                v.removeChild(g));
            }
            if (((p = p.removedNodes), (f = p.length), 0 < f)) {
              for (_ = 0, g = 0; g < f; g++)
                (v = p[g]),
                  ((v.nodeName === 'BR' && ec(v, h, e)) || u === v) &&
                    (h.appendChild(v), _++);
              f !== _ && (h === l && (y = s._nodeMap.get('root')), o.set(h, y));
            }
          }
        }
      }
      if (0 < o.size)
        for (let [x, S] of o)
          if ($$(S))
            for (
              o = S.getChildrenKeys(), l = x.firstChild, s = 0;
              s < o.length;
              s++
            )
              (u = e.getElementByKey(o[s])),
                u !== null &&
                  (l == null
                    ? (x.appendChild(u), (l = u))
                    : l !== u && x.replaceChild(u, l),
                  (l = l.nextSibling));
          else L(S) && S.markDirty();
      if (((o = n.takeRecords()), 0 < o.length)) {
        for (l = 0; l < o.length; l++)
          for (
            u = o[l], s = u.addedNodes, u = u.target, c = 0;
            c < s.length;
            c++
          )
            (y = s[c]),
              (h = y.parentNode),
              h == null ||
                y.nodeName !== 'BR' ||
                ec(y, u, e) ||
                h.removeChild(y);
        n.takeRecords();
      }
      i !== null &&
        (a && ((i.dirty = !0), _n(i)), xr && py(e) && i.insertRawText(d));
    });
  } finally {
    yd = !1;
  }
}
function ry(e) {
  let t = e._observer;
  if (t !== null) {
    let n = t.takeRecords();
    ny(e, n, t);
  }
}
function iy(e) {
  qf === 0 && sa(e).addEventListener('textInput', XS, !0),
    (e._observer = new MutationObserver((t, n) => {
      ny(e, t, n);
    }));
}
function tg(e, t) {
  let n = e.__mode,
    r = e.__format;
  e = e.__style;
  let i = t.__mode,
    o = t.__format;
  return (
    (t = t.__style),
    (n === null || n === i) &&
      (r === null || r === o) &&
      (e === null || e === t)
  );
}
function ng(e, t) {
  let n = e.mergeWithSibling(t),
    r = Ce()._normalizedNodes;
  return r.add(e.__key), r.add(t.__key), n;
}
function oy(e) {
  if (e.__text === '' && e.isSimpleText() && !e.isUnmergeable()) e.remove();
  else {
    for (
      var t;
      (t = e.getPreviousSibling()) !== null &&
      L(t) &&
      t.isSimpleText() &&
      !t.isUnmergeable();

    )
      if (t.__text === '') t.remove();
      else {
        tg(t, e) && (e = ng(t, e));
        break;
      }
    for (
      var n;
      (n = e.getNextSibling()) !== null &&
      L(n) &&
      n.isSimpleText() &&
      !n.isUnmergeable();

    )
      if (n.__text === '') n.remove();
      else {
        tg(e, n) && ng(e, n);
        break;
      }
  }
}
function bf(e) {
  return rg(e.anchor), rg(e.focus), e;
}
function rg(e) {
  for (; e.type === 'element'; ) {
    var t = e.getNode(),
      n = e.offset;
    if (
      (n === t.getChildrenSize()
        ? ((t = t.getChildAtIndex(n - 1)), (n = !0))
        : ((t = t.getChildAtIndex(n)), (n = !1)),
      L(t))
    ) {
      e.set(t.__key, n ? t.getTextContentSize() : 0, 'text');
      break;
    } else if (!$$(t)) break;
    e.set(t.__key, n ? t.getChildrenSize() : 0, 'element');
  }
}
let qS = 1,
  bS =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : (e) => {
          Promise.resolve().then(e);
        };
function ep(e) {
  let t = document.activeElement;
  if (t === null) return !1;
  let n = t.nodeName;
  return (
    de(Kl(e)) &&
    (n === 'INPUT' ||
      n === 'TEXTAREA' ||
      (t.contentEditable === 'true' && t.__lexicalEditor == null))
  );
}
function Ul(e, t, n) {
  let r = e.getRootElement();
  try {
    return (
      r !== null &&
      r.contains(t) &&
      r.contains(n) &&
      t !== null &&
      !ep(t) &&
      tp(t) === e
    );
  } catch {
    return !1;
  }
}
function tp(e) {
  for (; e != null; ) {
    let t = e.__lexicalEditor;
    if (t != null) return t;
    e = la(e);
  }
  return null;
}
function vd(e) {
  return e.isToken() || e.isSegmented();
}
function Su(e) {
  for (; e != null; ) {
    if (e.nodeType === 3) return e;
    e = e.firstChild;
  }
  return null;
}
function ly(e, t, n) {
  return (
    (t = Qr[t]),
    e & t && (n === null || !(n & t)) ? e ^ t : n === null || n & t ? e | t : e
  );
}
function sy(e) {
  return L(e) || Ml(e) || de(e);
}
function uy(e, t) {
  if (t != null) e.__key = t;
  else {
    dt(), 99 < Pl && M(14), (t = Ce());
    var n = wn(),
      r = '' + qS++;
    n._nodeMap.set(r, e),
      $$(e) ? t._dirtyElements.set(r, !0) : t._dirtyLeaves.add(r),
      t._cloneNotNeeded.add(r),
      (t._dirtyType = 1),
      (e.__key = r);
  }
}
function Jr(e) {
  var t = e.getParent();
  if (t !== null) {
    let i = e.getWritable();
    t = t.getWritable();
    var n = e.getPreviousSibling();
    if (((e = e.getNextSibling()), n === null))
      if (e !== null) {
        var r = e.getWritable();
        (t.__first = e.__key), (r.__prev = null);
      } else t.__first = null;
    else {
      if (((r = n.getWritable()), e !== null)) {
        let o = e.getWritable();
        (o.__prev = r.__key), (r.__next = o.__key);
      } else r.__next = null;
      i.__prev = null;
    }
    e === null
      ? n !== null
        ? ((e = n.getWritable()), (t.__last = n.__key), (e.__next = null))
        : (t.__last = null)
      : ((e = e.getWritable()),
        n !== null
          ? ((n = n.getWritable()), (n.__next = e.__key), (e.__prev = n.__key))
          : (e.__prev = null),
        (i.__next = null)),
      t.__size--,
      (i.__parent = null);
  }
}
function Eu(e) {
  99 < Pl && M(14);
  var t = e.getLatest(),
    n = t.__parent,
    r = wn();
  let i = Ce(),
    o = r._nodeMap;
  if (((r = i._dirtyElements), n !== null))
    e: for (; n !== null; ) {
      if (r.has(n)) break e;
      let l = o.get(n);
      if (l === void 0) break;
      r.set(n, !1), (n = l.__parent);
    }
  (t = t.__key),
    (i._dirtyType = 1),
    $$(e) ? r.set(t, !0) : i._dirtyLeaves.add(t);
}
function Ve(e) {
  dt();
  var t = Ce();
  let n = t._compositionKey;
  e !== n &&
    ((t._compositionKey = e),
    n !== null && ((t = ze(n)), t !== null && t.getWritable()),
    e !== null && ((e = ze(e)), e !== null && e.getWritable()));
}
function sr() {
  return ho() ? null : Ce()._compositionKey;
}
function ze(e, t) {
  return (e = (t || wn())._nodeMap.get(e)), e === void 0 ? null : e;
}
function ay(e, t) {
  let n = Ce();
  return (e = e[`__lexicalKey_${n._key}`]), e !== void 0 ? ze(e, t) : null;
}
function Kl(e, t) {
  for (; e != null; ) {
    let n = ay(e, t);
    if (n !== null) return n;
    e = la(e);
  }
  return null;
}
function cy(e) {
  let t = Object.assign({}, e._decorators);
  return (e._pendingDecorators = t);
}
function ig(e) {
  return e.read(() => En().getTextContent());
}
function eE(e, t) {
  At(
    e,
    () => {
      var n = wn();
      if (!n.isEmpty())
        if (t === 'root') En().markDirty();
        else {
          n = n._nodeMap;
          for (let [, r] of n) r.markDirty();
        }
    },
    e._pendingEditorState === null ? { tag: 'history-merge' } : void 0
  );
}
function En() {
  return wn()._nodeMap.get('root');
}
function _n(e) {
  dt();
  let t = wn();
  e !== null && ((e.dirty = !0), (e._cachedNodes = null)), (t._selection = e);
}
function Pi(e) {
  var t = Ce(),
    n;
  e: {
    for (n = e; n != null; ) {
      let r = n[`__lexicalKey_${t._key}`];
      if (r !== void 0) {
        n = r;
        break e;
      }
      n = la(n);
    }
    n = null;
  }
  return n === null
    ? ((t = t.getRootElement()), e === t ? ze('root') : null)
    : ze(n);
}
function dy(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function np(e) {
  let t = [];
  for (; e !== null; ) t.push(e), (e = e._parentEditor);
  return t;
}
function fy() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5);
}
function rp(e, t, n) {
  if (((t = Nn(t._window)), t !== null)) {
    var r = t.anchorNode,
      { anchorOffset: i, focusOffset: o } = t;
    if (
      r !== null &&
      ((t = r.nodeType === 3 ? r.nodeValue : null),
      (r = Kl(r)),
      t !== null && L(r))
    ) {
      if (t === oa && n) {
        let l = n.length;
        (t = n), (o = i = l);
      }
      t !== null && ip(r, t, i, o, e);
    }
  }
}
function ip(e, t, n, r, i) {
  let o = e;
  if (o.isAttached() && (i || !o.isDirty())) {
    let a = o.isComposing(),
      d = t;
    if (
      ((a || i) && t[t.length - 1] === oa && (d = t.slice(0, -1)),
      (t = o.getTextContent()),
      i || d !== t)
    )
      if (d === '')
        if ((Ve(null), Xf || ia || Zf)) o.remove();
        else {
          let c = Ce();
          setTimeout(() => {
            c.update(() => {
              o.isAttached() && o.remove();
            });
          }, 20);
        }
      else {
        (i = o.getParent()), (t = po());
        var l = o.getTextContentSize(),
          s = sr(),
          u = o.getKey();
        o.isToken() ||
        (s !== null && u === s && !a) ||
        (W(t) &&
          ((i !== null && !i.canInsertTextBefore() && t.anchor.offset === 0) ||
            (t.anchor.key === e.__key &&
              t.anchor.offset === 0 &&
              !o.canInsertTextBefore()) ||
            (t.focus.key === e.__key &&
              t.focus.offset === l &&
              !o.canInsertTextAfter())))
          ? o.markDirty()
          : ((e = fe()),
            W(e) &&
              n !== null &&
              r !== null &&
              (e.setTextNodeRange(o, n, o, r),
              o.isSegmented() &&
                ((n = o.getTextContent()), (n = Le(n)), o.replace(n), (o = n))),
            o.setTextContent(d));
      }
  }
}
function tE(e, t) {
  if (t.isSegmented()) return !0;
  if (!e.isCollapsed()) return !1;
  e = e.anchor.offset;
  let n = t.getParentOrThrow(),
    r = t.isToken();
  return e === 0
    ? ((e = !t.canInsertTextBefore() || !n.canInsertTextBefore() || r) ||
        ((t = t.getPreviousSibling()),
        (e = (L(t) || ($$(t) && t.isInline())) && !t.canInsertTextAfter())),
      e)
    : e === t.getTextContentSize()
    ? !t.canInsertTextAfter() || !n.canInsertTextAfter() || r
    : !1;
}
function qo(e, t) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  let n = e.__lexicalClassNameCache,
    r = n[t];
  return r !== void 0
    ? r
    : ((e = e[t]), typeof e == 'string' ? ((e = e.split(' ')), (n[t] = e)) : e);
}
function op(e, t, n, r, i) {
  n.size !== 0 &&
    ((n = r.__type),
    (r = r.__key),
    (t = t.get(n)),
    t === void 0 && M(33, n),
    (n = t.klass),
    (t = e.get(n)),
    t === void 0 && ((t = new Map()), e.set(n, t)),
    (e = t.get(r)),
    (n = e === 'destroyed' && i === 'created'),
    (e === void 0 || n) && t.set(r, n ? 'updated' : i));
}
function og(e, t, n) {
  let r = e.getParent(),
    i = n;
  return (
    r !== null &&
      (t && n === 0
        ? ((i = e.getIndexWithinParent()), (e = r))
        : t ||
          n !== e.getChildrenSize() ||
          ((i = e.getIndexWithinParent() + 1), (e = r))),
    e.getChildAtIndex(t ? i - 1 : i)
  );
}
function _d(e, t) {
  var n = e.offset;
  return e.type === 'element'
    ? ((e = e.getNode()), og(e, t, n))
    : ((e = e.getNode()),
      (t && n === 0) || (!t && n === e.getTextContentSize())
        ? ((n = t ? e.getPreviousSibling() : e.getNextSibling()),
          n === null
            ? og(
                e.getParentOrThrow(),
                t,
                e.getIndexWithinParent() + (t ? 0 : 1)
              )
            : n)
        : null);
}
function py(e) {
  return (
    (e = (e = sa(e).event) && e.inputType),
    e === 'insertFromPaste' || e === 'insertFromPasteAsQuotation'
  );
}
function Nu(e) {
  return !ft(e) && !e.isLastChild() && !e.isInline();
}
function wu(e, t) {
  return (e = e._keyToDOMMap.get(t)), e === void 0 && M(75, t), e;
}
function la(e) {
  return (
    (e = e.assignedSlot || e.parentElement),
    e !== null && e.nodeType === 11 ? e.host : e
  );
}
function Tu(e, t) {
  for (e = e.getParent(); e !== null; ) {
    if (e.is(t)) return !0;
    e = e.getParent();
  }
  return !1;
}
function sa(e) {
  return (e = e._window), e === null && M(78), e;
}
function hy(e) {
  for (e = e.getParentOrThrow(); e !== null && !nn(e); )
    e = e.getParentOrThrow();
  return e;
}
function nn(e) {
  return ft(e) || ($$(e) && e.isShadowRoot());
}
function gy(e) {
  return (e = e.constructor.clone(e)), uy(e, null), e;
}
function Vl(e) {
  var t = Ce();
  let n = e.constructor.getType();
  return (
    (t = t._nodes.get(n)),
    t === void 0 && M(97),
    (t = t.replace),
    t !== null ? ((t = t(e)), t instanceof e.constructor || M(98), t) : e
  );
}
function tc(e, t) {
  (e = e.getParent()), !ft(e) || $$(t) || de(t) || M(99);
}
function nc(e) {
  return (de(e) || ($$(e) && !e.canBeEmpty())) && !e.isInline();
}
function xd(e, t, n) {
  n.style.removeProperty('caret-color'),
    (t._blockCursorElement = null),
    (t = e.parentElement),
    t !== null && t.removeChild(e);
}
function Nn(e) {
  return Vn ? (e || window).getSelection() : null;
}
function my(e, t) {
  let n = e.getChildAtIndex(t);
  n == null && (n = e), nn(e) && M(102);
  let r = (l) => {
      const s = l.getParentOrThrow(),
        u = nn(s),
        a = l !== n || u ? gy(l) : l;
      if (u) return l.insertAfter(a), [l, a, a];
      const [d, c, p] = r(s);
      return (l = l.getNextSiblings()), p.append(a, ...l), [d, c, a];
    },
    [i, o] = r(n);
  return [i, o];
}
function $u(e, t) {
  for (; e !== En() && e != null; ) {
    if (t(e)) return e;
    e = e.getParent();
  }
  return null;
}
function nE(e) {
  let t = [],
    n = [e];
  for (; 0 < n.length; ) {
    let r = n.pop();
    r === void 0 && M(112),
      $$(r) && n.unshift(...r.getChildren()),
      r !== e && t.push(r);
  }
  return t;
}
function ua(e) {
  return e.nodeType === 1;
}
function yy(e, t, n, r, i, o) {
  for (e = e.getFirstChild(); e !== null; ) {
    let l = e.__key;
    e.__parent === t &&
      ($$(e) && yy(e, l, n, r, i, o), n.has(l) || o.delete(l), i.push(l)),
      (e = e.getNextSibling());
  }
}
function rE(e, t, n, r) {
  (e = e._nodeMap), (t = t._nodeMap);
  let i = [];
  for (let [o] of r) {
    let l = t.get(o);
    l === void 0 ||
      l.isAttached() ||
      ($$(l) && yy(l, o, e, t, i, r), e.has(o) || r.delete(o), i.push(o));
  }
  for (let o of i) t.delete(o);
  for (let o of n)
    (r = t.get(o)),
      r === void 0 || r.isAttached() || (e.has(o) || n.delete(o), t.delete(o));
}
let Oe = '',
  ct = '',
  Pn = '',
  Cr,
  et,
  Ol,
  vy = !1,
  lp = !1,
  aa,
  Ws = null,
  Cd,
  Sd,
  ni,
  Sr,
  Ed,
  Rl;
function Hs(e, t) {
  let n = ni.get(e);
  if (t !== null) {
    let r = Td(e);
    r.parentNode === t && t.removeChild(r);
  }
  Sr.has(e) || et._keyToDOMMap.delete(e),
    $$(n) && ((e = ku(n, ni)), Nd(e, 0, e.length - 1, null)),
    n !== void 0 && op(Rl, Ol, aa, n, 'destroyed');
}
function Nd(e, t, n, r) {
  for (; t <= n; ++t) {
    let i = e[t];
    i !== void 0 && Hs(i, r);
  }
}
function Mr(e, t) {
  e.setProperty('text-align', t);
}
function _y(e, t) {
  var n = Cr.theme.indent;
  if (typeof n == 'string') {
    let r = e.classList.contains(n);
    0 < t && !r ? e.classList.add(n) : 1 > t && r && e.classList.remove(n);
  }
  (n =
    getComputedStyle(e).getPropertyValue('--lexical-indent-base-value') ||
    '40px'),
    e.style.setProperty(
      'padding-inline-start',
      t === 0 ? '' : `calc(${t} * ${n})`
    );
}
function xy(e, t) {
  (e = e.style),
    t === 0
      ? Mr(e, '')
      : t === 1
      ? Mr(e, 'left')
      : t === 2
      ? Mr(e, 'center')
      : t === 3
      ? Mr(e, 'right')
      : t === 4
      ? Mr(e, 'justify')
      : t === 5
      ? Mr(e, 'start')
      : t === 6 && Mr(e, 'end');
}
function Us(e, t, n) {
  let r = Sr.get(e);
  r === void 0 && M(60);
  let i = r.createDOM(Cr, et);
  var o = et._keyToDOMMap;
  if (
    ((i['__lexicalKey_' + et._key] = e),
    o.set(e, i),
    L(r)
      ? i.setAttribute('data-lexical-text', 'true')
      : de(r) && i.setAttribute('data-lexical-decorator', 'true'),
    $$(r))
  ) {
    if (((e = r.__indent), (o = r.__size), e !== 0 && _y(i, e), o !== 0)) {
      --o, (e = ku(r, Sr));
      var l = ct;
      (ct = ''), wd(e, r, 0, o, i, null), Sy(r, i), (ct = l);
    }
    (e = r.__format),
      e !== 0 && xy(i, e),
      r.isInline() || Cy(null, r, i),
      Nu(r) &&
        ((Oe += `

`),
        (Pn += `

`));
  } else
    (o = r.getTextContent()),
      de(r)
        ? ((l = r.decorate(et, Cr)),
          l !== null && Ey(e, l),
          (i.contentEditable = 'false'))
        : L(r) && (r.isDirectionless() || (ct += o)),
      (Oe += o),
      (Pn += o);
  return (
    t !== null &&
      (n != null
        ? t.insertBefore(i, n)
        : ((n = t.__lexicalLineBreak),
          n != null ? t.insertBefore(i, n) : t.appendChild(i))),
    op(Rl, Ol, aa, r, 'created'),
    i
  );
}
function wd(e, t, n, r, i, o) {
  let l = Oe;
  for (Oe = ''; n <= r; ++n) Us(e[n], i, o);
  Nu(t) &&
    (Oe += `

`),
    (i.__lexicalTextContent = Oe),
    (Oe = l + Oe);
}
function lg(e, t) {
  return (e = t.get(e)), Ml(e) || (de(e) && e.isInline());
}
function Cy(e, t, n) {
  (e = e !== null && (e.__size === 0 || lg(e.__last, ni))),
    (t = t.__size === 0 || lg(t.__last, Sr)),
    e
      ? t ||
        ((t = n.__lexicalLineBreak),
        t != null && n.removeChild(t),
        (n.__lexicalLineBreak = null))
      : t &&
        ((t = document.createElement('br')),
        (n.__lexicalLineBreak = t),
        n.appendChild(t));
}
function Sy(e, t) {
  var n = t.__lexicalDir;
  if (t.__lexicalDirTextContent !== ct || n !== Ws) {
    let o = ct === '';
    if (o) var r = Ws;
    else (r = ct), (r = KS.test(r) ? 'rtl' : VS.test(r) ? 'ltr' : null);
    if (r !== n) {
      let l = t.classList,
        s = Cr.theme;
      var i = n !== null ? s[n] : void 0;
      let u = r !== null ? s[r] : void 0;
      i !== void 0 &&
        (typeof i == 'string' && ((i = i.split(' ')), (i = s[n] = i)),
        l.remove(...i)),
        r === null || (o && r === 'ltr')
          ? t.removeAttribute('dir')
          : (u !== void 0 &&
              (typeof u == 'string' && ((n = u.split(' ')), (u = s[r] = n)),
              u !== void 0 && l.add(...u)),
            (t.dir = r)),
        lp || (e.getWritable().__dir = r);
    }
    (Ws = r), (t.__lexicalDirTextContent = ct), (t.__lexicalDir = r);
  }
}
function ku(e, t) {
  let n = [];
  for (e = e.__first; e !== null; ) {
    let r = t.get(e);
    r === void 0 && M(101), n.push(e), (e = r.__next);
  }
  return n;
}
function Ao(e, t) {
  var n = ni.get(e),
    r = Sr.get(e);
  (n !== void 0 && r !== void 0) || M(61);
  var i = vy || Sd.has(e) || Cd.has(e);
  let o = wu(et, e);
  if (n === r && !i)
    return (
      $$(n)
        ? ((r = o.__lexicalTextContent),
          r !== void 0 && ((Oe += r), (Pn += r)),
          (r = o.__lexicalDirTextContent),
          r !== void 0 && (ct += r))
        : ((r = n.getTextContent()),
          L(n) && !n.isDirectionless() && (ct += r),
          (Pn += r),
          (Oe += r)),
      o
    );
  if ((n !== r && i && op(Rl, Ol, aa, r, 'updated'), r.updateDOM(n, o, Cr)))
    return (
      (r = Us(e, null, null)),
      t === null && M(62),
      t.replaceChild(r, o),
      Hs(e, null),
      r
    );
  if ($$(n) && $$(r)) {
    if (
      ((e = r.__indent),
      e !== n.__indent && _y(o, e),
      (e = r.__format),
      e !== n.__format && xy(o, e),
      i)
    ) {
      (e = r), (i = ct), (ct = ''), (t = Oe);
      var l = n.__size,
        s = e.__size;
      if (((Oe = ''), l === 1 && s === 1)) {
        var u = n.__first,
          a = e.__first;
        if (u === a) Ao(u, o);
        else {
          var d = Td(u);
          (a = Us(a, null, null)), o.replaceChild(a, d), Hs(u, null);
        }
      } else {
        a = ku(n, ni);
        var c = ku(e, Sr);
        if (l === 0) s !== 0 && wd(c, e, 0, s - 1, o, null);
        else if (s === 0)
          l !== 0 &&
            ((u = o.__lexicalLineBreak == null),
            Nd(a, 0, l - 1, u ? null : o),
            u && (o.textContent = ''));
        else {
          var p = a;
          (a = c), (c = l - 1), (l = s - 1);
          let h = o.firstChild,
            y = 0;
          for (s = 0; y <= c && s <= l; ) {
            var f = p[y];
            let _ = a[s];
            if (f === _) (h = rc(Ao(_, o))), y++, s++;
            else {
              u === void 0 && (u = new Set(p)),
                d === void 0 && (d = new Set(a));
              let g = d.has(f),
                m = u.has(_);
              g
                ? (m
                    ? ((f = wu(et, _)),
                      f === h
                        ? (h = rc(Ao(_, o)))
                        : (h != null ? o.insertBefore(f, h) : o.appendChild(f),
                          Ao(_, o)),
                      y++)
                    : Us(_, o, h),
                  s++)
                : ((h = rc(Td(f))), Hs(f, o), y++);
            }
          }
          (u = y > c),
            (d = s > l),
            u && !d
              ? ((u = a[l + 1]),
                (u = u === void 0 ? null : et.getElementByKey(u)),
                wd(a, e, s, l, o, u))
              : d && !u && Nd(p, y, c, o);
        }
      }
      Nu(e) &&
        (Oe += `

`),
        (o.__lexicalTextContent = Oe),
        (Oe = t + Oe),
        Sy(e, o),
        (ct = i),
        ft(r) || r.isInline() || Cy(n, r, o);
    }
    Nu(r) &&
      ((Oe += `

`),
      (Pn += `

`));
  } else
    (n = r.getTextContent()),
      de(r)
        ? ((i = r.decorate(et, Cr)), i !== null && Ey(e, i))
        : L(r) && !r.isDirectionless() && (ct += n),
      (Oe += n),
      (Pn += n);
  return (
    !lp &&
      ft(r) &&
      r.__cachedText !== Pn &&
      ((r = r.getWritable()), (r.__cachedText = Pn)),
    o
  );
}
function Ey(e, t) {
  let n = et._pendingDecorators,
    r = et._decorators;
  if (n === null) {
    if (r[e] === t) return;
    n = cy(et);
  }
  n[e] = t;
}
function rc(e) {
  return (
    (e = e.nextSibling),
    e !== null && e === et._blockCursorElement && (e = e.nextSibling),
    e
  );
}
function Td(e) {
  let t = Ed.get(e);
  return t === void 0 && M(75, e), t;
}
let $n = Object.freeze({}),
  $d = [
    ['keydown', dE],
    ['pointerdown', oE],
    ['compositionstart', aE],
    ['compositionend', cE],
    ['input', uE],
    ['click', iE],
    ['cut', $n],
    ['copy', $n],
    ['dragstart', $n],
    ['dragover', $n],
    ['dragend', $n],
    ['paste', $n],
    ['focus', $n],
    ['blur', $n],
    ['drop', $n],
  ];
Cu && $d.push(['beforeinput', (e, t) => sE(e, t)]);
let Dl = 0,
  Ny = 0,
  wy = 0,
  _i = null,
  bo = 0,
  kd = !1,
  Od = !1,
  el = !1,
  Io = !1,
  Ty = [0, '', 0, 'root', 0];
function $y(e, t, n, r, i) {
  let o = e.anchor,
    l = e.focus,
    s = o.getNode();
  var u = Ce();
  let a = Nn(u._window),
    d = a !== null ? a.anchorNode : null,
    c = o.key;
  u = u.getElementByKey(c);
  let p = n.length;
  return (
    c !== l.key ||
    !L(s) ||
    (((!i && (!Cu || wy < r + 50)) || (s.isDirty() && 2 > p) || dy(n)) &&
      o.offset !== l.offset &&
      !s.isComposing()) ||
    vd(s) ||
    (s.isDirty() && 1 < p) ||
    ((i || !Cu) && u !== null && !s.isComposing() && d !== Su(u)) ||
    (a !== null &&
      t !== null &&
      (!t.collapsed ||
        t.startContainer !== a.anchorNode ||
        t.startOffset !== a.anchorOffset)) ||
    s.getFormat() !== e.format ||
    s.getStyle() !== e.style ||
    tE(e, s)
  );
}
function sg(e, t) {
  return (
    e !== null &&
    e.nodeValue !== null &&
    e.nodeType === 3 &&
    t !== 0 &&
    t !== e.nodeValue.length
  );
}
function ug(e, t, n) {
  let { anchorNode: r, anchorOffset: i, focusNode: o, focusOffset: l } = e;
  (kd && ((kd = !1), sg(r, i) && sg(o, l))) ||
    At(t, () => {
      if (!n) _n(null);
      else if (Ul(t, r, o)) {
        var s = fe();
        if (W(s)) {
          var u = s.anchor,
            a = u.getNode();
          if (s.isCollapsed()) {
            e.type === 'Range' &&
              e.anchorNode === e.focusNode &&
              (s.dirty = !0);
            var d = sa(t).event;
            d = d ? d.timeStamp : performance.now();
            let [c, p, f, h, y] = Ty;
            d < y + 200 && u.offset === f && u.key === h
              ? ((s.format = c), (s.style = p))
              : u.type === 'text'
              ? ((s.format = a.getFormat()), (s.style = a.getStyle()))
              : u.type === 'element' && ((s.format = 0), (s.style = ''));
          } else {
            (u = 255), (a = !1), (d = s.getNodes());
            let c = d.length;
            for (let p = 0; p < c; p++) {
              let f = d[p];
              if (L(f) && ((a = !0), (u &= f.getFormat()), u === 0)) break;
            }
            s.format = a ? u : 0;
          }
        }
        P(t, ra, void 0);
      }
    });
}
function iE(e, t) {
  At(t, () => {
    let n = fe();
    var r = Nn(t._window);
    let i = po();
    if (r)
      if (W(n)) {
        let l = n.anchor;
        var o = l.getNode();
        l.type === 'element' &&
        l.offset === 0 &&
        n.isCollapsed() &&
        !ft(o) &&
        En().getChildrenSize() === 1 &&
        o.getTopLevelElementOrThrow().isEmpty() &&
        i !== null &&
        n.is(i)
          ? (r.removeAllRanges(), (n.dirty = !0))
          : e.detail !== 3 ||
            n.isCollapsed() ||
            ((r = n.focus.getNode()),
            o !== r && ($$(o) ? o.select(0) : o.getParentOrThrow().select(0)));
      } else
        e.pointerType === 'touch' &&
          ((o = r.anchorNode),
          o !== null && ((o = o.nodeType), o === 1 || o === 3)) &&
          ((r = up(i, r, t)), _n(r));
    P(t, I1, e);
  });
}
function oE(e, t) {
  let n = e.target;
  (e = e.pointerType),
    n instanceof Node &&
      e !== 'touch' &&
      At(t, () => {
        de(Kl(n)) || (Od = !0);
      });
}
function ky(e) {
  return e.getTargetRanges
    ? ((e = e.getTargetRanges()), e.length === 0 ? null : e[0])
    : null;
}
function lE(e, t) {
  return e !== t || $$(e) || $$(t) || !e.isToken() || !t.isToken();
}
function sE(e, t) {
  let n = e.inputType,
    r = ky(e);
  n === 'deleteCompositionText' ||
    (xr && py(t)) ||
    (n !== 'insertCompositionText' &&
      At(t, () => {
        let i = fe();
        if (n === 'deleteContentBackward') {
          if (i === null) {
            var o = po();
            if (!W(o)) return;
            _n(o.clone());
          }
          if (W(i)) {
            Ny === 229 &&
            e.timeStamp < Dl + 30 &&
            t.isComposing() &&
            i.anchor.key === i.focus.key
              ? (Ve(null),
                (Dl = 0),
                setTimeout(() => {
                  At(t, () => {
                    Ve(null);
                  });
                }, 30),
                W(i) &&
                  ((o = i.anchor.getNode()),
                  o.markDirty(),
                  (i.format = o.getFormat()),
                  (i.style = o.getStyle())))
              : (e.preventDefault(), P(t, Tl, !0));
            return;
          }
        }
        if (W(i)) {
          (o = e.data),
            _i !== null && rp(!1, t, _i),
            (i.dirty && _i === null) ||
              !i.isCollapsed() ||
              ft(i.anchor.getNode()) ||
              r === null ||
              i.applyDOMRange(r),
            (_i = null);
          var l = i.focus,
            s = i.anchor.getNode();
          if (
            ((l = l.getNode()), n === 'insertText' || n === 'insertTranspose')
          )
            o ===
            `
`
              ? (e.preventDefault(), P(t, Zo, !1))
              : o ===
                `

`
              ? (e.preventDefault(), P(t, hd, void 0))
              : o == null && e.dataTransfer
              ? ((o = e.dataTransfer.getData('text/plain')),
                e.preventDefault(),
                i.insertRawText(o))
              : o != null && $y(i, r, o, e.timeStamp, !0)
              ? (e.preventDefault(), P(t, Hi, o))
              : (_i = o),
              (wy = e.timeStamp);
          else
            switch ((e.preventDefault(), n)) {
              case 'insertFromYank':
              case 'insertFromDrop':
              case 'insertReplacementText':
                P(t, Hi, e);
                break;
              case 'insertFromComposition':
                Ve(null), P(t, Hi, e);
                break;
              case 'insertLineBreak':
                Ve(null), P(t, Zo, !1);
                break;
              case 'insertParagraph':
                Ve(null),
                  el && !ia ? ((el = !1), P(t, Zo, !1)) : P(t, hd, void 0);
                break;
              case 'insertFromPaste':
              case 'insertFromPasteAsQuotation':
                P(t, Vf, e);
                break;
              case 'deleteByComposition':
                lE(s, l) && P(t, gd, e);
                break;
              case 'deleteByDrag':
              case 'deleteByCut':
                P(t, gd, e);
                break;
              case 'deleteContent':
                P(t, Tl, !1);
                break;
              case 'deleteWordBackward':
                P(t, $l, !0);
                break;
              case 'deleteWordForward':
                P(t, $l, !1);
                break;
              case 'deleteHardLineBackward':
              case 'deleteSoftLineBackward':
                P(t, kl, !0);
                break;
              case 'deleteContentForward':
              case 'deleteHardLineForward':
              case 'deleteSoftLineForward':
                P(t, kl, !1);
                break;
              case 'formatStrikeThrough':
                P(t, lr, 'strikethrough');
                break;
              case 'formatBold':
                P(t, lr, 'bold');
                break;
              case 'formatItalic':
                P(t, lr, 'italic');
                break;
              case 'formatUnderline':
                P(t, lr, 'underline');
                break;
              case 'historyUndo':
                P(t, Yf, void 0);
                break;
              case 'historyRedo':
                P(t, Gf, void 0);
            }
        }
      }));
}
function uE(e, t) {
  e.stopPropagation(),
    At(t, () => {
      var n = fe(),
        r = e.data,
        i = ky(e);
      if (r != null && W(n) && $y(n, i, r, e.timeStamp, !1)) {
        Io && (Rd(t, r), (Io = !1));
        var o = n.anchor,
          l = o.getNode();
        if (((i = Nn(t._window)), i === null)) return;
        let s = o.offset;
        (o = Cu && !n.isCollapsed() && L(l) && i.anchorNode !== null) &&
          ((l =
            l.getTextContent().slice(0, s) +
            r +
            l.getTextContent().slice(s + n.focus.offset)),
          (i = i.anchorNode),
          (o = l === (i.nodeType === 3 ? i.nodeValue : null))),
          o || P(t, Hi, r),
          (r = r.length),
          xr &&
            1 < r &&
            e.inputType === 'insertCompositionText' &&
            !t.isComposing() &&
            (n.anchor.offset -= r),
          Xf || ia || Zf || !t.isComposing() || ((Dl = 0), Ve(null));
      } else
        rp(!1, t, r !== null ? r : void 0),
          Io && (Rd(t, r || void 0), (Io = !1));
      dt(), (n = Ce()), ry(n);
    }),
    (_i = null);
}
function aE(e, t) {
  At(t, () => {
    let n = fe();
    if (W(n) && !t.isComposing()) {
      let r = n.anchor,
        i = n.anchor.getNode();
      Ve(r.key),
        (e.timeStamp < Dl + 30 ||
          r.type === 'element' ||
          !n.isCollapsed() ||
          i.getFormat() !== n.format ||
          i.getStyle() !== n.style) &&
          P(t, Hi, US);
    }
  });
}
function Rd(e, t) {
  var n = e._compositionKey;
  if ((Ve(null), n !== null && t != null)) {
    if (t === '') {
      (t = ze(n)),
        (e = Su(e.getElementByKey(n))),
        e !== null &&
          e.nodeValue !== null &&
          L(t) &&
          ip(t, e.nodeValue, null, null, !0);
      return;
    }
    if (
      t[t.length - 1] ===
        `
` &&
      ((n = fe()), W(n))
    ) {
      (t = n.focus), n.anchor.set(t.key, t.offset, t.type), P(e, xu, null);
      return;
    }
  }
  rp(!0, e, t);
}
function cE(e, t) {
  xr
    ? (Io = !0)
    : At(t, () => {
        Rd(t, e.data);
      });
}
function dE(e, t) {
  if (((Dl = e.timeStamp), (Ny = e.keyCode), !t.isComposing())) {
    var { keyCode: n, shiftKey: r, ctrlKey: i, metaKey: o, altKey: l } = e;
    if (!P(t, z1, e)) {
      if (n !== 39 || i || o || l)
        if (n !== 39 || l || r || (!i && !o))
          if (n !== 37 || i || o || l)
            if (n !== 37 || l || r || (!i && !o))
              if (n !== 38 || i || o)
                if (n !== 40 || i || o)
                  if (n === 13 && r) (el = !0), P(t, xu, e);
                  else if (n === 32) P(t, K1, e);
                  else if (Ze && i && n === 79)
                    e.preventDefault(), (el = !0), P(t, Zo, !0);
                  else if (n !== 13 || r) {
                    var s = Ze
                      ? l || o
                        ? !1
                        : n === 8 || (n === 72 && i)
                      : i || l || o
                      ? !1
                      : n === 8;
                    s
                      ? n === 8
                        ? P(t, V1, e)
                        : (e.preventDefault(), P(t, Tl, !0))
                      : n === 27
                      ? P(t, Y1, e)
                      : ((s = Ze
                          ? r || l || o
                            ? !1
                            : n === 46 || (n === 68 && i)
                          : i || l || o
                          ? !1
                          : n === 46),
                        s
                          ? n === 46
                            ? P(t, G1, e)
                            : (e.preventDefault(), P(t, Tl, !1))
                          : n === 8 && (Ze ? l : i)
                          ? (e.preventDefault(), P(t, $l, !0))
                          : n === 46 && (Ze ? l : i)
                          ? (e.preventDefault(), P(t, $l, !1))
                          : Ze && o && n === 8
                          ? (e.preventDefault(), P(t, kl, !0))
                          : Ze && o && n === 46
                          ? (e.preventDefault(), P(t, kl, !1))
                          : n === 66 && !l && (Ze ? o : i)
                          ? (e.preventDefault(), P(t, lr, 'bold'))
                          : n === 85 && !l && (Ze ? o : i)
                          ? (e.preventDefault(), P(t, lr, 'underline'))
                          : n === 73 && !l && (Ze ? o : i)
                          ? (e.preventDefault(), P(t, lr, 'italic'))
                          : n !== 9 || l || i || o
                          ? n === 90 && !r && (Ze ? o : i)
                            ? (e.preventDefault(), P(t, Yf, void 0))
                            : ((s = Ze
                                ? n === 90 && o && r
                                : (n === 89 && i) || (n === 90 && i && r)),
                              s
                                ? (e.preventDefault(), P(t, Gf, void 0))
                                : fo(t._editorState._selection)
                                ? ((s = r ? !1 : n === 67 ? (Ze ? o : i) : !1),
                                  s
                                    ? (e.preventDefault(), P(t, Qf, e))
                                    : ((s = r
                                        ? !1
                                        : n === 88
                                        ? Ze
                                          ? o
                                          : i
                                        : !1),
                                      s
                                        ? (e.preventDefault(), P(t, Jf, e))
                                        : n === 65 &&
                                          (Ze ? o : i) &&
                                          (e.preventDefault(), P(t, md, e))))
                                : !xr &&
                                  n === 65 &&
                                  (Ze ? o : i) &&
                                  (e.preventDefault(), P(t, md, e)))
                          : P(t, Q1, e));
                  } else (el = !1), P(t, xu, e);
                else P(t, U1, e);
              else P(t, H1, e);
            else P(t, W1, e);
          else P(t, j1, e);
        else P(t, B1, e);
      else P(t, F1, e);
      (i || r || l || o) && P(t, ty, e);
    }
  }
}
function Oy(e) {
  let t = e.__lexicalEventHandles;
  return t === void 0 && ((t = []), (e.__lexicalEventHandles = t)), t;
}
let Ui = new Map();
function Ry(e) {
  e = e.target;
  let t = Nn(
    e == null
      ? null
      : e.nodeType === 9
      ? e.defaultView
      : e.ownerDocument.defaultView
  );
  if (t !== null) {
    var n = tp(t.anchorNode);
    if (n !== null) {
      Od &&
        ((Od = !1),
        At(n, () => {
          var l = po(),
            s = t.anchorNode;
          s !== null &&
            ((s = s.nodeType), s === 1 || s === 3) &&
            ((l = up(l, t, n)), _n(l));
        })),
        (e = np(n)),
        (e = e[e.length - 1]);
      var r = e._key,
        i = Ui.get(r),
        o = i || e;
      o !== n && ug(t, o, !1),
        ug(t, n, !0),
        n !== e ? Ui.set(r, n) : i && Ui.delete(r);
    }
  }
}
function fE(e, t) {
  bo === 0 && e.ownerDocument.addEventListener('selectionchange', Ry),
    bo++,
    (e.__lexicalEditor = t);
  let n = Oy(e);
  for (let r = 0; r < $d.length; r++) {
    let [i, o] = $d[r],
      l =
        typeof o == 'function'
          ? (s) => {
              s._lexicalHandled !== !0 &&
                ((s._lexicalHandled = !0), t.isEditable() && o(s, t));
            }
          : (s) => {
              if (
                s._lexicalHandled !== !0 &&
                ((s._lexicalHandled = !0), t.isEditable())
              )
                switch (i) {
                  case 'cut':
                    return P(t, Jf, s);
                  case 'copy':
                    return P(t, Qf, s);
                  case 'paste':
                    return P(t, Vf, s);
                  case 'dragstart':
                    return P(t, X1, s);
                  case 'dragover':
                    return P(t, Z1, s);
                  case 'dragend':
                    return P(t, q1, s);
                  case 'focus':
                    return P(t, b1, s);
                  case 'blur':
                    return P(t, ey, s);
                  case 'drop':
                    return P(t, J1, s);
                }
            };
    e.addEventListener(i, l),
      n.push(() => {
        e.removeEventListener(i, l);
      });
  }
}
function Dd(e, t, n) {
  dt();
  var r = e.__key;
  let i = e.getParent();
  if (i !== null) {
    var o = fe();
    if (W(o) && $$(e)) {
      var { anchor: l, focus: s } = o,
        u = l.getNode(),
        a = s.getNode();
      Tu(u, e) && l.set(e.__key, 0, 'element'),
        Tu(a, e) && s.set(e.__key, 0, 'element');
    }
    if (((u = o), (a = !1), W(u) && t)) {
      o = u.anchor;
      let d = u.focus;
      o.key === r &&
        (Ru(o, e, i, e.getPreviousSibling(), e.getNextSibling()), (a = !0)),
        d.key === r &&
          (Ru(d, e, i, e.getPreviousSibling(), e.getNextSibling()), (a = !0));
    } else fo(u) && t && e.isSelected() && e.selectPrevious();
    W(u) && t && !a
      ? ((r = e.getIndexWithinParent()), Jr(e), Ou(u, i, r, -1))
      : Jr(e),
      n || nn(i) || i.canBeEmpty() || !i.isEmpty() || Dd(i, t),
      t && ft(i) && i.isEmpty() && i.selectEnd();
  }
}
class Yl {
  static getType() {
    M(64, this.name);
  }
  static clone() {
    M(65, this.name);
  }
  constructor(t) {
    (this.__type = this.constructor.getType()),
      (this.__next = this.__prev = this.__parent = null),
      uy(this, t);
  }
  getType() {
    return this.__type;
  }
  isAttached() {
    for (var t = this.__key; t !== null; ) {
      if (t === 'root') return !0;
      if (((t = ze(t)), t === null)) break;
      t = t.__parent;
    }
    return !1;
  }
  isSelected(t) {
    if (((t = t || fe()), t == null)) return !1;
    let n = t.getNodes().some((r) => r.__key === this.__key);
    return L(this)
      ? n
      : W(t) &&
        t.anchor.type === 'element' &&
        t.focus.type === 'element' &&
        t.anchor.key === t.focus.key &&
        t.anchor.offset === t.focus.offset
      ? !1
      : n;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    var t = this.getParent();
    if (t === null) return -1;
    t = t.getFirstChild();
    let n = 0;
    for (; t !== null; ) {
      if (this.is(t)) return n;
      n++, (t = t.getNextSibling());
    }
    return -1;
  }
  getParent() {
    let t = this.getLatest().__parent;
    return t === null ? null : ze(t);
  }
  getParentOrThrow() {
    let t = this.getParent();
    return t === null && M(66, this.__key), t;
  }
  getTopLevelElement() {
    let t = this;
    for (; t !== null; ) {
      let n = t.getParent();
      if (nn(n)) return t;
      t = n;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    let t = this.getTopLevelElement();
    return t === null && M(67, this.__key), t;
  }
  getParents() {
    let t = [],
      n = this.getParent();
    for (; n !== null; ) t.push(n), (n = n.getParent());
    return t;
  }
  getParentKeys() {
    let t = [],
      n = this.getParent();
    for (; n !== null; ) t.push(n.__key), (n = n.getParent());
    return t;
  }
  getPreviousSibling() {
    let t = this.getLatest().__prev;
    return t === null ? null : ze(t);
  }
  getPreviousSiblings() {
    let t = [];
    var n = this.getParent();
    if (n === null) return t;
    for (n = n.getFirstChild(); n !== null && !n.is(this); )
      t.push(n), (n = n.getNextSibling());
    return t;
  }
  getNextSibling() {
    let t = this.getLatest().__next;
    return t === null ? null : ze(t);
  }
  getNextSiblings() {
    let t = [],
      n = this.getNextSibling();
    for (; n !== null; ) t.push(n), (n = n.getNextSibling());
    return t;
  }
  getCommonAncestor(t) {
    let n = this.getParents();
    var r = t.getParents();
    $$(this) && n.unshift(this), $$(t) && r.unshift(t), (t = n.length);
    var i = r.length;
    if (t === 0 || i === 0 || n[t - 1] !== r[i - 1]) return null;
    for (r = new Set(r), i = 0; i < t; i++) {
      let o = n[i];
      if (r.has(o)) return o;
    }
    return null;
  }
  is(t) {
    return t == null ? !1 : this.__key === t.__key;
  }
  isBefore(t) {
    if (this === t) return !1;
    if (t.isParentOf(this)) return !0;
    if (this.isParentOf(t)) return !1;
    var n = this.getCommonAncestor(t);
    let r = this;
    for (;;) {
      var i = r.getParentOrThrow();
      if (i === n) {
        i = r.getIndexWithinParent();
        break;
      }
      r = i;
    }
    for (r = t; ; ) {
      if (((t = r.getParentOrThrow()), t === n)) {
        n = r.getIndexWithinParent();
        break;
      }
      r = t;
    }
    return i < n;
  }
  isParentOf(t) {
    let n = this.__key;
    if (n === t.__key) return !1;
    for (; t !== null; ) {
      if (t.__key === n) return !0;
      t = t.getParent();
    }
    return !1;
  }
  getNodesBetween(t) {
    let n = this.isBefore(t),
      r = [],
      i = new Set();
    for (var o = this; ; ) {
      var l = o.__key;
      if ((i.has(l) || (i.add(l), r.push(o)), o === t)) break;
      if (
        ((l = $$(o) ? (n ? o.getFirstChild() : o.getLastChild()) : null),
        l !== null)
      )
        o = l;
      else if (
        ((l = n ? o.getNextSibling() : o.getPreviousSibling()), l !== null)
      )
        o = l;
      else {
        if (((o = o.getParentOrThrow()), i.has(o.__key) || r.push(o), o === t))
          break;
        l = o;
        do
          l === null && M(68),
            (o = n ? l.getNextSibling() : l.getPreviousSibling()),
            (l = l.getParent()),
            l !== null && (o !== null || i.has(l.__key) || r.push(l));
        while (o === null);
      }
    }
    return n || r.reverse(), r;
  }
  isDirty() {
    let t = Ce()._dirtyLeaves;
    return t !== null && t.has(this.__key);
  }
  getLatest() {
    let t = ze(this.__key);
    return t === null && M(113), t;
  }
  getWritable() {
    dt();
    var t = wn(),
      n = Ce();
    t = t._nodeMap;
    let r = this.__key,
      i = this.getLatest(),
      o = i.__parent;
    n = n._cloneNotNeeded;
    var l = fe();
    return (
      l !== null && (l._cachedNodes = null),
      n.has(r)
        ? (Eu(i), i)
        : ((l = i.constructor.clone(i)),
          (l.__parent = o),
          (l.__next = i.__next),
          (l.__prev = i.__prev),
          $$(i) && $$(l)
            ? ((l.__first = i.__first),
              (l.__last = i.__last),
              (l.__size = i.__size),
              (l.__indent = i.__indent),
              (l.__format = i.__format),
              (l.__dir = i.__dir))
            : L(i) &&
              L(l) &&
              ((l.__format = i.__format),
              (l.__style = i.__style),
              (l.__mode = i.__mode),
              (l.__detail = i.__detail)),
          n.add(r),
          (l.__key = r),
          Eu(l),
          t.set(r, l),
          l)
    );
  }
  getTextContent() {
    return '';
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM() {
    M(70);
  }
  updateDOM() {
    M(71);
  }
  exportDOM(t) {
    return { element: this.createDOM(t._config, t) };
  }
  exportJSON() {
    M(72);
  }
  static importJSON() {
    M(18, this.name);
  }
  static transform() {
    return null;
  }
  remove(t) {
    Dd(this, !0, t);
  }
  replace(t, n) {
    dt();
    var r = fe();
    r !== null && (r = r.clone()), tc(this, t);
    let i = this.getLatest(),
      o = this.__key,
      l = t.__key,
      s = t.getWritable();
    t = this.getParentOrThrow().getWritable();
    let u = t.__size;
    Jr(s);
    let a = i.getPreviousSibling(),
      d = i.getNextSibling(),
      c = i.__prev,
      p = i.__next,
      f = i.__parent;
    return (
      Dd(i, !1, !0),
      a === null ? (t.__first = l) : (a.getWritable().__next = l),
      (s.__prev = c),
      d === null ? (t.__last = l) : (d.getWritable().__prev = l),
      (s.__next = p),
      (s.__parent = f),
      (t.__size = u),
      n &&
        this.getChildren().forEach((h) => {
          s.append(h);
        }),
      W(r) &&
        (_n(r),
        (n = r.anchor),
        (r = r.focus),
        n.key === o && dg(n, s),
        r.key === o && dg(r, s)),
      sr() === o && Ve(l),
      s
    );
  }
  insertAfter(t, n = !0) {
    dt(), tc(this, t);
    var r = this.getWritable();
    let i = t.getWritable();
    var o = i.getParent();
    let l = fe();
    var s = !1,
      u = !1;
    if (o !== null) {
      var a = t.getIndexWithinParent();
      Jr(i),
        W(l) &&
          ((u = o.__key),
          (s = l.anchor),
          (o = l.focus),
          (s = s.type === 'element' && s.key === u && s.offset === a + 1),
          (u = o.type === 'element' && o.key === u && o.offset === a + 1));
    }
    (o = this.getNextSibling()), (a = this.getParentOrThrow().getWritable());
    let d = i.__key,
      c = r.__next;
    return (
      o === null ? (a.__last = d) : (o.getWritable().__prev = d),
      a.__size++,
      (r.__next = d),
      (i.__next = c),
      (i.__prev = r.__key),
      (i.__parent = r.__parent),
      n &&
        W(l) &&
        ((n = this.getIndexWithinParent()),
        Ou(l, a, n + 1),
        (r = a.__key),
        s && l.anchor.set(r, n + 2, 'element'),
        u && l.focus.set(r, n + 2, 'element')),
      t
    );
  }
  insertBefore(t, n = !0) {
    dt(), tc(this, t);
    var r = this.getWritable();
    let i = t.getWritable(),
      o = i.__key;
    Jr(i);
    let l = this.getPreviousSibling(),
      s = this.getParentOrThrow().getWritable(),
      u = r.__prev,
      a = this.getIndexWithinParent();
    return (
      l === null ? (s.__first = o) : (l.getWritable().__next = o),
      s.__size++,
      (r.__prev = o),
      (i.__prev = u),
      (i.__next = r.__key),
      (i.__parent = r.__parent),
      (r = fe()),
      n && W(r) && ((n = this.getParentOrThrow()), Ou(r, n, a)),
      t
    );
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return ri();
  }
  selectPrevious(t, n) {
    dt();
    let r = this.getPreviousSibling(),
      i = this.getParentOrThrow();
    return r === null
      ? i.select(0, 0)
      : $$(r)
      ? r.select()
      : L(r)
      ? r.select(t, n)
      : ((t = r.getIndexWithinParent() + 1), i.select(t, t));
  }
  selectNext(t, n) {
    dt();
    let r = this.getNextSibling(),
      i = this.getParentOrThrow();
    return r === null
      ? i.select()
      : $$(r)
      ? r.select(0, 0)
      : L(r)
      ? r.select(t, n)
      : ((t = r.getIndexWithinParent()), i.select(t, t));
  }
  markDirty() {
    this.getWritable();
  }
}
class ao extends Yl {
  static getType() {
    return 'linebreak';
  }
  static clone(t) {
    return new ao(t.__key);
  }
  constructor(t) {
    super(t);
  }
  getTextContent() {
    return `
`;
  }
  createDOM() {
    return document.createElement('br');
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {
      br: (t) => {
        let n = t.parentElement,
          r,
          i;
        return n !== null &&
          ((r = n.firstChild) === t ||
            (r.nextSibling === t &&
              r.nodeType === 3 &&
              (r.textContent || '').match(/^( |\t|\r?\n)+$/) !== null)) &&
          ((i = n.lastChild) === t ||
            (i.previousSibling === t &&
              i.nodeType === 3 &&
              (i.textContent || '').match(/^( |\t|\r?\n)+$/) !== null))
          ? null
          : { conversion: pE, priority: 0 };
      },
    };
  }
  static importJSON() {
    return ro();
  }
  exportJSON() {
    return { type: 'linebreak', version: 1 };
  }
}
function pE() {
  return { node: ro() };
}
function ro() {
  return Vl(new ao());
}
function Ml(e) {
  return e instanceof ao;
}
function ic(e, t) {
  return t & 16
    ? 'code'
    : t & 128
    ? 'mark'
    : t & 32
    ? 'sub'
    : t & 64
    ? 'sup'
    : null;
}
function oc(e, t) {
  return t & 1 ? 'strong' : t & 2 ? 'em' : 'span';
}
function lc(e, t, n, r, i) {
  (e = r.classList),
    (r = qo(i, 'base')),
    r !== void 0 && e.add(...r),
    (r = qo(i, 'underlineStrikethrough'));
  let o = !1,
    l = t & 8 && t & 4;
  var s = n & 8 && n & 4;
  r !== void 0 && (s ? ((o = !0), l || e.add(...r)) : l && e.remove(...r));
  for (let u in Qr)
    (s = Qr[u]),
      (r = qo(i, u)),
      r !== void 0 &&
        (n & s
          ? !o || (u !== 'underline' && u !== 'strikethrough')
            ? (!(t & s) || (l && u === 'underline') || u === 'strikethrough') &&
              e.add(...r)
            : t & s && e.remove(...r)
          : t & s && e.remove(...r));
}
function sc(e, t, n) {
  let r = t.firstChild;
  if (((n = n.isComposing()), (e += n ? oa : ''), r == null)) t.textContent = e;
  else if (((t = r.nodeValue), t !== e))
    if (n || xr) {
      n = t.length;
      let i = e.length,
        o = 0,
        l = 0;
      for (; o < n && o < i && t[o] === e[o]; ) o++;
      for (; l + o < n && l + o < i && t[n - l - 1] === e[i - l - 1]; ) l++;
      e = [o, n - o - l, e.slice(o, i - l)];
      let [s, u, a] = e;
      u !== 0 && r.deleteData(s, u), r.insertData(s, a);
    } else r.nodeValue = e;
}
function ms(e, t) {
  return (t = document.createElement(t)), t.appendChild(e), t;
}
class ai extends Yl {
  static getType() {
    return 'text';
  }
  static clone(t) {
    return new ai(t.__text, t.__key);
  }
  constructor(t, n) {
    super(n),
      (this.__text = t),
      (this.__format = 0),
      (this.__style = ''),
      (this.__detail = this.__mode = 0);
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    let t = this.getLatest();
    return JS[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === sr();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return (this.getLatest().__detail & 1) !== 0;
  }
  isUnmergeable() {
    return (this.getLatest().__detail & 2) !== 0;
  }
  hasFormat(t) {
    return (t = Qr[t]), (this.getFormat() & t) !== 0;
  }
  isSimpleText() {
    return this.__type === 'text' && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, n) {
    let r = this.getLatest().__format;
    return ly(r, t, n);
  }
  createDOM(t) {
    var n = this.__format,
      r = ic(this, n);
    let i = oc(this, n),
      o = document.createElement(r === null ? i : r),
      l = o;
    return (
      this.hasFormat('code') && o.setAttribute('spellcheck', 'false'),
      r !== null && ((l = document.createElement(i)), o.appendChild(l)),
      (r = l),
      sc(this.__text, r, this),
      (t = t.theme.text),
      t !== void 0 && lc(i, 0, n, r, t),
      (n = this.__style),
      n !== '' && (o.style.cssText = n),
      o
    );
  }
  updateDOM(t, n, r) {
    let i = this.__text;
    var o = t.__format,
      l = this.__format,
      s = ic(this, o);
    let u = ic(this, l);
    var a = oc(this, o);
    let d = oc(this, l);
    return (s === null ? a : s) !== (u === null ? d : u)
      ? !0
      : s === u && a !== d
      ? ((o = n.firstChild),
        o == null && M(48),
        (t = s = document.createElement(d)),
        sc(i, t, this),
        (r = r.theme.text),
        r !== void 0 && lc(d, 0, l, t, r),
        n.replaceChild(s, o),
        !1)
      : ((a = n),
        u !== null && s !== null && ((a = n.firstChild), a == null && M(49)),
        sc(i, a, this),
        (r = r.theme.text),
        r !== void 0 && o !== l && lc(d, o, l, a, r),
        (l = this.__style),
        t.__style !== l && (n.style.cssText = l),
        !1);
  }
  static importDOM() {
    return {
      '#text': () => ({ conversion: mE, priority: 0 }),
      b: () => ({ conversion: gE, priority: 0 }),
      code: () => ({ conversion: Zn, priority: 0 }),
      em: () => ({ conversion: Zn, priority: 0 }),
      i: () => ({ conversion: Zn, priority: 0 }),
      s: () => ({ conversion: Zn, priority: 0 }),
      span: () => ({ conversion: hE, priority: 0 }),
      strong: () => ({ conversion: Zn, priority: 0 }),
      sub: () => ({ conversion: Zn, priority: 0 }),
      sup: () => ({ conversion: Zn, priority: 0 }),
      u: () => ({ conversion: Zn, priority: 0 }),
    };
  }
  static importJSON(t) {
    let n = Le(t.text);
    return (
      n.setFormat(t.format),
      n.setDetail(t.detail),
      n.setMode(t.mode),
      n.setStyle(t.style),
      n
    );
  }
  exportDOM(t) {
    return (
      ({ element: t } = super.exportDOM(t)),
      (t !== null && ua(t)) || M(132),
      (t.style.whiteSpace = 'pre-wrap'),
      this.hasFormat('bold') && (t = ms(t, 'b')),
      this.hasFormat('italic') && (t = ms(t, 'i')),
      this.hasFormat('strikethrough') && (t = ms(t, 's')),
      this.hasFormat('underline') && (t = ms(t, 'u')),
      { element: t }
    );
  }
  exportJSON() {
    return {
      detail: this.getDetail(),
      format: this.getFormat(),
      mode: this.getMode(),
      style: this.getStyle(),
      text: this.getTextContent(),
      type: 'text',
      version: 1,
    };
  }
  selectionTransform() {}
  setFormat(t) {
    let n = this.getWritable();
    return (n.__format = typeof t == 'string' ? Qr[t] : t), n;
  }
  setDetail(t) {
    let n = this.getWritable();
    return (n.__detail = typeof t == 'string' ? YS[t] : t), n;
  }
  setStyle(t) {
    let n = this.getWritable();
    return (n.__style = t), n;
  }
  toggleFormat(t) {
    return (t = Qr[t]), this.setFormat(this.getFormat() ^ t);
  }
  toggleDirectionless() {
    let t = this.getWritable();
    return (t.__detail ^= 1), t;
  }
  toggleUnmergeable() {
    let t = this.getWritable();
    return (t.__detail ^= 2), t;
  }
  setMode(t) {
    if (((t = QS[t]), this.__mode === t)) return this;
    let n = this.getWritable();
    return (n.__mode = t), n;
  }
  setTextContent(t) {
    if (this.__text === t) return this;
    let n = this.getWritable();
    return (n.__text = t), n;
  }
  select(t, n) {
    dt();
    let r = fe();
    var i = this.getTextContent();
    let o = this.__key;
    if (
      (typeof i == 'string'
        ? ((i = i.length), t === void 0 && (t = i), n === void 0 && (n = i))
        : (n = t = 0),
      W(r))
    )
      (i = sr()),
        (i !== r.anchor.key && i !== r.focus.key) || Ve(o),
        r.setTextNodeRange(this, t, this, n);
    else return Py(o, t, o, n, 'text', 'text');
    return r;
  }
  spliceText(t, n, r, i) {
    let o = this.getWritable(),
      l = o.__text,
      s = r.length,
      u = t;
    0 > u && ((u = s + u), 0 > u && (u = 0));
    let a = fe();
    return (
      i && W(a) && ((t += s), a.setTextNodeRange(o, t, o, t)),
      (n = l.slice(0, u) + r + l.slice(u + n)),
      (o.__text = n),
      o
    );
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...t) {
    dt();
    var n = this.getLatest(),
      r = n.getTextContent(),
      i = n.__key,
      o = sr(),
      l = new Set(t);
    t = [];
    for (var s = r.length, u = '', a = 0; a < s; a++)
      u !== '' && l.has(a) && (t.push(u), (u = '')), (u += r[a]);
    if ((u !== '' && t.push(u), (l = t.length), l === 0)) return [];
    if (t[0] === r) return [n];
    var d = t[0];
    (r = n.getParentOrThrow()), (a = n.getFormat());
    let c = n.getStyle(),
      p = n.__detail;
    (s = !1),
      n.isSegmented()
        ? ((u = Le(d)),
          (u.__format = a),
          (u.__style = c),
          (u.__detail = p),
          (s = !0))
        : ((u = n.getWritable()), (u.__text = d)),
      (n = fe()),
      (u = [u]),
      (d = d.length);
    for (let y = 1; y < l; y++) {
      var f = t[y],
        h = f.length;
      (f = Le(f).getWritable()),
        (f.__format = a),
        (f.__style = c),
        (f.__detail = p);
      let _ = f.__key;
      if (((h = d + h), W(n))) {
        let g = n.anchor,
          m = n.focus;
        g.key === i &&
          g.type === 'text' &&
          g.offset > d &&
          g.offset <= h &&
          ((g.key = _), (g.offset -= d), (n.dirty = !0)),
          m.key === i &&
            m.type === 'text' &&
            m.offset > d &&
            m.offset <= h &&
            ((m.key = _), (m.offset -= d), (n.dirty = !0));
      }
      o === i && Ve(_), (d = h), u.push(f);
    }
    return (
      (i = this.getPreviousSibling()),
      (o = this.getNextSibling()),
      i !== null && Eu(i),
      o !== null && Eu(o),
      (i = r.getWritable()),
      (o = this.getIndexWithinParent()),
      s ? (i.splice(o, 0, u), this.remove()) : i.splice(o, 1, u),
      W(n) && Ou(n, r, o, l - 1),
      u
    );
  }
  mergeWithSibling(t) {
    var n = t === this.getPreviousSibling();
    n || t === this.getNextSibling() || M(50);
    var r = this.__key;
    let i = t.__key,
      o = this.__text,
      l = o.length;
    sr() === i && Ve(r);
    let s = fe();
    if (W(s)) {
      let u = s.anchor,
        a = s.focus;
      u !== null && u.key === i && (vg(u, n, r, t, l), (s.dirty = !0)),
        a !== null && a.key === i && (vg(a, n, r, t, l), (s.dirty = !0));
    }
    return (
      (r = t.__text),
      this.setTextContent(n ? r + o : o + r),
      (n = this.getWritable()),
      t.remove(),
      n
    );
  }
  isTextEntity() {
    return !1;
  }
}
function hE(e) {
  let t = e.style.fontWeight === '700',
    n = e.style.textDecoration === 'line-through',
    r = e.style.fontStyle === 'italic',
    i = e.style.textDecoration === 'underline',
    o = e.style.verticalAlign;
  return {
    forChild: (l) => (
      L(l) &&
        (t && l.toggleFormat('bold'),
        n && l.toggleFormat('strikethrough'),
        r && l.toggleFormat('italic'),
        i && l.toggleFormat('underline'),
        o === 'sub' && l.toggleFormat('subscript'),
        o === 'super' && l.toggleFormat('superscript')),
      l
    ),
    node: null,
  };
}
function gE(e) {
  let t = e.style.fontWeight === 'normal';
  return {
    forChild: (n) => (L(n) && !t && n.toggleFormat('bold'), n),
    node: null,
  };
}
let ag = new WeakMap();
function mE(e) {
  e.parentElement === null && M(129);
  for (
    var t = e.textContent || '', n, r = e.parentNode, i = [e];
    r !== null &&
    (n = ag.get(r)) === void 0 &&
    !(
      r.nodeName === 'PRE' ||
      (r.nodeType === 1 && r.style.whiteSpace.startsWith('pre'))
    );

  )
    i.push(r), (r = r.parentNode);
  for (n = n === void 0 ? r : n, r = 0; r < i.length; r++) ag.set(i[r], n);
  if (n !== null) {
    for (t = t.split(/(\r?\n|\t)/), e = [], i = t.length, n = 0; n < i; n++)
      (r = t[n]),
        r ===
          `
` ||
        r ===
          `\r
`
          ? e.push(ro())
          : r === '	'
          ? e.push(ca())
          : r !== '' && e.push(Le(r));
    return { node: e };
  }
  if (((t = t.replace(/\r/g, '').replace(/[ \t\n]+/g, ' ')), t === ''))
    return { node: null };
  if (t[0] === ' ') {
    for (i = e, n = !0; i !== null && (i = cg(i, !1)) !== null; )
      if (((r = i.textContent || ''), 0 < r.length)) {
        /[ \t\n]$/.test(r) && (t = t.slice(1)), (n = !1);
        break;
      }
    n && (t = t.slice(1));
  }
  if (t[t.length - 1] === ' ') {
    for (i = !0; e !== null && (e = cg(e, !0)) !== null; )
      if (0 < (e.textContent || '').replace(/^( |\t|\r?\n)+/, '').length) {
        i = !1;
        break;
      }
    i && (t = t.slice(0, t.length - 1));
  }
  return t === '' ? { node: null } : { node: Le(t) };
}
let yE = new RegExp(
  /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/,
  'i'
);
function cg(e, t) {
  for (;;) {
    for (var n = void 0; (n = t ? e.nextSibling : e.previousSibling) === null; )
      if (((e = e.parentElement), e === null)) return null;
    if (
      ((e = n),
      e.nodeType === 1 &&
        ((n = e.style.display),
        (n === '' && e.nodeName.match(yE) === null) ||
          (n !== '' && !n.startsWith('inline'))))
    )
      return null;
    for (; (n = t ? e.firstChild : e.lastChild) !== null; ) e = n;
    if (e.nodeType === 3) return e;
    if (e.nodeName === 'BR') return null;
  }
}
let vE = {
  code: 'code',
  em: 'italic',
  i: 'italic',
  s: 'strikethrough',
  strong: 'bold',
  sub: 'subscript',
  sup: 'superscript',
  u: 'underline',
};
function Zn(e) {
  let t = vE[e.nodeName.toLowerCase()];
  return t === void 0
    ? { node: null }
    : {
        forChild: (n) => (L(n) && !n.hasFormat(t) && n.toggleFormat(t), n),
        node: null,
      };
}
function Le(e = '') {
  return Vl(new ai(e));
}
function L(e) {
  return e instanceof ai;
}
class co extends ai {
  static getType() {
    return 'tab';
  }
  static clone(t) {
    let n = new co(t.__key);
    return (
      (n.__text = t.__text),
      (n.__format = t.__format),
      (n.__style = t.__style),
      n
    );
  }
  constructor(t) {
    super('	', t), (this.__detail = 2);
  }
  static importDOM() {
    return null;
  }
  static importJSON(t) {
    let n = ca();
    return n.setFormat(t.format), n.setStyle(t.style), n;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: 'tab', version: 1 };
  }
  setTextContent() {
    M(126);
  }
  setDetail() {
    M(127);
  }
  setMode() {
    M(128);
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function ca() {
  return Vl(new co());
}
class xn {
  constructor(t, n, r) {
    (this._selection = null),
      (this.key = t),
      (this.offset = n),
      (this.type = r);
  }
  is(t) {
    return (
      this.key === t.key && this.offset === t.offset && this.type === t.type
    );
  }
  isBefore(t) {
    let n = this.getNode(),
      r = t.getNode(),
      i = this.offset;
    if (((t = t.offset), $$(n))) {
      var o = n.getDescendantByIndex(i);
      n = o ?? n;
    }
    return (
      $$(r) && ((o = r.getDescendantByIndex(t)), (r = o ?? r)),
      n === r ? i < t : n.isBefore(r)
    );
  }
  getNode() {
    let t = ze(this.key);
    return t === null && M(20), t;
  }
  set(t, n, r) {
    let i = this._selection,
      o = this.key;
    (this.key = t),
      (this.offset = n),
      (this.type = r),
      ho() ||
        (sr() === o && Ve(t),
        i !== null && ((i._cachedNodes = null), (i.dirty = !0)));
  }
}
function uc(e, t) {
  let n = t.__key,
    r = e.offset,
    i = 'element';
  if (L(t)) (i = 'text'), (t = t.getTextContentSize()), r > t && (r = t);
  else if (!$$(t)) {
    var o = t.getNextSibling();
    L(o)
      ? ((n = o.__key), (r = 0), (i = 'text'))
      : (o = t.getParent()) &&
        ((n = o.__key), (r = t.getIndexWithinParent() + 1));
  }
  e.set(n, r, i);
}
function dg(e, t) {
  if ($$(t)) {
    let n = t.getLastDescendant();
    $$(n) || L(n) ? uc(e, n) : uc(e, t);
  } else uc(e, t);
}
function fg(e, t, n, r) {
  let i = e.getNode(),
    o = i.getChildAtIndex(e.offset),
    l = Le(),
    s = ft(i) ? ri().append(l) : l;
  l.setFormat(n),
    l.setStyle(r),
    o === null
      ? i.append(s)
      : (o.insertBefore(s),
        t.type === 'element' &&
          t.key === e.key &&
          t.offset !== e.offset &&
          t.set(t.key, t.offset + 1, 'element')),
    e.is(t) && t.set(l.__key, 0, 'text'),
    e.set(l.__key, 0, 'text');
}
function tr(e, t, n, r) {
  (e.key = t), (e.offset = n), (e.type = r);
}
class da {
  constructor(t) {
    (this.dirty = !1), (this._nodes = t), (this._cachedNodes = null);
  }
  is(t) {
    if (!fo(t)) return !1;
    let n = this._nodes,
      r = t._nodes;
    return n.size === r.size && Array.from(n).every((i) => r.has(i));
  }
  add(t) {
    (this.dirty = !0), this._nodes.add(t), (this._cachedNodes = null);
  }
  delete(t) {
    (this.dirty = !0), this._nodes.delete(t), (this._cachedNodes = null);
  }
  clear() {
    (this.dirty = !0), this._nodes.clear(), (this._cachedNodes = null);
  }
  has(t) {
    return this._nodes.has(t);
  }
  clone() {
    return new da(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText() {}
  insertText() {}
  insertNodes(t, n) {
    let r = this.getNodes(),
      i = r.length;
    var o = r[i - 1];
    if (L(o)) o = o.select();
    else {
      let l = o.getIndexWithinParent() + 1;
      o = o.getParentOrThrow().select(l, l);
    }
    for (o.insertNodes(t, n), t = 0; t < i; t++) r[t].remove();
    return !0;
  }
  getNodes() {
    var t = this._cachedNodes;
    if (t !== null) return t;
    var n = this._nodes;
    t = [];
    for (let r of n) (n = ze(r)), n !== null && t.push(n);
    return ho() || (this._cachedNodes = t), t;
  }
  getTextContent() {
    let t = this.getNodes(),
      n = '';
    for (let r = 0; r < t.length; r++) n += t[r].getTextContent();
    return n;
  }
}
function W(e) {
  return e instanceof ci;
}
function Md(e) {
  let [t, , n] = Ay(e);
  e = n.getChildren();
  let r = e.length;
  var i = e[0].getChildren().length;
  let o = Array(r);
  for (var l = 0; l < r; l++) o[l] = Array(i);
  for (i = 0; i < r; i++) {
    l = e[i].getChildren();
    let s = 0;
    for (let u = 0; u < l.length; u++) {
      for (; o[i][s]; ) s++;
      let a = l[u],
        d = a.__rowSpan || 1,
        c = a.__colSpan || 1;
      for (let p = 0; p < d; p++)
        for (let f = 0; f < c; f++) o[i + p][s + f] = a;
      if (t === a)
        return { colSpan: c, columnIndex: s, rowIndex: i, rowSpan: d };
      s += c;
    }
  }
  return null;
}
class fa {
  constructor(t, n, r) {
    (this.gridKey = t),
      (this.anchor = n),
      (this.focus = r),
      (this.dirty = !1),
      (this._cachedNodes = null),
      (n._selection = this),
      (r._selection = this);
  }
  is(t) {
    return sp(t)
      ? this.gridKey === t.gridKey &&
          this.anchor.is(t.anchor) &&
          this.focus.is(t.focus)
      : !1;
  }
  set(t, n, r) {
    (this.dirty = !0),
      (this.gridKey = t),
      (this.anchor.key = n),
      (this.focus.key = r),
      (this._cachedNodes = null);
  }
  clone() {
    return new fa(this.gridKey, this.anchor, this.focus);
  }
  isCollapsed() {
    return !1;
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getCharacterOffsets() {
    return Ks(this);
  }
  extract() {
    return this.getNodes();
  }
  insertRawText() {}
  insertText() {}
  insertNodes(t, n) {
    let r = this.focus.getNode();
    return bf(r.select(0, r.getChildrenSize())).insertNodes(t, n);
  }
  getShape() {
    var t = ze(this.anchor.key);
    if ((Vt(t) || M(103), (t = Md(t)), t === null))
      throw Error('getCellRect: expected to find AnchorNode');
    var n = ze(this.focus.key);
    Vt(n) || M(104);
    let r = Md(n);
    if (r === null) throw Error('getCellRect: expected to find focusCellNode');
    n = Math.min(t.columnIndex, r.columnIndex);
    let i = Math.max(t.columnIndex, r.columnIndex),
      o = Math.min(t.rowIndex, r.rowIndex);
    return (
      (t = Math.max(t.rowIndex, r.rowIndex)),
      {
        fromX: Math.min(n, i),
        fromY: Math.min(o, t),
        toX: Math.max(n, i),
        toY: Math.max(o, t),
      }
    );
  }
  getNodes() {
    function t(_) {
      let { cell: g, startColumn: m, startRow: v } = _;
      (u = Math.min(u, m)),
        (a = Math.min(a, v)),
        (d = Math.max(d, m + g.__colSpan - 1)),
        (c = Math.max(c, v + g.__rowSpan - 1));
    }
    var n = this._cachedNodes;
    if (n !== null) return n;
    var r = this.anchor.getNode();
    (n = this.focus.getNode()), (r = $u(r, Vt));
    var i = $u(n, Vt);
    Vt(r) || M(103),
      Vt(i) || M(104),
      (n = r.getParent()),
      Ll(n) || M(105),
      (n = n.getParent()),
      fp(n) || M(106);
    let [o, l, s] = Ly(n, r, i),
      u = Math.min(l.startColumn, s.startColumn),
      a = Math.min(l.startRow, s.startRow),
      d = Math.max(
        l.startColumn + l.cell.__colSpan - 1,
        s.startColumn + s.cell.__colSpan - 1
      ),
      c = Math.max(
        l.startRow + l.cell.__rowSpan - 1,
        s.startRow + s.cell.__rowSpan - 1
      );
    (r = u), (i = a);
    for (var p = u, f = a; u < r || a < i || d > p || c > f; ) {
      if (u < r) {
        var h = f - i;
        --r;
        for (var y = 0; y <= h; y++) t(o[i + y][r]);
      }
      if (a < i) for (h = p - r, --i, y = 0; y <= h; y++) t(o[i][r + y]);
      if (d > p) for (h = f - i, p += 1, y = 0; y <= h; y++) t(o[i + y][p]);
      if (c > f) for (h = p - r, f += 1, y = 0; y <= h; y++) t(o[f][r + y]);
    }
    for (n = [n], r = null, i = a; i <= c; i++)
      for (p = u; p <= d; p++)
        ({ cell: f } = o[i][p]),
          (h = f.getParent()),
          Ll(h) || M(107),
          h !== r && n.push(h),
          n.push(f, ...nE(f)),
          (r = h);
    return ho() || (this._cachedNodes = n), n;
  }
  getTextContent() {
    let t = this.getNodes(),
      n = '';
    for (let r = 0; r < t.length; r++) n += t[r].getTextContent();
    return n;
  }
}
function sp(e) {
  return e instanceof fa;
}
class ci {
  constructor(t, n, r, i) {
    (this.anchor = t),
      (this.focus = n),
      (this.dirty = !1),
      (this.format = r),
      (this.style = i),
      (this._cachedNodes = null),
      (t._selection = this),
      (n._selection = this);
  }
  is(t) {
    return W(t)
      ? this.anchor.is(t.anchor) &&
          this.focus.is(t.focus) &&
          this.format === t.format &&
          this.style === t.style
      : !1;
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    var t = this._cachedNodes;
    if (t !== null) return t;
    t = this.anchor;
    var n = this.focus,
      r = t.isBefore(n),
      i = r ? t : n;
    (r = r ? n : t), (t = i.getNode()), (n = r.getNode());
    let o = i.offset;
    return (
      (i = r.offset),
      $$(t) && ((r = t.getDescendantByIndex(o)), (t = r ?? t)),
      $$(n) &&
        ((r = n.getDescendantByIndex(i)),
        r !== null &&
          r !== t &&
          n.getChildAtIndex(i) === r &&
          (r = r.getPreviousSibling()),
        (n = r ?? n)),
      (t = t.is(n)
        ? $$(t) && 0 < t.getChildrenSize()
          ? []
          : [t]
        : t.getNodesBetween(n)),
      ho() || (this._cachedNodes = t),
      t
    );
  }
  setTextNodeRange(t, n, r, i) {
    tr(this.anchor, t.__key, n, 'text'),
      tr(this.focus, r.__key, i, 'text'),
      (this._cachedNodes = null),
      (this.dirty = !0);
  }
  getTextContent() {
    let t = this.getNodes();
    if (t.length === 0) return '';
    let n = t[0],
      r = t[t.length - 1],
      i = this.anchor,
      o = this.focus,
      l = i.isBefore(o),
      [s, u] = Ks(this),
      a = '',
      d = !0;
    for (let c = 0; c < t.length; c++) {
      let p = t[c];
      if ($$(p) && !p.isInline())
        d ||
          (a += `
`),
          (d = !p.isEmpty());
      else if (((d = !1), L(p))) {
        let f = p.getTextContent();
        p === n
          ? p === r
            ? (i.type !== 'element' ||
                o.type !== 'element' ||
                o.offset === i.offset) &&
              (f = s < u ? f.slice(s, u) : f.slice(u, s))
            : (f = l ? f.slice(s) : f.slice(u))
          : p === r && (f = l ? f.slice(0, u) : f.slice(0, s)),
          (a += f);
      } else
        (!de(p) && !Ml(p)) ||
          (p === r && this.isCollapsed()) ||
          (a += p.getTextContent());
    }
    return a;
  }
  applyDOMRange(t) {
    let n = Ce(),
      r = n.getEditorState()._selection;
    if (
      ((t = My(
        t.startContainer,
        t.startOffset,
        t.endContainer,
        t.endOffset,
        n,
        r
      )),
      t !== null)
    ) {
      var [i, o] = t;
      tr(this.anchor, i.key, i.offset, i.type),
        tr(this.focus, o.key, o.offset, o.type),
        (this._cachedNodes = null);
    }
  }
  clone() {
    let t = this.anchor,
      n = this.focus;
    return new ci(
      new xn(t.key, t.offset, t.type),
      new xn(n.key, n.offset, n.type),
      this.format,
      this.style
    );
  }
  toggleFormat(t) {
    (this.format = ly(this.format, t, null)), (this.dirty = !0);
  }
  setStyle(t) {
    (this.style = t), (this.dirty = !0);
  }
  hasFormat(t) {
    return (this.format & Qr[t]) !== 0;
  }
  insertRawText(t) {
    t = t.split(/(\r?\n|\t)/);
    let n = [],
      r = t.length;
    for (let i = 0; i < r; i++) {
      let o = t[i];
      o ===
        `
` ||
      o ===
        `\r
`
        ? n.push(ro())
        : o === '	'
        ? n.push(ca())
        : n.push(Le(o));
    }
    this.insertNodes(n);
  }
  insertText(t) {
    var n = this.anchor,
      r = this.focus,
      i = this.isCollapsed() || n.isBefore(r),
      o = this.format,
      l = this.style;
    i && n.type === 'element'
      ? fg(n, r, o, l)
      : i || r.type !== 'element' || fg(r, n, o, l);
    var s = this.getNodes(),
      u = s.length,
      a = i ? r : n;
    r = (i ? n : r).offset;
    var d = a.offset;
    (n = s[0]), L(n) || M(26), (i = n.getTextContent().length);
    var c = n.getParentOrThrow(),
      p = s[u - 1];
    if (
      this.isCollapsed() &&
      r === i &&
      (n.isSegmented() ||
        n.isToken() ||
        !n.canInsertTextAfter() ||
        (!c.canInsertTextAfter() && n.getNextSibling() === null))
    ) {
      var f = n.getNextSibling();
      if (
        ((L(f) && f.canInsertTextBefore() && !vd(f)) ||
          ((f = Le()),
          f.setFormat(o),
          c.canInsertTextAfter() ? n.insertAfter(f) : c.insertAfter(f)),
        f.select(0, 0),
        (n = f),
        t !== '')
      ) {
        this.insertText(t);
        return;
      }
    } else if (
      this.isCollapsed() &&
      r === 0 &&
      (n.isSegmented() ||
        n.isToken() ||
        !n.canInsertTextBefore() ||
        (!c.canInsertTextBefore() && n.getPreviousSibling() === null))
    ) {
      if (
        ((f = n.getPreviousSibling()),
        (!L(f) || vd(f)) &&
          ((f = Le()),
          f.setFormat(o),
          c.canInsertTextBefore() ? n.insertBefore(f) : c.insertBefore(f)),
        f.select(),
        (n = f),
        t !== '')
      ) {
        this.insertText(t);
        return;
      }
    } else if (n.isSegmented() && r !== i)
      (c = Le(n.getTextContent())), c.setFormat(o), n.replace(c), (n = c);
    else if (
      !(
        this.isCollapsed() ||
        t === '' ||
        ((f = p.getParent()),
        c.canInsertTextBefore() &&
          c.canInsertTextAfter() &&
          (!$$(f) || (f.canInsertTextBefore() && f.canInsertTextAfter())))
      )
    ) {
      this.insertText(''),
        Dy(this.anchor, this.focus, null),
        this.insertText(t);
      return;
    }
    if (u === 1)
      if (n.isToken()) (t = Le(t)), t.select(), n.replace(t);
      else {
        if (
          ((s = n.getFormat()),
          (u = n.getStyle()),
          r === d && (s !== o || u !== l))
        )
          if (n.getTextContent() === '') n.setFormat(o), n.setStyle(l);
          else {
            (s = Le(t)),
              s.setFormat(o),
              s.setStyle(l),
              s.select(),
              r === 0
                ? n.insertBefore(s, !1)
                : (([u] = n.splitText(r)), u.insertAfter(s, !1)),
              s.isComposing() &&
                this.anchor.type === 'text' &&
                (this.anchor.offset -= t.length);
            return;
          }
        (n = n.spliceText(r, d - r, t, !0)),
          n.getTextContent() === ''
            ? n.remove()
            : this.anchor.type === 'text' &&
              (n.isComposing()
                ? (this.anchor.offset -= t.length)
                : ((this.format = s), (this.style = u)));
      }
    else {
      if (
        ((o = new Set([...n.getParentKeys(), ...p.getParentKeys()])),
        (f = $$(n) ? n : n.getParentOrThrow()),
        (l = $$(p) ? p : p.getParentOrThrow()),
        (c = p),
        !f.is(l) && l.isInline())
      )
        do (c = l), (l = l.getParentOrThrow());
        while (l.isInline());
      if (
        (a.type === 'text' && (d !== 0 || p.getTextContent() === '')) ||
        (a.type === 'element' && p.getIndexWithinParent() < d)
      )
        if (L(p) && !p.isToken() && d !== p.getTextContentSize()) {
          if (p.isSegmented()) {
            var h = Le(p.getTextContent());
            p.replace(h), (p = h);
          }
          ft(a.getNode()) || (p = p.spliceText(0, d, '')), o.add(p.__key);
        } else
          (a = p.getParentOrThrow()),
            a.canBeEmpty() || a.getChildrenSize() !== 1
              ? p.remove()
              : a.remove();
      else o.add(p.__key);
      for (
        a = l.getChildren(),
          d = new Set(s),
          p = f.is(l),
          f = f.isInline() && n.getNextSibling() === null ? f : n,
          h = a.length - 1;
        0 <= h;
        h--
      ) {
        let y = a[h];
        if (y.is(n) || ($$(y) && y.isParentOf(n))) break;
        y.isAttached() &&
          (!d.has(y) || y.is(c) ? p || f.insertAfter(y, !1) : y.remove());
      }
      if (!p)
        for (a = l, d = null; a !== null; )
          (l = a.getChildren()),
            (p = l.length),
            (p === 0 || l[p - 1].is(d)) && (o.delete(a.__key), (d = a)),
            (a = a.getParent());
      for (
        n.isToken()
          ? r === i
            ? n.select()
            : ((t = Le(t)), t.select(), n.replace(t))
          : ((n = n.spliceText(r, i - r, t, !0)),
            n.getTextContent() === ''
              ? n.remove()
              : n.isComposing() &&
                this.anchor.type === 'text' &&
                (this.anchor.offset -= t.length)),
          t = 1;
        t < u;
        t++
      )
        (n = s[t]), o.has(n.__key) || n.remove();
    }
  }
  removeText() {
    this.insertText('');
  }
  formatText(t) {
    if (this.isCollapsed()) this.toggleFormat(t), Ve(null);
    else {
      var n = this.getNodes(),
        r = [];
      for (var i of n) L(i) && r.push(i);
      var o = r.length;
      if (o === 0) this.toggleFormat(t), Ve(null);
      else {
        i = this.anchor;
        var l = this.focus,
          s = this.isBackward();
        (n = s ? l : i), (i = s ? i : l);
        var u = 0,
          a = r[0];
        if (
          ((l = n.type === 'element' ? 0 : n.offset),
          n.type === 'text' &&
            l === a.getTextContentSize() &&
            ((u = 1), (a = r[1]), (l = 0)),
          a != null)
        ) {
          s = a.getFormatFlags(t, null);
          var d = o - 1,
            c = r[d];
          if (
            ((o = i.type === 'text' ? i.offset : c.getTextContentSize()),
            a.is(c))
          )
            l !== o &&
              (l === 0 && o === a.getTextContentSize()
                ? a.setFormat(s)
                : ((t = a.splitText(l, o)),
                  (t = l === 0 ? t[0] : t[1]),
                  t.setFormat(s),
                  n.type === 'text' && n.set(t.__key, 0, 'text'),
                  i.type === 'text' && i.set(t.__key, o - l, 'text')),
              (this.format = s));
          else {
            l !== 0 && (([, a] = a.splitText(l)), (l = 0)), a.setFormat(s);
            var p = c.getFormatFlags(t, s);
            for (
              0 < o &&
                (o !== c.getTextContentSize() && ([c] = c.splitText(o)),
                c.setFormat(p)),
                u += 1;
              u < d;
              u++
            ) {
              let f = r[u];
              if (!f.isToken()) {
                let h = f.getFormatFlags(t, p);
                f.setFormat(h);
              }
            }
            n.type === 'text' && n.set(a.__key, l, 'text'),
              i.type === 'text' && i.set(c.__key, o, 'text'),
              (this.format = s | p);
          }
        }
      }
    }
  }
  insertNodes(t, n) {
    if (!this.isCollapsed()) {
      var r = this.isBackward() ? this.anchor : this.focus,
        i = r.getNode().getNextSibling();
      if (
        ((i = i ? i.getKey() : null),
        (r = (r = r.getNode().getPreviousSibling()) ? r.getKey() : null),
        this.removeText(),
        this.isCollapsed() && this.focus.type === 'element')
      ) {
        if (this.focus.key === i && this.focus.offset === 0) {
          var o = Le();
          this.focus.getNode().insertBefore(o);
        } else
          this.focus.key === r &&
            this.focus.offset === this.focus.getNode().getChildrenSize() &&
            ((o = Le()), this.focus.getNode().insertAfter(o));
        o &&
          (this.focus.set(o.__key, 0, 'text'),
          this.anchor.set(o.__key, 0, 'text'));
      }
    }
    (o = this.anchor), (r = o.offset);
    var l = o.getNode();
    (i = l),
      o.type === 'element' &&
        ((o = o.getNode()),
        (i = o.getChildAtIndex(r - 1)),
        (i = i === null ? o : i)),
      (o = []);
    var s = l.getNextSiblings(),
      u = nn(l) ? null : l.getTopLevelElementOrThrow();
    if (L(l))
      if (((i = l.getTextContent().length), r === 0 && i !== 0))
        (i = l.getPreviousSibling()),
          (i = i !== null ? i : l.getParentOrThrow()),
          o.push(l);
      else if (r === i) i = l;
      else {
        if (l.isToken()) return !1;
        ([i, l] = l.splitText(r)), o.push(l);
      }
    (l = i), o.push(...s), (s = t[0]);
    var a = !1,
      d = null;
    for (let h = 0; h < t.length; h++) {
      var c = t[h];
      if (nn(i) || de(i) || !$$(c) || c.isInline())
        a && !$$(c) && !de(c) && nn(i.getParent()) && M(28);
      else {
        if (c.is(s)) {
          if ($$(i) && i.isEmpty() && i.canReplaceWith(c)) {
            i.replace(c), (i = c), (a = !0);
            continue;
          }
          if (((a = c.getFirstDescendant()), sy(a))) {
            for (var p = a.getParentOrThrow(); p.isInline(); )
              p = p.getParentOrThrow();
            if (((d = p.getChildren()), (a = d.length), $$(i))) {
              var f = i.getFirstChild();
              for (let y = 0; y < a; y++) {
                let _ = d[y];
                f === null ? i.append(_) : f.insertAfter(_), (f = _);
              }
            } else {
              for (f = a - 1; 0 <= f; f--) i.insertAfter(d[f]);
              i = i.getParentOrThrow();
            }
            if (((d = d[a - 1]), p.remove(), (a = !0), p.is(c))) continue;
          }
        }
        L(i) && (u === null && M(27), (i = u));
      }
      (a = !1),
        $$(i) && !i.isInline()
          ? ((d = c),
            de(c) && !c.isInline()
              ? (i =
                  t.length === 1 && i.canBeEmpty() && i.isEmpty()
                    ? i.insertBefore(c, !1)
                    : i.insertAfter(c, !1))
              : $$(c)
              ? (c.canBeEmpty() || !c.isEmpty()) &&
                (ft(i)
                  ? ((p = i.getChildAtIndex(r)),
                    p !== null ? p.insertBefore(c) : i.append(c),
                    (i = c))
                  : c.isInline()
                  ? (i.append(c), (i = c))
                  : (i = i.insertAfter(c, !1)))
              : ((p = i.getFirstChild()),
                p !== null ? p.insertBefore(c) : i.append(c),
                (i = c)))
          : !$$(c) || ($$(c) && c.isInline()) || (de(i) && !i.isInline())
          ? ((d = c),
            W(this) && de(c) && ($$(i) || L(i)) && !c.isInline()
              ? (L(i)
                  ? ((p = i.getParentOrThrow()),
                    ([i] = i.splitText(r)),
                    (i = i.getIndexWithinParent() + 1))
                  : ((p = i), (i = r)),
                ([, i] = my(p, i)),
                (i = i.insertBefore(c)))
              : (i = i.insertAfter(c, !1)))
          : ((c = i.getParentOrThrow()), Ml(i) && i.remove(), (i = c), h--);
    }
    if (
      (n &&
        (L(l)
          ? l.select()
          : ((t = i.getPreviousSibling()),
            L(t)
              ? t.select()
              : ((t = i.getIndexWithinParent()),
                i.getParentOrThrow().select(t, t)))),
      $$(i))
    ) {
      if (
        ((t = L(d)
          ? d
          : $$(d) && d.isInline()
          ? d.getLastDescendant()
          : i.getLastDescendant()),
        n ||
          (t === null
            ? i.select()
            : L(t)
            ? t.getTextContent() === ''
              ? t.selectPrevious()
              : t.select()
            : t.selectNext()),
        o.length !== 0)
      )
        for (n = i, t = o.length - 1; 0 <= t; t--)
          (r = o[t]),
            (u = r.getParentOrThrow()),
            !$$(i) || Pd(r) || (de(r) && (!r.isInline() || r.isIsolated()))
              ? $$(i) || Pd(r)
                ? $$(r) && !r.canInsertAfter(i)
                  ? ((l = u.constructor.clone(u)),
                    $$(l) || M(29),
                    l.append(r),
                    i.insertAfter(l))
                  : i.insertAfter(r)
                : (i.insertBefore(r), (i = r))
              : (n === i ? i.append(r) : i.insertBefore(r), (i = r)),
            u.isEmpty() && !u.canBeEmpty() && u.remove();
    } else
      n ||
        (L(i)
          ? i.select()
          : ((n = i.getParentOrThrow()),
            (t = i.getIndexWithinParent() + 1),
            n.select(t, t)));
    return !0;
  }
  insertParagraph() {
    this.isCollapsed() || this.removeText();
    var t = this.anchor,
      n = t.offset,
      r = [];
    if (t.type === 'text') {
      var i = t.getNode(),
        o = i.getNextSiblings().reverse(),
        l = i.getParentOrThrow(),
        s = l.isInline(),
        u = s ? l.getTextContentSize() : i.getTextContentSize();
      n === 0
        ? o.push(i)
        : (s && (r = l.getNextSiblings()),
          n === u ||
            (s && n === i.getTextContentSize()) ||
            (([, i] = i.splitText(n)), o.push(i)));
    } else {
      if (((l = t.getNode()), nn(l))) {
        (o = ri()),
          (r = l.getChildAtIndex(n)),
          o.select(),
          r !== null ? r.insertBefore(o, !1) : l.append(o);
        return;
      }
      o = l.getChildren().slice(n).reverse();
    }
    if (((i = o.length), n === 0 && 0 < i && l.isInline())) {
      if (((r = l.getParentOrThrow()), (o = r.insertNewAfter(this, !1)), $$(o)))
        for (r = r.getChildren(), l = 0; l < r.length; l++) o.append(r[l]);
    } else if (((s = l.insertNewAfter(this, !1)), s === null))
      this.insertLineBreak();
    else if ($$(s))
      if (
        ((u = l.getFirstChild()),
        n === 0 && (l.is(t.getNode()) || (u && u.is(t.getNode()))) && 0 < i)
      )
        l.insertBefore(s);
      else {
        if (((l = null), (n = r.length), (t = s.getParentOrThrow()), 0 < n))
          for (u = 0; u < n; u++) t.append(r[u]);
        if (i !== 0)
          for (r = 0; r < i; r++)
            (n = o[r]), l === null ? s.append(n) : l.insertBefore(n), (l = n);
        s.canBeEmpty() || s.getChildrenSize() !== 0
          ? s.selectStart()
          : (s.selectPrevious(), s.remove());
      }
  }
  insertLineBreak(t) {
    let n = ro();
    var r = this.anchor;
    r.type === 'element' &&
      ((r = r.getNode()), ft(r) && this.insertParagraph()),
      t
        ? this.insertNodes([n], !0)
        : this.insertNodes([n]) && n.selectNext(0, 0);
  }
  getCharacterOffsets() {
    return Ks(this);
  }
  extract() {
    var t = this.getNodes(),
      n = t.length,
      r = n - 1,
      i = this.anchor;
    let o = this.focus;
    var l = t[0];
    let s = t[r],
      [u, a] = Ks(this);
    return n === 0
      ? []
      : n === 1
      ? L(l) && !this.isCollapsed()
        ? ((t = u > a ? a : u),
          (r = l.splitText(t, u > a ? u : a)),
          (t = t === 0 ? r[0] : r[1]),
          t != null ? [t] : [])
        : [l]
      : ((n = i.isBefore(o)),
        L(l) &&
          ((i = n ? u : a),
          i === l.getTextContentSize()
            ? t.shift()
            : i !== 0 && (([, l] = l.splitText(i)), (t[0] = l))),
        L(s) &&
          ((l = s.getTextContent().length),
          (n = n ? a : u),
          n === 0 ? t.pop() : n !== l && (([s] = s.splitText(n)), (t[r] = s))),
        t);
  }
  modify(t, n, r) {
    var i = this.focus,
      o = this.anchor,
      l = t === 'move',
      s = _d(i, n);
    if (de(s) && !s.isIsolated())
      l && s.isKeyboardSelectable()
        ? ((n = Ld()), n.add(s.__key), _n(n))
        : ((t = n ? s.getPreviousSibling() : s.getNextSibling()),
          L(t)
            ? ((s = t.__key),
              (n = n ? t.getTextContent().length : 0),
              i.set(s, n, 'text'),
              l && o.set(s, n, 'text'))
            : ((r = s.getParentOrThrow()),
              $$(t)
                ? ((r = t.__key), (s = n ? t.getChildrenSize() : 0))
                : ((s = s.getIndexWithinParent()), (r = r.__key), n || s++),
              i.set(r, s, 'element'),
              l && o.set(r, s, 'element')));
    else if (((o = Ce()), (i = Nn(o._window)))) {
      var u = o._blockCursorElement,
        a = o._rootElement;
      if (
        (a === null ||
          u === null ||
          !$$(s) ||
          s.isInline() ||
          s.canBeEmpty() ||
          xd(u, o, a),
        i.modify(t, n ? 'backward' : 'forward', r),
        0 < i.rangeCount &&
          ((s = i.getRangeAt(0)),
          (o = this.anchor.getNode()),
          (o = ft(o) ? o : hy(o)),
          this.applyDOMRange(s),
          (this.dirty = !0),
          !l))
      ) {
        for (l = this.getNodes(), t = [], r = !1, u = 0; u < l.length; u++)
          (a = l[u]), Tu(a, o) ? t.push(a) : (r = !0);
        r &&
          0 < t.length &&
          (n
            ? ((n = t[0]),
              $$(n) ? n.selectStart() : n.getParentOrThrow().selectStart())
            : ((n = t[t.length - 1]),
              $$(n) ? n.selectEnd() : n.getParentOrThrow().selectEnd())),
          (i.anchorNode !== s.startContainer ||
            i.anchorOffset !== s.startOffset) &&
            ((n = this.focus),
            (l = this.anchor),
            (i = l.key),
            (s = l.offset),
            (o = l.type),
            tr(l, n.key, n.offset, n.type),
            tr(n, i, s, o),
            (this._cachedNodes = null));
      }
    }
  }
  deleteCharacter(t) {
    let n = this.isCollapsed();
    if (this.isCollapsed()) {
      var r = this.anchor,
        i = this.focus,
        o = r.getNode();
      if (
        !t &&
        ((r.type === 'element' && $$(o) && r.offset === o.getChildrenSize()) ||
          (r.type === 'text' && r.offset === o.getTextContentSize()))
      ) {
        var l = o.getParent();
        if (
          ((l = o.getNextSibling() || (l === null ? null : l.getNextSibling())),
          $$(l) && l.isShadowRoot())
        )
          return;
      }
      if (((l = _d(i, t)), de(l) && !l.isIsolated())) {
        l.isKeyboardSelectable() && $$(o) && o.getChildrenSize() === 0
          ? (o.remove(), (t = Ld()), t.add(l.__key), _n(t))
          : (l.remove(), Ce().dispatchCommand(ra, void 0));
        return;
      }
      if (!t && $$(l) && $$(o) && o.isEmpty()) {
        o.remove(), l.selectStart();
        return;
      }
      if ((this.modify('extend', t, 'character'), this.isCollapsed())) {
        if (
          t &&
          r.offset === 0 &&
          (r.type === 'element'
            ? r.getNode()
            : r.getNode().getParentOrThrow()
          ).collapseAtStart(this)
        )
          return;
      } else {
        if (
          ((l = i.type === 'text' ? i.getNode() : null),
          (o = r.type === 'text' ? r.getNode() : null),
          l !== null && l.isSegmented())
        ) {
          if (
            ((r = i.offset),
            (i = l.getTextContentSize()),
            l.is(o) || (t && r !== i) || (!t && r !== 0))
          ) {
            hg(l, t, r);
            return;
          }
        } else if (
          o !== null &&
          o.isSegmented() &&
          ((r = r.offset),
          (i = o.getTextContentSize()),
          o.is(l) || (t && r !== 0) || (!t && r !== i))
        ) {
          hg(o, t, r);
          return;
        }
        if (
          ((o = this.anchor),
          (l = this.focus),
          (r = o.getNode()),
          (i = l.getNode()),
          r === i && o.type === 'text' && l.type === 'text')
        ) {
          var s = o.offset,
            u = l.offset;
          let a = s < u;
          (i = a ? s : u),
            (u = a ? u : s),
            (s = u - 1),
            i !== s &&
              ((r = r.getTextContent().slice(i, u)),
              dy(r) || (t ? (l.offset = s) : (o.offset = s)));
        }
      }
    }
    this.removeText(),
      t &&
        !n &&
        this.isCollapsed() &&
        this.anchor.type === 'element' &&
        this.anchor.offset === 0 &&
        ((t = this.anchor.getNode()),
        t.isEmpty() &&
          ft(t.getParent()) &&
          t.getIndexWithinParent() === 0 &&
          t.collapseAtStart(this));
  }
  deleteLine(t) {
    this.isCollapsed() &&
      (this.anchor.type === 'text' && this.modify('extend', t, 'lineboundary'),
      (t ? this.focus : this.anchor).offset === 0 &&
        this.modify('extend', t, 'character')),
      this.removeText();
  }
  deleteWord(t) {
    this.isCollapsed() && this.modify('extend', t, 'word'), this.removeText();
  }
}
function fo(e) {
  return e instanceof da;
}
function pg(e) {
  let t = e.offset;
  return e.type === 'text'
    ? t
    : ((e = e.getNode()),
      t === e.getChildrenSize() ? e.getTextContent().length : 0);
}
function Ks(e) {
  let t = e.anchor;
  return (
    (e = e.focus),
    t.type === 'element' &&
    e.type === 'element' &&
    t.key === e.key &&
    t.offset === e.offset
      ? [0, 0]
      : [pg(t), pg(e)]
  );
}
function hg(e, t, n) {
  let r = e.getTextContent().split(/(?=\s)/g),
    i = r.length,
    o = 0,
    l = 0;
  for (let s = 0; s < i; s++) {
    let u = r[s],
      a = s === i - 1;
    if (((l = o), (o += u.length), (t && o === n) || o > n || a)) {
      r.splice(s, 1), a && (l = void 0);
      break;
    }
  }
  (t = r.join('').trim()),
    t === '' ? e.remove() : (e.setTextContent(t), e.select(l, l));
}
function gg(e, t, n, r) {
  var i = t;
  if (e.nodeType === 1) {
    let s = !1;
    var o = e.childNodes,
      l = o.length;
    i === l && ((s = !0), (i = l - 1));
    let u = o[i];
    if (
      ((l = !1),
      u === r._blockCursorElement
        ? ((u = o[i + 1]), (l = !0))
        : r._blockCursorElement !== null && i--,
      (r = Pi(u)),
      L(r))
    )
      i = s ? r.getTextContentSize() : 0;
    else {
      if (((o = Pi(e)), o === null)) return null;
      if (
        ($$(o)
          ? ((e = o.getChildAtIndex(i)),
            (t = $$(e)) &&
              ((t = e.getParent()),
              (t =
                n === null ||
                t === null ||
                !t.canBeEmpty() ||
                t !== n.getNode())),
            t &&
              ((n = s ? e.getLastDescendant() : e.getFirstDescendant()),
              n === null
                ? ((o = e), (i = 0))
                : ((e = n), (o = $$(e) ? e : e.getParentOrThrow()))),
            L(e)
              ? ((r = e), (o = null), (i = s ? e.getTextContentSize() : 0))
              : e !== o && s && !l && i++)
          : ((i = o.getIndexWithinParent()),
            (i = t === 0 && de(o) && Pi(e) === o ? i : i + 1),
            (o = o.getParentOrThrow())),
        $$(o))
      )
        return new xn(o.__key, i, 'element');
    }
  } else r = Pi(e);
  return L(r) ? new xn(r.__key, i, 'text') : null;
}
function mg(e, t, n) {
  var r = e.offset,
    i = e.getNode();
  r === 0
    ? ((r = i.getPreviousSibling()),
      (i = i.getParent()),
      t
        ? (n || !t) &&
          r === null &&
          $$(i) &&
          i.isInline() &&
          ((t = i.getPreviousSibling()),
          L(t) && ((e.key = t.__key), (e.offset = t.getTextContent().length)))
        : $$(r) && !n && r.isInline()
        ? ((e.key = r.__key),
          (e.offset = r.getChildrenSize()),
          (e.type = 'element'))
        : L(r) && ((e.key = r.__key), (e.offset = r.getTextContent().length)))
    : r === i.getTextContent().length &&
      ((r = i.getNextSibling()),
      (i = i.getParent()),
      t && $$(r) && r.isInline()
        ? ((e.key = r.__key), (e.offset = 0), (e.type = 'element'))
        : (n || t) &&
          r === null &&
          $$(i) &&
          i.isInline() &&
          !i.canInsertTextAfter() &&
          ((t = i.getNextSibling()),
          L(t) && ((e.key = t.__key), (e.offset = 0))));
}
function Dy(e, t, n) {
  if (e.type === 'text' && t.type === 'text') {
    var r = e.isBefore(t);
    let i = e.is(t);
    mg(e, r, i),
      mg(t, !r, i),
      i && ((t.key = e.key), (t.offset = e.offset), (t.type = e.type)),
      (r = Ce()),
      r.isComposing() &&
        r._compositionKey !== e.key &&
        W(n) &&
        ((r = n.anchor),
        (n = n.focus),
        tr(e, r.key, r.offset, r.type),
        tr(t, n.key, n.offset, n.type));
  }
}
function My(e, t, n, r, i, o) {
  return e === null ||
    n === null ||
    !Ul(i, e, n) ||
    ((t = gg(e, t, W(o) ? o.anchor : null, i)), t === null) ||
    ((r = gg(n, r, W(o) ? o.focus : null, i)),
    r === null ||
      (t.type === 'element' &&
        r.type === 'element' &&
        ((e = Pi(e)), (n = Pi(n)), de(e) && de(n))))
    ? null
    : (Dy(t, r, o), [t, r]);
}
function Pd(e) {
  return $$(e) && !e.isInline();
}
function Py(e, t, n, r, i, o) {
  let l = wn();
  return (
    (e = new ci(new xn(e, t, i), new xn(n, r, o), 0, '')),
    (e.dirty = !0),
    (l._selection = e)
  );
}
function Ld() {
  return new da(new Set());
}
function _E(e) {
  let t = e.getEditorState()._selection,
    n = Nn(e._window);
  return fo(t) || sp(t) ? t.clone() : up(t, n, e);
}
function up(e, t, n) {
  var r = n._window;
  if (r === null) return null;
  var i = r.event,
    o = i ? i.type : void 0;
  (r = o === 'selectionchange'),
    (i =
      !yd &&
      (r ||
        o === 'beforeinput' ||
        o === 'compositionstart' ||
        o === 'compositionend' ||
        (o === 'click' && i && i.detail === 3) ||
        o === 'drop' ||
        o === void 0));
  let l;
  if (!W(e) || i) {
    if (t === null) return null;
    if (
      ((i = t.anchorNode),
      (o = t.focusNode),
      (l = t.anchorOffset),
      (t = t.focusOffset),
      r && W(e) && !Ul(n, i, o))
    )
      return e.clone();
  } else return e.clone();
  if (((n = My(i, l, o, t, n, e)), n === null)) return null;
  let [s, u] = n;
  return new ci(s, u, W(e) ? e.format : 0, W(e) ? e.style : '');
}
function fe() {
  return wn()._selection;
}
function po() {
  return Ce()._editorState._selection;
}
function Ou(e, t, n, r = 1) {
  var i = e.anchor,
    o = e.focus,
    l = i.getNode(),
    s = o.getNode();
  if (t.is(l) || t.is(s)) {
    if (((l = t.__key), e.isCollapsed()))
      (t = i.offset),
        ((n <= t && 0 < r) || (n < t && 0 > r)) &&
          ((n = Math.max(0, t + r)),
          i.set(l, n, 'element'),
          o.set(l, n, 'element'),
          yg(e));
    else {
      let a = e.isBackward();
      s = a ? o : i;
      var u = s.getNode();
      (i = a ? i : o),
        (o = i.getNode()),
        t.is(u) &&
          ((u = s.offset),
          ((n <= u && 0 < r) || (n < u && 0 > r)) &&
            s.set(l, Math.max(0, u + r), 'element')),
        t.is(o) &&
          ((t = i.offset),
          ((n <= t && 0 < r) || (n < t && 0 > r)) &&
            i.set(l, Math.max(0, t + r), 'element'));
    }
    yg(e);
  }
}
function yg(e) {
  var t = e.anchor,
    n = t.offset;
  let r = e.focus;
  var i = r.offset,
    o = t.getNode(),
    l = r.getNode();
  if (e.isCollapsed())
    $$(o) &&
      ((l = o.getChildrenSize()),
      (l = (i = n >= l) ? o.getChildAtIndex(l - 1) : o.getChildAtIndex(n)),
      L(l) &&
        ((n = 0),
        i && (n = l.getTextContentSize()),
        t.set(l.__key, n, 'text'),
        r.set(l.__key, n, 'text')));
  else {
    if ($$(o)) {
      let s = o.getChildrenSize();
      (n = (e = n >= s) ? o.getChildAtIndex(s - 1) : o.getChildAtIndex(n)),
        L(n) &&
          ((o = 0),
          e && (o = n.getTextContentSize()),
          t.set(n.__key, o, 'text'));
    }
    $$(l) &&
      ((n = l.getChildrenSize()),
      (i = (t = i >= n) ? l.getChildAtIndex(n - 1) : l.getChildAtIndex(i)),
      L(i) &&
        ((l = 0),
        t && (l = i.getTextContentSize()),
        r.set(i.__key, l, 'text')));
  }
}
function xE(e, t) {
  if (((t = t.getEditorState()._selection), (e = e._selection), W(e))) {
    var n = e.anchor;
    let r = e.focus,
      i;
    n.type === 'text' && ((i = n.getNode()), i.selectionTransform(t, e)),
      r.type === 'text' &&
        ((n = r.getNode()), i !== n && n.selectionTransform(t, e));
  }
}
function Ru(e, t, n, r, i) {
  let o = null,
    l = 0,
    s = null;
  r !== null
    ? ((o = r.__key),
      L(r)
        ? ((l = r.getTextContentSize()), (s = 'text'))
        : $$(r) && ((l = r.getChildrenSize()), (s = 'element')))
    : i !== null &&
      ((o = i.__key), L(i) ? (s = 'text') : $$(i) && (s = 'element')),
    o !== null && s !== null
      ? e.set(o, l, s)
      : ((l = t.getIndexWithinParent()),
        l === -1 && (l = n.getChildrenSize()),
        e.set(n.__key, l, 'element'));
}
function vg(e, t, n, r, i) {
  e.type === 'text'
    ? ((e.key = n), t || (e.offset += i))
    : e.offset > r.getIndexWithinParent() && --e.offset;
}
function Ly(e, t, n) {
  let r = [],
    i = null,
    o = null;
  e = e.getChildren();
  for (let d = 0; d < e.length; d++) {
    var l = e[d];
    Ll(l) || M(108);
    var s = l.getChildren();
    l = 0;
    for (let c of s) {
      for (Vt(c) || M(109); r[d] !== void 0 && r[d][l] !== void 0; ) l++;
      s = d;
      var u = l,
        a = c;
      let p = { cell: a, startColumn: u, startRow: s },
        f = a.__rowSpan,
        h = a.__colSpan;
      for (let y = 0; y < f; y++) {
        r[s + y] === void 0 && (r[s + y] = []);
        for (let _ = 0; _ < h; _++) r[s + y][u + _] = p;
      }
      t.is(a) && (i = p), n.is(a) && (o = p), (l += c.__colSpan);
    }
  }
  return i === null && M(110), o === null && M(111), [r, i, o];
}
function Ay(e) {
  e instanceof dp ||
    (e instanceof Yl
      ? ((e = $u(e, Vt)), Vt(e) || M(114))
      : ((e = $u(e.getNode(), Vt)), Vt(e) || M(114)));
  let t = e.getParent();
  Ll(t) || M(115);
  let n = t.getParent();
  return fp(n) || M(116), [e, t, n];
}
let Fe = null,
  Be = null,
  Tt = !1,
  ac = !1,
  Pl = 0,
  _g = { characterData: !0, childList: !0, subtree: !0 };
function ho() {
  return Tt || (Fe !== null && Fe._readOnly);
}
function dt() {
  Tt && M(13);
}
function wn() {
  return Fe === null && M(15), Fe;
}
function Ce() {
  return Be === null && M(16), Be;
}
function xg(e, t, n) {
  var r = t.__type;
  let i = e._nodes.get(r);
  for (
    i === void 0 && M(30, r),
      e = n.get(r),
      e === void 0 && ((e = Array.from(i.transforms)), n.set(r, e)),
      n = e.length,
      r = 0;
    r < n && (e[r](t), t.isAttached());
    r++
  );
}
function CE(e, t) {
  (t = t._dirtyLeaves), (e = e._nodeMap);
  for (let n of t)
    (t = e.get(n)),
      L(t) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && oy(t);
}
function SE(e, t) {
  let n = t._dirtyLeaves,
    r = t._dirtyElements;
  e = e._nodeMap;
  let i = sr(),
    o = new Map();
  var l = n;
  let s = l.size;
  for (var u = r, a = u.size; 0 < s || 0 < a; ) {
    if (0 < s) {
      t._dirtyLeaves = new Set();
      for (let d of l)
        (l = e.get(d)),
          L(l) &&
            l.isAttached() &&
            l.isSimpleText() &&
            !l.isUnmergeable() &&
            oy(l),
          l !== void 0 &&
            l !== void 0 &&
            l.__key !== i &&
            l.isAttached() &&
            xg(t, l, o),
          n.add(d);
      if (((l = t._dirtyLeaves), (s = l.size), 0 < s)) {
        Pl++;
        continue;
      }
    }
    (t._dirtyLeaves = new Set()), (t._dirtyElements = new Map());
    for (let d of u)
      (u = d[0]),
        (a = d[1]),
        (u === 'root' || a) &&
          ((l = e.get(u)),
          l !== void 0 &&
            l !== void 0 &&
            l.__key !== i &&
            l.isAttached() &&
            xg(t, l, o),
          r.set(u, a));
    (l = t._dirtyLeaves),
      (s = l.size),
      (u = t._dirtyElements),
      (a = u.size),
      Pl++;
  }
  (t._dirtyLeaves = n), (t._dirtyElements = r);
}
function ap(e, t) {
  var n = e.type,
    r = t.get(n);
  if (
    (r === void 0 && M(17, n),
    (n = r.klass),
    e.type !== n.getType() && M(18, n.name),
    (n = n.importJSON(e)),
    (e = e.children),
    $$(n) && Array.isArray(e))
  )
    for (r = 0; r < e.length; r++) {
      let i = ap(e[r], t);
      n.append(i);
    }
  return n;
}
function Cg(e, t) {
  let n = Fe,
    r = Tt,
    i = Be;
  (Fe = e), (Tt = !0), (Be = null);
  try {
    return t();
  } finally {
    (Fe = n), (Tt = r), (Be = i);
  }
}
function Xr(e, t) {
  let n = e._pendingEditorState,
    r = e._rootElement,
    i = e._headless || r === null;
  if (n !== null) {
    var o = e._editorState,
      l = o._selection,
      s = n._selection,
      u = e._dirtyType !== 0,
      a = Fe,
      d = Tt,
      c = Be,
      p = e._updating,
      f = e._observer,
      h = null;
    if (
      ((e._pendingEditorState = null),
      (e._editorState = n),
      !i && u && f !== null)
    ) {
      (Be = e), (Fe = n), (Tt = !1), (e._updating = !0);
      try {
        let ye = e._dirtyType,
          it = e._dirtyElements,
          ot = e._dirtyLeaves;
        f.disconnect();
        var y = ye,
          _ = it,
          g = ot;
        (ct = Pn = Oe = ''),
          (vy = y === 2),
          (Ws = null),
          (et = e),
          (Cr = e._config),
          (Ol = e._nodes),
          (aa = et._listeners.mutation),
          (Cd = _),
          (Sd = g),
          (ni = o._nodeMap),
          (Sr = n._nodeMap),
          (lp = n._readOnly),
          (Ed = new Map(e._keyToDOMMap));
        let un = new Map();
        (Rl = un),
          Ao('root', null),
          (Rl = Ed = Cr = Sr = ni = Sd = Cd = Ol = et = void 0),
          (h = un);
      } catch (ye) {
        if ((ye instanceof Error && e._onError(ye), ac)) throw ye;
        By(e, null, r, n),
          iy(e),
          (e._dirtyType = 2),
          (ac = !0),
          Xr(e, o),
          (ac = !1);
        return;
      } finally {
        f.observe(r, _g), (e._updating = p), (Fe = a), (Tt = d), (Be = c);
      }
    }
    n._readOnly || (n._readOnly = !0);
    var m = e._dirtyLeaves,
      v = e._dirtyElements,
      x = e._normalizedNodes,
      S = e._updateTags,
      T = e._deferred;
    u &&
      ((e._dirtyType = 0),
      e._cloneNotNeeded.clear(),
      (e._dirtyLeaves = new Set()),
      (e._dirtyElements = new Map()),
      (e._normalizedNodes = new Set()),
      (e._updateTags = new Set()));
    var w = e._decorators,
      k = e._pendingDecorators || w,
      V = n._nodeMap,
      z;
    for (z in k) V.has(z) || (k === w && (k = cy(e)), delete k[z]);
    var Q = i ? null : Nn(e._window);
    if (e._editable && Q !== null && (u || s === null || s.dirty)) {
      (Be = e), (Fe = n);
      try {
        if ((f !== null && f.disconnect(), u || s === null || s.dirty)) {
          let ye = e._blockCursorElement;
          ye !== null && xd(ye, e, r);
          e: {
            let it = Q.anchorNode,
              ot = Q.focusNode,
              un = Q.anchorOffset,
              vo = Q.focusOffset,
              Bt = document.activeElement;
            if (
              !((S.has('collaboration') && Bt !== r) || (Bt !== null && ep(Bt)))
            )
              if (W(s)) {
                var ee = s.anchor,
                  te = s.focus,
                  ne = ee.key,
                  Me = te.key,
                  re = wu(e, ne),
                  se = wu(e, Me),
                  D = ee.offset,
                  F = te.offset,
                  B = s.format,
                  b = s.style,
                  ue = s.isCollapsed(),
                  nt = re,
                  Pe = se,
                  Ft = !1;
                if (ee.type === 'text') {
                  nt = Su(re);
                  let jt = ee.getNode();
                  Ft = jt.getFormat() !== B || jt.getStyle() !== b;
                } else W(l) && l.anchor.type === 'text' && (Ft = !0);
                if (
                  (te.type === 'text' && (Pe = Su(se)),
                  nt !== null && Pe !== null)
                ) {
                  if (
                    ue &&
                    (l === null ||
                      Ft ||
                      (W(l) && (l.format !== B || l.style !== b)))
                  ) {
                    var rt = performance.now();
                    Ty = [B, b, D, ne, rt];
                  }
                  if (
                    un === D &&
                    vo === F &&
                    it === nt &&
                    ot === Pe &&
                    (Q.type !== 'Range' || !ue) &&
                    ((Bt !== null && r.contains(Bt)) ||
                      r.focus({ preventScroll: !0 }),
                    ee.type !== 'element')
                  )
                    break e;
                  try {
                    Q.setBaseAndExtent(nt, D, Pe, F);
                  } catch {}
                  if (
                    !S.has('skip-scroll-into-view') &&
                    s.isCollapsed() &&
                    r !== null &&
                    r === document.activeElement
                  ) {
                    let jt =
                      s instanceof ci && s.anchor.type === 'element'
                        ? nt.childNodes[D] || null
                        : 0 < Q.rangeCount
                        ? Q.getRangeAt(0)
                        : null;
                    if (jt !== null) {
                      let Wt;
                      if (jt instanceof Text) {
                        let kt = document.createRange();
                        kt.selectNode(jt), (Wt = kt.getBoundingClientRect());
                      } else Wt = jt.getBoundingClientRect();
                      let Qn = r.ownerDocument,
                        Or = Qn.defaultView;
                      if (Or !== null)
                        for (
                          var { top: Qe, bottom: kr } = Wt, Tn, $t, Gn = r;
                          Gn !== null;

                        ) {
                          let kt = Gn === Qn.body;
                          if (kt) (Tn = 0), ($t = sa(e).innerHeight);
                          else {
                            let Jl = Gn.getBoundingClientRect();
                            (Tn = Jl.top), ($t = Jl.bottom);
                          }
                          let Rr = 0;
                          if (
                            (Qe < Tn
                              ? (Rr = -(Tn - Qe))
                              : kr > $t && (Rr = kr - $t),
                            Rr !== 0)
                          )
                            if (kt) Or.scrollBy(0, Rr);
                            else {
                              let Jl = Gn.scrollTop;
                              Gn.scrollTop += Rr;
                              let Op = Gn.scrollTop - Jl;
                              (Qe -= Op), (kr -= Op);
                            }
                          if (kt) break;
                          Gn = la(Gn);
                        }
                    }
                  }
                  kd = !0;
                }
              } else l !== null && Ul(e, it, ot) && Q.removeAllRanges();
          }
        }
        e: {
          let ye = e._blockCursorElement;
          if (
            W(s) &&
            s.isCollapsed() &&
            s.anchor.type === 'element' &&
            r.contains(document.activeElement)
          ) {
            let it = s.anchor,
              ot = it.getNode(),
              un = it.offset,
              vo = ot.getChildrenSize(),
              Bt = !1,
              jt = null;
            if (un === vo) {
              let Wt = ot.getChildAtIndex(un - 1);
              nc(Wt) && (Bt = !0);
            } else {
              let Wt = ot.getChildAtIndex(un);
              if (nc(Wt)) {
                let Qn = Wt.getPreviousSibling();
                (Qn === null || nc(Qn)) &&
                  ((Bt = !0), (jt = e.getElementByKey(Wt.__key)));
              }
            }
            if (Bt) {
              let Wt = e.getElementByKey(ot.__key);
              if (ye === null) {
                let Qn = e._config.theme,
                  Or = document.createElement('div');
                (Or.contentEditable = 'false'),
                  Or.setAttribute('data-lexical-cursor', 'true');
                let kt = Qn.blockCursor;
                if (kt !== void 0) {
                  if (typeof kt == 'string') {
                    let Rr = kt.split(' ');
                    kt = Qn.blockCursor = Rr;
                  }
                  kt !== void 0 && Or.classList.add(...kt);
                }
                e._blockCursorElement = ye = Or;
              }
              (r.style.caretColor = 'transparent'),
                jt === null ? Wt.appendChild(ye) : Wt.insertBefore(ye, jt);
              break e;
            }
          }
          ye !== null && xd(ye, e, r);
        }
        f !== null && f.observe(r, _g);
      } finally {
        (Be = c), (Fe = a);
      }
    }
    if (h !== null) {
      var Zv = h;
      let ye = Array.from(e._listeners.mutation),
        it = ye.length;
      for (let ot = 0; ot < it; ot++) {
        let [un, vo] = ye[ot],
          Bt = Zv.get(vo);
        Bt !== void 0 &&
          un(Bt, { dirtyLeaves: m, prevEditorState: o, updateTags: S });
      }
    }
    W(s) ||
      s === null ||
      (l !== null && l.is(s)) ||
      e.dispatchCommand(ra, void 0);
    var xa = e._pendingDecorators;
    xa !== null &&
      ((e._decorators = xa),
      (e._pendingDecorators = null),
      tl('decorator', e, !0, xa));
    var qv = ig(t || o),
      $p = ig(n);
    if (
      (qv !== $p && tl('textcontent', e, !0, $p),
      tl('update', e, !0, {
        dirtyElements: v,
        dirtyLeaves: m,
        editorState: n,
        normalizedNodes: x,
        prevEditorState: t || o,
        tags: S,
      }),
      (e._deferred = []),
      T.length !== 0)
    ) {
      let ye = e._updating;
      e._updating = !0;
      try {
        for (let it = 0; it < T.length; it++) T[it]();
      } finally {
        e._updating = ye;
      }
    }
    var kp = e._updates;
    if (kp.length !== 0) {
      let ye = kp.shift();
      if (ye) {
        let [it, ot] = ye;
        Iy(e, it, ot);
      }
    }
  }
}
function tl(e, t, n, ...r) {
  let i = t._updating;
  t._updating = n;
  try {
    let o = Array.from(t._listeners[e]);
    for (e = 0; e < o.length; e++) o[e].apply(null, r);
  } finally {
    t._updating = i;
  }
}
function P(e, t, n) {
  if (e._updating === !1 || Be !== e) {
    let o = !1;
    return (
      e.update(() => {
        o = P(e, t, n);
      }),
      o
    );
  }
  let r = np(e);
  for (let o = 4; 0 <= o; o--)
    for (let l = 0; l < r.length; l++) {
      var i = r[l]._commands.get(t);
      if (i !== void 0 && ((i = i[o]), i !== void 0)) {
        i = Array.from(i);
        let s = i.length;
        for (let u = 0; u < s; u++) if (i[u](n, e) === !0) return !0;
      }
    }
  return !1;
}
function Sg(e, t) {
  let n = e._updates;
  for (t = t || !1; n.length !== 0; ) {
    var r = n.shift();
    if (r) {
      let [i, o] = r,
        l;
      o !== void 0 &&
        ((r = o.onUpdate),
        (l = o.tag),
        o.skipTransforms && (t = !0),
        r && e._deferred.push(r),
        l && e._updateTags.add(l)),
        i();
    }
  }
  return t;
}
function Iy(e, t, n) {
  let r = e._updateTags;
  var i,
    o = (i = !1);
  if (n !== void 0) {
    var l = n.onUpdate;
    (i = n.tag),
      i != null && r.add(i),
      (i = n.skipTransforms || !1),
      (o = n.discrete || !1);
  }
  l && e._deferred.push(l), (n = e._editorState), (l = e._pendingEditorState);
  let s = !1;
  (l === null || l._readOnly) &&
    ((l = e._pendingEditorState = new pa(new Map((l || n)._nodeMap))),
    (s = !0)),
    (l._flushSync = o),
    (o = Fe);
  let u = Tt,
    a = Be,
    d = e._updating;
  (Fe = l), (Tt = !1), (e._updating = !0), (Be = e);
  try {
    s &&
      (e._headless
        ? n._selection != null && (l._selection = n._selection.clone())
        : (l._selection = _E(e)));
    let c = e._compositionKey;
    t(),
      (i = Sg(e, i)),
      xE(l, e),
      e._dirtyType !== 0 &&
        (i ? CE(l, e) : SE(l, e),
        Sg(e),
        rE(n, l, e._dirtyLeaves, e._dirtyElements)),
      c !== e._compositionKey && (l._flushSync = !0);
    let p = l._selection;
    if (W(p)) {
      let f = l._nodeMap,
        h = p.focus.key;
      (f.get(p.anchor.key) !== void 0 && f.get(h) !== void 0) || M(19);
    } else fo(p) && p._nodes.size === 0 && (l._selection = null);
  } catch (c) {
    c instanceof Error && e._onError(c),
      (e._pendingEditorState = n),
      (e._dirtyType = 2),
      e._cloneNotNeeded.clear(),
      (e._dirtyLeaves = new Set()),
      e._dirtyElements.clear(),
      Xr(e);
    return;
  } finally {
    (Fe = o), (Tt = u), (Be = a), (e._updating = d), (Pl = 0);
  }
  e._dirtyType !== 0 || EE(l, e)
    ? l._flushSync
      ? ((l._flushSync = !1), Xr(e))
      : s &&
        bS(() => {
          Xr(e);
        })
    : ((l._flushSync = !1),
      s && (r.clear(), (e._deferred = []), (e._pendingEditorState = null)));
}
function At(e, t, n) {
  e._updating ? e._updates.push([t, n]) : Iy(e, t, n);
}
class zy extends Yl {
  constructor(t) {
    super(t);
  }
  decorate() {
    M(47);
  }
  isIsolated() {
    return !1;
  }
  isInline() {
    return !0;
  }
  isKeyboardSelectable() {
    return !0;
  }
}
function de(e) {
  return e instanceof zy;
}
class di extends Yl {
  constructor(t) {
    super(t),
      (this.__last = this.__first = null),
      (this.__indent = this.__format = this.__size = 0),
      (this.__dir = null);
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    let t = this.getFormat();
    return GS[t] || '';
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    let t = [],
      n = this.getFirstChild();
    for (; n !== null; ) t.push(n), (n = n.getNextSibling());
    return t;
  }
  getChildrenKeys() {
    let t = [],
      n = this.getFirstChild();
    for (; n !== null; ) t.push(n.__key), (n = n.getNextSibling());
    return t;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    let t = Ce()._dirtyElements;
    return t !== null && t.has(this.__key);
  }
  isLastChild() {
    let t = this.getLatest(),
      n = this.getParentOrThrow().getLastChild();
    return n !== null && n.is(t);
  }
  getAllTextNodes() {
    let t = [],
      n = this.getFirstChild();
    for (; n !== null; ) {
      if ((L(n) && t.push(n), $$(n))) {
        let r = n.getAllTextNodes();
        t.push(...r);
      }
      n = n.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; t !== null; ) {
      if ($$(t)) {
        let n = t.getFirstChild();
        if (n !== null) {
          t = n;
          continue;
        }
      }
      break;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; t !== null; ) {
      if ($$(t)) {
        let n = t.getLastChild();
        if (n !== null) {
          t = n;
          continue;
        }
      }
      break;
    }
    return t;
  }
  getDescendantByIndex(t) {
    let n = this.getChildren(),
      r = n.length;
    return t >= r
      ? ((t = n[r - 1]), ($$(t) && t.getLastDescendant()) || t || null)
      : ((t = n[t]), ($$(t) && t.getFirstDescendant()) || t || null);
  }
  getFirstChild() {
    let t = this.getLatest().__first;
    return t === null ? null : ze(t);
  }
  getFirstChildOrThrow() {
    let t = this.getFirstChild();
    return t === null && M(45, this.__key), t;
  }
  getLastChild() {
    let t = this.getLatest().__last;
    return t === null ? null : ze(t);
  }
  getLastChildOrThrow() {
    let t = this.getLastChild();
    return t === null && M(96, this.__key), t;
  }
  getChildAtIndex(t) {
    var n = this.getChildrenSize();
    let r;
    if (t < n / 2) {
      for (r = this.getFirstChild(), n = 0; r !== null && n <= t; ) {
        if (n === t) return r;
        (r = r.getNextSibling()), n++;
      }
      return null;
    }
    for (r = this.getLastChild(), --n; r !== null && n >= t; ) {
      if (n === t) return r;
      (r = r.getPreviousSibling()), n--;
    }
    return null;
  }
  getTextContent() {
    let t = '',
      n = this.getChildren(),
      r = n.length;
    for (let i = 0; i < r; i++) {
      let o = n[i];
      (t += o.getTextContent()),
        $$(o) &&
          i !== r - 1 &&
          !o.isInline() &&
          (t += `

`);
    }
    return t;
  }
  getTextContentSize() {
    let t = 0,
      n = this.getChildren(),
      r = n.length;
    for (let i = 0; i < r; i++) {
      let o = n[i];
      (t += o.getTextContentSize()),
        $$(o) && i !== r - 1 && !o.isInline() && (t += 2);
    }
    return t;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  hasFormat(t) {
    return t !== '' ? ((t = eg[t]), (this.getFormat() & t) !== 0) : !1;
  }
  select(t, n) {
    dt();
    let r = fe(),
      i = t,
      o = n;
    var l = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && n === 0) {
        if (((t = this.getFirstChild()), L(t) || $$(t))) return t.select(0, 0);
      } else if (
        !((t !== void 0 && t !== l) || (n !== void 0 && n !== l)) &&
        ((t = this.getLastChild()), L(t) || $$(t))
      )
        return t.select();
    }
    if (
      (i === void 0 && (i = l), o === void 0 && (o = l), (l = this.__key), W(r))
    )
      r.anchor.set(l, i, 'element'),
        r.focus.set(l, o, 'element'),
        (r.dirty = !0);
    else return Py(l, i, l, o, 'element', 'element');
    return r;
  }
  selectStart() {
    let t = this.getFirstDescendant();
    return $$(t) || L(t)
      ? t.select(0, 0)
      : t !== null
      ? t.selectPrevious()
      : this.select(0, 0);
  }
  selectEnd() {
    let t = this.getLastDescendant();
    return $$(t) || L(t)
      ? t.select()
      : t !== null
      ? t.selectNext()
      : this.select();
  }
  clear() {
    let t = this.getWritable();
    return this.getChildren().forEach((n) => n.remove()), t;
  }
  append(...t) {
    return this.splice(this.getChildrenSize(), 0, t);
  }
  setDirection(t) {
    let n = this.getWritable();
    return (n.__dir = t), n;
  }
  setFormat(t) {
    return (this.getWritable().__format = t !== '' ? eg[t] : 0), this;
  }
  setIndent(t) {
    return (this.getWritable().__indent = t), this;
  }
  splice(t, n, r) {
    let i = r.length,
      o = this.getChildrenSize(),
      l = this.getWritable(),
      s = l.__key;
    var u = [],
      a = [];
    let d = this.getChildAtIndex(t + n),
      c = null,
      p = o - n + i;
    if (t !== 0)
      if (t === o) c = this.getLastChild();
      else {
        var f = this.getChildAtIndex(t);
        f !== null && (c = f.getPreviousSibling());
      }
    if (0 < n) {
      var h = c === null ? this.getFirstChild() : c.getNextSibling();
      for (f = 0; f < n; f++) {
        h === null && M(100);
        var y = h.getNextSibling(),
          _ = h.__key;
        (h = h.getWritable()), Jr(h), a.push(_), (h = y);
      }
    }
    for (f = c, y = 0; y < i; y++) {
      (_ = r[y]),
        f !== null && _.is(f) && (c = f = f.getPreviousSibling()),
        (h = _.getWritable()),
        h.__parent === s && p--,
        Jr(h);
      let g = _.__key;
      f === null
        ? ((l.__first = g), (h.__prev = null))
        : ((f = f.getWritable()), (f.__next = g), (h.__prev = f.__key)),
        _.__key === s && M(76),
        (h.__parent = s),
        u.push(g),
        (f = _);
    }
    if (
      (t + n === o
        ? f !== null && ((f.getWritable().__next = null), (l.__last = f.__key))
        : d !== null &&
          ((t = d.getWritable()),
          f !== null
            ? ((n = f.getWritable()),
              (t.__prev = f.__key),
              (n.__next = d.__key))
            : (t.__prev = null)),
      (l.__size = p),
      a.length && ((t = fe()), W(t)))
    ) {
      (a = new Set(a)), (u = new Set(u));
      let { anchor: g, focus: m } = t;
      Eg(g, a, u) && Ru(g, g.getNode(), this, c, d),
        Eg(m, a, u) && Ru(m, m.getNode(), this, c, d),
        p !== 0 || this.canBeEmpty() || nn(this) || this.remove();
    }
    return l;
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: 'element',
      version: 1,
    };
  }
  insertNewAfter() {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart() {
    return !1;
  }
  excludeFromCopy() {
    return !1;
  }
  canExtractContents() {
    return !0;
  }
  canReplaceWith() {
    return !0;
  }
  canInsertAfter() {
    return !0;
  }
  canBeEmpty() {
    return !0;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  isInline() {
    return !1;
  }
  isShadowRoot() {
    return !1;
  }
  canMergeWith() {
    return !1;
  }
  extractWithChild() {
    return !1;
  }
}
function $$(e) {
  return e instanceof di;
}
function Eg(e, t, n) {
  for (e = e.getNode(); e; ) {
    let r = e.__key;
    if (t.has(r) && !n.has(r)) return !0;
    e = e.getParent();
  }
  return !1;
}
class go extends di {
  static getType() {
    return 'root';
  }
  static clone() {
    return new go();
  }
  constructor() {
    super('root'), (this.__cachedText = null);
  }
  getTopLevelElementOrThrow() {
    M(51);
  }
  getTextContent() {
    let t = this.__cachedText;
    return (!ho() && Ce()._dirtyType !== 0) || t === null
      ? super.getTextContent()
      : t;
  }
  remove() {
    M(52);
  }
  replace() {
    M(53);
  }
  insertBefore() {
    M(54);
  }
  insertAfter() {
    M(55);
  }
  updateDOM() {
    return !1;
  }
  append(...t) {
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      $$(r) || de(r) || M(56);
    }
    return super.append(...t);
  }
  static importJSON(t) {
    let n = En();
    return (
      n.setFormat(t.format),
      n.setIndent(t.indent),
      n.setDirection(t.direction),
      n
    );
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: 'root',
      version: 1,
    };
  }
  collapseAtStart() {
    return !0;
  }
}
function ft(e) {
  return e instanceof go;
}
function EE(e, t) {
  if (((t = t.getEditorState()._selection), (e = e._selection), e !== null)) {
    if (e.dirty || !e.is(t)) return !0;
  } else if (t !== null) return !0;
  return !1;
}
function cp() {
  return new pa(new Map([['root', new go()]]));
}
function Fy(e) {
  let t = e.exportJSON();
  var n = e.constructor;
  t.type !== n.getType() && M(130, n.name);
  let r = t.children;
  if ($$(e))
    for (
      Array.isArray(r) || M(59, n.name), e = e.getChildren(), n = 0;
      n < e.length;
      n++
    ) {
      let i = Fy(e[n]);
      r.push(i);
    }
  return t;
}
class pa {
  constructor(t, n) {
    (this._nodeMap = t),
      (this._selection = n || null),
      (this._readOnly = this._flushSync = !1);
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(t) {
    return Cg(this, t);
  }
  clone(t) {
    return (
      (t = new pa(this._nodeMap, t === void 0 ? this._selection : t)),
      (t._readOnly = !0),
      t
    );
  }
  toJSON() {
    return Cg(this, () => ({ root: Fy(En()) }));
  }
}
class mo extends di {
  static getType() {
    return 'paragraph';
  }
  static clone(t) {
    return new mo(t.__key);
  }
  createDOM(t) {
    let n = document.createElement('p');
    return (
      (t = qo(t.theme, 'paragraph')), t !== void 0 && n.classList.add(...t), n
    );
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return { p: () => ({ conversion: NE, priority: 0 }) };
  }
  exportDOM(t) {
    if ((({ element: t } = super.exportDOM(t)), t && ua(t))) {
      this.isEmpty() && t.append(document.createElement('br'));
      var n = this.getFormatType();
      (t.style.textAlign = n),
        (n = this.getDirection()) && (t.dir = n),
        (n = this.getIndent()),
        0 < n && (t.style.textIndent = `${20 * n}px`);
    }
    return { element: t };
  }
  static importJSON(t) {
    let n = ri();
    return (
      n.setFormat(t.format),
      n.setIndent(t.indent),
      n.setDirection(t.direction),
      n
    );
  }
  exportJSON() {
    return { ...super.exportJSON(), type: 'paragraph', version: 1 };
  }
  insertNewAfter(t, n) {
    t = ri();
    let r = this.getDirection();
    return t.setDirection(r), this.insertAfter(t, n), t;
  }
  collapseAtStart() {
    let t = this.getChildren();
    if (t.length === 0 || (L(t[0]) && t[0].getTextContent().trim() === '')) {
      if (this.getNextSibling() !== null)
        return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null)
        return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function NE(e) {
  let t = ri();
  return (
    e.style &&
      (t.setFormat(e.style.textAlign),
      (e = parseInt(e.style.textIndent, 10) / 20),
      0 < e && t.setIndent(e)),
    { node: t }
  );
}
function ri() {
  return Vl(new mo());
}
function By(e, t, n, r) {
  let i = e._keyToDOMMap;
  i.clear(),
    (e._editorState = cp()),
    (e._pendingEditorState = r),
    (e._compositionKey = null),
    (e._dirtyType = 0),
    e._cloneNotNeeded.clear(),
    (e._dirtyLeaves = new Set()),
    e._dirtyElements.clear(),
    (e._normalizedNodes = new Set()),
    (e._updateTags = new Set()),
    (e._updates = []),
    (e._blockCursorElement = null),
    (r = e._observer),
    r !== null && (r.disconnect(), (e._observer = null)),
    t !== null && (t.textContent = ''),
    n !== null && ((n.textContent = ''), i.set('root', n));
}
function wE(e) {
  let t = new Map(),
    n = new Set();
  return (
    e.forEach((r) => {
      if (
        ((r =
          r.klass.importDOM != null ? r.klass.importDOM.bind(r.klass) : null),
        r != null && !n.has(r))
      ) {
        n.add(r);
        var i = r();
        i !== null &&
          Object.keys(i).forEach((o) => {
            let l = t.get(o);
            l === void 0 && ((l = []), t.set(o, l)), l.push(i[o]);
          });
      }
    }),
    t
  );
}
class TE {
  constructor(t, n, r, i, o, l, s) {
    (this._parentEditor = n),
      (this._rootElement = null),
      (this._editorState = t),
      (this._compositionKey = this._pendingEditorState = null),
      (this._deferred = []),
      (this._keyToDOMMap = new Map()),
      (this._updates = []),
      (this._updating = !1),
      (this._listeners = {
        decorator: new Set(),
        editable: new Set(),
        mutation: new Map(),
        root: new Set(),
        textcontent: new Set(),
        update: new Set(),
      }),
      (this._commands = new Map()),
      (this._config = i),
      (this._nodes = r),
      (this._decorators = {}),
      (this._pendingDecorators = null),
      (this._dirtyType = 0),
      (this._cloneNotNeeded = new Set()),
      (this._dirtyLeaves = new Set()),
      (this._dirtyElements = new Map()),
      (this._normalizedNodes = new Set()),
      (this._updateTags = new Set()),
      (this._observer = null),
      (this._key = fy()),
      (this._onError = o),
      (this._htmlConversions = l),
      (this._editable = s),
      (this._headless = n !== null && n._headless),
      (this._blockCursorElement = this._window = null);
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(t) {
    let n = this._listeners.update;
    return (
      n.add(t),
      () => {
        n.delete(t);
      }
    );
  }
  registerEditableListener(t) {
    let n = this._listeners.editable;
    return (
      n.add(t),
      () => {
        n.delete(t);
      }
    );
  }
  registerDecoratorListener(t) {
    let n = this._listeners.decorator;
    return (
      n.add(t),
      () => {
        n.delete(t);
      }
    );
  }
  registerTextContentListener(t) {
    let n = this._listeners.textcontent;
    return (
      n.add(t),
      () => {
        n.delete(t);
      }
    );
  }
  registerRootListener(t) {
    let n = this._listeners.root;
    return (
      t(this._rootElement, null),
      n.add(t),
      () => {
        t(null, this._rootElement), n.delete(t);
      }
    );
  }
  registerCommand(t, n, r) {
    r === void 0 && M(35);
    let i = this._commands;
    i.has(t) ||
      i.set(t, [new Set(), new Set(), new Set(), new Set(), new Set()]);
    let o = i.get(t);
    o === void 0 && M(36, String(t));
    let l = o[r];
    return (
      l.add(n),
      () => {
        l.delete(n), o.every((s) => s.size === 0) && i.delete(t);
      }
    );
  }
  registerMutationListener(t, n) {
    this._nodes.get(t.getType()) === void 0 && M(37, t.name);
    let r = this._listeners.mutation;
    return (
      r.set(n, t),
      () => {
        r.delete(n);
      }
    );
  }
  registerNodeTransformToKlass(t, n) {
    var r = t.getType();
    return (
      (r = this._nodes.get(r)),
      r === void 0 && M(37, t.name),
      r.transforms.add(n),
      r
    );
  }
  registerNodeTransform(t, n) {
    var r = this.registerNodeTransformToKlass(t, n);
    let i = [r];
    return (
      (r = r.replaceWithKlass),
      r != null && ((r = this.registerNodeTransformToKlass(r, n)), i.push(r)),
      eE(this, t.getType()),
      () => {
        i.forEach((o) => o.transforms.delete(n));
      }
    );
  }
  hasNode(t) {
    return this._nodes.has(t.getType());
  }
  hasNodes(t) {
    return t.every(this.hasNode.bind(this));
  }
  dispatchCommand(t, n) {
    return P(this, t, n);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(t) {
    let n = this._rootElement;
    if (t !== n) {
      let l = qo(this._config.theme, 'root');
      var r = this._pendingEditorState || this._editorState;
      if (((this._rootElement = t), By(this, n, t, r), n !== null)) {
        if (!this._config.disableEvents) {
          bo !== 0 &&
            (bo--,
            bo === 0 &&
              n.ownerDocument.removeEventListener('selectionchange', Ry));
          var i = n.__lexicalEditor;
          if (i != null) {
            if (i._parentEditor !== null) {
              var o = np(i);
              (o = o[o.length - 1]._key), Ui.get(o) === i && Ui.delete(o);
            } else Ui.delete(i._key);
            n.__lexicalEditor = null;
          }
          for (i = Oy(n), o = 0; o < i.length; o++) i[o]();
          n.__lexicalEventHandles = [];
        }
        l != null && n.classList.remove(...l);
      }
      t !== null
        ? ((r = ((r = t.ownerDocument) && r.defaultView) || null),
          (i = t.style),
          (i.userSelect = 'text'),
          (i.whiteSpace = 'pre-wrap'),
          (i.wordBreak = 'break-word'),
          t.setAttribute('data-lexical-editor', 'true'),
          (this._window = r),
          (this._dirtyType = 2),
          iy(this),
          this._updateTags.add('history-merge'),
          Xr(this),
          this._config.disableEvents || fE(t, this),
          l != null && t.classList.add(...l))
        : ((this._editorState = r),
          (this._window = this._pendingEditorState = null)),
        tl('root', this, !1, t, n);
    }
  }
  getElementByKey(t) {
    return this._keyToDOMMap.get(t) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(t, n) {
    t.isEmpty() && M(38), ry(this);
    let r = this._pendingEditorState,
      i = this._updateTags;
    (n = n !== void 0 ? n.tag : null),
      r === null || r.isEmpty() || (n != null && i.add(n), Xr(this)),
      (this._pendingEditorState = t),
      (this._dirtyType = 2),
      this._dirtyElements.set('root', !1),
      (this._compositionKey = null),
      n != null && i.add(n),
      Xr(this);
  }
  parseEditorState(t, n) {
    t = typeof t == 'string' ? JSON.parse(t) : t;
    let r = cp(),
      i = Fe,
      o = Tt,
      l = Be,
      s = this._dirtyElements,
      u = this._dirtyLeaves,
      a = this._cloneNotNeeded,
      d = this._dirtyType;
    (this._dirtyElements = new Map()),
      (this._dirtyLeaves = new Set()),
      (this._cloneNotNeeded = new Set()),
      (this._dirtyType = 0),
      (Fe = r),
      (Tt = !1),
      (Be = this);
    try {
      ap(t.root, this._nodes), n && n(), (r._readOnly = !0);
    } catch (c) {
      c instanceof Error && this._onError(c);
    } finally {
      (this._dirtyElements = s),
        (this._dirtyLeaves = u),
        (this._cloneNotNeeded = a),
        (this._dirtyType = d),
        (Fe = i),
        (Tt = o),
        (Be = l);
    }
    return r;
  }
  update(t, n) {
    At(this, t, n);
  }
  focus(t, n = {}) {
    let r = this._rootElement;
    r !== null &&
      (r.setAttribute('autocapitalize', 'off'),
      At(
        this,
        () => {
          let i = fe(),
            o = En();
          i !== null
            ? (i.dirty = !0)
            : o.getChildrenSize() !== 0 &&
              (n.defaultSelection === 'rootStart'
                ? o.selectStart()
                : o.selectEnd());
        },
        {
          onUpdate: () => {
            r.removeAttribute('autocapitalize'), t && t();
          },
          tag: 'focus',
        }
      ),
      this._pendingEditorState === null && r.removeAttribute('autocapitalize'));
  }
  blur() {
    var t = this._rootElement;
    t !== null && t.blur(),
      (t = Nn(this._window)),
      t !== null && t.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(t) {
    this._editable !== t && ((this._editable = t), tl('editable', this, !0, t));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
class dp extends di {
  constructor(t, n) {
    super(n), (this.__colSpan = t), (this.__rowSpan = 1);
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      colSpan: this.__colSpan,
      rowSpan: this.__rowSpan,
    };
  }
  getColSpan() {
    return this.__colSpan;
  }
  setColSpan(t) {
    return (this.getWritable().__colSpan = t), this;
  }
  getRowSpan() {
    return this.__rowSpan;
  }
  setRowSpan(t) {
    return (this.getWritable().__rowSpan = t), this;
  }
}
function Vt(e) {
  return e instanceof dp;
}
class jy extends di {}
function fp(e) {
  return e instanceof jy;
}
class Wy extends di {}
function Ll(e) {
  return e instanceof Wy;
}
N.$addUpdateTag = function (e) {
  dt(), Ce()._updateTags.add(e);
};
N.$applyNodeReplacement = Vl;
N.$copyNode = gy;
N.$createLineBreakNode = ro;
N.$createNodeSelection = Ld;
N.$createParagraphNode = ri;
N.$createRangeSelection = function () {
  let e = new xn('root', 0, 'element'),
    t = new xn('root', 0, 'element');
  return new ci(e, t, 0, '');
};
N.$createTabNode = ca;
N.$createTextNode = Le;
N.$getAdjacentNode = _d;
N.$getNearestNodeFromDOMNode = Kl;
N.$getNearestRootOrShadowRoot = hy;
N.$getNodeByKey = ze;
N.$getPreviousSelection = po;
N.$getRoot = En;
N.$getSelection = fe;
N.$getTextContent = function () {
  let e = fe();
  return e === null ? '' : e.getTextContent();
};
N.$hasAncestor = Tu;
N.$hasUpdateTag = function (e) {
  return Ce()._updateTags.has(e);
};
N.$insertNodes = function (e, t) {
  let n = fe() || po();
  return n === null && (n = En().selectEnd()), n.insertNodes(e, t);
};
N.$isBlockElementNode = Pd;
N.$isDecoratorNode = de;
N.$isElementNode = $;
N.$isInlineElementOrDecoratorNode = function (e) {
  return ($$(e) && e.isInline()) || (de(e) && e.isInline());
};
N.$isLeafNode = sy;
N.$isLineBreakNode = Ml;
N.$isNodeSelection = fo;
N.$isParagraphNode = function (e) {
  return e instanceof mo;
};
N.$isRangeSelection = W;
N.$isRootNode = ft;
N.$isRootOrShadowRoot = nn;
N.$isTabNode = function (e) {
  return e instanceof co;
};
N.$isTextNode = L;
N.$nodesOfType = function (e) {
  var t = wn();
  let n = t._readOnly,
    r = e.getType();
  t = t._nodeMap;
  let i = [];
  for (let [, o] of t)
    o instanceof e && o.__type === r && (n || o.isAttached()) && i.push(o);
  return i;
};
N.$normalizeSelection__EXPERIMENTAL = bf;
N.$parseSerializedNode = function (e) {
  return ap(e, Ce()._nodes);
};
N.$selectAll = function () {
  var e = En();
  (e = e.select(0, e.getChildrenSize())), _n(bf(e));
};
N.$setCompositionKey = Ve;
N.$setSelection = _n;
N.$splitNode = my;
N.BLUR_COMMAND = ey;
N.CAN_REDO_COMMAND = {};
N.CAN_UNDO_COMMAND = {};
N.CLEAR_EDITOR_COMMAND = {};
N.CLEAR_HISTORY_COMMAND = {};
N.CLICK_COMMAND = I1;
N.COMMAND_PRIORITY_CRITICAL = 4;
N.COMMAND_PRIORITY_EDITOR = 0;
N.COMMAND_PRIORITY_HIGH = 3;
N.COMMAND_PRIORITY_LOW = 1;
N.COMMAND_PRIORITY_NORMAL = 2;
N.CONTROLLED_TEXT_INSERTION_COMMAND = Hi;
N.COPY_COMMAND = Qf;
N.CUT_COMMAND = Jf;
N.DELETE_CHARACTER_COMMAND = Tl;
N.DELETE_LINE_COMMAND = kl;
N.DELETE_WORD_COMMAND = $l;
N.DEPRECATED_$computeGridMap = Ly;
N.DEPRECATED_$createGridSelection = function () {
  let e = new xn('root', 0, 'element'),
    t = new xn('root', 0, 'element');
  return new fa('root', e, t);
};
N.DEPRECATED_$getGridCellNodeRect = Md;
N.DEPRECATED_$getNodeTriplet = Ay;
N.DEPRECATED_$isGridCellNode = Vt;
N.DEPRECATED_$isGridNode = fp;
N.DEPRECATED_$isGridRowNode = Ll;
N.DEPRECATED_$isGridSelection = sp;
N.DEPRECATED_GridCellNode = dp;
N.DEPRECATED_GridNode = jy;
N.DEPRECATED_GridRowNode = Wy;
N.DRAGEND_COMMAND = q1;
N.DRAGOVER_COMMAND = Z1;
N.DRAGSTART_COMMAND = X1;
N.DROP_COMMAND = J1;
N.DecoratorNode = zy;
N.ElementNode = di;
N.FOCUS_COMMAND = b1;
N.FORMAT_ELEMENT_COMMAND = {};
N.FORMAT_TEXT_COMMAND = lr;
N.INDENT_CONTENT_COMMAND = {};
N.INSERT_LINE_BREAK_COMMAND = Zo;
N.INSERT_PARAGRAPH_COMMAND = hd;
N.INSERT_TAB_COMMAND = {};
N.KEY_ARROW_DOWN_COMMAND = U1;
N.KEY_ARROW_LEFT_COMMAND = j1;
N.KEY_ARROW_RIGHT_COMMAND = F1;
N.KEY_ARROW_UP_COMMAND = H1;
N.KEY_BACKSPACE_COMMAND = V1;
N.KEY_DELETE_COMMAND = G1;
N.KEY_DOWN_COMMAND = z1;
N.KEY_ENTER_COMMAND = xu;
N.KEY_ESCAPE_COMMAND = Y1;
N.KEY_MODIFIER_COMMAND = ty;
N.KEY_SPACE_COMMAND = K1;
N.KEY_TAB_COMMAND = Q1;
N.LineBreakNode = ao;
N.MOVE_TO_END = B1;
N.MOVE_TO_START = W1;
N.OUTDENT_CONTENT_COMMAND = {};
N.PASTE_COMMAND = Vf;
N.ParagraphNode = mo;
N.REDO_COMMAND = Gf;
N.REMOVE_TEXT_COMMAND = gd;
N.RootNode = go;
N.SELECTION_CHANGE_COMMAND = ra;
N.SELECT_ALL_COMMAND = md;
N.TabNode = co;
N.TextNode = ai;
N.UNDO_COMMAND = Yf;
N.createCommand = function () {
  return {};
};
N.createEditor = function (e) {
  var t = e || {},
    n = Be,
    r = t.theme || {};
  let i = e === void 0 ? n : t.parentEditor || null,
    o = t.disableEvents || !1,
    l = cp(),
    s = t.namespace || (i !== null ? i._config.namespace : fy()),
    u = t.editorState,
    a = [go, ai, ao, co, mo, ...(t.nodes || [])],
    d = t.onError;
  if (
    ((t = t.editable !== void 0 ? t.editable : !0), e === void 0 && n !== null)
  )
    e = n._nodes;
  else
    for (e = new Map(), n = 0; n < a.length; n++) {
      let p = a[n],
        f = null;
      var c = null;
      typeof p != 'function' &&
        ((c = p),
        (p = c.replace),
        (f = c.with),
        (c = c.withKlass ? c.withKlass : null));
      let h = p.getType(),
        y = p.transform(),
        _ = new Set();
      y !== null && _.add(y),
        e.set(h, { klass: p, replace: f, replaceWithKlass: c, transforms: _ });
    }
  return (
    (r = new TE(
      l,
      i,
      e,
      { disableEvents: o, namespace: s, theme: r },
      d || console.error,
      wE(e),
      t
    )),
    u !== void 0 && ((r._pendingEditorState = u), (r._dirtyType = 2)),
    r
  );
};
N.getNearestEditorFromDOMNode = tp;
N.isHTMLAnchorElement = function (e) {
  return ua(e) && e.tagName === 'A';
};
N.isHTMLElement = ua;
N.isSelectionCapturedInDecoratorInput = ep;
N.isSelectionWithinEditor = Ul;
const $E = N;
var H = $E,
  I = H;
let Du = new Map();
function Ng(e) {
  for (; e != null; ) {
    if (e.nodeType === Node.TEXT_NODE) return e;
    e = e.firstChild;
  }
  return null;
}
function wg(e) {
  let t = e.parentNode;
  if (t == null) throw Error('Should never happen');
  return [t, Array.from(t.childNodes).indexOf(e)];
}
function Hy(e) {
  let t = {};
  e = e.split(';');
  for (let n of e)
    if (n !== '') {
      let [r, i] = n.split(/:([^]+)/);
      t[r.trim()] = i.trim();
    }
  return t;
}
function Mu(e) {
  let t = Du.get(e);
  return t === void 0 && ((t = Hy(e)), Du.set(e, t)), t;
}
function kE(e) {
  let t = '';
  for (let n in e) n && (t += `${n}: ${e[n]};`);
  return t;
}
function hi(e, t) {
  var n = Mu('getStyle' in e ? e.getStyle() : e.style);
  (t = Object.entries(t).reduce(
    (r, [i, o]) => (o === null ? delete r[i] : (r[i] = o), r),
    { ...n }
  )),
    (n = kE(t)),
    e.setStyle(n),
    Du.set(n, t);
}
function Uy(e, t) {
  var n = e.getNodes(),
    r = n.length;
  if (I.DEPRECATED_$isGridSelection(e)) {
    for (
      var i = I.$createRangeSelection(), o = i.anchor, l = i.focus, s = 0;
      s < r;
      s++
    ) {
      var u = n[s];
      I.DEPRECATED_$isGridCellNode(u) &&
        (o.set(u.getKey(), 0, 'element'),
        l.set(u.getKey(), u.getChildrenSize(), 'element'),
        Uy(I.$normalizeSelection__EXPERIMENTAL(i), t));
    }
    I.$setSelection(e);
  } else if ((--r, (i = n[0]), (o = n[r]), e.isCollapsed())) hi(e, t);
  else {
    var a = e.anchor,
      d = e.focus;
    (s = i.getTextContent().length), (u = d.offset);
    var c = a.offset,
      p = a.isBefore(d);
    (l = p ? c : u), (e = p ? u : c);
    var f = p ? a.type : d.type,
      h = p ? d.type : a.type;
    if (
      ((a = p ? d.key : a.key),
      I.$isTextNode(i) &&
        l === s &&
        ((d = i.getNextSibling()), I.$isTextNode(d) && ((l = c = 0), (i = d))),
      n.length === 1)
    )
      I.$isTextNode(i) &&
        ((l = f === 'element' ? 0 : c > u ? u : c),
        (e = h === 'element' ? s : c > u ? c : u),
        l !== e &&
          (l === 0 && e === s
            ? (hi(i, t), i.select(l, e))
            : ((n = i.splitText(l, e)),
              (n = l === 0 ? n[0] : n[1]),
              hi(n, t),
              n.select(0, e - l))));
    else
      for (
        I.$isTextNode(i) &&
          l < i.getTextContentSize() &&
          (l !== 0 && (i = i.splitText(l)[1]), hi(i, t)),
          I.$isTextNode(o) &&
            ((l = o.getTextContent().length),
            o.__key !== a && e !== 0 && (e = l),
            e !== l && ([o] = o.splitText(e)),
            e !== 0 && hi(o, t)),
          e = 1;
        e < r;
        e++
      )
        (l = n[e]),
          (s = l.getKey()),
          I.$isTextNode(l) &&
            s !== i.getKey() &&
            s !== o.getKey() &&
            !l.isToken() &&
            hi(l, t);
  }
}
function OE(e) {
  for (; e !== null && !I.$isRootOrShadowRoot(e); ) {
    let t = e.getLatest(),
      n = e.getParent();
    t.getChildrenSize() === 0 && e.remove(!0), (e = n);
  }
}
function cc(e, t, n, r, i = null) {
  if (t.length !== 0) {
    var o = t[0],
      l = new Map(),
      s = [];
    (o = I.$isElementNode(o) ? o : o.getParentOrThrow()),
      o.isInline() && (o = o.getParentOrThrow());
    for (var u = !1; o !== null; ) {
      var a = o.getPreviousSibling();
      if (a !== null) {
        (o = a), (u = !0);
        break;
      }
      if (((o = o.getParentOrThrow()), I.$isRootOrShadowRoot(o))) break;
    }
    a = new Set();
    for (var d = 0; d < n; d++) {
      var c = t[d];
      I.$isElementNode(c) && c.getChildrenSize() === 0 && a.add(c.getKey());
    }
    var p = new Set();
    for (d = 0; d < n; d++) {
      c = t[d];
      var f = c.getParent();
      if (
        (f !== null && f.isInline() && (f = f.getParent()),
        f !== null && I.$isLeafNode(c) && !p.has(c.getKey()))
      ) {
        if (((c = f.getKey()), l.get(c) === void 0)) {
          let h = r();
          h.setFormat(f.getFormatType()),
            h.setIndent(f.getIndent()),
            s.push(h),
            l.set(c, h),
            f.getChildren().forEach((y) => {
              h.append(y),
                p.add(y.getKey()),
                I.$isElementNode(y) &&
                  y.getChildrenKeys().forEach((_) => p.add(_));
            }),
            OE(f);
        }
      } else
        a.has(c.getKey()) &&
          ((f = r()),
          f.setFormat(c.getFormatType()),
          f.setIndent(c.getIndent()),
          s.push(f),
          c.remove(!0));
    }
    if (i !== null) for (t = 0; t < s.length; t++) i.append(s[t]);
    if (((t = null), I.$isRootOrShadowRoot(o)))
      if (u)
        if (i !== null) o.insertAfter(i);
        else for (i = s.length - 1; 0 <= i; i--) o.insertAfter(s[i]);
      else if (
        ((u = o.getFirstChild()), I.$isElementNode(u) && (o = u), u === null)
      )
        if (i) o.append(i);
        else for (i = 0; i < s.length; i++) (u = s[i]), o.append(u), (t = u);
      else if (i !== null) u.insertBefore(i);
      else
        for (o = 0; o < s.length; o++) (i = s[o]), u.insertBefore(i), (t = i);
    else if (i) o.insertAfter(i);
    else
      for (i = s.length - 1; 0 <= i; i--) (u = s[i]), o.insertAfter(u), (t = u);
    (s = I.$getPreviousSelection()),
      I.$isRangeSelection(s) &&
      s.anchor.getNode().isAttached() &&
      s.focus.getNode().isAttached()
        ? I.$setSelection(s.clone())
        : t !== null
        ? t.selectEnd()
        : (e.dirty = !0);
  }
}
function Ky(e, t, n, r) {
  e.modify(t ? 'extend' : 'move', n, r);
}
function Vy(e) {
  return (
    (e = e.anchor.getNode()),
    (I.$isRootNode(e) ? e : e.getParentOrThrow()).getDirection() === 'rtl'
  );
}
He.$addNodeStyle = function (e) {
  e = e.getStyle();
  let t = Hy(e);
  Du.set(e, t);
};
He.$cloneWithProperties = function (e) {
  let t = e.constructor.clone(e);
  return (
    (t.__parent = e.__parent),
    (t.__next = e.__next),
    (t.__prev = e.__prev),
    I.$isElementNode(e) && I.$isElementNode(t)
      ? ((t.__first = e.__first),
        (t.__last = e.__last),
        (t.__size = e.__size),
        (t.__format = e.__format),
        (t.__indent = e.__indent),
        (t.__dir = e.__dir),
        t)
      : (I.$isTextNode(e) &&
          I.$isTextNode(t) &&
          ((t.__format = e.__format),
          (t.__style = e.__style),
          (t.__mode = e.__mode),
          (t.__detail = e.__detail)),
        t)
  );
};
He.$getSelectionStyleValueForProperty = function (e, t, n = '') {
  let r = null,
    i = e.getNodes();
  var o = e.anchor,
    l = e.focus,
    s = e.isBackward();
  let u = s ? l.offset : o.offset;
  if (
    ((o = s ? l.getNode() : o.getNode()),
    e.style !== '' && ((e = Mu(e.style)), e !== null && t in e))
  )
    return e[t];
  for (e = 0; e < i.length; e++) {
    var a = i[e];
    if ((e === 0 || u !== 0 || !a.is(o)) && I.$isTextNode(a)) {
      if (
        ((l = t),
        (s = n),
        (a = a.getStyle()),
        (a = Mu(a)),
        (l = (a !== null && a[l]) || s),
        r === null)
      )
        r = l;
      else if (r !== l) {
        r = '';
        break;
      }
    }
  }
  return r === null ? n : r;
};
He.$isAtNodeEnd = function (e) {
  return e.type === 'text'
    ? e.offset === e.getNode().getTextContentSize()
    : e.offset === e.getNode().getChildrenSize();
};
He.$isParentElementRTL = Vy;
He.$moveCaretSelection = Ky;
He.$moveCharacter = function (e, t, n) {
  let r = Vy(e);
  Ky(e, t, n ? !r : r, 'character');
};
He.$patchStyleText = Uy;
He.$selectAll = function (e) {
  let t = e.anchor;
  e = e.focus;
  var n = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
  let r = n.getFirstDescendant();
  n = n.getLastDescendant();
  let i = 'element',
    o = 'element',
    l = 0;
  I.$isTextNode(r)
    ? (i = 'text')
    : I.$isElementNode(r) || r === null || (r = r.getParentOrThrow()),
    I.$isTextNode(n)
      ? ((o = 'text'), (l = n.getTextContentSize()))
      : I.$isElementNode(n) || n === null || (n = n.getParentOrThrow()),
    r && n && (t.set(r.getKey(), 0, i), e.set(n.getKey(), l, o));
};
He.$setBlocksType = function (e, t) {
  if (e.anchor.key === 'root') {
    t = t();
    var n = I.$getRoot();
    (e = n.getFirstChild()) ? e.replace(t, !0) : n.append(t);
  } else
    for (
      n = e.getNodes(),
        e = e.anchor.getNode().getParentOrThrow(),
        n.indexOf(e) === -1 && n.push(e),
        e.isInline() &&
          ((e = e.getParentOrThrow()), n.indexOf(e) === -1 && n.push(e)),
        e = 0;
      e < n.length;
      e++
    ) {
      let o = n[e];
      var r = o;
      if (!I.$isElementNode(r) || I.$isRootOrShadowRoot(r)) r = !1;
      else {
        var i = r.getFirstChild();
        (i =
          i === null ||
          I.$isLineBreakNode(i) ||
          I.$isTextNode(i) ||
          i.isInline()),
          (r = !r.isInline() && r.canBeEmpty() !== !1 && i);
      }
      r &&
        ((r = t()),
        r.setFormat(o.getFormatType()),
        r.setIndent(o.getIndent()),
        o.replace(r, !0));
    }
};
He.$shouldOverrideDefaultCharacterSelection = function (e, t) {
  return (
    (e = I.$getAdjacentNode(e.focus, t)),
    (I.$isDecoratorNode(e) && !e.isIsolated()) ||
      (I.$isElementNode(e) && !e.isInline() && !e.canBeEmpty())
  );
};
He.$sliceSelectedTextNodeContent = function (e, t) {
  if (
    t.isSelected() &&
    !t.isSegmented() &&
    !t.isToken() &&
    (I.$isRangeSelection(e) || I.DEPRECATED_$isGridSelection(e))
  ) {
    var n = e.anchor.getNode(),
      r = e.focus.getNode(),
      i = t.is(n),
      o = t.is(r);
    if (i || o) {
      i = e.isBackward();
      let [l, s] = e.getCharacterOffsets();
      (e = n.is(r)), (o = t.is(i ? r : n)), (r = t.is(i ? n : r)), (n = 0);
      let u;
      e
        ? ((n = l > s ? s : l), (u = l > s ? l : s))
        : o
        ? ((n = i ? s : l), (u = void 0))
        : r && ((i = i ? l : s), (n = 0), (u = i)),
        (t.__text = t.__text.slice(n, u));
    }
  }
  return t;
};
He.$wrapNodes = function (e, t, n = null) {
  var r = e.getNodes();
  let i = r.length;
  var o = e.anchor;
  if (
    i === 0 ||
    (i === 1 && o.type === 'element' && o.getNode().getChildrenSize() === 0)
  ) {
    (e = o.type === 'text' ? o.getNode().getParentOrThrow() : o.getNode()),
      (r = e.getChildren());
    let s = t();
    s.setFormat(e.getFormatType()),
      s.setIndent(e.getIndent()),
      r.forEach((u) => s.append(u)),
      n && (s = n.append(s)),
      e.replace(s);
  } else {
    o = null;
    var l = [];
    for (let s = 0; s < i; s++) {
      let u = r[s];
      I.$isRootOrShadowRoot(u)
        ? (cc(e, l, l.length, t, n), (l = []), (o = u))
        : o === null || (o !== null && I.$hasAncestor(u, o))
        ? l.push(u)
        : (cc(e, l, l.length, t, n), (l = [u]));
    }
    cc(e, l, l.length, t, n);
  }
};
He.createDOMRange = function (e, t, n, r, i) {
  let o = t.getKey(),
    l = r.getKey(),
    s = document.createRange(),
    u = e.getElementByKey(o);
  if (
    ((e = e.getElementByKey(l)),
    I.$isTextNode(t) && (u = Ng(u)),
    I.$isTextNode(r) && (e = Ng(e)),
    t === void 0 || r === void 0 || u === null || e === null)
  )
    return null;
  u.nodeName === 'BR' && ([u, n] = wg(u)),
    e.nodeName === 'BR' && ([e, i] = wg(e)),
    (t = u.firstChild),
    u === e &&
      t != null &&
      t.nodeName === 'BR' &&
      n === 0 &&
      i === 0 &&
      (i = 1);
  try {
    s.setStart(u, n), s.setEnd(e, i);
  } catch {
    return null;
  }
  return (
    !s.collapsed || (n === i && o === l) || (s.setStart(e, i), s.setEnd(u, n)),
    s
  );
};
He.createRectsFromDOMRange = function (e, t) {
  var n = e.getRootElement();
  if (n === null) return [];
  (e = n.getBoundingClientRect()),
    (n = getComputedStyle(n)),
    (n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight)),
    (t = Array.from(t.getClientRects()));
  let r = t.length;
  t.sort((o, l) => {
    let s = o.top - l.top;
    return 3 >= Math.abs(s) ? o.left - l.left : s;
  });
  let i;
  for (let o = 0; o < r; o++) {
    let l = t[o],
      s = l.width + n === e.width;
    (i &&
      i.top <= l.top &&
      i.top + i.height > l.top &&
      i.left + i.width > l.left) ||
    s
      ? (t.splice(o--, 1), r--)
      : (i = l);
  }
  return t;
};
He.getStyleObjectFromCSS = Mu;
He.trimTextContentFromAnchor = function (e, t, n) {
  let r = t.getNode();
  if (I.$isElementNode(r)) {
    var i = r.getDescendantByIndex(t.offset);
    i !== null && (r = i);
  }
  for (; 0 < n && r !== null; ) {
    var o = r.getPreviousSibling(),
      l = 0;
    if (o === null) {
      i = r.getParentOrThrow();
      for (var s = i.getPreviousSibling(); s === null; ) {
        if (((i = i.getParent()), i === null)) {
          o = null;
          break;
        }
        s = i.getPreviousSibling();
      }
      i !== null &&
        ((l = i.isInline() ? 0 : 2),
        (o = I.$isElementNode(s) ? s.getLastDescendant() : s));
    }
    if (
      ((s = r.getTextContent()),
      s === '' &&
        I.$isElementNode(r) &&
        !r.isInline() &&
        (s = `

`),
      (i = s.length),
      !I.$isTextNode(r) || n >= i)
    )
      (s = r.getParent()),
        r.remove(),
        s == null ||
          s.getChildrenSize() !== 0 ||
          I.$isRootNode(s) ||
          s.remove(),
        (n -= i + l),
        (r = o);
    else {
      let u = r.getKey();
      (l = e.getEditorState().read(() => {
        const d = I.$getNodeByKey(u);
        return I.$isTextNode(d) && d.isSimpleText() ? d.getTextContent() : null;
      })),
        (o = i - n);
      let a = s.slice(0, o);
      l !== null && l !== s
        ? ((n = I.$getPreviousSelection()),
          (i = r),
          r.isSimpleText()
            ? r.setTextContent(l)
            : ((i = I.$createTextNode(l)), r.replace(i)),
          I.$isRangeSelection(n) &&
            n.isCollapsed() &&
            ((n = n.anchor.offset), i.select(n, n)))
        : r.isSimpleText()
        ? ((l = t.key === u),
          (s = t.offset),
          s < n && (s = i),
          (n = l ? s - n : 0),
          (i = l ? s : o),
          l && n === 0
            ? (([n] = r.splitText(n, i)), n.remove())
            : (([, n] = r.splitText(n, i)), n.remove()))
        : ((n = I.$createTextNode(a)), r.replace(n)),
        (n = 0);
    }
  }
};
const RE = He;
var Ct = RE,
  ke = {},
  DE = Ct,
  Ne = H;
function ME(e) {
  let t = new URLSearchParams();
  t.append('code', e);
  for (let n = 1; n < arguments.length; n++) t.append('v', arguments[n]);
  throw Error(
    `Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function Yy(e, t) {
  for (let n of t) if (e.type.startsWith(n)) return !0;
  return !1;
}
function Gy(e, t) {
  for (; e !== Ne.$getRoot() && e != null; ) {
    if (t(e)) return e;
    e = e.getParent();
  }
  return null;
}
ke.$splitNode = Ne.$splitNode;
ke.isHTMLAnchorElement = Ne.isHTMLAnchorElement;
ke.isHTMLElement = Ne.isHTMLElement;
ke.$dfs = function (e, t) {
  let n = [];
  (e = (e || Ne.$getRoot()).getLatest()),
    (t = t || (Ne.$isElementNode(e) ? e.getLastDescendant() : e));
  for (var r = e, i = 0; (r = r.getParent()) !== null; ) i++;
  for (r = i; e !== null && !e.is(t); )
    if (
      (n.push({ depth: r, node: e }),
      Ne.$isElementNode(e) && 0 < e.getChildrenSize())
    )
      (e = e.getFirstChild()), r++;
    else
      for (i = null; i === null && e !== null; )
        (i = e.getNextSibling()),
          i === null ? ((e = e.getParent()), r--) : (e = i);
  return e !== null && e.is(t) && n.push({ depth: r, node: e }), n;
};
ke.$filter = function (e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = t(e[r]);
    i !== null && n.push(i);
  }
  return n;
};
ke.$findMatchingParent = Gy;
ke.$getNearestBlockElementAncestorOrThrow = function (e) {
  let t = Gy(e, (n) => Ne.$isElementNode(n) && !n.isInline());
  return Ne.$isElementNode(t) || ME(4, e.__key), t;
};
ke.$getNearestNodeOfType = function (e, t) {
  for (; e != null; ) {
    if (e instanceof t) return e;
    e = e.getParent();
  }
  return null;
};
ke.$insertFirst = function (e, t) {
  let n = e.getFirstChild();
  n !== null ? n.insertBefore(t) : e.append(t);
};
ke.$insertNodeToNearestRoot = function (e) {
  var t = Ne.$getSelection() || Ne.$getPreviousSelection();
  if (Ne.$isRangeSelection(t)) {
    var { focus: n } = t;
    if (((t = n.getNode()), (n = n.offset), Ne.$isRootOrShadowRoot(t)))
      (n = t.getChildAtIndex(n)),
        n == null ? t.append(e) : n.insertBefore(e),
        e.selectNext();
    else {
      let r, i;
      Ne.$isTextNode(t)
        ? ((r = t.getParentOrThrow()),
          (i = t.getIndexWithinParent()),
          0 < n && ((i += 1), t.splitText(n)))
        : ((r = t), (i = n)),
        ([, t] = Ne.$splitNode(r, i)),
        t.insertBefore(e),
        t.selectStart();
    }
  } else
    Ne.$isNodeSelection(t) || Ne.DEPRECATED_$isGridSelection(t)
      ? ((t = t.getNodes()),
        t[t.length - 1].getTopLevelElementOrThrow().insertAfter(e))
      : Ne.$getRoot().append(e),
      (t = Ne.$createParagraphNode()),
      e.insertAfter(t),
      t.select();
  return e.getLatest();
};
ke.$restoreEditorState = function (e, t) {
  let n = new Map(),
    r = e._pendingEditorState;
  for (let [i, o] of t._nodeMap) {
    let l = DE.$cloneWithProperties(o);
    Ne.$isTextNode(l) && (l.__text = o.__text), n.set(i, l);
  }
  r && (r._nodeMap = n),
    (e._dirtyType = 2),
    (e = t._selection),
    Ne.$setSelection(e === null ? null : e.clone());
};
ke.$wrapNodeInElement = function (e, t) {
  return (t = t()), e.replace(t), t.append(e), t;
};
ke.addClassNamesToElement = function (e, ...t) {
  t.forEach((n) => {
    typeof n == 'string' &&
      ((n = n.split(' ').filter((r) => r !== '')), e.classList.add(...n));
  });
};
ke.isMimeType = Yy;
ke.mediaFileReader = function (e, t) {
  let n = e[Symbol.iterator]();
  return new Promise((r, i) => {
    let o = [],
      l = () => {
        const { done: s, value: u } = n.next();
        if (s) return r(o);
        const a = new FileReader();
        a.addEventListener('error', i),
          a.addEventListener('load', () => {
            const d = a.result;
            typeof d == 'string' && o.push({ file: u, result: d }), l();
          }),
          Yy(u, t) ? a.readAsDataURL(u) : l();
      };
    l();
  });
};
ke.mergeRegister = function (...e) {
  return () => {
    e.forEach((t) => t());
  };
};
ke.objectKlassEquals = function (e, t) {
  return e !== null ? Object.getPrototypeOf(e).constructor.name === t.name : !1;
};
ke.registerNestedElementResolver = function (e, t, n, r) {
  return e.registerNodeTransform(t, (i) => {
    e: {
      for (var o = i.getChildren(), l = 0; l < o.length; l++)
        if (o[l] instanceof t) {
          o = null;
          break e;
        }
      for (o = i; o !== null; )
        if (((l = o), (o = o.getParent()), o instanceof t)) {
          o = { child: l, parent: o };
          break e;
        }
      o = null;
    }
    if (o !== null) {
      const { child: s, parent: u } = o;
      if (s.is(i)) {
        if (
          (r(u, i),
          (i = s.getNextSiblings()),
          (o = i.length),
          u.insertAfter(s),
          o !== 0)
        ) {
          (l = n(u)), s.insertAfter(l);
          for (let a = 0; a < o; a++) l.append(i[a]);
        }
        u.canBeEmpty() || u.getChildrenSize() !== 0 || u.remove();
      }
    }
  });
};
ke.removeClassNamesFromElement = function (e, ...t) {
  t.forEach((n) => {
    typeof n == 'string' && e.classList.remove(...n.split(' '));
  });
};
const PE = ke;
var We = PE,
  Tg = Ct,
  LE = We,
  Li = H;
function Qy(e, t, n, r = null) {
  let i = r != null ? t.isSelected(r) : !0,
    o = Li.$isElementNode(t) && t.excludeFromCopy('html');
  var l = t;
  r !== null &&
    ((l = Tg.$cloneWithProperties(t)),
    (l =
      Li.$isTextNode(l) && r != null
        ? Tg.$sliceSelectedTextNodeContent(r, l)
        : l));
  let s = Li.$isElementNode(l) ? l.getChildren() : [],
    { element: u, after: a } = l.exportDOM(e);
  if (!u) return !1;
  let d = document.createDocumentFragment();
  for (let c = 0; c < s.length; c++) {
    let p = s[c],
      f = Qy(e, p, d, r);
    !i &&
      Li.$isElementNode(t) &&
      f &&
      t.extractWithChild(p, r, 'html') &&
      (i = !0);
  }
  return (
    i && !o
      ? (LE.isHTMLElement(u) && u.append(d),
        n.append(u),
        a && (e = a.call(l, u)) && u.replaceWith(e))
      : n.append(d),
    i
  );
}
let Jy = new Set(['STYLE', 'SCRIPT']);
function Xy(e, t, n = new Map(), r) {
  let i = [];
  if (Jy.has(e.nodeName)) return i;
  let o = null;
  var l,
    { nodeName: s } = e,
    u = t._htmlConversions.get(s.toLowerCase());
  if (((s = null), u !== void 0))
    for (l of u)
      (u = l(e)),
        u !== null && (s === null || s.priority < u.priority) && (s = u);
  if (
    ((s = (l = s !== null ? s.conversion : null) ? l(e) : null),
    (l = null),
    s !== null)
  ) {
    if (
      ((l = s.after),
      (u = s.node),
      (o = Array.isArray(u) ? u[u.length - 1] : u),
      o !== null)
    ) {
      for (var [, a] of n) if (((o = a(o, r)), !o)) break;
      o && i.push(...(Array.isArray(u) ? u : [o]));
    }
    s.forChild != null && n.set(e.nodeName, s.forChild);
  }
  for (e = e.childNodes, r = [], a = 0; a < e.length; a++)
    r.push(...Xy(e[a], t, new Map(n), o));
  return (
    l != null && (r = l(r)),
    o == null ? (i = i.concat(r)) : Li.$isElementNode(o) && o.append(...r),
    i
  );
}
Kf.$generateHtmlFromNodes = function (e, t) {
  if (typeof document > 'u' || typeof window > 'u')
    throw Error(
      'To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.'
    );
  let n = document.createElement('div'),
    r = Li.$getRoot().getChildren();
  for (let i = 0; i < r.length; i++) Qy(e, r[i], n, t);
  return n.innerHTML;
};
Kf.$generateNodesFromDOM = function (e, t) {
  t = t.body ? t.body.childNodes : [];
  let n = [];
  for (let i = 0; i < t.length; i++) {
    var r = t[i];
    Jy.has(r.nodeName) || ((r = Xy(r, e)), r !== null && (n = n.concat(r)));
  }
  return n;
};
const AE = Kf;
var Zy = AE,
  qy = Zy,
  Ad = Ct,
  Ki = We,
  j = H;
function Ln(e) {
  let t = new URLSearchParams();
  t.append('code', e);
  for (let n = 1; n < arguments.length; n++) t.append('v', arguments[n]);
  throw Error(
    `Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
let by =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
function ev(e) {
  let t = j.$getSelection();
  if (t == null) throw Error('Expected valid LexicalSelection');
  return (j.$isRangeSelection(t) && t.isCollapsed()) ||
    t.getNodes().length === 0
    ? ''
    : qy.$generateHtmlFromNodes(e, t);
}
function tv(e) {
  let t = j.$getSelection();
  if (t == null) throw Error('Expected valid LexicalSelection');
  return (j.$isRangeSelection(t) && t.isCollapsed()) ||
    t.getNodes().length === 0
    ? null
    : JSON.stringify(rv(e, t));
}
function Id(e, t, n) {
  (j.DEPRECATED_$isGridSelection(n) ||
    (Ki.$findMatchingParent(n.anchor.getNode(), (r) =>
      j.DEPRECATED_$isGridCellNode(r)
    ) !== null &&
      Ki.$findMatchingParent(n.focus.getNode(), (r) =>
        j.DEPRECATED_$isGridCellNode(r)
      ) !== null)) &&
  t.length === 1 &&
  j.DEPRECATED_$isGridNode(t[0])
    ? zE(t, n, !1, e)
    : IE(t, n);
}
function IE(e, t) {
  let n = [],
    r = null;
  for (let i = 0; i < e.length; i++) {
    let o = e[i],
      l = j.$isLineBreakNode(o);
    if (
      l ||
      (j.$isDecoratorNode(o) && o.isInline()) ||
      (j.$isElementNode(o) && o.isInline()) ||
      j.$isTextNode(o) ||
      o.isParentRequired()
    ) {
      if (r === null && ((r = o.createParentElementNode()), n.push(r), l))
        continue;
      r !== null && r.append(o);
    } else n.push(o), (r = null);
  }
  j.$isRangeSelection(t)
    ? t.insertNodes(n)
    : j.DEPRECATED_$isGridSelection(t) &&
      ((e = t.anchor.getNode()),
      j.DEPRECATED_$isGridCellNode(e) || Ln(41),
      e.append(...n));
}
function zE(e, t, n, r) {
  (e.length === 1 && j.DEPRECATED_$isGridNode(e[0])) || Ln(42);
  var i = e[0];
  (e = i.getChildren()), (n = i.getFirstChildOrThrow().getChildrenSize());
  var o = i.getChildrenSize(),
    l = Ki.$findMatchingParent(t.anchor.getNode(), (f) =>
      j.DEPRECATED_$isGridCellNode(f)
    );
  (t =
    (i =
      l && Ki.$findMatchingParent(l, (f) => j.DEPRECATED_$isGridRowNode(f))) &&
    Ki.$findMatchingParent(i, (f) => j.DEPRECATED_$isGridNode(f))),
    (j.DEPRECATED_$isGridCellNode(l) &&
      j.DEPRECATED_$isGridRowNode(i) &&
      j.DEPRECATED_$isGridNode(t)) ||
      Ln(43);
  var s = i.getIndexWithinParent(),
    u = Math.min(t.getChildrenSize() - 1, s + o - 1);
  (o = l.getIndexWithinParent()),
    (l = Math.min(i.getChildrenSize() - 1, o + n - 1)),
    (n = Math.min(o, l)),
    (i = Math.min(s, u)),
    (o = Math.max(o, l)),
    (s = Math.max(s, u)),
    (u = t.getChildren()),
    (l = 0);
  let a, d;
  for (let f = i; f <= s; f++) {
    var c = u[f];
    j.DEPRECATED_$isGridRowNode(c) || Ln(24);
    var p = e[l];
    j.DEPRECATED_$isGridRowNode(p) || Ln(24),
      (c = c.getChildren()),
      (p = p.getChildren());
    let h = 0;
    for (let y = n; y <= o; y++) {
      let _ = c[y];
      j.DEPRECATED_$isGridCellNode(_) || Ln(25);
      let g = p[h];
      j.DEPRECATED_$isGridCellNode(g) || Ln(25),
        f === i && y === n
          ? (a = _.getKey())
          : f === s && y === o && (d = _.getKey());
      let m = _.getChildren();
      g.getChildren().forEach((v) => {
        j.$isTextNode(v) && j.$createParagraphNode().append(v), _.append(v);
      }),
        m.forEach((v) => v.remove()),
        h++;
    }
    l++;
  }
  a &&
    d &&
    ((e = j.DEPRECATED_$createGridSelection()),
    e.set(t.getKey(), a, d),
    j.$setSelection(e),
    r.dispatchCommand(j.SELECTION_CHANGE_COMMAND, void 0));
}
function nv(e, t, n, r = []) {
  let i = t != null ? n.isSelected(t) : !0,
    o = j.$isElementNode(n) && n.excludeFromCopy('html');
  var l = n;
  if (t !== null) {
    var s = Ad.$cloneWithProperties(n);
    l = s =
      j.$isTextNode(s) && t != null
        ? Ad.$sliceSelectedTextNodeContent(t, s)
        : s;
  }
  let u = j.$isElementNode(l) ? l.getChildren() : [];
  var a = l;
  s = a.exportJSON();
  var d = a.constructor;
  s.type !== d.getType() && Ln(58, d.name);
  let c = s.children;
  for (
    j.$isElementNode(a) && (Array.isArray(c) || Ln(59, d.name)),
      j.$isTextNode(l) &&
        ((l = l.__text), 0 < l.length ? (s.text = l) : (i = !1)),
      l = 0;
    l < u.length;
    l++
  )
    (a = u[l]),
      (d = nv(e, t, a, s.children)),
      !i &&
        j.$isElementNode(n) &&
        d &&
        n.extractWithChild(a, t, 'clone') &&
        (i = !0);
  if (i && !o) r.push(s);
  else if (Array.isArray(s.children))
    for (e = 0; e < s.children.length; e++) r.push(s.children[e]);
  return i;
}
function rv(e, t) {
  let n = [],
    r = j.$getRoot().getChildren();
  for (let i = 0; i < r.length; i++) nv(e, t, r[i], n);
  return { namespace: e._config.namespace, nodes: n };
}
function iv(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = j.$parseSerializedNode(e[n]);
    j.$isTextNode(r) && Ad.$addNodeStyle(r), t.push(r);
  }
  return t;
}
let gi = null;
function $g(e, t) {
  var n = by ? (e._window || window).getSelection() : null;
  if (!n) return !1;
  var r = n.anchorNode;
  if (
    ((n = n.focusNode),
    (r !== null && n !== null && !j.isSelectionWithinEditor(e, r, n)) ||
      (t.preventDefault(),
      (t = t.clipboardData),
      (r = j.$getSelection()),
      t === null || r === null))
  )
    return !1;
  (n = ev(e)), (e = tv(e));
  let i = '';
  return (
    r !== null && (i = r.getTextContent()),
    n !== null && t.setData('text/html', n),
    e !== null && t.setData('application/x-lexical-editor', e),
    t.setData('text/plain', i),
    !0
  );
}
Kn.$generateJSONFromSelectedNodes = rv;
Kn.$generateNodesFromSerializedNodes = iv;
Kn.$getHtmlContent = ev;
Kn.$getLexicalContent = tv;
Kn.$insertDataTransferForPlainText = function (e, t) {
  (e = e.getData('text/plain') || e.getData('text/uri-list')),
    e != null && t.insertRawText(e);
};
Kn.$insertDataTransferForRichText = function (e, t, n) {
  var r = e.getData('application/x-lexical-editor');
  if (r)
    try {
      let l = JSON.parse(r);
      if (l.namespace === n._config.namespace && Array.isArray(l.nodes)) {
        let s = iv(l.nodes);
        return Id(n, s, t);
      }
    } catch {}
  if ((r = e.getData('text/html')))
    try {
      var i = new DOMParser().parseFromString(r, 'text/html'),
        o = qy.$generateNodesFromDOM(n, i);
      return Id(n, o, t);
    } catch {}
  if (((e = e.getData('text/plain') || e.getData('text/uri-list')), e != null))
    if (j.$isRangeSelection(t))
      for (e = e.split(/(\r?\n|\t)/), n = e.length, i = 0; i < n; i++)
        (o = e[i]),
          o ===
            `
` ||
          o ===
            `\r
`
            ? t.insertParagraph()
            : o === '	'
            ? t.insertNodes([j.$createTabNode()])
            : t.insertText(o);
    else t.insertRawText(e);
};
Kn.$insertGeneratedNodes = Id;
Kn.copyToClipboard = async function (e, t) {
  if (gi !== null) return !1;
  if (t !== null)
    return new Promise((l) => {
      e.update(() => {
        l($g(e, t));
      });
    });
  var n = e.getRootElement();
  let r = e._window == null ? window.document : e._window.document,
    i = by ? (e._window || window).getSelection() : null;
  if (n === null || i === null) return !1;
  let o = r.createElement('span');
  return (
    (o.style.cssText = 'position: fixed; top: -1000px;'),
    o.append(r.createTextNode('#')),
    n.append(o),
    (n = new Range()),
    n.setStart(o, 0),
    n.setEnd(o, 1),
    i.removeAllRanges(),
    i.addRange(n),
    new Promise((l) => {
      let s = e.registerCommand(
        j.COPY_COMMAND,
        (u) => (
          Ki.objectKlassEquals(u, ClipboardEvent) &&
            (s(),
            gi !== null && (window.clearTimeout(gi), (gi = null)),
            l($g(e, u))),
          !0
        ),
        j.COMMAND_PRIORITY_CRITICAL
      );
      (gi = window.setTimeout(() => {
        s(), (gi = null), l(!1);
      }, 50)),
        r.execCommand('copy'),
        o.remove();
    })
  );
};
const FE = Kn;
var BE = FE,
  Pu = BE,
  ys = Ct,
  gn = We,
  C = H;
function kg(e, t) {
  return typeof document.caretRangeFromPoint < 'u'
    ? ((e = document.caretRangeFromPoint(e, t)),
      e === null ? null : { node: e.startContainer, offset: e.startOffset })
    : document.caretPositionFromPoint !== 'undefined'
    ? ((e = document.caretPositionFromPoint(e, t)),
      e === null ? null : { node: e.offsetNode, offset: e.offset })
    : null;
}
let yo =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  jE = yo && 'documentMode' in document ? document.documentMode : null,
  WE =
    yo && 'InputEvent' in window && !jE
      ? 'getTargetRanges' in new window.InputEvent('input')
      : !1,
  HE = yo && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
  UE = yo && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  KE = yo && /^(?=.*Chrome).*/i.test(navigator.userAgent),
  VE = yo && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !KE,
  zd = C.createCommand('DRAG_DROP_PASTE_FILE'),
  pp = class ov extends C.ElementNode {
    static getType() {
      return 'quote';
    }
    static clone(t) {
      return new ov(t.__key);
    }
    constructor(t) {
      super(t);
    }
    createDOM(t) {
      let n = document.createElement('blockquote');
      return gn.addClassNamesToElement(n, t.theme.quote), n;
    }
    updateDOM() {
      return !1;
    }
    static importDOM() {
      return { blockquote: () => ({ conversion: YE, priority: 0 }) };
    }
    exportDOM(t) {
      if ((({ element: t } = super.exportDOM(t)), t && gn.isHTMLElement(t))) {
        this.isEmpty() && t.append(document.createElement('br'));
        var n = this.getFormatType();
        (t.style.textAlign = n), (n = this.getDirection()) && (t.dir = n);
      }
      return { element: t };
    }
    static importJSON(t) {
      let n = hp();
      return (
        n.setFormat(t.format),
        n.setIndent(t.indent),
        n.setDirection(t.direction),
        n
      );
    }
    exportJSON() {
      return { ...super.exportJSON(), type: 'quote' };
    }
    insertNewAfter(t, n) {
      t = C.$createParagraphNode();
      let r = this.getDirection();
      return t.setDirection(r), this.insertAfter(t, n), t;
    }
    collapseAtStart() {
      let t = C.$createParagraphNode();
      return (
        this.getChildren().forEach((n) => t.append(n)), this.replace(t), !0
      );
    }
  };
function hp() {
  return C.$applyNodeReplacement(new pp());
}
let gp = class lv extends C.ElementNode {
  static getType() {
    return 'heading';
  }
  static clone(t) {
    return new lv(t.__tag, t.__key);
  }
  constructor(t, n) {
    super(n), (this.__tag = t);
  }
  getTag() {
    return this.__tag;
  }
  createDOM(t) {
    let n = this.__tag,
      r = document.createElement(n);
    return (
      (t = t.theme.heading),
      t !== void 0 && gn.addClassNamesToElement(r, t[n]),
      r
    );
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {
      h1: () => ({ conversion: mi, priority: 0 }),
      h2: () => ({ conversion: mi, priority: 0 }),
      h3: () => ({ conversion: mi, priority: 0 }),
      h4: () => ({ conversion: mi, priority: 0 }),
      h5: () => ({ conversion: mi, priority: 0 }),
      h6: () => ({ conversion: mi, priority: 0 }),
      p: (t) => (
        (t = t.firstChild),
        t !== null && Og(t)
          ? { conversion: () => ({ node: null }), priority: 3 }
          : null
      ),
      span: (t) =>
        Og(t) ? { conversion: () => ({ node: Ai('h1') }), priority: 3 } : null,
    };
  }
  exportDOM(t) {
    if ((({ element: t } = super.exportDOM(t)), t && gn.isHTMLElement(t))) {
      this.isEmpty() && t.append(document.createElement('br'));
      var n = this.getFormatType();
      (t.style.textAlign = n), (n = this.getDirection()) && (t.dir = n);
    }
    return { element: t };
  }
  static importJSON(t) {
    let n = Ai(t.tag);
    return (
      n.setFormat(t.format),
      n.setIndent(t.indent),
      n.setDirection(t.direction),
      n
    );
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      tag: this.getTag(),
      type: 'heading',
      version: 1,
    };
  }
  insertNewAfter(t, n = !0) {
    (t = t ? t.anchor.offset : 0),
      (t =
        0 < t && t < this.getTextContentSize()
          ? Ai(this.getTag())
          : C.$createParagraphNode());
    let r = this.getDirection();
    return t.setDirection(r), this.insertAfter(t, n), t;
  }
  collapseAtStart() {
    let t = this.isEmpty() ? C.$createParagraphNode() : Ai(this.getTag());
    return this.getChildren().forEach((n) => t.append(n)), this.replace(t), !0;
  }
  extractWithChild() {
    return !0;
  }
};
function Og(e) {
  return e.nodeName.toLowerCase() === 'span' ? e.style.fontSize === '26pt' : !1;
}
function mi(e) {
  let t = e.nodeName.toLowerCase(),
    n = null;
  return (
    (t === 'h1' ||
      t === 'h2' ||
      t === 'h3' ||
      t === 'h4' ||
      t === 'h5' ||
      t === 'h6') &&
      ((n = Ai(t)), e.style !== null && n.setFormat(e.style.textAlign)),
    { node: n }
  );
}
function YE(e) {
  let t = hp();
  return e.style !== null && t.setFormat(e.style.textAlign), { node: t };
}
function Ai(e) {
  return C.$applyNodeReplacement(new gp(e));
}
function GE(e, t) {
  e.preventDefault(),
    t.update(
      () => {
        let n = C.$getSelection(),
          r =
            e instanceof InputEvent || e instanceof KeyboardEvent
              ? null
              : e.clipboardData;
        r != null &&
          (C.$isRangeSelection(n) || C.DEPRECATED_$isGridSelection(n)) &&
          Pu.$insertDataTransferForRichText(r, n, t);
      },
      { tag: 'paste' }
    );
}
async function QE(e, t) {
  await Pu.copyToClipboard(
    t,
    gn.objectKlassEquals(e, ClipboardEvent) ? e : null
  ),
    t.update(() => {
      let n = C.$getSelection();
      C.$isRangeSelection(n)
        ? n.removeText()
        : C.$isNodeSelection(n) && n.getNodes().forEach((r) => r.remove());
    });
}
function zo(e) {
  let t = null;
  if (
    (e instanceof DragEvent
      ? (t = e.dataTransfer)
      : e instanceof ClipboardEvent && (t = e.clipboardData),
    t === null)
  )
    return [!1, [], !1];
  var n = t.types;
  return (
    (e = n.includes('Files')),
    (n = n.includes('text/html') || n.includes('text/plain')),
    [e, Array.from(t.files), n]
  );
}
function Rg(e) {
  var t = C.$getSelection();
  if (!C.$isRangeSelection(t)) return !1;
  let n = new Set();
  t = t.getNodes();
  for (let o = 0; o < t.length; o++) {
    var r = t[o],
      i = r.getKey();
    n.has(i) ||
      ((r = gn.$getNearestBlockElementAncestorOrThrow(r)),
      (i = r.getKey()),
      r.canIndent() && !n.has(i) && (n.add(i), e(r)));
  }
  return 0 < n.size;
}
function vs(e) {
  return (e = C.$getNearestNodeFromDOMNode(e)), C.$isDecoratorNode(e);
}
Sn.$createHeadingNode = Ai;
Sn.$createQuoteNode = hp;
Sn.$isHeadingNode = function (e) {
  return e instanceof gp;
};
Sn.$isQuoteNode = function (e) {
  return e instanceof pp;
};
Sn.DRAG_DROP_PASTE = zd;
Sn.HeadingNode = gp;
Sn.QuoteNode = pp;
Sn.eventFiles = zo;
Sn.registerRichText = function (e) {
  return gn.mergeRegister(
    e.registerCommand(
      C.CLICK_COMMAND,
      () => {
        const t = C.$getSelection();
        return C.$isNodeSelection(t) ? (t.clear(), !0) : !1;
      },
      0
    ),
    e.registerCommand(
      C.DELETE_CHARACTER_COMMAND,
      (t) => {
        const n = C.$getSelection();
        return C.$isRangeSelection(n) ? (n.deleteCharacter(t), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.DELETE_WORD_COMMAND,
      (t) => {
        const n = C.$getSelection();
        return C.$isRangeSelection(n) ? (n.deleteWord(t), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.DELETE_LINE_COMMAND,
      (t) => {
        const n = C.$getSelection();
        return C.$isRangeSelection(n) ? (n.deleteLine(t), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.CONTROLLED_TEXT_INSERTION_COMMAND,
      (t) => {
        const n = C.$getSelection();
        if (typeof t == 'string')
          C.$isRangeSelection(n)
            ? n.insertText(t)
            : C.DEPRECATED_$isGridSelection(n);
        else {
          if (!C.$isRangeSelection(n) && !C.DEPRECATED_$isGridSelection(n))
            return !1;
          const r = t.dataTransfer;
          r != null
            ? Pu.$insertDataTransferForRichText(r, n, e)
            : C.$isRangeSelection(n) && (t = t.data) && n.insertText(t);
        }
        return !0;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.REMOVE_TEXT_COMMAND,
      () => {
        const t = C.$getSelection();
        return C.$isRangeSelection(t) ? (t.removeText(), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.FORMAT_TEXT_COMMAND,
      (t) => {
        const n = C.$getSelection();
        return C.$isRangeSelection(n) ? (n.formatText(t), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.FORMAT_ELEMENT_COMMAND,
      (t) => {
        var n = C.$getSelection();
        if (!C.$isRangeSelection(n) && !C.$isNodeSelection(n)) return !1;
        n = n.getNodes();
        for (const r of n)
          (n = gn.$findMatchingParent(
            r,
            (i) => C.$isElementNode(i) && !i.isInline()
          )),
            n !== null && n.setFormat(t);
        return !0;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.INSERT_LINE_BREAK_COMMAND,
      (t) => {
        const n = C.$getSelection();
        return C.$isRangeSelection(n) ? (n.insertLineBreak(t), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.INSERT_PARAGRAPH_COMMAND,
      () => {
        const t = C.$getSelection();
        return C.$isRangeSelection(t) ? (t.insertParagraph(), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.INSERT_TAB_COMMAND,
      () => (C.$insertNodes([C.$createTabNode()]), !0),
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.INDENT_CONTENT_COMMAND,
      () =>
        Rg((t) => {
          const n = t.getIndent();
          t.setIndent(n + 1);
        }),
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.OUTDENT_CONTENT_COMMAND,
      () =>
        Rg((t) => {
          const n = t.getIndent();
          0 < n && t.setIndent(n - 1);
        }),
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_ARROW_UP_COMMAND,
      (t) => {
        var n = C.$getSelection();
        if (C.$isNodeSelection(n) && !vs(t.target)) {
          if (((t = n.getNodes()), 0 < t.length))
            return t[0].selectPrevious(), !0;
        } else if (
          C.$isRangeSelection(n) &&
          ((n = C.$getAdjacentNode(n.focus, !0)),
          !t.shiftKey &&
            C.$isDecoratorNode(n) &&
            !n.isIsolated() &&
            !n.isInline())
        )
          return n.selectPrevious(), t.preventDefault(), !0;
        return !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_ARROW_DOWN_COMMAND,
      (t) => {
        var n = C.$getSelection();
        if (C.$isNodeSelection(n)) {
          if (((t = n.getNodes()), 0 < t.length))
            return t[0].selectNext(0, 0), !0;
        } else if (C.$isRangeSelection(n)) {
          let r = n.focus;
          if (r.key === 'root' && r.offset === C.$getRoot().getChildrenSize())
            return t.preventDefault(), !0;
          if (
            ((n = C.$getAdjacentNode(n.focus, !1)),
            !t.shiftKey &&
              C.$isDecoratorNode(n) &&
              !n.isIsolated() &&
              !n.isInline())
          )
            return n.selectNext(), t.preventDefault(), !0;
        }
        return !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_ARROW_LEFT_COMMAND,
      (t) => {
        const n = C.$getSelection();
        if (C.$isNodeSelection(n)) {
          var r = n.getNodes();
          if (0 < r.length)
            return t.preventDefault(), r[0].selectPrevious(), !0;
        }
        return C.$isRangeSelection(n) &&
          ys.$shouldOverrideDefaultCharacterSelection(n, !0)
          ? ((r = t.shiftKey),
            t.preventDefault(),
            ys.$moveCharacter(n, r, !0),
            !0)
          : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_ARROW_RIGHT_COMMAND,
      (t) => {
        const n = C.$getSelection();
        if (C.$isNodeSelection(n) && !vs(t.target)) {
          var r = n.getNodes();
          if (0 < r.length)
            return t.preventDefault(), r[0].selectNext(0, 0), !0;
        }
        return C.$isRangeSelection(n)
          ? ((r = t.shiftKey),
            ys.$shouldOverrideDefaultCharacterSelection(n, !1)
              ? (t.preventDefault(), ys.$moveCharacter(n, r, !1), !0)
              : !1)
          : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_BACKSPACE_COMMAND,
      (t) => {
        if (vs(t.target)) return !1;
        const n = C.$getSelection();
        if (!C.$isRangeSelection(n)) return !1;
        t.preventDefault(), ({ anchor: t } = n);
        const r = t.getNode();
        return n.isCollapsed() &&
          t.offset === 0 &&
          !C.$isRootNode(r) &&
          0 < gn.$getNearestBlockElementAncestorOrThrow(r).getIndent()
          ? e.dispatchCommand(C.OUTDENT_CONTENT_COMMAND, void 0)
          : e.dispatchCommand(C.DELETE_CHARACTER_COMMAND, !0);
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_DELETE_COMMAND,
      (t) => {
        if (vs(t.target)) return !1;
        const n = C.$getSelection();
        return C.$isRangeSelection(n)
          ? (t.preventDefault(),
            e.dispatchCommand(C.DELETE_CHARACTER_COMMAND, !1))
          : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_ENTER_COMMAND,
      (t) => {
        const n = C.$getSelection();
        if (!C.$isRangeSelection(n)) return !1;
        if (t !== null) {
          if ((UE || HE || VE) && WE) return !1;
          if ((t.preventDefault(), t.shiftKey))
            return e.dispatchCommand(C.INSERT_LINE_BREAK_COMMAND, !1);
        }
        return e.dispatchCommand(C.INSERT_PARAGRAPH_COMMAND, void 0);
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.KEY_ESCAPE_COMMAND,
      () => {
        const t = C.$getSelection();
        return C.$isRangeSelection(t) ? (e.blur(), !0) : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.DROP_COMMAND,
      (t) => {
        const [, n] = zo(t);
        if (0 < n.length) {
          var r = kg(t.clientX, t.clientY);
          if (r !== null) {
            const { offset: o, node: l } = r;
            var i = C.$getNearestNodeFromDOMNode(l);
            if (i !== null) {
              if (((r = C.$createRangeSelection()), C.$isTextNode(i)))
                r.anchor.set(i.getKey(), o, 'text'),
                  r.focus.set(i.getKey(), o, 'text');
              else {
                const s = i.getParentOrThrow().getKey();
                (i = i.getIndexWithinParent() + 1),
                  r.anchor.set(s, i, 'element'),
                  r.focus.set(s, i, 'element');
              }
              (r = C.$normalizeSelection__EXPERIMENTAL(r)), C.$setSelection(r);
            }
            e.dispatchCommand(zd, n);
          }
          return t.preventDefault(), !0;
        }
        return (t = C.$getSelection()), !!C.$isRangeSelection(t);
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.DRAGSTART_COMMAND,
      (t) => {
        [t] = zo(t);
        const n = C.$getSelection();
        return !(t && !C.$isRangeSelection(n));
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.DRAGOVER_COMMAND,
      (t) => {
        var [n] = zo(t);
        const r = C.$getSelection();
        return n && !C.$isRangeSelection(r)
          ? !1
          : ((n = kg(t.clientX, t.clientY)),
            n !== null &&
              ((n = C.$getNearestNodeFromDOMNode(n.node)),
              C.$isDecoratorNode(n) && t.preventDefault()),
            !0);
      },
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.SELECT_ALL_COMMAND,
      () => (C.$selectAll(), !0),
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.COPY_COMMAND,
      (t) => (
        Pu.copyToClipboard(
          e,
          gn.objectKlassEquals(t, ClipboardEvent) ? t : null
        ),
        !0
      ),
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.CUT_COMMAND,
      (t) => (QE(t, e), !0),
      C.COMMAND_PRIORITY_EDITOR
    ),
    e.registerCommand(
      C.PASTE_COMMAND,
      (t) => {
        const [, n, r] = zo(t);
        if (0 < n.length && !r) return e.dispatchCommand(zd, n), !0;
        if (C.isSelectionCapturedInDecoratorInput(t.target)) return !1;
        const i = C.$getSelection();
        return C.$isRangeSelection(i) || C.DEPRECATED_$isGridSelection(i)
          ? (GE(t, e), !0)
          : !1;
      },
      C.COMMAND_PRIORITY_EDITOR
    )
  );
};
const JE = Sn;
var ha = JE,
  yt = {},
  X = H,
  Er = We;
function io(e) {
  let t = new URLSearchParams();
  t.append('code', e);
  for (let n = 1; n < arguments.length; n++) t.append('v', arguments[n]);
  throw Error(
    `Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function sv(e) {
  let t = 1;
  for (e = e.getParent(); e != null; ) {
    if (_e(e)) {
      if (((e = e.getParent()), Y(e))) {
        t++, (e = e.getParent());
        continue;
      }
      io(40);
    }
    break;
  }
  return t;
}
function Fd(e) {
  (e = e.getParent()), Y(e) || io(40);
  let t = e;
  for (; t !== null; ) (t = t.getParent()), Y(t) && (e = t);
  return e;
}
function uv(e) {
  let t = [];
  e = e.getChildren().filter(_e);
  for (let n = 0; n < e.length; n++) {
    let r = e[n],
      i = r.getFirstChild();
    Y(i) ? (t = t.concat(uv(i))) : t.push(r);
  }
  return t;
}
function fn(e) {
  return _e(e) && Y(e.getFirstChild());
}
function XE(e) {
  for (; e.getNextSibling() == null && e.getPreviousSibling() == null; ) {
    let t = e.getParent();
    if (t == null || (!_e(e) && !Y(e))) break;
    e = t;
  }
  e.remove();
}
function Dg(e) {
  return Mt().append(e);
}
function av(e, t) {
  return (
    _e(e) &&
    (t.length === 0 ||
      (t.length === 1 && e.is(t[0]) && e.getChildrenSize() === 0))
  );
}
function ii(e, t) {
  e.splice(e.getChildrenSize(), 0, t);
}
function Mg(e, t) {
  if (Y(e)) return e;
  let n = e.getPreviousSibling(),
    r = e.getNextSibling(),
    i = Mt();
  return (
    i.setFormat(e.getFormatType()),
    i.setIndent(e.getIndent()),
    ii(i, e.getChildren()),
    Y(n) && t === n.getListType()
      ? (n.append(i),
        e.remove(),
        Y(r) && t === r.getListType() && (ii(n, r.getChildren()), r.remove()),
        n)
      : Y(r) && t === r.getListType()
      ? (r.getFirstChildOrThrow().insertBefore(i), e.remove(), r)
      : ((t = pt(t)), t.append(i), e.replace(t), ut(t), t)
  );
}
function cv(e, t) {
  var n = e.getLastChild();
  let r = t.getFirstChild();
  n &&
    r &&
    fn(n) &&
    fn(r) &&
    (cv(n.getFirstChild(), r.getFirstChild()), r.remove()),
    (n = t.getChildren()),
    0 < n.length && (e.append(...n), ut(e)),
    t.remove();
}
function ut(e, t) {
  if (((e = t || e.getChildren()), e !== void 0))
    for (t = 0; t < e.length; t++) {
      let o = e[t];
      if (_e(o)) {
        let l = o.getValue();
        var n = o,
          r = n.getParent(),
          i = 1;
        for (
          r != null && (Y(r) ? (i = r.getStart()) : io(44)),
            n = n.getPreviousSiblings(),
            r = 0;
          r < n.length;
          r++
        ) {
          let s = n[r];
          _e(s) && !Y(s.getFirstChild()) && i++;
        }
        l !== i && o.setValue(i);
      }
    }
}
function ZE(e) {
  if (!fn(e)) {
    var t = e.getParent(),
      n = t ? t.getParent() : void 0,
      r = n ? n.getParent() : void 0;
    if (Y(r) && _e(n) && Y(t)) {
      var i = t ? t.getFirstChild() : void 0,
        o = t ? t.getLastChild() : void 0;
      if (e.is(i)) n.insertBefore(e), t.isEmpty() && n.remove();
      else if (e.is(o)) n.insertAfter(e), t.isEmpty() && n.remove();
      else {
        var l = t.getListType();
        i = Mt();
        let s = pt(l);
        i.append(s),
          e.getPreviousSiblings().forEach((u) => s.append(u)),
          (o = Mt()),
          (l = pt(l)),
          o.append(l),
          ii(l, e.getNextSiblings()),
          n.insertBefore(i),
          n.insertAfter(o),
          n.replace(e);
      }
      ut(t), ut(r);
    }
  }
}
let ga = class dv extends X.ElementNode {
  static getType() {
    return 'listitem';
  }
  static clone(t) {
    return new dv(t.__value, t.__checked, t.__key);
  }
  constructor(t, n, r) {
    super(r), (this.__value = t === void 0 ? 1 : t), (this.__checked = n);
  }
  createDOM(t) {
    let n = document.createElement('li'),
      r = this.getParent();
    return (
      Y(r) && r.getListType() === 'check' && Lg(n, this, null),
      (n.value = this.__value),
      Pg(n, t.theme, this),
      n
    );
  }
  updateDOM(t, n, r) {
    let i = this.getParent();
    return (
      Y(i) && i.getListType() === 'check' && Lg(n, this, t),
      (n.value = this.__value),
      Pg(n, r.theme, this),
      !1
    );
  }
  static transform() {
    return (t) => {
      let n = t.getParent();
      Y(n) &&
        (ut(n),
        n.getListType() !== 'check' &&
          t.getChecked() != null &&
          t.setChecked(void 0));
    };
  }
  static importDOM() {
    return { li: () => ({ conversion: qE, priority: 0 }) };
  }
  static importJSON(t) {
    let n = Mt();
    return (
      n.setChecked(t.checked),
      n.setValue(t.value),
      n.setFormat(t.format),
      n.setDirection(t.direction),
      n
    );
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      checked: this.getChecked(),
      type: 'listitem',
      value: this.getValue(),
      version: 1,
    };
  }
  append(...t) {
    for (let n = 0; n < t.length; n++) {
      let r = t[n];
      if (X.$isElementNode(r) && this.canMergeWith(r)) {
        let i = r.getChildren();
        this.append(...i), r.remove();
      } else super.append(r);
    }
    return this;
  }
  replace(t, n) {
    if (_e(t)) return super.replace(t);
    this.setIndent(0);
    let r = this.getParentOrThrow();
    if (!Y(r)) return t;
    if (r.__first === this.getKey()) r.insertBefore(t);
    else if (r.__last === this.getKey()) r.insertAfter(t);
    else {
      let i = pt(r.getListType()),
        o = this.getNextSibling();
      for (; o; ) {
        let l = o;
        (o = o.getNextSibling()), i.append(l);
      }
      r.insertAfter(t), t.insertAfter(i);
    }
    return (
      n &&
        this.getChildren().forEach((i) => {
          t.append(i);
        }),
      this.remove(),
      r.getChildrenSize() === 0 && r.remove(),
      t
    );
  }
  insertAfter(t, n = !0) {
    var r = this.getParentOrThrow();
    Y(r) || io(39);
    var i = this.getNextSiblings();
    if (_e(t))
      return (
        (n = super.insertAfter(t, n)),
        (t = t.getParentOrThrow()),
        Y(t) && ut(t),
        n
      );
    if (Y(t)) {
      for (r = t, t = t.getChildren(), i = t.length - 1; 0 <= i; i--)
        (r = t[i]), this.insertAfter(r, n);
      return r;
    }
    if ((r.insertAfter(t, n), i.length !== 0)) {
      let o = pt(r.getListType());
      i.forEach((l) => o.append(l)), t.insertAfter(o, n);
    }
    return t;
  }
  remove(t) {
    let n = this.getPreviousSibling(),
      r = this.getNextSibling();
    super.remove(t),
      n && r && fn(n) && fn(r)
        ? (cv(n.getFirstChild(), r.getFirstChild()), r.remove())
        : r && ((t = r.getParent()), Y(t) && ut(t));
  }
  insertNewAfter(t, n = !0) {
    return (
      (t = Mt(this.__checked == null ? void 0 : !1)), this.insertAfter(t, n), t
    );
  }
  collapseAtStart(t) {
    let n = X.$createParagraphNode();
    this.getChildren().forEach((l) => n.append(l));
    var r = this.getParentOrThrow(),
      i = r.getParentOrThrow();
    let o = _e(i);
    return (
      r.getChildrenSize() === 1
        ? o
          ? (r.remove(), i.select())
          : (r.insertBefore(n),
            r.remove(),
            (r = t.anchor),
            (t = t.focus),
            (i = n.getKey()),
            r.type === 'element' &&
              r.getNode().is(this) &&
              r.set(i, r.offset, 'element'),
            t.type === 'element' &&
              t.getNode().is(this) &&
              t.set(i, t.offset, 'element'))
        : (r.insertBefore(n), this.remove()),
      !0
    );
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(t) {
    this.getWritable().__value = t;
  }
  getChecked() {
    return this.getLatest().__checked;
  }
  setChecked(t) {
    this.getWritable().__checked = t;
  }
  toggleChecked() {
    this.setChecked(!this.__checked);
  }
  getIndent() {
    var t = this.getParent();
    if (t === null) return this.getLatest().__indent;
    t = t.getParentOrThrow();
    let n = 0;
    for (; _e(t); ) (t = t.getParentOrThrow().getParentOrThrow()), n++;
    return n;
  }
  setIndent(t) {
    (typeof t == 'number' && -1 < t) || io(117);
    let n = this.getIndent();
    for (; n !== t; )
      if (n < t) {
        e: {
          var r = new Set();
          if (fn(this) || r.has(this.getKey())) break e;
          let s = this.getParent();
          var i = this.getNextSibling(),
            o = this.getPreviousSibling();
          if (fn(i) && fn(o)) {
            if (((o = o.getFirstChild()), Y(o))) {
              o.append(this);
              var l = i.getFirstChild();
              Y(l) &&
                ((l = l.getChildren()),
                ii(o, l),
                i.remove(),
                r.add(i.getKey())),
                ut(o);
            }
          } else
            fn(i)
              ? ((i = i.getFirstChild()),
                Y(i) &&
                  ((r = i.getFirstChild()),
                  r !== null && r.insertBefore(this),
                  ut(i)))
              : fn(o)
              ? ((i = o.getFirstChild()), Y(i) && (i.append(this), ut(i)))
              : Y(s) &&
                ((r = Mt()),
                (l = pt(s.getListType())),
                r.append(l),
                l.append(this),
                o ? o.insertAfter(r) : i ? i.insertBefore(r) : s.append(r),
                ut(l));
          Y(s) && ut(s);
        }
        n++;
      } else ZE(this), n--;
    return this;
  }
  insertBefore(t) {
    if (_e(t)) {
      let n = this.getParentOrThrow();
      if (Y(n)) {
        let r = this.getNextSiblings();
        ut(n, r);
      }
    }
    return super.insertBefore(t);
  }
  canInsertAfter(t) {
    return _e(t);
  }
  canReplaceWith(t) {
    return _e(t);
  }
  canMergeWith(t) {
    return X.$isParagraphNode(t) || _e(t);
  }
  extractWithChild(t, n) {
    if (!X.$isRangeSelection(n)) return !1;
    t = n.anchor.getNode();
    let r = n.focus.getNode();
    return (
      this.isParentOf(t) &&
      this.isParentOf(r) &&
      this.getTextContent().length === n.getTextContent().length
    );
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return pt('bullet');
  }
};
function Pg(e, t, n) {
  let r = [],
    i = [];
  var o = (t = t.list) ? t.listitem : void 0;
  if (t && t.nested) var l = t.nested.listitem;
  if ((o !== void 0 && ((o = o.split(' ')), r.push(...o)), t)) {
    (o = n.getParent()), (o = Y(o) && o.getListType() === 'check');
    let s = n.getChecked();
    (o && !s) || i.push(t.listitemUnchecked),
      (o && s) || i.push(t.listitemChecked),
      o && r.push(s ? t.listitemChecked : t.listitemUnchecked);
  }
  l !== void 0 &&
    ((l = l.split(' ')),
    n.getChildren().some((s) => Y(s)) ? r.push(...l) : i.push(...l)),
    0 < i.length && Er.removeClassNamesFromElement(e, ...i),
    0 < r.length && Er.addClassNamesToElement(e, ...r);
}
function Lg(e, t, n) {
  Y(t.getFirstChild())
    ? (e.removeAttribute('role'),
      e.removeAttribute('tabIndex'),
      e.removeAttribute('aria-checked'))
    : (e.setAttribute('role', 'checkbox'),
      e.setAttribute('tabIndex', '-1'),
      (n && t.__checked === n.__checked) ||
        e.setAttribute('aria-checked', t.getChecked() ? 'true' : 'false'));
}
function qE(e) {
  return (
    (e = Er.isHTMLElement(e) && e.getAttribute('aria-checked') === 'true'),
    { node: Mt(e) }
  );
}
function Mt(e) {
  return X.$applyNodeReplacement(new ga(void 0, e));
}
function _e(e) {
  return e instanceof ga;
}
let mp = class fv extends X.ElementNode {
  static getType() {
    return 'list';
  }
  static clone(t) {
    return new fv(t.__listType || zg[t.__tag], t.__start, t.__key);
  }
  constructor(t, n, r) {
    super(r),
      (this.__listType = t = zg[t] || t),
      (this.__tag = t === 'number' ? 'ol' : 'ul'),
      (this.__start = n);
  }
  getTag() {
    return this.__tag;
  }
  setListType(t) {
    let n = this.getWritable();
    (n.__listType = t), (n.__tag = t === 'number' ? 'ol' : 'ul');
  }
  getListType() {
    return this.__listType;
  }
  getStart() {
    return this.__start;
  }
  createDOM(t) {
    let n = document.createElement(this.__tag);
    return (
      this.__start !== 1 && n.setAttribute('start', String(this.__start)),
      (n.__lexicalListType = this.__listType),
      Ag(n, t.theme, this),
      n
    );
  }
  updateDOM(t, n, r) {
    return t.__tag !== this.__tag ? !0 : (Ag(n, r.theme, this), !1);
  }
  static importDOM() {
    return {
      ol: () => ({ conversion: Ig, priority: 0 }),
      ul: () => ({ conversion: Ig, priority: 0 }),
    };
  }
  static importJSON(t) {
    let n = pt(t.listType, t.start);
    return (
      n.setFormat(t.format),
      n.setIndent(t.indent),
      n.setDirection(t.direction),
      n
    );
  }
  exportDOM(t) {
    return (
      ({ element: t } = super.exportDOM(t)),
      t &&
        Er.isHTMLElement(t) &&
        (this.__start !== 1 && t.setAttribute('start', String(this.__start)),
        this.__listType === 'check' &&
          t.setAttribute('__lexicalListType', 'check')),
      { element: t }
    );
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      listType: this.getListType(),
      start: this.getStart(),
      tag: this.getTag(),
      type: 'list',
      version: 1,
    };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  append(...t) {
    for (let r = 0; r < t.length; r++) {
      var n = t[r];
      if (_e(n)) super.append(n);
      else {
        let i = Mt();
        Y(n) ||
          (X.$isElementNode(n) && (n = X.$createTextNode(n.getTextContent()))),
          i.append(n),
          super.append(i);
      }
    }
    return ut(this), this;
  }
  extractWithChild(t) {
    return _e(t);
  }
};
function Ag(e, t, n) {
  let r = [],
    i = [];
  var o = t.list;
  if (o !== void 0) {
    let s = o[`${n.__tag}Depth`] || [];
    t = sv(n) - 1;
    let u = t % s.length;
    var l = s[u];
    let a = o[n.__tag],
      d;
    if (
      ((o = o.nested),
      o !== void 0 && o.list && (d = o.list),
      a !== void 0 && r.push(a),
      l !== void 0)
    )
      for (l = l.split(' '), r.push(...l), l = 0; l < s.length; l++)
        l !== u && i.push(n.__tag + l);
    d !== void 0 && ((n = d.split(' ')), 1 < t ? r.push(...n) : i.push(...n));
  }
  0 < i.length && Er.removeClassNamesFromElement(e, ...i),
    0 < r.length && Er.addClassNamesToElement(e, ...r);
}
function bE(e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    var n = e[r];
    _e(n)
      ? (t.push(n),
        (n = n.getChildren()),
        1 < n.length &&
          n.forEach((i) => {
            Y(i) && t.push(Dg(i));
          }))
      : t.push(Dg(n));
  }
  return t;
}
function Ig(e) {
  let t = e.nodeName.toLowerCase(),
    n = null;
  return (
    t === 'ol'
      ? (n = pt('number', e.start))
      : t === 'ul' &&
        (n =
          Er.isHTMLElement(e) && e.getAttribute('__lexicallisttype') === 'check'
            ? pt('check')
            : pt('bullet')),
    { after: bE, node: n }
  );
}
let zg = { ol: 'number', ul: 'bullet' };
function pt(e, t = 1) {
  return X.$applyNodeReplacement(new mp(e, t));
}
function Y(e) {
  return e instanceof mp;
}
let eN = X.createCommand('INSERT_UNORDERED_LIST_COMMAND'),
  tN = X.createCommand('INSERT_ORDERED_LIST_COMMAND'),
  nN = X.createCommand('INSERT_CHECK_LIST_COMMAND'),
  rN = X.createCommand('REMOVE_LIST_COMMAND');
yt.$createListItemNode = Mt;
yt.$createListNode = pt;
yt.$getListDepth = sv;
yt.$handleListInsertParagraph = function () {
  var e = X.$getSelection();
  if (
    !X.$isRangeSelection(e) ||
    !e.isCollapsed() ||
    ((e = e.anchor.getNode()), !_e(e) || e.getChildrenSize() !== 0)
  )
    return !1;
  var t = Fd(e),
    n = e.getParent();
  Y(n) || io(40);
  let r = n.getParent(),
    i;
  if (X.$isRootOrShadowRoot(r))
    (i = X.$createParagraphNode()), t.insertAfter(i);
  else if (_e(r)) (i = Mt()), r.insertAfter(i);
  else return !1;
  if ((i.select(), (t = e.getNextSiblings()), 0 < t.length)) {
    let o = pt(n.getListType());
    X.$isParagraphNode(i)
      ? i.insertAfter(o)
      : ((n = Mt()), n.append(o), i.insertAfter(n)),
      t.forEach((l) => {
        l.remove(), o.append(l);
      });
  }
  return XE(e), !0;
};
yt.$isListItemNode = _e;
yt.$isListNode = Y;
yt.INSERT_CHECK_LIST_COMMAND = nN;
yt.INSERT_ORDERED_LIST_COMMAND = tN;
yt.INSERT_UNORDERED_LIST_COMMAND = eN;
yt.ListItemNode = ga;
yt.ListNode = mp;
yt.REMOVE_LIST_COMMAND = rN;
yt.insertList = function (e, t) {
  e.update(() => {
    var n = X.$getSelection();
    if (X.$isRangeSelection(n) || X.DEPRECATED_$isGridSelection(n)) {
      var r = n.getNodes();
      n = n.anchor.getNode();
      var i = n.getParent();
      if (av(n, r))
        (r = pt(t)),
          X.$isRootOrShadowRoot(i)
            ? (n.replace(r),
              (i = Mt()),
              X.$isElementNode(n) &&
                (i.setFormat(n.getFormatType()), i.setIndent(n.getIndent())),
              r.append(i))
            : _e(n) &&
              ((n = n.getParentOrThrow()),
              ii(r, n.getChildren()),
              n.replace(r));
      else
        for (n = new Set(), i = 0; i < r.length; i++) {
          var o = r[i];
          if (X.$isElementNode(o) && o.isEmpty() && !n.has(o.getKey()))
            Mg(o, t);
          else if (X.$isLeafNode(o))
            for (o = o.getParent(); o != null; ) {
              let s = o.getKey();
              if (Y(o)) {
                if (!n.has(s)) {
                  var l = pt(t);
                  ii(l, o.getChildren()), o.replace(l), ut(l), n.add(s);
                }
                break;
              } else {
                if (
                  ((l = o.getParent()), X.$isRootOrShadowRoot(l) && !n.has(s))
                ) {
                  n.add(s), Mg(o, t);
                  break;
                }
                o = l;
              }
            }
        }
    }
  });
};
yt.removeList = function (e) {
  e.update(() => {
    let t = X.$getSelection();
    if (X.$isRangeSelection(t)) {
      var n = new Set(),
        r = t.getNodes(),
        i = t.anchor.getNode();
      if (av(i, r)) n.add(Fd(i));
      else
        for (i = 0; i < r.length; i++) {
          var o = r[i];
          X.$isLeafNode(o) &&
            ((o = Er.$getNearestNodeOfType(o, ga)), o != null && n.add(Fd(o)));
        }
      for (let l of n) {
        (n = l), (r = uv(l));
        for (let s of r)
          (r = X.$createParagraphNode()),
            ii(r, s.getChildren()),
            n.insertAfter(r),
            (n = r),
            s.__key === t.anchor.key && t.anchor.set(r.getKey(), 0, 'element'),
            s.__key === t.focus.key && t.focus.set(r.getKey(), 0, 'element'),
            s.remove();
        l.remove();
      }
    }
  });
};
const iN = yt;
var oi = iN,
  pv = {},
  ma = {},
  hv = R;
function oN(e) {
  let t = new URLSearchParams();
  t.append('code', e);
  for (let n = 1; n < arguments.length; n++) t.append('v', arguments[n]);
  throw Error(
    `Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
let gv = hv.createContext(null);
ma.LexicalComposerContext = gv;
ma.createLexicalComposerContext = function (e, t) {
  let n = null;
  return (
    e != null && (n = e[1]),
    {
      getTheme: function () {
        return t ?? (n != null ? n.getTheme() : null);
      },
    }
  );
};
ma.useLexicalComposerContext = function () {
  let e = hv.useContext(gv);
  return e == null && oN(8), e;
};
const lN = ma;
var le = lN,
  Fg = le,
  Fo = H,
  Lu = R;
let mv =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
var sN = mv ? Lu.useLayoutEffect : Lu.useEffect;
let _s = { tag: 'history-merge' };
function uN(e, t) {
  if (t !== null) {
    if (t === void 0)
      e.update(() => {
        var n = Fo.$getRoot();
        if (n.isEmpty()) {
          let r = Fo.$createParagraphNode();
          n.append(r),
            (n = mv ? document.activeElement : null),
            (Fo.$getSelection() !== null ||
              (n !== null && n === e.getRootElement())) &&
              r.select();
        }
      }, _s);
    else if (t !== null)
      switch (typeof t) {
        case 'string':
          let n = e.parseEditorState(t);
          e.setEditorState(n, _s);
          break;
        case 'object':
          e.setEditorState(t, _s);
          break;
        case 'function':
          e.update(() => {
            Fo.$getRoot().isEmpty() && t(e);
          }, _s);
      }
  }
}
pv.LexicalComposer = function ({ initialConfig: e, children: t }) {
  let n = Lu.useMemo(() => {
    const {
        theme: r,
        namespace: i,
        editor__DEPRECATED: o,
        nodes: l,
        onError: s,
        editorState: u,
      } = e,
      a = Fg.createLexicalComposerContext(null, r);
    let d = o || null;
    if (d === null) {
      const c = Fo.createEditor({
        editable: e.editable,
        namespace: i,
        nodes: l,
        onError: (p) => s(p, c),
        theme: r,
      });
      uN(c, u), (d = c);
    }
    return [d, a];
  }, []);
  return (
    sN(() => {
      let r = e.editable,
        [i] = n;
      i.setEditable(r !== void 0 ? r : !0);
    }, []),
    Lu.createElement(Fg.LexicalComposerContext.Provider, { value: n }, t)
  );
};
const aN = pv;
var cN = aN,
  yv = {},
  dN = le,
  nl = R,
  fN =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u'
      ? nl.useLayoutEffect
      : nl.useEffect;
function pN(e) {
  let [t] = dN.useLexicalComposerContext(),
    n = nl.useMemo(() => e(t), [t, e]),
    r = nl.useRef(n.initialValueFn()),
    [i, o] = nl.useState(r.current);
  return (
    fN(() => {
      let { initialValueFn: l, subscribe: s } = n,
        u = l();
      return (
        r.current !== u && ((r.current = u), o(u)),
        s((a) => {
          (r.current = a), o(a);
        })
      );
    }, [n, e]),
    i
  );
}
function hN(e) {
  return {
    initialValueFn: () => e.isEditable(),
    subscribe: (t) => e.registerEditableListener(t),
  };
}
var gN = function () {
  return pN(hN);
};
const mN = gN;
var yN = mN,
  $r = {},
  at = H;
function yp(e, t = !0) {
  return e ? !1 : ((e = vv()), t && (e = e.trim()), e === '');
}
function vv() {
  return at.$getRoot().getTextContent();
}
function _v(e) {
  if (!yp(e, !1)) return !1;
  e = at.$getRoot().getChildren();
  let t = e.length;
  if (1 < t) return !1;
  for (let r = 0; r < t; r++) {
    var n = e[r];
    if (at.$isDecoratorNode(n)) return !1;
    if (at.$isElementNode(n)) {
      if (!at.$isParagraphNode(n) || n.__indent !== 0) return !1;
      n = n.getChildren();
      let i = n.length;
      for (let o = 0; o < i; o++) if (!at.$isTextNode(n[r])) return !1;
    }
  }
  return !0;
}
$r.$canShowPlaceholder = _v;
$r.$canShowPlaceholderCurry = function (e) {
  return () => _v(e);
};
$r.$findTextIntersectionFromCharacters = function (e, t) {
  var n = e.getFirstChild();
  e = 0;
  e: for (; n !== null; ) {
    if (at.$isElementNode(n)) {
      var r = n.getFirstChild();
      if (r !== null) {
        n = r;
        continue;
      }
    } else if (at.$isTextNode(n)) {
      if (((r = n.getTextContentSize()), e + r > t))
        return { node: n, offset: t - e };
      e += r;
    }
    if (((r = n.getNextSibling()), r !== null)) n = r;
    else {
      for (n = n.getParent(); n !== null; ) {
        if (((r = n.getNextSibling()), r !== null)) {
          n = r;
          continue e;
        }
        n = n.getParent();
      }
      break;
    }
  }
  return null;
};
$r.$isRootTextContentEmpty = yp;
$r.$isRootTextContentEmptyCurry = function (e, t) {
  return () => yp(e, t);
};
$r.$rootTextContent = vv;
$r.registerLexicalTextEntity = function (e, t, n, r) {
  let i = (l) => {
      const s = at.$createTextNode(l.getTextContent());
      s.setFormat(l.getFormat()), l.replace(s);
    },
    o = e.registerNodeTransform(at.TextNode, (l) => {
      if (l.isSimpleText()) {
        var s = l.getPreviousSibling(),
          u = l.getTextContent(),
          a = l;
        if (at.$isTextNode(s)) {
          var d = s.getTextContent(),
            c = t(d + u);
          if (s instanceof n) {
            if (c === null || s.getLatest().__mode !== 0) {
              i(s);
              return;
            }
            if (((c = c.end - d.length), 0 < c)) {
              (a = u.slice(0, c)),
                (a = d + a),
                s.select(),
                s.setTextContent(a),
                c === u.length
                  ? l.remove()
                  : ((s = u.slice(c)), l.setTextContent(s));
              return;
            }
          } else if (c === null || c.start < d.length) return;
        }
        for (;;) {
          if (
            ((l = t(u)), (u = c = l === null ? '' : u.slice(l.end)), c === '')
          ) {
            if (((d = a.getNextSibling()), at.$isTextNode(d))) {
              if (
                ((c = a.getTextContent() + d.getTextContent()),
                (c = t(c)),
                c === null)
              ) {
                d instanceof n ? i(d) : d.markDirty();
                break;
              } else if (c.start !== 0) break;
            }
          } else if (((d = t(c)), d !== null && d.start === 0)) break;
          if (l === null) break;
          if (l.start === 0 && at.$isTextNode(s) && s.isTextEntity()) continue;
          let p;
          if (
            (l.start === 0
              ? ([p, a] = a.splitText(l.end))
              : ([, p, a] = a.splitText(l.start, l.end)),
            (l = r(p)),
            l.setFormat(p.getFormat()),
            p.replace(l),
            a == null)
          )
            break;
        }
      }
    });
  return (
    (e = e.registerNodeTransform(n, (l) => {
      var s = l.getTextContent();
      const u = t(s);
      u === null || u.start !== 0
        ? i(l)
        : s.length > u.end
        ? l.splitText(u.end)
        : ((s = l.getPreviousSibling()),
          at.$isTextNode(s) && s.isTextEntity() && (i(s), i(l)),
          (s = l.getNextSibling()),
          at.$isTextNode(s) &&
            s.isTextEntity() &&
            (i(s), l instanceof n && i(l)));
    })),
    [o, e]
  );
};
const vN = $r;
var _N = vN,
  xv = {},
  xs = H;
xv.registerDragonSupport = function (e) {
  let t = window.location.origin,
    n = (r) => {
      if (r.origin === t) {
        var i = e.getRootElement();
        if (
          document.activeElement === i &&
          ((i = r.data), typeof i == 'string')
        ) {
          try {
            var o = JSON.parse(i);
          } catch {
            return;
          }
          if (
            o &&
            o.protocol === 'nuanria_messaging' &&
            o.type === 'request' &&
            (o = o.payload) &&
            o.functionId === 'makeChanges' &&
            (o = o.args)
          ) {
            const [l, s, u, a, d] = o;
            e.update(() => {
              const c = xs.$getSelection();
              if (xs.$isRangeSelection(c)) {
                var p = c.anchor;
                let f = p.getNode(),
                  h = 0,
                  y = 0;
                xs.$isTextNode(f) &&
                  0 <= l &&
                  0 <= s &&
                  ((h = l), (y = l + s), c.setTextNodeRange(f, h, f, y)),
                  (h !== y || u !== '') &&
                    (c.insertRawText(u), (f = p.getNode())),
                  xs.$isTextNode(f) &&
                    ((h = a),
                    (y = a + d),
                    (p = f.getTextContentSize()),
                    (h = h > p ? p : h),
                    (y = y > p ? p : y),
                    c.setTextNodeRange(f, h, f, y)),
                  r.stopImmediatePropagation();
              }
            });
          }
        }
      }
    };
  return (
    window.addEventListener('message', n, !0),
    () => {
      window.removeEventListener('message', n, !0);
    }
  );
};
const xN = xv;
var CN = xN,
  Cv = le,
  SN = yN,
  Yt = R,
  EN = _N,
  Sv = We,
  Bg = Wl,
  NN = CN,
  wN = ha,
  vp =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u'
      ? Yt.useLayoutEffect
      : Yt.useEffect;
function jg(e) {
  return e.getEditorState().read(EN.$canShowPlaceholderCurry(e.isComposing()));
}
function TN(e) {
  let [t, n] = Yt.useState(() => jg(e));
  return (
    vp(() => {
      function r() {
        let i = jg(e);
        n(i);
      }
      return (
        r(),
        Sv.mergeRegister(
          e.registerUpdateListener(() => {
            r();
          }),
          e.registerEditableListener(() => {
            r();
          })
        )
      );
    }, [e]),
    t
  );
}
function $N(e, t) {
  let [n, r] = Yt.useState(() => e.getDecorators());
  return (
    vp(
      () =>
        e.registerDecoratorListener((i) => {
          Bg.flushSync(() => {
            r(i);
          });
        }),
      [e]
    ),
    Yt.useEffect(() => {
      r(e.getDecorators());
    }, [e]),
    Yt.useMemo(() => {
      let i = [],
        o = Object.keys(n);
      for (let l = 0; l < o.length; l++) {
        let s = o[l],
          u = Yt.createElement(
            t,
            { onError: (d) => e._onError(d) },
            Yt.createElement(Yt.Suspense, { fallback: null }, n[s])
          ),
          a = e.getElementByKey(s);
        a !== null && i.push(Bg.createPortal(u, a, s));
      }
      return i;
    }, [t, n, e])
  );
}
function kN(e) {
  vp(
    () => Sv.mergeRegister(wN.registerRichText(e), NN.registerDragonSupport(e)),
    [e]
  );
}
function ON({ content: e }) {
  var [t] = Cv.useLexicalComposerContext();
  t = TN(t);
  let n = SN();
  return t ? (typeof e == 'function' ? e(n) : e) : null;
}
yv.RichTextPlugin = function ({
  contentEditable: e,
  placeholder: t,
  ErrorBoundary: n,
}) {
  let [r] = Cv.useLexicalComposerContext();
  return (
    (n = $N(r, n)),
    kN(r),
    Yt.createElement(
      Yt.Fragment,
      null,
      e,
      Yt.createElement(ON, { content: t }),
      n
    )
  );
};
const RN = yv;
var DN = RN,
  Ev = {},
  MN = le,
  rl = R;
function Bd() {
  return (
    (Bd = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t],
              r;
            for (r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bd.apply(this, arguments)
  );
}
var PN =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u'
    ? rl.useLayoutEffect
    : rl.useEffect;
Ev.ContentEditable = function ({
  ariaActiveDescendant: e,
  ariaAutoComplete: t,
  ariaControls: n,
  ariaDescribedBy: r,
  ariaExpanded: i,
  ariaLabel: o,
  ariaLabelledBy: l,
  ariaMultiline: s,
  ariaOwns: u,
  ariaRequired: a,
  autoCapitalize: d,
  className: c,
  id: p,
  role: f = 'textbox',
  spellCheck: h = !0,
  style: y,
  tabIndex: _,
  'data-testid': g,
  ...m
}) {
  let [v] = MN.useLexicalComposerContext(),
    [x, S] = rl.useState(!1),
    T = rl.useCallback(
      (w) => {
        v.setRootElement(w);
      },
      [v]
    );
  return (
    PN(
      () => (
        S(v.isEditable()),
        v.registerEditableListener((w) => {
          S(w);
        })
      ),
      [v]
    ),
    rl.createElement(
      'div',
      Bd({}, m, {
        'aria-activedescendant': x ? e : void 0,
        'aria-autocomplete': x ? t : 'none',
        'aria-controls': x ? n : void 0,
        'aria-describedby': r,
        'aria-expanded': x && f === 'combobox' ? !!i : void 0,
        'aria-label': o,
        'aria-labelledby': l,
        'aria-multiline': s,
        'aria-owns': x ? u : void 0,
        'aria-readonly': x ? void 0 : !0,
        'aria-required': a,
        autoCapitalize: d,
        className: c,
        contentEditable: x,
        'data-testid': g,
        id: p,
        ref: T,
        role: f,
        spellCheck: h,
        style: y,
        tabIndex: _,
      })
    )
  );
};
const LN = Ev;
var AN = LN,
  _p = {},
  xp = {},
  IN = We,
  ie = H;
function zN(e, t, n, r, i) {
  if (e === null || (n.size === 0 && r.size === 0 && !i)) return 0;
  var o = t._selection,
    l = e._selection;
  if (i) return 1;
  if (
    !(
      ie.$isRangeSelection(o) &&
      ie.$isRangeSelection(l) &&
      l.isCollapsed() &&
      o.isCollapsed()
    )
  )
    return 0;
  i = t._nodeMap;
  let s = [];
  for (let u of n) (n = i.get(u)), n !== void 0 && s.push(n);
  for (let [u, a] of r)
    a && ((r = i.get(u)), r === void 0 || ie.$isRootNode(r) || s.push(r));
  return s.length === 0
    ? 0
    : 1 < s.length
    ? ((r = t._nodeMap),
      (t = r.get(o.anchor.key)),
      (l = r.get(l.anchor.key)),
      t &&
      l &&
      !e._nodeMap.has(t.__key) &&
      ie.$isTextNode(t) &&
      t.__text.length === 1 &&
      o.anchor.offset === 1
        ? 2
        : 0)
    : ((t = s[0]),
      (e = e._nodeMap.get(t.__key)),
      !ie.$isTextNode(e) ||
      !ie.$isTextNode(t) ||
      e.__mode !== t.__mode ||
      ((e = e.__text), (t = t.__text), e === t) ||
      ((o = o.anchor), (l = l.anchor), o.key !== l.key || o.type !== 'text')
        ? 0
        : ((o = o.offset),
          (l = l.offset),
          (e = t.length - e.length),
          e === 1 && l === o - 1
            ? 2
            : e === -1 && l === o + 1
            ? 3
            : e === -1 && l === o
            ? 4
            : 0));
}
function FN(e, t) {
  let n = Date.now(),
    r = 0;
  return (i, o, l, s, u, a) => {
    let d = Date.now();
    if (a.has('historic')) return (r = 0), (n = d), 2;
    let c = zN(i, o, s, u, e.isComposing()),
      p = (() => {
        var f = l === null || l.editor === e,
          h = a.has('history-push');
        if (!h && f && a.has('history-merge')) return 0;
        if (i === null) return 1;
        var y = o._selection;
        if (!(0 < s.size || 0 < u.size)) return y !== null ? 0 : 2;
        if (h === !1 && c !== 0 && c === r && d < n + t && f) return 0;
        if (s.size === 1) {
          {
            (h = Array.from(s)[0]),
              (f = i._nodeMap.get(h)),
              (h = o._nodeMap.get(h)),
              (y = i._selection);
            let _ = o._selection,
              g = !1;
            ie.$isRangeSelection(y) &&
              ie.$isRangeSelection(_) &&
              (g =
                y.anchor.type === 'element' &&
                y.focus.type === 'element' &&
                _.anchor.type === 'text' &&
                _.focus.type === 'text'),
              (f =
                !g && ie.$isTextNode(f) && ie.$isTextNode(h)
                  ? f.__type === h.__type &&
                    f.__text === h.__text &&
                    f.__mode === h.__mode &&
                    f.__detail === h.__detail &&
                    f.__style === h.__style &&
                    f.__format === h.__format &&
                    f.__parent === h.__parent
                  : !1);
          }
          if (f) return 0;
        }
        return 1;
      })();
    return (n = d), (r = c), p;
  };
}
xp.createEmptyHistoryState = function () {
  return { current: null, redoStack: [], undoStack: [] };
};
xp.registerHistory = function (e, t, n) {
  let r = FN(e, n);
  n = ({
    editorState: l,
    prevEditorState: s,
    dirtyLeaves: u,
    dirtyElements: a,
    tags: d,
  }) => {
    const c = t.current,
      p = t.redoStack,
      f = t.undoStack,
      h = c === null ? null : c.editorState;
    if (c === null || l !== h) {
      if (((s = r(s, l, c, u, a, d)), s === 1))
        p.length !== 0 &&
          ((t.redoStack = []), e.dispatchCommand(ie.CAN_REDO_COMMAND, !1)),
          c !== null &&
            (f.push({ ...c }), e.dispatchCommand(ie.CAN_UNDO_COMMAND, !0));
      else if (s === 2) return;
      t.current = { editor: e, editorState: l };
    }
  };
  let i = IN.mergeRegister(
      e.registerCommand(
        ie.UNDO_COMMAND,
        () => {
          let l = t.redoStack,
            s = t.undoStack;
          if (s.length !== 0) {
            let u = t.current,
              a = s.pop();
            u !== null &&
              (l.push(u), e.dispatchCommand(ie.CAN_REDO_COMMAND, !0)),
              s.length === 0 && e.dispatchCommand(ie.CAN_UNDO_COMMAND, !1),
              (t.current = a || null),
              a && a.editor.setEditorState(a.editorState, { tag: 'historic' });
          }
          return !0;
        },
        ie.COMMAND_PRIORITY_EDITOR
      ),
      e.registerCommand(
        ie.REDO_COMMAND,
        () => {
          let l = t.redoStack;
          var s = t.undoStack;
          if (l.length !== 0) {
            let u = t.current;
            u !== null &&
              (s.push(u), e.dispatchCommand(ie.CAN_UNDO_COMMAND, !0)),
              (s = l.pop()),
              l.length === 0 && e.dispatchCommand(ie.CAN_REDO_COMMAND, !1),
              (t.current = s || null),
              s && s.editor.setEditorState(s.editorState, { tag: 'historic' });
          }
          return !0;
        },
        ie.COMMAND_PRIORITY_EDITOR
      ),
      e.registerCommand(
        ie.CLEAR_EDITOR_COMMAND,
        () => ((t.undoStack = []), (t.redoStack = []), (t.current = null), !1),
        ie.COMMAND_PRIORITY_EDITOR
      ),
      e.registerCommand(
        ie.CLEAR_HISTORY_COMMAND,
        () => (
          (t.undoStack = []),
          (t.redoStack = []),
          (t.current = null),
          e.dispatchCommand(ie.CAN_REDO_COMMAND, !1),
          e.dispatchCommand(ie.CAN_UNDO_COMMAND, !1),
          !0
        ),
        ie.COMMAND_PRIORITY_EDITOR
      ),
      e.registerUpdateListener(n)
    ),
    o = e.registerUpdateListener(n);
  return () => {
    i(), o();
  };
};
const BN = xp;
var jN = BN,
  WN = le,
  jd = jN,
  Wg = R;
function HN(e, t, n = 1e3) {
  let r = Wg.useMemo(() => t || jd.createEmptyHistoryState(), [t]);
  Wg.useEffect(() => jd.registerHistory(e, r, n), [n, e, r]);
}
_p.createEmptyHistoryState = jd.createEmptyHistoryState;
_p.HistoryPlugin = function ({ externalHistoryState: e }) {
  let [t] = WN.useLexicalComposerContext();
  return HN(t, e), null;
};
const UN = _p;
var KN = UN,
  Nv = {},
  Dn = oi,
  VN = le,
  wv = R,
  YN = We,
  $o = H;
function GN(e) {
  wv.useEffect(
    () =>
      YN.mergeRegister(
        e.registerCommand(
          Dn.INSERT_ORDERED_LIST_COMMAND,
          () => (Dn.insertList(e, 'number'), !0),
          $o.COMMAND_PRIORITY_LOW
        ),
        e.registerCommand(
          Dn.INSERT_UNORDERED_LIST_COMMAND,
          () => (Dn.insertList(e, 'bullet'), !0),
          $o.COMMAND_PRIORITY_LOW
        ),
        e.registerCommand(
          Dn.REMOVE_LIST_COMMAND,
          () => (Dn.removeList(e), !0),
          $o.COMMAND_PRIORITY_LOW
        ),
        e.registerCommand(
          $o.INSERT_PARAGRAPH_COMMAND,
          () => !!Dn.$handleListInsertParagraph(),
          $o.COMMAND_PRIORITY_LOW
        )
      ),
    [e]
  );
}
Nv.ListPlugin = function () {
  let [e] = VN.useLexicalComposerContext();
  return (
    wv.useEffect(() => {
      if (!e.hasNodes([Dn.ListNode, Dn.ListItemNode]))
        throw Error(
          'ListPlugin: ListNode and/or ListItemNode not registered on editor'
        );
    }, [e]),
    GN(e),
    null
  );
};
const QN = Nv;
var JN = QN,
  Tv = {},
  XN = le,
  ZN = R;
Tv.AutoFocusPlugin = function ({ defaultSelection: e }) {
  let [t] = XN.useLexicalComposerContext();
  return (
    ZN.useEffect(() => {
      t.focus(
        () => {
          let n = document.activeElement,
            r = t.getRootElement();
          r === null ||
            (n !== null && r.contains(n)) ||
            r.focus({ preventScroll: !0 });
        },
        { defaultSelection: e }
      );
    }, [e, t]),
    null
  );
};
const qN = Tv;
var bN = qN,
  Yn = {},
  $v = We,
  vn = H;
let ew = new Set(['http:', 'https:', 'mailto:', 'sms:', 'tel:']),
  ya = class kv extends vn.ElementNode {
    static getType() {
      return 'link';
    }
    static clone(t) {
      return new kv(
        t.__url,
        { rel: t.__rel, target: t.__target, title: t.__title },
        t.__key
      );
    }
    constructor(t, n = {}, r) {
      super(r);
      let { target: i = null, rel: o = null, title: l = null } = n;
      (this.__url = t),
        (this.__target = i),
        (this.__rel = o),
        (this.__title = l);
    }
    createDOM(t) {
      let n = document.createElement('a');
      return (
        (n.href = this.sanitizeUrl(this.__url)),
        this.__target !== null && (n.target = this.__target),
        this.__rel !== null && (n.rel = this.__rel),
        this.__title !== null && (n.title = this.__title),
        $v.addClassNamesToElement(n, t.theme.link),
        n
      );
    }
    updateDOM(t, n) {
      let r = this.__url,
        i = this.__target,
        o = this.__rel,
        l = this.__title;
      return (
        r !== t.__url && (n.href = r),
        i !== t.__target && (i ? (n.target = i) : n.removeAttribute('target')),
        o !== t.__rel && (o ? (n.rel = o) : n.removeAttribute('rel')),
        l !== t.__title && (l ? (n.title = l) : n.removeAttribute('title')),
        !1
      );
    }
    static importDOM() {
      return { a: () => ({ conversion: tw, priority: 1 }) };
    }
    static importJSON(t) {
      let n = Al(t.url, { rel: t.rel, target: t.target, title: t.title });
      return (
        n.setFormat(t.format),
        n.setIndent(t.indent),
        n.setDirection(t.direction),
        n
      );
    }
    sanitizeUrl(t) {
      try {
        let n = new URL(t);
        if (!ew.has(n.protocol)) return 'about:blank';
      } catch {}
      return t;
    }
    exportJSON() {
      return {
        ...super.exportJSON(),
        rel: this.getRel(),
        target: this.getTarget(),
        title: this.getTitle(),
        type: 'link',
        url: this.getURL(),
        version: 1,
      };
    }
    getURL() {
      return this.getLatest().__url;
    }
    setURL(t) {
      this.getWritable().__url = t;
    }
    getTarget() {
      return this.getLatest().__target;
    }
    setTarget(t) {
      this.getWritable().__target = t;
    }
    getRel() {
      return this.getLatest().__rel;
    }
    setRel(t) {
      this.getWritable().__rel = t;
    }
    getTitle() {
      return this.getLatest().__title;
    }
    setTitle(t) {
      this.getWritable().__title = t;
    }
    insertNewAfter(t, n = !0) {
      return (
        (t = this.getParentOrThrow().insertNewAfter(t, n)),
        vn.$isElementNode(t)
          ? ((n = Al(this.__url, {
              rel: this.__rel,
              target: this.__target,
              title: this.__title,
            })),
            t.append(n),
            n)
          : null
      );
    }
    canInsertTextBefore() {
      return !1;
    }
    canInsertTextAfter() {
      return !1;
    }
    canBeEmpty() {
      return !1;
    }
    isInline() {
      return !0;
    }
    extractWithChild(t, n) {
      if (!vn.$isRangeSelection(n)) return !1;
      t = n.anchor.getNode();
      let r = n.focus.getNode();
      return (
        this.isParentOf(t) &&
        this.isParentOf(r) &&
        0 < n.getTextContent().length
      );
    }
  };
function tw(e) {
  let t = null;
  if ($v.isHTMLAnchorElement(e)) {
    let n = e.textContent;
    n !== null &&
      n !== '' &&
      (t = Al(e.getAttribute('href') || '', {
        rel: e.getAttribute('rel'),
        target: e.getAttribute('target'),
        title: e.getAttribute('title'),
      }));
  }
  return { node: t };
}
function Al(e, t) {
  return vn.$applyNodeReplacement(new ya(e, t));
}
function Ir(e) {
  return e instanceof ya;
}
let Cp = class Ov extends ya {
  static getType() {
    return 'autolink';
  }
  static clone(t) {
    return new Ov(
      t.__url,
      { rel: t.__rel, target: t.__target, title: t.__title },
      t.__key
    );
  }
  static importJSON(t) {
    let n = Wd(t.url, { rel: t.rel, target: t.target, title: t.title });
    return (
      n.setFormat(t.format),
      n.setIndent(t.indent),
      n.setDirection(t.direction),
      n
    );
  }
  static importDOM() {
    return null;
  }
  exportJSON() {
    return { ...super.exportJSON(), type: 'autolink', version: 1 };
  }
  insertNewAfter(t, n = !0) {
    return (
      (t = this.getParentOrThrow().insertNewAfter(t, n)),
      vn.$isElementNode(t)
        ? ((n = Wd(this.__url, {
            rel: this._rel,
            target: this.__target,
            title: this.__title,
          })),
          t.append(n),
          n)
        : null
    );
  }
};
function Wd(e, t) {
  return vn.$applyNodeReplacement(new Cp(e, t));
}
let nw = vn.createCommand('TOGGLE_LINK_COMMAND');
function rw(e, t) {
  for (; e !== null && (e = e.getParent()) !== null && !t(e); );
  return e;
}
Yn.$createAutoLinkNode = Wd;
Yn.$createLinkNode = Al;
Yn.$isAutoLinkNode = function (e) {
  return e instanceof Cp;
};
Yn.$isLinkNode = Ir;
Yn.AutoLinkNode = Cp;
Yn.LinkNode = ya;
Yn.TOGGLE_LINK_COMMAND = nw;
Yn.toggleLink = function (e, t = {}) {
  let { target: n, title: r } = t,
    i = t.rel === void 0 ? 'noreferrer' : t.rel;
  if (((t = vn.$getSelection()), vn.$isRangeSelection(t)))
    if (((t = t.extract()), e === null))
      t.forEach((l) => {
        if (((l = l.getParent()), Ir(l))) {
          let s = l.getChildren();
          for (let u = 0; u < s.length; u++) l.insertBefore(s[u]);
          l.remove();
        }
      });
    else {
      if (t.length === 1) {
        var o = t[0];
        if (((o = Ir(o) ? o : rw(o, Ir)), o !== null)) {
          o.setURL(e),
            n !== void 0 && o.setTarget(n),
            i !== null && o.setRel(i),
            r !== void 0 && o.setTitle(r);
          return;
        }
      }
      let l = null,
        s = null;
      t.forEach((u) => {
        var a = u.getParent();
        if (a !== s && a !== null && (!vn.$isElementNode(u) || u.isInline()))
          if (Ir(a))
            (s = a),
              a.setURL(e),
              n !== void 0 && a.setTarget(n),
              i !== null && s.setRel(i),
              r !== void 0 && s.setTitle(r);
          else if (
            (a.is(l) ||
              ((l = a),
              (s = Al(e, { rel: i, target: n })),
              Ir(a)
                ? u.getPreviousSibling() === null
                  ? a.insertBefore(s)
                  : a.insertAfter(s)
                : u.insertBefore(s)),
            Ir(u))
          ) {
            if (!u.is(s)) {
              if (s !== null) {
                a = u.getChildren();
                for (let d = 0; d < a.length; d++) s.append(a[d]);
              }
              u.remove();
            }
          } else s !== null && s.append(u);
      });
    }
};
const iw = Yn;
var Pt = iw,
  Rv = {},
  yi = Pt,
  ow = le,
  lw = We,
  vi = H,
  sw = R;
Rv.LinkPlugin = function ({ validateUrl: e }) {
  let [t] = ow.useLexicalComposerContext();
  return (
    sw.useEffect(() => {
      if (!t.hasNodes([yi.LinkNode]))
        throw Error('LinkPlugin: LinkNode not registered on editor');
      return lw.mergeRegister(
        t.registerCommand(
          yi.TOGGLE_LINK_COMMAND,
          (n) => {
            if (n === null) return yi.toggleLink(n), !0;
            if (typeof n == 'string')
              return e === void 0 || e(n) ? (yi.toggleLink(n), !0) : !1;
            let { url: r, target: i, rel: o, title: l } = n;
            return yi.toggleLink(r, { rel: o, target: i, title: l }), !0;
          },
          vi.COMMAND_PRIORITY_LOW
        ),
        e !== void 0
          ? t.registerCommand(
              vi.PASTE_COMMAND,
              (n) => {
                let r = vi.$getSelection();
                if (
                  !vi.$isRangeSelection(r) ||
                  r.isCollapsed() ||
                  !(n instanceof ClipboardEvent) ||
                  n.clipboardData == null
                )
                  return !1;
                let i = n.clipboardData.getData('text');
                return e(i)
                  ? r.getNodes().some((o) => vi.$isElementNode(o))
                    ? !1
                    : (t.dispatchCommand(yi.TOGGLE_LINK_COMMAND, i),
                      n.preventDefault(),
                      !0)
                  : !1;
              },
              vi.COMMAND_PRIORITY_LOW
            )
          : () => {}
      );
    }, [t, e]),
    null
  );
};
const uw = Rv;
var aw = uw,
  il = R;
function Hd(e, t) {
  return (
    (Hd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Hd(e, t)
  );
}
function cw(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Hd(e, t);
}
function dw(e, t) {
  return (
    e === void 0 && (e = []),
    t === void 0 && (t = []),
    e.length !== t.length ||
      e.some(function (n, r) {
        return !Object.is(n, t[r]);
      })
  );
}
var Hg = { error: null },
  fw = (function (e) {
    function t() {
      for (var r, i = arguments.length, o = Array(i), l = 0; l < i; l++)
        o[l] = arguments[l];
      return (
        (r = e.call.apply(e, [this].concat(o)) || this),
        (r.state = Hg),
        (r.resetErrorBoundary = function () {
          for (var s, u = arguments.length, a = Array(u), d = 0; d < u; d++)
            a[d] = arguments[d];
          r.props.onReset == null || (s = r.props).onReset.apply(s, a),
            r.reset();
        }),
        r
      );
    }
    cw(t, e),
      (t.getDerivedStateFromError = function (r) {
        return { error: r };
      });
    var n = t.prototype;
    return (
      (n.reset = function () {
        this.setState(Hg);
      }),
      (n.componentDidCatch = function (r, i) {
        var o, l;
        (o = (l = this.props).onError) == null || o.call(l, r, i);
      }),
      (n.componentDidUpdate = function (r, i) {
        var o = this.props.resetKeys;
        if (
          this.state.error !== null &&
          i.error !== null &&
          dw(r.resetKeys, o)
        ) {
          var l, s;
          (l = (s = this.props).onResetKeysChange) == null ||
            l.call(s, r.resetKeys, o),
            this.reset();
        }
      }),
      (n.render = function () {
        var r = this.state.error,
          i = this.props,
          o = i.fallbackRender,
          l = i.FallbackComponent;
        if (((i = i.fallback), r !== null)) {
          if (
            ((r = { error: r, resetErrorBoundary: this.resetErrorBoundary }),
            il.isValidElement(i))
          )
            return i;
          if (typeof o == 'function') return o(r);
          if (l) return il.createElement(l, r);
          throw Error(
            'react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop'
          );
        }
        return this.props.children;
      }),
      t
    );
  })(il.Component),
  pw = function ({ children: e, onError: t }) {
    return il.createElement(
      fw,
      {
        fallback: il.createElement(
          'div',
          {
            style: { border: '1px solid #f00', color: '#f00', padding: '8px' },
          },
          'An error was thrown.'
        ),
        onError: t,
      },
      e
    );
  };
const hw = pw;
var gw = hw;
const mw = Ud(gw);
var yw = Pt,
  vw = le,
  Ug = We,
  ko = H,
  _w = R,
  xw = function ({ newTab: e = !0 }) {
    let [t] = vw.useLexicalComposerContext();
    return (
      _w.useEffect(() => {
        let n = (i) => {
            const o = i.target;
            if (o instanceof Node) {
              var l = ko.getNearestEditorFromDOMNode(o);
              if (l !== null) {
                var s = null,
                  u = null;
                l.update(() => {
                  var a = ko.$getNearestNodeFromDOMNode(o);
                  if (a !== null)
                    if (
                      ((a = Ug.$findMatchingParent(a, ko.$isElementNode)),
                      yw.$isLinkNode(a))
                    )
                      (s = a.getURL()), (u = a.getTarget());
                    else {
                      e: {
                        a = Ug.isHTMLAnchorElement;
                        let d = o;
                        for (; d != null; ) {
                          if (a(d)) {
                            a = d;
                            break e;
                          }
                          d = d.parentNode;
                        }
                        a = null;
                      }
                      a !== null && ((s = a.href), (u = a.target));
                    }
                }),
                  s !== null &&
                    s !== '' &&
                    ((l = t.getEditorState().read(ko.$getSelection)),
                    (!ko.$isRangeSelection(l) || l.isCollapsed()) &&
                      ((l = i.type === 'auxclick' && i.button === 1),
                      window.open(
                        s,
                        e || l || i.metaKey || i.ctrlKey || u === '_blank'
                          ? '_blank'
                          : '_self'
                      )),
                    i.preventDefault());
              }
            }
          },
          r = (i) => {
            i.button === 1 && t.isEditable() && n(i);
          };
        return t.registerRootListener((i, o) => {
          o !== null &&
            (o.removeEventListener('click', n),
            o.removeEventListener('mouseup', r)),
            i !== null &&
              (i.addEventListener('click', n),
              i.addEventListener('mouseup', r));
        });
      }, [t, e]),
      null
    );
  };
const Cw = xw;
var Sw = Cw;
const Ew = Ud(Sw),
  Dv = ({ currColor: e, propertyName: t, icon: n }) => {
    const [r] = le.useLexicalComposerContext(),
      i = (o) => {
        r.update(() => {
          const l = H.$getSelection();
          H.$isRangeSelection(l) && Ct.$patchStyleText(l, { [t]: o });
        });
      };
    return E.jsxs(Nw, {
      className: 'ColorPicker',
      children: [
        E.jsx('button', {
          className: 'icon-container toolbar-btn',
          children: n,
        }),
        E.jsx('input', {
          type: 'color',
          name: t,
          className: 'color-input',
          value: e,
          onChange: (o) => {
            i(o.target.value);
          },
        }),
      ],
    });
  },
  Nw = Cn.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .color-indicator {
    width: 60%;
    height: 4px;
  }

  .color-input {
    border: none;
    background-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  .icon-container:has(+ .color-input:hover) {
    background-color: var(--dark-grey);
  }

  .icon-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    display: flex;
    background-color: transparent;
    border: transparent;
  }

  input {
    opacity: 0%;
    z-index: 2;
  }
`;
var Mv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Kg = K.createContext && K.createContext(Mv),
  yr =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (yr =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        yr.apply(this, arguments)
      );
    },
  ww =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function Pv(e) {
  return (
    e &&
    e.map(function (t, n) {
      return K.createElement(t.tag, yr({ key: n }, t.attr), Pv(t.child));
    })
  );
}
function Ue(e) {
  return function (t) {
    return K.createElement(Tw, yr({ attr: yr({}, e.attr) }, t), Pv(e.child));
  };
}
function Tw(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      l = ww(e, ['attr', 'size', 'title']),
      s = i || n.size || '1em',
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + ' ' : '') + e.className),
      K.createElement(
        'svg',
        yr(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          l,
          {
            className: u,
            style: yr(yr({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        o && K.createElement('title', null, o),
        e.children
      )
    );
  };
  return Kg !== void 0
    ? K.createElement(Kg.Consumer, null, function (n) {
        return t(n);
      })
    : t(Mv);
}
function $w(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4 7h16v2H4zm0-4h16v2H4zm0 8h16v2H4zm0 4h16v2H4zm2 4h12v2H6z',
        },
      },
    ],
  })(e);
}
function kw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z',
        },
      },
    ],
  })(e);
}
function Ow(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z',
        },
      },
    ],
  })(e);
}
function Rw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4 19h16v2H4zm5-4h11v2H9zm-5-4h16v2H4zm0-8h16v2H4zm5 4h11v2H9z',
        },
      },
    ],
  })(e);
}
function Dw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M17.061 11.22A4.46 4.46 0 0 0 18 8.5C18 6.019 15.981 4 13.5 4H6v15h8c2.481 0 4.5-2.019 4.5-4.5a4.48 4.48 0 0 0-1.439-3.28zM13.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H9V7h4.5zm.5 9H9v-3h5c.827 0 1.5.673 1.5 1.5S14.827 16 14 16z',
        },
      },
    ],
  })(e);
}
function Mw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M5 18h14v3H5zm7.5-14h-1c-.401 0-.764.24-.921.609L5.745 16h2.173l1.273-3h5.604l1.268 3h2.171L13.421 4.61A1 1 0 0 0 12.5 4zm-2.46 7 1.959-4.616L13.95 11h-3.91z',
        },
      },
    ],
  })(e);
}
function Pw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: { d: 'M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z' },
      },
    ],
  })(e);
}
function Lw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z',
        },
      },
      {
        tag: 'path',
        attr: { d: 'm8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z' },
      },
    ],
  })(e);
}
function Aw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20 11h-8c-4 0-4-1.816-4-2.5C8 7.882 8 6 12 6c2.8 0 2.99 1.678 3 2.014L16 8h1c0-1.384-1.045-4-5-4-5.416 0-6 3.147-6 4.5 0 .728.148 1.667.736 2.5H4v2h16v-2zm-8 7c-3.793 0-3.99-1.815-4-2H6c0 .04.069 4 6 4 5.221 0 6-2.819 6-4.5 0-.146-.009-.317-.028-.5h-2.006c.032.2.034.376.034.5 0 .684 0 2.5-4 2.5z',
        },
      },
    ],
  })(e);
}
function Iw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M5 18h14v2H5zM6 4v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4H6z',
        },
      },
    ],
  })(e);
}
function zw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M20 14c-.092.064-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.436-2-3.5zM9.586 20c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.586 8.707 2.293 7.293 3.707 9.586 6 4 11.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414L9.586 20zM11 7.414 16.586 13H5.414L11 7.414z',
        },
      },
    ],
  })(e);
}
function Fw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'm16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z',
        },
      },
    ],
  })(e);
}
function Bw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M5 21h14a2 2 0 0 0 2-2V8l-5-5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM7 5h4v2h2V5h2v4H7V5zm0 8h10v6H7v-6z',
        },
      },
    ],
  })(e);
}
function jw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z',
        },
      },
    ],
  })(e);
}
const Ww = ({ bgColor: e }) =>
    E.jsx(Dv, {
      currColor: e,
      propertyName: 'background-color',
      icon: E.jsx(zw, {}),
    }),
  Lv = ({ currValue: e, availableValues: t, propertyName: n }) => {
    const [r] = le.useLexicalComposerContext(),
      i = (o) => {
        r.update(() => {
          const l = H.$getSelection();
          H.$isRangeSelection(l) && Ct.$patchStyleText(l, { [n]: o });
        });
      };
    return E.jsx('select', {
      className: 'rich-editor-select narrow-select',
      value: e,
      onChange: (o) => {
        i(o.target.value);
      },
      children: t.map((o) => E.jsx('option', { value: o, children: o }, o)),
    });
  },
  Hw = [
    'Arial',
    'Courier New',
    'Georgia',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
  ],
  Uw = ({ selectionFontFamily: e }) =>
    E.jsx(Lv, {
      currValue: e,
      availableValues: Hw,
      propertyName: 'font-family',
    }),
  Kw = [...Array(9).keys()]
    .map((e) => `${(0.2 * e + 0.2).toFixed(1)} rem`)
    .concat([...Array(5).keys()].map((e) => `${(0.5 * e + 2).toFixed(1)}rem`)),
  Vw = ({ selectionFontSize: e }) =>
    E.jsx(Lv, { currValue: e, availableValues: Kw, propertyName: 'font-size' }),
  Yw = ({ blockType: e }) => {
    const [t] = le.useLexicalComposerContext(),
      n = (o) => {
        t.update(() => {
          const l = H.$getSelection();
          H.$isRangeSelection(l) &&
            Ct.$setBlocksType(l, () => ha.$createHeadingNode(o));
        });
      },
      r = () => {
        t.update(() => {
          const o = H.$getSelection();
          H.$isRangeSelection(o) &&
            Ct.$setBlocksType(o, () => H.$createParagraphNode());
        });
      },
      i = [
        { text: 'Párrafo', tag: 'p' },
        { text: 'Título 1', tag: 'h1' },
        { text: 'Título 2', tag: 'h2' },
        { text: 'Título 3', tag: 'h3' },
        { text: 'Título 4', tag: 'h4' },
        { text: 'Título 5', tag: 'h5' },
        { text: 'Título 6', tag: 'h6' },
      ];
    return E.jsx(Gw, {
      onChange: (o) => {
        o.target.value === 'p' ? r() : n(o.target.value);
      },
      className: 'rich-editor-select',
      value: e,
      children: i.map(({ text: o, tag: l }) =>
        E.jsx(
          'option',
          { value: l, className: `rich-editor-option-${l}`, children: o },
          l
        )
      ),
    });
  },
  Gw = Cn.select`
  .rich-editor-option-h1 {
    font-size: 1.5rem;
    height: 1rem;
  }
  .rich-editor-option-h2 {
    font-size: 1.4rem;
    height: 1rem;
  }
  .rich-editor-option-h3 {
    font-size: 1.3rem;
    height: 1rem;
  }
  .rich-editor-option-h4 {
    font-size: 1.2rem;
    height: 1rem;
  }
  .rich-editor-option-h5 {
    font-size: 1.1rem;
    height: 1rem;
  }
  .rich-editor-option-h6 {
    font-size: 1rem;
    height: 1rem;
  }
`,
  Av = (e) => {
    const t = e.anchor,
      n = e.focus,
      r = e.anchor.getNode(),
      i = e.focus.getNode();
    return r === i
      ? r
      : e.isBackward()
      ? Ct.$isAtNodeEnd(n)
        ? r
        : i
      : Ct.$isAtNodeEnd(t)
      ? i
      : r;
  };
function Qw(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
    child: [
      {
        tag: 'path',
        attr: {
          fillRule: 'evenodd',
          d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
          clipRule: 'evenodd',
        },
      },
    ],
  })(e);
}
const Iv = 1,
  Jw = (e, t) => {
    t === null
      ? ((e.style.opacity = '0'),
        (e.style.top = '-1000px'),
        (e.style.left = '-1000px'))
      : ((e.style.opacity = '1'),
        (e.style.top = `${t.top + t.height + window.scrollY + 10}px`),
        (e.style.left = `${
          t.left + window.scrollX - e.offsetWidth / 2 + t.width / 2
        }px`));
  },
  Xw = ({ editor: e, isEditMode: t, setIsEditMode: n }) => {
    const r = R.useRef(null),
      i = R.useRef(null),
      o = R.useRef(!1),
      [l, s] = R.useState(''),
      [u, a] = R.useState(!0),
      [d, c] = R.useState(null),
      p = R.useCallback(() => {
        const h = H.$getSelection();
        if (H.$isRangeSelection(h)) {
          const m = Av(h),
            v = m.getParent();
          Pt.$isLinkNode(v)
            ? s(v.getURL())
            : Pt.$isLinkNode(m)
            ? s(m.getURL())
            : s('');
        }
        const y = r.current,
          _ = window.getSelection();
        if (y === null) return;
        const g = e.getRootElement();
        if (
          _ &&
          h !== null &&
          !_.isCollapsed &&
          g !== null &&
          g.contains(_.anchorNode)
        ) {
          const m = _.getRangeAt(0);
          let v;
          if (_.anchorNode === g) {
            let x = g;
            for (; x.firstElementChild != null; ) x = x.firstElementChild;
            v = x.getBoundingClientRect();
          } else v = m.getBoundingClientRect();
          o.current || Jw(y, v), c(h);
        }
        return !0;
      }, [e]);
    R.useEffect(
      () => (
        e.getEditorState().read(() => {
          p();
        }),
        We.mergeRegister(
          e.registerUpdateListener(({ editorState: h }) => {
            h.read(() => {
              p();
            });
          }),
          e.registerCommand(H.SELECTION_CHANGE_COMMAND, () => (p(), !0), Iv)
        )
      ),
      [e, p]
    ),
      R.useEffect(() => {
        t && i.current && i.current.focus();
      }, [t]);
    const f = () => {
      d !== null &&
        l !== '' &&
        e.dispatchCommand(Pt.TOGGLE_LINK_COMMAND, {
          url: l,
          target: u ? '_blank' : '',
        });
    };
    return E.jsxs(Zw, {
      ref: r,
      className: 'FloatingLinkEditor',
      children: [
        t
          ? E.jsxs('div', {
              className: 'link-input-container',
              children: [
                E.jsx('input', {
                  ref: i,
                  value: l,
                  className: 'link-input',
                  onChange: (h) => {
                    s(h.target.value);
                  },
                  onKeyDown: (h) => {
                    h.key === 'Enter'
                      ? (h.preventDefault(), f(), n(!1))
                      : h.key === 'Escape' && (h.preventDefault(), n(!1));
                  },
                }),
                E.jsx('button', {
                  className: 'toolbar-btn',
                  tabIndex: 0,
                  onClick: () => {
                    f(), n(!1);
                  },
                  children: E.jsx(Qw, {}),
                }),
              ],
            })
          : E.jsx(E.Fragment, {
              children: E.jsxs('div', {
                className: 'link-input-container',
                children: [
                  E.jsx('a', {
                    href: l,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    children: l,
                  }),
                  E.jsx('button', {
                    className: 'toolbar-btn',
                    tabIndex: 0,
                    onClick: () => {
                      n(!0);
                    },
                    children: E.jsx(Fw, {}),
                  }),
                ],
              }),
            }),
        E.jsxs('div', {
          className: 'target-blank-selector',
          children: [
            E.jsx('input', {
              type: 'checkbox',
              checked: u,
              name: 'target-blank-checkbox',
              onChange: (h) => {
                a(h.target.checked);
              },
              disabled: !t,
            }),
            E.jsx('label', {
              htmlFor: 'target-blank-checkbox',
              className: t
                ? 'target-blank-label'
                : 'target-blank-label disabled',
              children: 'Se abre en una nueva pestaña',
            }),
          ],
        }),
      ],
    });
  },
  Zw = Cn.div`
  position: absolute;
  z-index: 100;
  top: -10000px;
  left: -10000px;
  margin-top: -0.5rem;
  max-width: 300px;
  width: 100%;
  opacity: 0;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  transition: opacity 0.5s;
  padding: 0.5rem 0.75rem;

  .link-input-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 0.75rem;
    border-radius: 1rem;
    background-color: var(--dark-grey);
    height: 2.5rem;
  }

  .link-input {
    font-size: 1rem;
    background-color: var(--dark-grey);
    color: black;
    border: 0;
    outline: 0;
    position: relative;
    font-family: inherit;
  }

  .link-input a {
    color: blue;
    text-decoration: none;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 30px;
    text-overflow: ellipsis;
  }

  .link-input a:hover {
    text-decoration: underline;
  }

  .target-blank-selector {
    display: flex;
    gap: 0.25rem;
    margin-top: 0.25rem;
    font-size: 0.9rem;
  }

  .target-blank-label.disabled {
    color: var(--disabled-color);
  }
`;
function zv(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = zv(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function ur() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = zv(e)) && (r && (r += ' '), (r += t));
  return r;
}
const ol = (e) => typeof e == 'number' && !isNaN(e),
  li = (e) => typeof e == 'string',
  St = (e) => typeof e == 'function',
  Vs = (e) => (li(e) || St(e) ? e : null),
  dc = (e) => R.isValidElement(e) || li(e) || St(e) || ol(e);
function qw(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = 'initial'),
      (i.height = r + 'px'),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = '0'), (i.padding = '0'), (i.margin = '0'), setTimeout(t, n);
      });
  });
}
function va(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: o = 300,
  } = e;
  return function (l) {
    let {
      children: s,
      position: u,
      preventExitTransition: a,
      done: d,
      nodeRef: c,
      isIn: p,
    } = l;
    const f = r ? `${t}--${u}` : t,
      h = r ? `${n}--${u}` : n,
      y = R.useRef(0);
    return (
      R.useLayoutEffect(() => {
        const _ = c.current,
          g = f.split(' '),
          m = (v) => {
            v.target === c.current &&
              (_.dispatchEvent(new Event('d')),
              _.removeEventListener('animationend', m),
              _.removeEventListener('animationcancel', m),
              y.current === 0 &&
                v.type !== 'animationcancel' &&
                _.classList.remove(...g));
          };
        _.classList.add(...g),
          _.addEventListener('animationend', m),
          _.addEventListener('animationcancel', m);
      }, []),
      R.useEffect(() => {
        const _ = c.current,
          g = () => {
            _.removeEventListener('animationend', g), i ? qw(_, d, o) : d();
          };
        p ||
          (a
            ? g()
            : ((y.current = 1),
              (_.className += ` ${h}`),
              _.addEventListener('animationend', g)));
      }, [p]),
      K.createElement(K.Fragment, null, s)
    );
  };
}
function Vg(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const Ht = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  Cs = (e) => {
    let { theme: t, type: n, ...r } = e;
    return K.createElement('svg', {
      viewBox: '0 0 24 24',
      width: '100%',
      height: '100%',
      fill:
        t === 'colored' ? 'currentColor' : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  fc = {
    info: function (e) {
      return K.createElement(
        Cs,
        { ...e },
        K.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z',
        })
      );
    },
    warning: function (e) {
      return K.createElement(
        Cs,
        { ...e },
        K.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z',
        })
      );
    },
    success: function (e) {
      return K.createElement(
        Cs,
        { ...e },
        K.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z',
        })
      );
    },
    error: function (e) {
      return K.createElement(
        Cs,
        { ...e },
        K.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z',
        })
      );
    },
    spinner: function () {
      return K.createElement('div', { className: 'Toastify__spinner' });
    },
  };
function bw(e) {
  const [, t] = R.useReducer((f) => f + 1, 0),
    [n, r] = R.useState([]),
    i = R.useRef(null),
    o = R.useRef(new Map()).current,
    l = (f) => n.indexOf(f) !== -1,
    s = R.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: l,
      getToast: (f) => o.get(f),
    }).current;
  function u(f) {
    let { containerId: h } = f;
    const { limit: y } = s.props;
    !y ||
      (h && s.containerId !== h) ||
      ((s.count -= s.queue.length), (s.queue = []));
  }
  function a(f) {
    r((h) => (f == null ? [] : h.filter((y) => y !== f)));
  }
  function d() {
    const { toastContent: f, toastProps: h, staleId: y } = s.queue.shift();
    p(f, h, y);
  }
  function c(f, h) {
    let { delay: y, staleId: _, ...g } = h;
    if (
      !dc(f) ||
      (function (ee) {
        return (
          !i.current ||
          (s.props.enableMultiContainer &&
            ee.containerId !== s.props.containerId) ||
          (o.has(ee.toastId) && ee.updateId == null)
        );
      })(g)
    )
      return;
    const { toastId: m, updateId: v, data: x } = g,
      { props: S } = s,
      T = () => a(m),
      w = v == null;
    w && s.count++;
    const k = {
      ...S,
      style: S.toastStyle,
      key: s.toastKey++,
      ...Object.fromEntries(
        Object.entries(g).filter((ee) => {
          let [te, ne] = ee;
          return ne != null;
        })
      ),
      toastId: m,
      updateId: v,
      data: x,
      closeToast: T,
      isIn: !1,
      className: Vs(g.className || S.toastClassName),
      bodyClassName: Vs(g.bodyClassName || S.bodyClassName),
      progressClassName: Vs(g.progressClassName || S.progressClassName),
      autoClose:
        !g.isLoading &&
        ((V = g.autoClose),
        (z = S.autoClose),
        V === !1 || (ol(V) && V > 0) ? V : z),
      deleteToast() {
        const ee = Vg(o.get(m), 'removed');
        o.delete(m), Ht.emit(4, ee);
        const te = s.queue.length;
        if (
          ((s.count = m == null ? s.count - s.displayedToast : s.count - 1),
          s.count < 0 && (s.count = 0),
          te > 0)
        ) {
          const ne = m == null ? s.props.limit : 1;
          if (te === 1 || ne === 1) s.displayedToast++, d();
          else {
            const Me = ne > te ? te : ne;
            s.displayedToast = Me;
            for (let re = 0; re < Me; re++) d();
          }
        } else t();
      },
    };
    var V, z;
    (k.iconOut = (function (ee) {
      let { theme: te, type: ne, isLoading: Me, icon: re } = ee,
        se = null;
      const D = { theme: te, type: ne };
      return (
        re === !1 ||
          (St(re)
            ? (se = re(D))
            : R.isValidElement(re)
            ? (se = R.cloneElement(re, D))
            : li(re) || ol(re)
            ? (se = re)
            : Me
            ? (se = fc.spinner())
            : ((F) => F in fc)(ne) && (se = fc[ne](D))),
        se
      );
    })(k)),
      St(g.onOpen) && (k.onOpen = g.onOpen),
      St(g.onClose) && (k.onClose = g.onClose),
      (k.closeButton = S.closeButton),
      g.closeButton === !1 || dc(g.closeButton)
        ? (k.closeButton = g.closeButton)
        : g.closeButton === !0 &&
          (k.closeButton = !dc(S.closeButton) || S.closeButton);
    let Q = f;
    R.isValidElement(f) && !li(f.type)
      ? (Q = R.cloneElement(f, { closeToast: T, toastProps: k, data: x }))
      : St(f) && (Q = f({ closeToast: T, toastProps: k, data: x })),
      S.limit && S.limit > 0 && s.count > S.limit && w
        ? s.queue.push({ toastContent: Q, toastProps: k, staleId: _ })
        : ol(y)
        ? setTimeout(() => {
            p(Q, k, _);
          }, y)
        : p(Q, k, _);
  }
  function p(f, h, y) {
    const { toastId: _ } = h;
    y && o.delete(y);
    const g = { content: f, props: h };
    o.set(_, g),
      r((m) => [...m, _].filter((v) => v !== y)),
      Ht.emit(4, Vg(g, g.props.updateId == null ? 'added' : 'updated'));
  }
  return (
    R.useEffect(
      () => (
        (s.containerId = e.containerId),
        Ht.cancelEmit(3)
          .on(0, c)
          .on(1, (f) => i.current && a(f))
          .on(5, u)
          .emit(2, s),
        () => {
          o.clear(), Ht.emit(3, s);
        }
      ),
      []
    ),
    R.useEffect(() => {
      (s.props = e), (s.isToastActive = l), (s.displayedToast = n.length);
    }),
    {
      getToastToRender: function (f) {
        const h = new Map(),
          y = Array.from(o.values());
        return (
          e.newestOnTop && y.reverse(),
          y.forEach((_) => {
            const { position: g } = _.props;
            h.has(g) || h.set(g, []), h.get(g).push(_);
          }),
          Array.from(h, (_) => f(_[0], _[1]))
        );
      },
      containerRef: i,
      isToastActive: l,
    }
  );
}
function Yg(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function Gg(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function eT(e) {
  const [t, n] = R.useState(!1),
    [r, i] = R.useState(!1),
    o = R.useRef(null),
    l = R.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    s = R.useRef(e),
    {
      autoClose: u,
      pauseOnHover: a,
      closeToast: d,
      onClick: c,
      closeOnClick: p,
    } = e;
  function f(x) {
    if (e.draggable) {
      x.nativeEvent.type === 'touchstart' && x.nativeEvent.preventDefault(),
        (l.didMove = !1),
        document.addEventListener('mousemove', g),
        document.addEventListener('mouseup', m),
        document.addEventListener('touchmove', g),
        document.addEventListener('touchend', m);
      const S = o.current;
      (l.canCloseOnClick = !0),
        (l.canDrag = !0),
        (l.boundingRect = S.getBoundingClientRect()),
        (S.style.transition = ''),
        (l.x = Yg(x.nativeEvent)),
        (l.y = Gg(x.nativeEvent)),
        e.draggableDirection === 'x'
          ? ((l.start = l.x),
            (l.removalDistance = S.offsetWidth * (e.draggablePercent / 100)))
          : ((l.start = l.y),
            (l.removalDistance =
              S.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function h(x) {
    if (l.boundingRect) {
      const { top: S, bottom: T, left: w, right: k } = l.boundingRect;
      x.nativeEvent.type !== 'touchend' &&
      e.pauseOnHover &&
      l.x >= w &&
      l.x <= k &&
      l.y >= S &&
      l.y <= T
        ? _()
        : y();
    }
  }
  function y() {
    n(!0);
  }
  function _() {
    n(!1);
  }
  function g(x) {
    const S = o.current;
    l.canDrag &&
      S &&
      ((l.didMove = !0),
      t && _(),
      (l.x = Yg(x)),
      (l.y = Gg(x)),
      (l.delta = e.draggableDirection === 'x' ? l.x - l.start : l.y - l.start),
      l.start !== l.x && (l.canCloseOnClick = !1),
      (S.style.transform = `translate${e.draggableDirection}(${l.delta}px)`),
      (S.style.opacity = '' + (1 - Math.abs(l.delta / l.removalDistance))));
  }
  function m() {
    document.removeEventListener('mousemove', g),
      document.removeEventListener('mouseup', m),
      document.removeEventListener('touchmove', g),
      document.removeEventListener('touchend', m);
    const x = o.current;
    if (l.canDrag && l.didMove && x) {
      if (((l.canDrag = !1), Math.abs(l.delta) > l.removalDistance))
        return i(!0), void e.closeToast();
      (x.style.transition = 'transform 0.2s, opacity 0.2s'),
        (x.style.transform = `translate${e.draggableDirection}(0)`),
        (x.style.opacity = '1');
    }
  }
  R.useEffect(() => {
    s.current = e;
  }),
    R.useEffect(
      () => (
        o.current && o.current.addEventListener('d', y, { once: !0 }),
        St(e.onOpen) &&
          e.onOpen(R.isValidElement(e.children) && e.children.props),
        () => {
          const x = s.current;
          St(x.onClose) &&
            x.onClose(R.isValidElement(x.children) && x.children.props);
        }
      ),
      []
    ),
    R.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || _(),
          window.addEventListener('focus', y),
          window.addEventListener('blur', _)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener('focus', y),
            window.removeEventListener('blur', _));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const v = { onMouseDown: f, onTouchStart: f, onMouseUp: h, onTouchEnd: h };
  return (
    u && a && ((v.onMouseEnter = _), (v.onMouseLeave = y)),
    p &&
      (v.onClick = (x) => {
        c && c(x), l.canCloseOnClick && d();
      }),
    {
      playToast: y,
      pauseToast: _,
      isRunning: t,
      preventExitTransition: r,
      toastRef: o,
      eventHandlers: v,
    }
  );
}
function Fv(e) {
  let { closeToast: t, theme: n, ariaLabel: r = 'close' } = e;
  return K.createElement(
    'button',
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: 'button',
      onClick: (i) => {
        i.stopPropagation(), t(i);
      },
      'aria-label': r,
    },
    K.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      K.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z',
      })
    )
  );
}
function tT(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = 'default',
    hide: o,
    className: l,
    style: s,
    controlledProgress: u,
    progress: a,
    rtl: d,
    isIn: c,
    theme: p,
  } = e;
  const f = o || (u && a === 0),
    h = {
      ...s,
      animationDuration: `${t}ms`,
      animationPlayState: n ? 'running' : 'paused',
      opacity: f ? 0 : 1,
    };
  u && (h.transform = `scaleX(${a})`);
  const y = ur(
      'Toastify__progress-bar',
      u
        ? 'Toastify__progress-bar--controlled'
        : 'Toastify__progress-bar--animated',
      `Toastify__progress-bar-theme--${p}`,
      `Toastify__progress-bar--${i}`,
      { 'Toastify__progress-bar--rtl': d }
    ),
    _ = St(l) ? l({ rtl: d, type: i, defaultClassName: y }) : ur(y, l);
  return K.createElement('div', {
    role: 'progressbar',
    'aria-hidden': f ? 'true' : 'false',
    'aria-label': 'notification timer',
    className: _,
    style: h,
    [u && a >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
      u && a < 1
        ? null
        : () => {
            c && r();
          },
  });
}
const nT = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
      } = eT(e),
      {
        closeButton: o,
        children: l,
        autoClose: s,
        onClick: u,
        type: a,
        hideProgressBar: d,
        closeToast: c,
        transition: p,
        position: f,
        className: h,
        style: y,
        bodyClassName: _,
        bodyStyle: g,
        progressClassName: m,
        progressStyle: v,
        updateId: x,
        role: S,
        progress: T,
        rtl: w,
        toastId: k,
        deleteToast: V,
        isIn: z,
        isLoading: Q,
        iconOut: ee,
        closeOnClick: te,
        theme: ne,
      } = e,
      Me = ur(
        'Toastify__toast',
        `Toastify__toast-theme--${ne}`,
        `Toastify__toast--${a}`,
        { 'Toastify__toast--rtl': w },
        { 'Toastify__toast--close-on-click': te }
      ),
      re = St(h)
        ? h({ rtl: w, position: f, type: a, defaultClassName: Me })
        : ur(Me, h),
      se = !!T || !s,
      D = { closeToast: c, type: a, theme: ne };
    let F = null;
    return (
      o === !1 ||
        (F = St(o) ? o(D) : R.isValidElement(o) ? R.cloneElement(o, D) : Fv(D)),
      K.createElement(
        p,
        { isIn: z, done: V, position: f, preventExitTransition: n, nodeRef: r },
        K.createElement(
          'div',
          { id: k, onClick: u, className: re, ...i, style: y, ref: r },
          K.createElement(
            'div',
            {
              ...(z && { role: S }),
              className: St(_) ? _({ type: a }) : ur('Toastify__toast-body', _),
              style: g,
            },
            ee != null &&
              K.createElement(
                'div',
                {
                  className: ur('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !Q,
                  }),
                },
                ee
              ),
            K.createElement('div', null, l)
          ),
          F,
          K.createElement(tT, {
            ...(x && !se ? { key: `pb-${x}` } : {}),
            rtl: w,
            theme: ne,
            delay: s,
            isRunning: t,
            isIn: z,
            closeToast: c,
            hide: d,
            type: a,
            style: v,
            className: m,
            controlledProgress: se,
            progress: T || 0,
          })
        )
      )
    );
  },
  _a = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  rT = va(_a('bounce', !0));
va(_a('slide', !0));
va(_a('zoom'));
va(_a('flip'));
const Qg = R.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: i } = bw(e),
    { className: o, style: l, rtl: s, containerId: u } = e;
  function a(d) {
    const c = ur(
      'Toastify__toast-container',
      `Toastify__toast-container--${d}`,
      { 'Toastify__toast-container--rtl': s }
    );
    return St(o)
      ? o({ position: d, rtl: s, defaultClassName: c })
      : ur(c, Vs(o));
  }
  return (
    R.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    K.createElement(
      'div',
      { ref: r, className: 'Toastify', id: u },
      n((d, c) => {
        const p = c.length ? { ...l } : { ...l, pointerEvents: 'none' };
        return K.createElement(
          'div',
          { className: a(d), style: p, key: `container-${d}` },
          c.map((f, h) => {
            let { content: y, props: _ } = f;
            return K.createElement(
              nT,
              {
                ..._,
                isIn: i(_.toastId),
                style: { ..._.style, '--nth': h + 1, '--len': c.length },
                key: `toast-${_.key}`,
              },
              y
            );
          })
        );
      })
    )
  );
});
(Qg.displayName = 'ToastContainer'),
  (Qg.defaultProps = {
    position: 'top-right',
    transition: rT,
    autoClose: 5e3,
    closeButton: Fv,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light',
  });
let pc,
  zr = new Map(),
  Bo = [],
  iT = 1;
function Bv() {
  return '' + iT++;
}
function oT(e) {
  return e && (li(e.toastId) || ol(e.toastId)) ? e.toastId : Bv();
}
function ll(e, t) {
  return (
    zr.size > 0 ? Ht.emit(0, e, t) : Bo.push({ content: e, options: t }),
    t.toastId
  );
}
function Au(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: oT(t) };
}
function Ss(e) {
  return (t, n) => ll(t, Au(e, n));
}
function he(e, t) {
  return ll(e, Au('default', t));
}
(he.loading = (e, t) =>
  ll(
    e,
    Au('default', {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (he.promise = function (e, t, n) {
    let r,
      { pending: i, error: o, success: l } = t;
    i && (r = li(i) ? he.loading(i, n) : he.loading(i.render, { ...n, ...i }));
    const s = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      u = (d, c, p) => {
        if (c == null) return void he.dismiss(r);
        const f = { type: d, ...s, ...n, data: p },
          h = li(c) ? { render: c } : c;
        return (
          r ? he.update(r, { ...f, ...h }) : he(h.render, { ...f, ...h }), p
        );
      },
      a = St(e) ? e() : e;
    return a.then((d) => u('success', l, d)).catch((d) => u('error', o, d)), a;
  }),
  (he.success = Ss('success')),
  (he.info = Ss('info')),
  (he.error = Ss('error')),
  (he.warning = Ss('warning')),
  (he.warn = he.warning),
  (he.dark = (e, t) => ll(e, Au('default', { theme: 'dark', ...t }))),
  (he.dismiss = (e) => {
    zr.size > 0
      ? Ht.emit(1, e)
      : (Bo = Bo.filter((t) => e != null && t.options.toastId !== e));
  }),
  (he.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), Ht.emit(5, e);
  }),
  (he.isActive = (e) => {
    let t = !1;
    return (
      zr.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (he.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, i) {
          let { containerId: o } = i;
          const l = zr.get(o || pc);
          return l && l.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: i } = n,
            o = {
              delay: 100,
              ...r,
              ...t,
              toastId: t.toastId || e,
              updateId: Bv(),
            };
          o.toastId !== e && (o.staleId = e);
          const l = o.render || i;
          delete o.render, ll(l, o);
        }
      }, 0);
  }),
  (he.done = (e) => {
    he.update(e, { progress: 1 });
  }),
  (he.onChange = (e) => (
    Ht.on(4, e),
    () => {
      Ht.off(4, e);
    }
  )),
  (he.POSITION = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center',
  }),
  (he.TYPE = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'default',
  }),
  Ht.on(2, (e) => {
    (pc = e.containerId || e),
      zr.set(pc, e),
      Bo.forEach((t) => {
        Ht.emit(0, t.content, t.options);
      }),
      (Bo = []);
  }).on(3, (e) => {
    zr.delete(e.containerId || e), zr.size === 0 && Ht.off(0).off(1).off(5);
  });
const lT = ({ isLink: e }) => {
    const [t] = le.useLexicalComposerContext(),
      [n, r] = R.useState(!1),
      i = R.useCallback(() => {
        var o;
        e
          ? t.dispatchCommand(Pt.TOGGLE_LINK_COMMAND, null)
          : (o = window.getSelection()) != null && o.isCollapsed
          ? he.error(
              'Selecciona el texto que quieras convertir en un hiperenlace'
            )
          : (r(!0),
            t.dispatchCommand(Pt.TOGGLE_LINK_COMMAND, {
              url: '',
              target: '_blank',
            }));
      }, [t, e]);
    return E.jsxs(sT, {
      children: [
        E.jsx('button', {
          className: e ? 'toolbar-btn active-btn' : 'toolbar-btn',
          onClick: i,
          title: 'Insertar hipervínculo',
          children: E.jsx(Lw, {}),
        }),
        e &&
          Wl.createPortal(
            E.jsx(Xw, { editor: t, isEditMode: n, setIsEditMode: r }),
            document.body
          ),
      ],
    });
  },
  sT = Cn.div`
  position: relative;

  .editor-container {
    position: absolute;
    top: 2.2rem;
    left: -0.3rem;
    width: 300px;
    height: 100px;
    background-color: white;
    border-radius: var(--border-radius);
    border: var(--default-border);
    z-index: 10;
    transition: var(--transition);
  }
`;
function uT(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z',
        },
      },
    ],
  })(e);
}
function aT(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 256 256', fill: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M224,128a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM104,72H216a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16ZM216,184H104a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM43.58,55.16,48,52.94V104a8,8,0,0,0,16,0V40a8,8,0,0,0-11.58-7.16l-16,8a8,8,0,0,0,7.16,14.32ZM79.77,156.72a23.73,23.73,0,0,0-9.6-15.95,24.86,24.86,0,0,0-34.11,4.7,23.63,23.63,0,0,0-3.57,6.46,8,8,0,1,0,15,5.47,7.84,7.84,0,0,1,1.18-2.13,8.76,8.76,0,0,1,12-1.59A7.91,7.91,0,0,1,63.93,159a7.64,7.64,0,0,1-1.57,5.78,1,1,0,0,0-.08.11L33.59,203.21A8,8,0,0,0,40,216H72a8,8,0,0,0,0-16H56l19.08-25.53A23.47,23.47,0,0,0,79.77,156.72Z',
        },
      },
    ],
  })(e);
}
const cT = () => {
    const [e] = le.useLexicalComposerContext(),
      t = [
        { tag: 'ol', icon: E.jsx(aT, {}), title: 'Insertar lista numerada' },
        { tag: 'ul', icon: E.jsx(uT, {}), title: 'Insertar lista' },
      ],
      n = (r) => {
        if (r === 'ol') {
          e.dispatchCommand(oi.INSERT_ORDERED_LIST_COMMAND, void 0);
          return;
        } else if (r === 'ul') {
          e.dispatchCommand(oi.INSERT_UNORDERED_LIST_COMMAND, void 0);
          return;
        }
      };
    return E.jsx(dT, {
      className: 'InsertListButtons toolbar-btn-strip',
      children: t.map(({ tag: r, icon: i, title: o }) =>
        E.jsx(
          'button',
          {
            className: 'toolbar-btn list-btn',
            onClick: () => {
              n(r);
            },
            title: o,
            children: i,
          },
          r
        )
      ),
    });
  },
  dT = Cn.div`
  .list-btn {
    font-size: 1.2rem;
  }
`,
  fT = ({ fontColor: e }) =>
    E.jsx(Dv, { currColor: e, propertyName: 'color', icon: E.jsx(Mw, {}) }),
  pT = ({ isBold: e, isItalic: t, isUnderline: n, isStrikethrough: r }) => {
    const [i] = le.useLexicalComposerContext(),
      o = [
        {
          tag: 'bold',
          icon: E.jsx(Dw, {}),
          isActive: e,
          title: 'Negrita (ctrl+b)',
        },
        {
          tag: 'italic',
          icon: E.jsx(Pw, {}),
          isActive: t,
          title: 'Cursiva (ctrl+i)',
        },
        {
          tag: 'underline',
          icon: E.jsx(Iw, {}),
          isActive: n,
          title: 'Subrayado (ctrl+u)',
        },
        {
          tag: 'strikethrough',
          icon: E.jsx(Aw, {}),
          isActive: r,
          title: 'Tachado',
        },
      ];
    return E.jsx('div', {
      className: 'toolbar-btn-strip',
      children: o.map(({ tag: l, icon: s, isActive: u, title: a }) =>
        E.jsx(
          'button',
          {
            className: u ? 'toolbar-btn active-btn' : 'toolbar-btn',
            title: a,
            onClick: () => {
              i.dispatchCommand(H.FORMAT_TEXT_COMMAND, l);
            },
            children: s,
          },
          l
        )
      ),
    });
  },
  hT = () => {
    const [e] = le.useLexicalComposerContext(),
      t = async () => {
        const n = e.getEditorState(),
          r = n.toJSON();
        console.log(r),
          n.read(() => {
            const i = Zy.$generateHtmlFromNodes(e);
            console.log(i);
          });
      };
    return E.jsx('button', {
      className: 'toolbar-btn',
      onClick: t,
      title: 'Guardar',
      children: E.jsx(Bw, {}),
    });
  };
var Gl = {},
  Sp = {},
  Ep = le,
  lt = H,
  ge = R,
  Jg = We,
  gT =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u'
      ? ge.useLayoutEffect
      : ge.useEffect;
let mT = class {
    constructor(t) {
      (this.key = t),
        (this.ref = { current: null }),
        (this.setRefElement = this.setRefElement.bind(this));
    }
    setRefElement(t) {
      this.ref = { current: t };
    }
  },
  Xg = (e) => {
    const t = document.getElementById('typeahead-menu');
    if (t) {
      var n = t.getBoundingClientRect();
      n.top + n.height > window.innerHeight &&
        t.scrollIntoView({ block: 'center' }),
        0 > n.top && t.scrollIntoView({ block: 'center' }),
        e.scrollIntoView({ block: 'nearest' });
    }
  };
function yT(e) {
  var t = lt.$getSelection();
  if (!lt.$isRangeSelection(t) || !t.isCollapsed()) return null;
  var n = t.anchor;
  if (n.type !== 'text' || ((t = n.getNode()), !t.isSimpleText())) return null;
  n = n.offset;
  let r = t.getTextContent().slice(0, n);
  var i = e.matchingString;
  e = e.replaceableString.length;
  for (let l = e; l <= i.length; l++)
    r.substr(-l) === i.substr(0, l) && (e = l);
  if (((e = n - e), 0 > e)) return null;
  let o;
  return e === 0 ? ([o] = t.splitText(n)) : ([, o] = t.splitText(e, n)), o;
}
function vT(e, t) {
  let n = getComputedStyle(e),
    r = n.position === 'absolute';
  if (
    ((t = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/), n.position === 'fixed')
  )
    return document.body;
  for (; (e = e.parentElement); )
    if (
      ((n = getComputedStyle(e)),
      (!r || n.position !== 'static') &&
        t.test(n.overflow + n.overflowY + n.overflowX))
    )
      return e;
  return document.body;
}
function Zg(e, t) {
  return (
    (e = e.getBoundingClientRect()),
    (t = t.getBoundingClientRect()),
    e.top > t.top && e.top < t.bottom
  );
}
function _T(e, t, n, r) {
  let [i] = Ep.useLexicalComposerContext();
  ge.useEffect(() => {
    if (t != null && e != null) {
      let o = i.getRootElement(),
        l = o != null ? vT(o, !1) : document.body,
        s = !1,
        u = Zg(t, l),
        a = function () {
          s ||
            (window.requestAnimationFrame(function () {
              n(), (s = !1);
            }),
            (s = !0));
          const c = Zg(t, l);
          c !== u && ((u = c), r != null && r(c));
        },
        d = new ResizeObserver(n);
      return (
        window.addEventListener('resize', n),
        document.addEventListener('scroll', a, { capture: !0, passive: !0 }),
        d.observe(t),
        () => {
          d.unobserve(t),
            window.removeEventListener('resize', n),
            document.removeEventListener('scroll', a);
        }
      );
    }
  }, [t, i, r, n, e]);
}
let qg = lt.createCommand('SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND');
function xT({
  close: e,
  editor: t,
  anchorElementRef: n,
  resolution: r,
  options: i,
  menuRenderFn: o,
  onSelectOption: l,
  shouldSplitNodeWithQuery: s = !1,
}) {
  let [u, a] = ge.useState(null);
  ge.useEffect(() => {
    a(0);
  }, [r.match && r.match.matchingString]);
  let d = ge.useCallback(
      (f) => {
        t.update(() => {
          const h = r.match != null && s ? yT(r.match) : null;
          l(f, h, e, r.match ? r.match.matchingString : '');
        });
      },
      [t, s, r.match, l, e]
    ),
    c = ge.useCallback(
      (f) => {
        const h = t.getRootElement();
        h !== null &&
          (h.setAttribute('aria-activedescendant', 'typeahead-item-' + f),
          a(f));
      },
      [t]
    );
  ge.useEffect(
    () => () => {
      let f = t.getRootElement();
      f !== null && f.removeAttribute('aria-activedescendant');
    },
    [t]
  ),
    gT(() => {
      i === null ? a(null) : u === null && c(0);
    }, [i, u, c]),
    ge.useEffect(
      () =>
        Jg.mergeRegister(
          t.registerCommand(
            qg,
            ({ option: f }) =>
              f.ref && f.ref.current != null ? (Xg(f.ref.current), !0) : !1,
            lt.COMMAND_PRIORITY_LOW
          )
        ),
      [t, c]
    ),
    ge.useEffect(
      () =>
        Jg.mergeRegister(
          t.registerCommand(
            lt.KEY_ARROW_DOWN_COMMAND,
            (f) => {
              if (i !== null && i.length && u !== null) {
                let h = u !== i.length - 1 ? u + 1 : 0;
                c(h);
                let y = i[h];
                y.ref != null &&
                  y.ref.current &&
                  t.dispatchCommand(qg, { index: h, option: y }),
                  f.preventDefault(),
                  f.stopImmediatePropagation();
              }
              return !0;
            },
            lt.COMMAND_PRIORITY_LOW
          ),
          t.registerCommand(
            lt.KEY_ARROW_UP_COMMAND,
            (f) => {
              if (i !== null && i.length && u !== null) {
                var h = u !== 0 ? u - 1 : i.length - 1;
                c(h),
                  (h = i[h]),
                  h.ref != null && h.ref.current && Xg(h.ref.current),
                  f.preventDefault(),
                  f.stopImmediatePropagation();
              }
              return !0;
            },
            lt.COMMAND_PRIORITY_LOW
          ),
          t.registerCommand(
            lt.KEY_ESCAPE_COMMAND,
            (f) => (f.preventDefault(), f.stopImmediatePropagation(), e(), !0),
            lt.COMMAND_PRIORITY_LOW
          ),
          t.registerCommand(
            lt.KEY_TAB_COMMAND,
            (f) =>
              i === null || u === null || i[u] == null
                ? !1
                : (f.preventDefault(),
                  f.stopImmediatePropagation(),
                  d(i[u]),
                  !0),
            lt.COMMAND_PRIORITY_LOW
          ),
          t.registerCommand(
            lt.KEY_ENTER_COMMAND,
            (f) =>
              i === null || u === null || i[u] == null
                ? !1
                : (f !== null &&
                    (f.preventDefault(), f.stopImmediatePropagation()),
                  d(i[u]),
                  !0),
            lt.COMMAND_PRIORITY_LOW
          )
        ),
      [d, e, t, i, u, c]
    );
  let p = ge.useMemo(
    () => ({
      options: i,
      selectOptionAndCleanUp: d,
      selectedIndex: u,
      setHighlightedIndex: a,
    }),
    [d, u, i]
  );
  return o(n, p, r.match ? r.match.matchingString : '');
}
function CT(e, t, n) {
  let [r] = Ep.useLexicalComposerContext(),
    i = ge.useRef(document.createElement('div')),
    o = ge.useCallback(() => {
      const s = r.getRootElement(),
        u = i.current;
      var a = u.firstChild;
      if (s !== null && e !== null) {
        const { left: c, top: p, width: f, height: h } = e.getRect();
        if (
          ((u.style.top = `${p + window.pageYOffset}px`),
          (u.style.left = `${c + window.pageXOffset}px`),
          (u.style.height = `${h}px`),
          (u.style.width = `${f}px`),
          a !== null)
        ) {
          var d = a.getBoundingClientRect();
          (a = d.height), (d = d.width);
          const y = s.getBoundingClientRect();
          c + d > y.right &&
            (u.style.left = `${y.right - d + window.pageXOffset}px`),
            (p + a > window.innerHeight || p + a > y.bottom) &&
              p - y.top > a &&
              (u.style.top = `${p - a + window.pageYOffset - (h + 10)}px`);
        }
        u.isConnected ||
          (n != null && (u.className = n),
          u.setAttribute('aria-label', 'Typeahead menu'),
          u.setAttribute('id', 'typeahead-menu'),
          u.setAttribute('role', 'listbox'),
          (u.style.display = 'block'),
          (u.style.position = 'absolute'),
          document.body.append(u)),
          (i.current = u),
          s.setAttribute('aria-controls', 'typeahead-menu');
      }
    }, [r, e, n]);
  ge.useEffect(() => {
    let s = r.getRootElement();
    if (e !== null)
      return (
        o(),
        () => {
          s !== null && s.removeAttribute('aria-controls');
          let u = i.current;
          u !== null && u.isConnected && u.remove();
        }
      );
  }, [r, o, e]);
  let l = ge.useCallback(
    (s) => {
      e !== null && (s || t(null));
    },
    [e, t]
  );
  return _T(e, i.current, o, l), i;
}
function ST(e) {
  ge.startTransition ? ge.startTransition(e) : e();
}
Sp.LexicalNodeMenuPlugin = function ({
  options: e,
  nodeKey: t,
  onClose: n,
  onOpen: r,
  onSelectOption: i,
  menuRenderFn: o,
  anchorClassName: l,
}) {
  let [s] = Ep.useLexicalComposerContext(),
    [u, a] = ge.useState(null);
  l = CT(u, a, l);
  let d = ge.useCallback(() => {
      a(null), n != null && u !== null && n();
    }, [n, u]),
    c = ge.useCallback(
      (f) => {
        a(f), r != null && u === null && r(f);
      },
      [r, u]
    ),
    p = ge.useCallback(() => {
      t
        ? s.update(() => {
            const f = lt.$getNodeByKey(t),
              h = s.getElementByKey(t);
            f != null &&
              h != null &&
              u == null &&
              ST(() => c({ getRect: () => h.getBoundingClientRect() }));
          })
        : t == null && u != null && d();
    }, [d, s, t, c, u]);
  return (
    ge.useEffect(() => {
      p();
    }, [p, t]),
    ge.useEffect(() => {
      if (t != null)
        return s.registerUpdateListener(({ dirtyElements: f }) => {
          f.get(t) && p();
        });
    }, [s, p, t]),
    u === null || s === null
      ? null
      : ge.createElement(xT, {
          close: d,
          resolution: u,
          editor: s,
          anchorElementRef: l,
          options: e,
          menuRenderFn: o,
          onSelectOption: i,
        })
  );
};
Sp.MenuOption = mT;
const ET = Sp;
var NT = ET,
  Oo = Pt,
  wT = le,
  jv = NT,
  TT = We,
  jo = H,
  cn = R;
let Wv = jo.createCommand('INSERT_EMBED_COMMAND'),
  $T = class extends jv.MenuOption {
    constructor(t, n) {
      super(t), (this.title = t), (this.onSelect = n.onSelect.bind(this));
    }
  };
Gl.AutoEmbedOption = $T;
Gl.INSERT_EMBED_COMMAND = Wv;
Gl.LexicalAutoEmbedPlugin = function ({
  embedConfigs: e,
  onOpenEmbedModalForConfig: t,
  getMenuOptions: n,
  menuRenderFn: r,
}) {
  let [i] = wT.useLexicalComposerContext(),
    [o, l] = cn.useState(null),
    [s, u] = cn.useState(null),
    a = cn.useCallback(() => {
      l(null), u(null);
    }, []),
    d = cn.useCallback(
      (h) => {
        i.getEditorState().read(async () => {
          const y = jo.$getNodeByKey(h);
          if (Oo.$isLinkNode(y))
            for (let _ = 0; _ < e.length; _++) {
              const g = e[_];
              (await Promise.resolve(g.parseUrl(y.__url))) != null &&
                (u(g), l(y.getKey()));
            }
        });
      },
      [i, e]
    );
  cn.useEffect(() => {
    let h = (y, { updateTags: _, dirtyLeaves: g }) => {
      for (const [m, v] of y)
        v === 'created' && _.has('paste') && 3 >= g.size
          ? d(m)
          : m === o && a();
    };
    return TT.mergeRegister(
      ...[Oo.LinkNode, Oo.AutoLinkNode].map((y) =>
        i.registerMutationListener(y, (..._) => h(..._))
      )
    );
  }, [d, i, e, o, a]),
    cn.useEffect(
      () =>
        i.registerCommand(
          Wv,
          (h) => {
            let y = e.find(({ type: _ }) => _ === h);
            return y ? (t(y), !0) : !1;
          },
          jo.COMMAND_PRIORITY_EDITOR
        ),
      [i, e, t]
    );
  let c = cn.useCallback(async () => {
      if (s != null && o != null) {
        const h = i.getEditorState().read(() => {
          const y = jo.$getNodeByKey(o);
          return Oo.$isLinkNode(y) ? y : null;
        });
        if (Oo.$isLinkNode(h)) {
          const y = await Promise.resolve(s.parseUrl(h.__url));
          y != null &&
            i.update(() => {
              jo.$getSelection() || h.selectEnd(),
                s.insertNode(i, y),
                h.isAttached() && h.remove();
            });
        }
      }
    }, [s, i, o]),
    p = cn.useMemo(
      () => (s != null && o != null ? n(s, c, a) : []),
      [s, c, n, o, a]
    ),
    f = cn.useCallback(
      (h, y, _) => {
        i.update(() => {
          h.onSelect(y), _();
        });
      },
      [i]
    );
  return o != null
    ? cn.createElement(jv.LexicalNodeMenuPlugin, {
        nodeKey: o,
        onClose: a,
        onSelectOption: f,
        options: p,
        menuRenderFn: r,
      })
    : null;
};
Gl.URL_MATCHER =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const kT = Gl;
var sl = kT;
function OT(e) {
  return Ue({
    tag: 'svg',
    attr: { viewBox: '0 0 352 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
        },
      },
    ],
  })(e);
}
function RT({ onClose: e, children: t, title: n, closeOnClickOutside: r }) {
  const i = R.useRef(null);
  return (
    R.useEffect(() => {
      i.current !== null && i.current.focus();
    }, []),
    R.useEffect(() => {
      let o = null;
      const l = (a) => {
          a.keyCode === 27 && e();
        },
        s = (a) => {
          const d = a.target;
          i.current !== null && !i.current.contains(d) && r && e();
        },
        u = i.current;
      return (
        u !== null &&
          ((o = u.parentElement), o !== null && o.addEventListener('click', s)),
        window.addEventListener('keydown', l),
        () => {
          window.removeEventListener('keydown', l),
            o !== null && (o == null || o.removeEventListener('click', s));
        }
      );
    }, [r, e]),
    E.jsx('div', {
      className: 'Modal__overlay',
      role: 'dialog',
      children: E.jsxs('div', {
        className: 'Modal__modal',
        tabIndex: -1,
        ref: i,
        children: [
          E.jsx('h2', { className: 'Modal__title', children: n }),
          E.jsx('button', {
            className: 'Modal__closeButton',
            'aria-label': 'Close modal',
            type: 'button',
            onClick: e,
            children: E.jsx(OT, {}),
          }),
          E.jsx('div', { className: 'Modal__content', children: t }),
        ],
      }),
    })
  );
}
function DT({
  onClose: e,
  children: t,
  title: n,
  closeOnClickOutside: r = !1,
}) {
  return Wl.createPortal(
    E.jsx(RT, { onClose: e, title: n, closeOnClickOutside: r, children: t }),
    document.body
  );
}
function MT() {
  const [e, t] = R.useState(null),
    n = R.useCallback(() => {
      t(null);
    }, []),
    r = R.useMemo(() => {
      if (e === null) return null;
      const { title: o, content: l, closeOnClickOutside: s } = e;
      return E.jsx(DT, {
        onClose: n,
        title: o,
        closeOnClickOutside: s,
        children: l,
      });
    }, [e, n]),
    i = R.useCallback(
      (o, l, s = !1) => {
        t({ closeOnClickOutside: s, content: l(n), title: o });
      },
      [n]
    );
  return [r, i];
}
function PT(...e) {
  return e.filter(Boolean).join(' ');
}
function LT({
  'data-test-id': e,
  children: t,
  className: n,
  onClick: r,
  disabled: i,
  small: o,
  title: l,
}) {
  return E.jsx('button', {
    disabled: i,
    className: PT(
      'Button__root',
      i && 'Button__disabled',
      o && 'Button__small',
      n
    ),
    onClick: r,
    title: l,
    'aria-label': l,
    ...(e && { 'data-test-id': e }),
    children: t,
  });
}
function AT({ 'data-test-id': e, children: t }) {
  return E.jsx('div', {
    className: 'DialogActions',
    'data-test-id': e,
    children: t,
  });
}
var Hv = {},
  Np = {},
  IT = H;
let Uv = class extends IT.DecoratorNode {
  constructor(t, n) {
    super(n), (this.__format = t || '');
  }
  exportJSON() {
    return { format: this.__format || '', type: 'decorator-block', version: 1 };
  }
  createDOM() {
    return document.createElement('div');
  }
  updateDOM() {
    return !1;
  }
  setFormat(t) {
    this.getWritable().__format = t;
  }
  isInline() {
    return !1;
  }
};
Np.$isDecoratorBlockNode = function (e) {
  return e instanceof Uv;
};
Np.DecoratorBlockNode = Uv;
const zT = Np;
var Kv = zT,
  Vv = {},
  FT = le,
  Fr = H,
  Es = R;
function bg(e, t) {
  return e.getEditorState().read(() => {
    let n = Fr.$getNodeByKey(t);
    return n === null ? !1 : n.isSelected();
  });
}
Vv.useLexicalNodeSelection = function (e) {
  let [t] = FT.useLexicalComposerContext(),
    [n, r] = Es.useState(() => bg(t, e));
  Es.useEffect(() => {
    let l = !0,
      s = t.registerUpdateListener(() => {
        l && r(bg(t, e));
      });
    return () => {
      (l = !1), s();
    };
  }, [t, e]);
  let i = Es.useCallback(
      (l) => {
        t.update(() => {
          let s = Fr.$getSelection();
          Fr.$isNodeSelection(s) ||
            ((s = Fr.$createNodeSelection()), Fr.$setSelection(s)),
            l ? s.add(e) : s.delete(e);
        });
      },
      [t, e]
    ),
    o = Es.useCallback(() => {
      t.update(() => {
        const l = Fr.$getSelection();
        Fr.$isNodeSelection(l) && l.clear();
      });
    }, [t]);
  return [n, i, o];
};
const BT = Vv;
var jT = BT,
  WT = le,
  em = Kv,
  HT = jT,
  tm = We,
  qe = H,
  Ns = R;
Hv.BlockWithAlignableContents = function ({
  children: e,
  format: t,
  nodeKey: n,
  className: r,
}) {
  let [i] = WT.useLexicalComposerContext(),
    [o, l, s] = HT.useLexicalNodeSelection(n),
    u = Ns.useRef(null),
    a = Ns.useCallback(
      (d) => (
        o &&
          qe.$isNodeSelection(qe.$getSelection()) &&
          (d.preventDefault(),
          (d = qe.$getNodeByKey(n)),
          qe.$isDecoratorNode(d) && d.remove()),
        !1
      ),
      [o, n]
    );
  return (
    Ns.useEffect(
      () =>
        tm.mergeRegister(
          i.registerCommand(
            qe.FORMAT_ELEMENT_COMMAND,
            (d) => {
              if (o) {
                var c = qe.$getSelection();
                if (qe.$isNodeSelection(c)) {
                  var p = qe.$getNodeByKey(n);
                  em.$isDecoratorBlockNode(p) && p.setFormat(d);
                } else if (qe.$isRangeSelection(c)) {
                  c = c.getNodes();
                  for (p of c)
                    em.$isDecoratorBlockNode(p)
                      ? p.setFormat(d)
                      : tm
                          .$getNearestBlockElementAncestorOrThrow(p)
                          .setFormat(d);
                }
                return !0;
              }
              return !1;
            },
            qe.COMMAND_PRIORITY_LOW
          ),
          i.registerCommand(
            qe.CLICK_COMMAND,
            (d) =>
              d.target === u.current
                ? (d.preventDefault(), d.shiftKey || s(), l(!o), !0)
                : !1,
            qe.COMMAND_PRIORITY_LOW
          ),
          i.registerCommand(qe.KEY_DELETE_COMMAND, a, qe.COMMAND_PRIORITY_LOW),
          i.registerCommand(
            qe.KEY_BACKSPACE_COMMAND,
            a,
            qe.COMMAND_PRIORITY_LOW
          )
        ),
      [s, i, o, n, a, l]
    ),
    Ns.createElement(
      'div',
      {
        className: [r.base, o ? r.focus : null].filter(Boolean).join(' '),
        ref: u,
        style: { textAlign: t || void 0 },
      },
      e
    )
  );
};
const UT = Hv;
var KT = UT;
H.createCommand('INSERT_TWEET_COMMAND');
function VT({ className: e, format: t, nodeKey: n, videoID: r }) {
  return E.jsx(KT.BlockWithAlignableContents, {
    className: e,
    format: t,
    nodeKey: n,
    children: E.jsx('iframe', {
      width: '560',
      height: '315',
      src: `https://www.youtube-nocookie.com/embed/${r}`,
      frameBorder: '0',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowFullScreen: !0,
      title: 'YouTube video',
    }),
  });
}
function YT(e) {
  const t = e.getAttribute('data-lexical-youtube');
  return t ? { node: wp(t) } : null;
}
class Ql extends Kv.DecoratorBlockNode {
  constructor(n, r, i) {
    super(r, i);
    Rp(this, '__id');
    this.__id = n;
  }
  static getType() {
    return 'youtube';
  }
  static clone(n) {
    return new Ql(n.__id, n.__format, n.__key);
  }
  static importJSON(n) {
    const r = wp(n.videoID);
    return r.setFormat(n.format), r;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: 'youtube',
      version: 1,
      videoID: this.__id,
    };
  }
  exportDOM() {
    const n = document.createElement('iframe');
    return (
      n.setAttribute('data-lexical-youtube', this.__id),
      n.setAttribute('width', '560'),
      n.setAttribute('height', '315'),
      n.setAttribute(
        'src',
        `https://www.youtube-nocookie.com/embed/${this.__id}`
      ),
      n.setAttribute('frameborder', '0'),
      n.setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ),
      n.setAttribute('allowfullscreen', 'true'),
      n.setAttribute('title', 'YouTube video'),
      { element: n }
    );
  }
  static importDOM() {
    return {
      iframe: (n) =>
        n.hasAttribute('data-lexical-youtube')
          ? { conversion: YT, priority: 1 }
          : null,
    };
  }
  updateDOM() {
    return !1;
  }
  getId() {
    return this.__id;
  }
  getTextContent() {
    return `https://www.youtube.com/watch?v=${this.__id}`;
  }
  decorate(n, r) {
    const i = r.theme.embedBlock || {},
      o = { base: i.base || '', focus: i.focus || '' };
    return E.jsx(VT, {
      className: o,
      format: this.__format,
      nodeKey: this.getKey(),
      videoID: this.__id,
    });
  }
}
function wp(e) {
  return new Ql(e);
}
const Yv = H.createCommand('INSERT_YOUTUBE_COMMAND');
function GT() {
  const [e] = le.useLexicalComposerContext();
  return (
    R.useEffect(() => {
      if (!e.hasNodes([Ql]))
        throw new Error('YouTubePlugin: YouTubeNode not registered on editor');
      return e.registerCommand(
        Yv,
        (t) => {
          const n = wp(t);
          return We.$insertNodeToNearestRoot(n), !0;
        },
        H.COMMAND_PRIORITY_EDITOR
      );
    }, [e]),
    null
  );
}
const QT = {
    contentName: 'vídeo de YouTube',
    exampleUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
    icon: E.jsx(jw, {}),
    insertNode: (e, t) => {
      e.dispatchCommand(Yv, t.id);
    },
    keywords: ['youtube', 'video'],
    parseUrl: async (e) => {
      const t =
          /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(
            e
          ),
        n = t && (t == null ? void 0 : t[2].length) === 11 ? t[2] : null;
      return n != null ? { id: n, url: e } : null;
    },
    type: 'youtube-video',
  },
  Gv = [QT];
function JT({
  index: e,
  isSelected: t,
  onClick: n,
  onMouseEnter: r,
  option: i,
}) {
  let o = 'item';
  return (
    t && (o += ' selected'),
    E.jsx(
      'li',
      {
        tabIndex: -1,
        className: o,
        ref: i.setRefElement,
        role: 'option',
        'aria-selected': t,
        id: 'typeahead-item-' + e,
        onMouseEnter: r,
        onClick: n,
        children: E.jsx('span', { className: 'text', children: i.title }),
      },
      i.key
    )
  );
}
function XT({
  options: e,
  selectedItemIndex: t,
  onOptionClick: n,
  onOptionMouseEnter: r,
}) {
  return E.jsx('div', {
    className: 'typeahead-popover',
    children: E.jsx('ul', {
      children: e.map((i, o) =>
        E.jsx(
          JT,
          {
            index: o,
            isSelected: t === o,
            onClick: () => n(i, o),
            onMouseEnter: () => r(o),
            option: i,
          },
          i.key
        )
      ),
    }),
  });
}
const ZT = (e, t) => {
  let n;
  return (r) => {
    window.clearTimeout(n),
      (n = window.setTimeout(() => {
        e(r);
      }, t));
  };
};
function qT({ embedConfig: e, onClose: t }) {
  const [n, r] = R.useState(''),
    [i] = le.useLexicalComposerContext(),
    [o, l] = R.useState(null),
    s = R.useMemo(
      () =>
        ZT((a) => {
          const d = sl.URL_MATCHER.exec(a);
          e != null && a != null && d != null
            ? Promise.resolve(e.parseUrl(a)).then((c) => {
                l(c);
              })
            : o != null && l(null);
        }, 200),
      [e, o]
    ),
    u = () => {
      o != null && (e.insertNode(i, o), t());
    };
  return E.jsxs('div', {
    style: { width: '600px' },
    children: [
      E.jsx('div', {
        className: 'Input__wrapper',
        children: E.jsx('input', {
          type: 'text',
          className: 'Input__input',
          placeholder: e.exampleUrl,
          value: n,
          'data-test-id': `${e.type}-embed-modal-url`,
          onChange: (a) => {
            const { value: d } = a.target;
            r(d), s(d);
          },
        }),
      }),
      E.jsx(AT, {
        children: E.jsx(LT, {
          disabled: !o,
          onClick: u,
          'data-test-id': `${e.type}-embed-modal-submit-btn`,
          children: 'Insertar',
        }),
      }),
    ],
  });
}
function bT() {
  const [e, t] = MT(),
    n = (i) => {
      t(`Insertar ${i.contentName}`, (o) =>
        E.jsx(qT, { embedConfig: i, onClose: o })
      );
    },
    r = (i, o, l) => [
      new sl.AutoEmbedOption('Descartar', { onSelect: l }),
      new sl.AutoEmbedOption(`Insertar ${i.contentName}`, { onSelect: o }),
    ];
  return E.jsxs(E.Fragment, {
    children: [
      e,
      E.jsx(sl.LexicalAutoEmbedPlugin, {
        embedConfigs: Gv,
        onOpenEmbedModalForConfig: n,
        getMenuOptions: r,
        menuRenderFn: (
          i,
          {
            selectedIndex: o,
            options: l,
            selectOptionAndCleanUp: s,
            setHighlightedIndex: u,
          }
        ) =>
          i.current
            ? Wl.createPortal(
                E.jsx('div', {
                  className: 'typeahead-popover auto-embed-menu',
                  style: { marginLeft: i.current.style.width, width: 200 },
                  children: E.jsx(XT, {
                    options: l,
                    selectedItemIndex: o,
                    onOptionClick: (a, d) => {
                      u(d), s(a);
                    },
                    onOptionMouseEnter: (a) => {
                      u(a);
                    },
                  }),
                }),
                i.current
              )
            : null,
      }),
    ],
  });
}
const e$ = () => {
    const [e] = le.useLexicalComposerContext();
    return E.jsx(E.Fragment, {
      children: Gv.map((t) =>
        E.jsx(
          'button',
          {
            className: 'toolbar-btn',
            onClick: () => {
              e.dispatchCommand(sl.INSERT_EMBED_COMMAND, t.type);
            },
            children: t.icon,
          },
          t.type
        )
      ),
    });
  },
  t$ = ({ elementFormat: e }) => {
    const [t] = le.useLexicalComposerContext(),
      n = [
        {
          format: 'left',
          icon: E.jsx(kw, {}),
          isActive: e === 'left',
          title: 'Alineación izquierda',
        },
        {
          format: 'center',
          icon: E.jsx(Ow, {}),
          isActive: e === 'center',
          title: 'Centrado',
        },
        {
          format: 'right',
          icon: E.jsx(Rw, {}),
          isActive: e === 'right',
          title: 'Alineación derecha',
        },
        {
          format: 'justify',
          icon: E.jsx($w, {}),
          isActive: e === 'justify',
          title: 'Justificado',
        },
      ];
    return E.jsx('div', {
      className: 'toolbar-btn-strip',
      children: n.map(({ format: r, icon: i, isActive: o, title: l }) =>
        E.jsx(
          'button',
          {
            className: o ? 'toolbar-btn active-btn' : 'toolbar-btn',
            title: l,
            onClick: () => {
              t.dispatchCommand(H.FORMAT_ELEMENT_COMMAND, r);
            },
            children: i,
          },
          r
        )
      ),
    });
  },
  n$ = () => {
    const [e] = le.useLexicalComposerContext(),
      [t, n] = R.useState('paragraph'),
      [r, i] = R.useState(!1),
      [o, l] = R.useState(!1),
      [s, u] = R.useState(!1),
      [a, d] = R.useState(!1),
      [c, p] = R.useState(!1),
      [f, h] = R.useState('1,0rem'),
      [y, _] = R.useState('Arial'),
      [g, m] = R.useState('left'),
      [v, x] = R.useState('#000000'),
      [S, T] = R.useState('#ffffff'),
      w = R.useCallback(() => {
        const k = H.$getSelection();
        if (H.$isRangeSelection(k)) {
          const V = k.anchor.getNode(),
            z = V.getKey() === 'root' ? V : V.getTopLevelElementOrThrow(),
            Q = z.getKey();
          if (e.getElementByKey(Q) !== null)
            if (oi.$isListNode(z)) {
              const Me = We.$getNearestNodeOfType(V, oi.ListNode),
                re = Me ? Me.getTag() : z.getTag();
              n(re);
            } else {
              const Me = ha.$isHeadingNode(z) ? z.getTag() : z.getType();
              n(Me);
            }
          i(k.hasFormat('bold')),
            u(k.hasFormat('italic')),
            d(k.hasFormat('underline')),
            p(k.hasFormat('strikethrough')),
            h(Ct.$getSelectionStyleValueForProperty(k, 'font-size', '1.0 rem')),
            _(Ct.$getSelectionStyleValueForProperty(k, 'font-family', 'Arial')),
            x(Ct.$getSelectionStyleValueForProperty(k, 'color', '#000000')),
            T(
              Ct.$getSelectionStyleValueForProperty(
                k,
                'background-color',
                '#ffffff'
              )
            );
          const te = Av(k),
            ne = te.getParent();
          Pt.$isLinkNode(ne) || Pt.$isLinkNode(te) ? l(!0) : l(!1),
            m(
              (H.$isElementNode(te)
                ? te.getFormatType()
                : ne == null
                ? void 0
                : ne.getFormatType()) || 'left'
            );
        }
      }, [e]);
    return (
      R.useEffect(
        () =>
          We.mergeRegister(
            e.registerUpdateListener(({ editorState: k }) => {
              k.read(() => {
                w();
              });
            }),
            e.registerCommand(H.SELECTION_CHANGE_COMMAND, () => (w(), !1), Iv)
          ),
        [e, w]
      ),
      E.jsxs(r$, {
        className: 'ToolbarPlugin',
        children: [
          E.jsx(Yw, { blockType: t }),
          E.jsx(kn, {}),
          E.jsx(Vw, { selectionFontSize: f }),
          E.jsx(kn, {}),
          E.jsx(Uw, { selectionFontFamily: y }),
          E.jsx(kn, {}),
          E.jsx(pT, {
            isBold: r,
            isItalic: s,
            isUnderline: a,
            isStrikethrough: c,
          }),
          E.jsx(kn, {}),
          E.jsx(Ww, { bgColor: S }),
          E.jsx(fT, { fontColor: v }),
          E.jsx(kn, {}),
          E.jsx(t$, { elementFormat: g }),
          E.jsx(kn, {}),
          E.jsx(lT, { isLink: o }),
          E.jsx(e$, {}),
          E.jsx(kn, {}),
          E.jsx(cT, {}),
          E.jsx(kn, {}),
          E.jsx(hT, {}),
          E.jsx(kn, {}),
        ],
      })
    );
  },
  r$ = Cn.div`
  margin-bottom: 0.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0.2rem;
  row-gap: 0.5rem;
  align-items: stretch;
  border-bottom: 1px solid #bbb;
  padding: 0.3rem;
`,
  kn = Cn.div`
  width: 1px;
  background-color: #bbb;
  margin: 0 0.25rem;
`;
var Tp = {},
  Pr = Pt,
  i$ = le,
  o$ = We,
  Fn = H,
  l$ = R;
function s$$(e) {
  let t = new URLSearchParams();
  t.append('code', e);
  for (let n = 1; n < arguments.length; n++) t.append('v', arguments[n]);
  throw Error(
    `Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function Qv(e, t) {
  for (let n = 0; n < t.length; n++) {
    let r = t[n](e);
    if (r) return r;
  }
  return null;
}
let Br = /[.,;\s]/;
function Jv(e) {
  (e = e.getPreviousSibling()),
    Fn.$isElementNode(e) && (e = e.getLastDescendant());
  var t;
  return (
    !(t = e === null || Fn.$isLineBreakNode(e)) &&
      (t = Fn.$isTextNode(e)) &&
      ((e = e.getTextContent()), (t = Br.test(e[e.length - 1]))),
    t
  );
}
function Xv(e) {
  return (
    (e = e.getNextSibling()),
    Fn.$isElementNode(e) && (e = e.getFirstDescendant()),
    e === null ||
      Fn.$isLineBreakNode(e) ||
      (Fn.$isTextNode(e) && Br.test(e.getTextContent()[0]))
  );
}
function hc(e, t, n) {
  var r = e.getChildren();
  let i = r.length;
  for (let o = 0; o < i; o++) {
    let l = r[o];
    if (!Fn.$isTextNode(l) || !l.isSimpleText()) {
      Ys(e), n(null, e.getURL());
      return;
    }
  }
  (r = e.getTextContent()),
    (t = Qv(r, t)),
    t === null || t.text !== r
      ? (Ys(e), n(null, e.getURL()))
      : Jv(e) && Xv(e)
      ? ((r = e.getURL()),
        r !== t.url && (e.setURL(t.url), n(t.url, r)),
        t.attributes &&
          ((r = e.getRel()),
          r !== t.attributes.rel &&
            (e.setRel(t.attributes.rel || null),
            n(t.attributes.rel || null, r)),
          (r = e.getTarget()),
          r !== t.attributes.target &&
            (e.setTarget(t.attributes.target || null),
            n(t.attributes.target || null, r))))
      : (Ys(e), n(null, e.getURL()));
}
function Ys(e) {
  let t = e.getChildren();
  var n = t.length;
  for (--n; 0 <= n; n--) e.insertAfter(t[n]);
  return e.remove(), t.map((r) => r.getLatest());
}
function u$$(e, t, n) {
  l$.useEffect(() => {
    e.hasNodes([Pr.AutoLinkNode]) || s$$(77);
    let r = (i, o) => {
      n && n(i, o);
    };
    return o$.mergeRegister(
      e.registerNodeTransform(Fn.TextNode, (i) => {
        var o = i.getParentOrThrow(),
          l = i.getPreviousSibling();
        if (Pr.$isAutoLinkNode(o)) hc(o, t, r);
        else if (!Pr.$isLinkNode(o)) {
          if (
            i.isSimpleText() &&
            (Br.test(i.getTextContent()[0]) || !Pr.$isAutoLinkNode(l))
          ) {
            l = o = i.getTextContent();
            let f = 0,
              h = i;
            for (var s; (s = Qv(l, t)) && s !== null; ) {
              let y = s.index,
                _ = s.length,
                g = y + _;
              var u = f + y,
                a = f + g,
                d = o,
                c = i;
              if (
                (0 < u ? Br.test(d[u - 1]) : Jv(c)) &&
                (a < d.length ? Br.test(d[a]) : Xv(c))
              ) {
                var p = void 0;
                f + y === 0
                  ? ([p, h] = h.splitText(f + _))
                  : ([, p, h] = h.splitText(f + y, f + y + _)),
                  (u = Pr.$createAutoLinkNode(s.url, s.attributes)),
                  (a = Fn.$createTextNode(s.text)),
                  a.setFormat(p.getFormat()),
                  a.setDetail(p.getDetail()),
                  u.append(a),
                  p.replace(u),
                  n && n(s.url, null),
                  (f = 0);
              } else f += g;
              l = l.substring(g);
            }
          }
          (o = i.getPreviousSibling()),
            (s = i.getNextSibling()),
            (p = i.getTextContent()),
            Pr.$isAutoLinkNode(o) &&
              !Br.test(p[0]) &&
              (o.append(i), hc(o, t, r), (i = o.getURL()), n && n(null, i)),
            Pr.$isAutoLinkNode(s) &&
              !Br.test(p[p.length - 1]) &&
              (Ys(s), hc(s, t, r), (i = s.getURL()), n && n(null, i));
        }
      })
    );
  }, [e, t, n]);
}
Tp.AutoLinkPlugin = function ({ matchers: e, onChange: t }) {
  let [n] = i$.useLexicalComposerContext();
  return u$$(n, e, t), null;
};
Tp.createLinkMatcherWithRegExp = function (e, t = (n) => n) {
  return (n) => {
    let r = e.exec(n);
    return r === null
      ? null
      : { index: r.index, length: r[0].length, text: r[0], url: t(n) };
  };
};
const a$ = Tp;
var c$ = a$;
const d$ =
    /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
  f$ =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
  p$ = [
    (e) => {
      const t = d$.exec(e);
      return (
        t && { index: t.index, length: t[0].length, text: t[0], url: t[0] }
      );
    },
    (e) => {
      const t = f$.exec(e);
      return (
        t && {
          index: t.index,
          length: t[0].length,
          text: t[0],
          url: `mailto:${t[0]}`,
        }
      );
    },
  ];
function h$$() {
  return E.jsx(c$.AutoLinkPlugin, { matchers: p$ });
}
const g$ = ({ children: e }) => E.jsx(m$, { children: e }),
  m$ = Cn.div`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  --toolbar-height: 2.2rem;
  border-radius: var(--border-radius);
  border: var(--default-border);

  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: #222;
  background-color: #fff;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --border-color: #888;
  --disabled-color: #aaa;
  --default-border: 1px solid var(--border-color);
  --secondary-font-color: #3e3877;
  --main-bg-color: #fff;
  --light-grey: #f7f7f7;
  --dark-grey: #eee;
  --border-radius: 5px;
  --default-padding: 0.3rem;
  --editor-padding: 1rem;

  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  .toolbar-btn-strip {
    display: flex;
    flex-direction: row;
    gap: 0.1rem;
  }

  .toolbar-btn {
    border-radius: var(--border-radius);
    cursor: pointer;
    background-color: transparent;
    font-weight: 400;
    font-size: 1.2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
  }

  .active-btn,
  .toolbar-btn:hover {
    background-color: var(--dark-grey);
  }

  .content-editable {
    height: 100%;
    width: 100%;
    outline: none;
    border-radius: var(--border-radius);
    padding: var(--default-padding) var(--editor-padding);
    background-color: white;
    font-family: Arial;
  }

  .rich-editor-select {
    border-radius: var(--border-radius);
    border: none;
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    background-color: transparent;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .rich-editor-select.narrow-select {
    max-width: 5rem;
  }

  .rich-editor-banner {
    background-color: red;
    color: blue;
    margin: 0.5rem;
    display: flex;
    width: fit-content;
    padding: 1rem;
    border-radius: var(--border-radius);
  }
`,
  y$ = {
    heading: {
      h1: 'rich-editor-h1',
      h2: 'rich-editor-h2',
      h3: 'rich-editor-h3',
      h4: 'rich-editor-h4',
      h5: 'rich-editor-h5',
      h6: 'rich-editor-h6',
    },
    text: {
      bold: 'rich-editor-bold',
      italic: 'rich-editor-italic',
      underline: 'rich-editor-underline',
      strikethrough: 'rich-editor-strikethrough',
    },
    link: 'rich-editor-link',
    list: { ul: 'rich-editor-ul', ol: 'rich-editor-ol' },
    embedBlock: {
      base: 'rich-editor-embed-block',
      focus: 'rich-editor-embed-block-focus',
    },
  },
  v$ = (e) => {
    console.error(e);
  },
  _$ = () => {
    const e = {
      namespace: 'MyEditor',
      theme: y$,
      onError: v$,
      nodes: [
        ha.HeadingNode,
        oi.ListNode,
        oi.ListItemNode,
        Pt.LinkNode,
        Pt.AutoLinkNode,
        Ql,
      ],
    };
    return E.jsx(g$, {
      children: E.jsx(x$, {
        className: 'RichEditor',
        children: E.jsxs(cN.LexicalComposer, {
          initialConfig: e,
          children: [
            E.jsx(n$, {}),
            E.jsx(JN.ListPlugin, {}),
            E.jsx(aw.LinkPlugin, {}),
            E.jsx(Ew, {}),
            E.jsx(h$, {}),
            E.jsx(DN.RichTextPlugin, {
              contentEditable: E.jsx('div', {
                className: 'editor-scroller',
                children: E.jsx(AN.ContentEditable, {
                  className: 'content-editable',
                }),
              }),
              placeholder: E.jsx('div', { className: 'placeholder' }),
              ErrorBoundary: mw,
            }),
            E.jsx(KN.HistoryPlugin, {}),
            E.jsx(GT, {}),
            E.jsx(bT, {}),
            E.jsx(bN.AutoFocusPlugin, {}),
          ],
        }),
      }),
    });
  },
  x$ = Cn.div`
  position: relative;

  .editor-scroller {
    height: 20rem;
    overflow-y: scroll;
  }
  .placeholder {
    position: absolute;
    top: calc(var(--toolbar-height) + var(--editor-padding));
    left: var(--editor-padding);
    color: #aaa;
  }

  .rich-editor-bold {
    font-weight: 600;
  }
  .rich-editor-italic {
    font-style: italic;
  }
  .rich-editor-underline {
    text-decoration: underline;
  }
  .rich-editor-strikethrough {
    text-decoration: line-through;
  }

  .rich-editor-h1 {
    font-size: 40px;
  }
  .rich-editor-h2 {
    font-size: 36px;
  }
  .rich-editor-h3 {
    font-size: 32px;
  }
  .rich-editor-h4 {
    font-size: 28px;
  }
  .rich-editor-h5 {
    font-size: 24px;
  }
  .rich-editor-h6 {
    font-size: 20px;
  }

  .rich-editor-ol,
  .rich-editor-ul {
    list-style-position: inside;
  }

  .rich-editor-link {
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
    color: purple;
  }

  .rich-editor-embed-block {
    user-select: none;
  }
  .rich-editor-embed-block-focus {
    /* outline: 2px solid rgb(60, 132, 244); */
  }
`,
  C$ = DC(_$);
customElements.define('rich-text-editor', C$);
