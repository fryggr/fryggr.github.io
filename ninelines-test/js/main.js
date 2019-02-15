/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/slider */ "./src/js/vendor/slider.js");
/* harmony import */ var _vendor_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_slider__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites */ "./node_modules/foundation-sites/dist/js/foundation.esm.js");
/* harmony import */ var _vendor_odometer_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vendor/odometer.min.js */ "./src/js/vendor/odometer.min.js");





svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();
window.$ = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_2___default.a;
setTimeout(function () {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('.odometer').html(50);
}, 1000);
foundation_sites__WEBPACK_IMPORTED_MODULE_3__["default"].addToJquery(jquery__WEBPACK_IMPORTED_MODULE_2___default.a);
jquery__WEBPACK_IMPORTED_MODULE_2___default()(document).foundation();

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/odometer.min.js":
/*!***************************************!*\
  !*** ./src/js/vendor/odometer.min.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/*! odometer 0.4.6 */
(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G = [].slice;
  q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function s(a) {
    var b;
    return b = document.createElement("div"), b.innerHTML = a, b.children[0];
  }, v = function v(a, b) {
    return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ");
  }, r = function r(a, b) {
    return v(a, b), a.className += " " + b;
  }, z = function z(a, b) {
    var c;
    return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0;
  }, u = function u() {
    var a, b;
    return null != (a = null != (b = window.performance) ? "function" == typeof b.now ? b.now() : void 0 : void 0) ? a : +new Date();
  }, x = function x(a, b) {
    return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a);
  }, A = function A(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  }, t = function t(a) {
    return a - x(a);
  }, C = !1, (B = function B() {
    var a, b, c, d, e;

    if (!C && null != window.jQuery) {
      for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) {
        a = d[b], e.push(function (a) {
          var b;
          return b = window.jQuery.fn[a], window.jQuery.fn[a] = function (a) {
            var c;
            return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a);
          };
        }(a));
      }

      return e;
    }
  })(), setTimeout(B, 0), m = function () {
    function a(b) {
      var c,
          d,
          e,
          g,
          h,
          i,
          l,
          m,
          n,
          o,
          p = this;
      if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
      this.el.odometer = this, m = a.options;

      for (d in m) {
        g = m[d], null == this.options[d] && (this.options[d] = g);
      }

      null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();

      try {
        for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) {
          e = o[i], null != this.el[e] && !function (a) {
            return Object.defineProperty(p.el, a, {
              get: function get() {
                var b;
                return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent;
              },
              set: function set(a) {
                return p.update(a);
              }
            });
          }(e);
        }
      } catch (q) {
        c = q, this.watchForMutations();
      }
    }

    return a.prototype.renderInside = function () {
      return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside);
    }, a.prototype.watchForMutations = function () {
      var a,
          b = this;
      if (null != l) try {
        return null == this.observer && (this.observer = new l(function () {
          var a;
          return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a);
        })), this.watchMutations = !0, this.startWatchingMutations();
      } catch (c) {
        a = c;
      }
    }, a.prototype.startWatchingMutations = function () {
      return this.watchMutations ? this.observer.observe(this.el, {
        childList: !0
      }) : void 0;
    }, a.prototype.stopWatchingMutations = function () {
      var a;
      return null != (a = this.observer) ? a.disconnect() : void 0;
    }, a.prototype.cleanValue = function (a) {
      var b;
      return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision);
    }, a.prototype.bindTransitionEnd = function () {
      var a,
          b,
          c,
          d,
          e,
          f,
          g = this;

      if (!this.transitionEndBound) {
        for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) {
          a = e[c], f.push(this.el.addEventListener(a, function () {
            return b ? !0 : (b = !0, setTimeout(function () {
              return g.render(), b = !1, z(g.el, "odometerdone");
            }, 0), !0);
          }, !1));
        }

        return f;
      }
    }, a.prototype.resetFormat = function () {
      var a, b, d, e, f, g, i, j;
      if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
      return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
        repeating: g,
        radix: f,
        precision: e
      };
    }, a.prototype.render = function (a) {
      var b, c, d, e, f, g, h, i, j, k, l, m;

      for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", g = this.options.theme, b = this.el.className.split(" "), f = [], i = 0, k = b.length; k > i; i++) {
        c = b[i], c.length && ((e = /^odometer-theme-(.+)$/.exec(c)) ? g = e[1] : /^odometer(-|$)/.test(c) || f.push(c));
      }

      for (f.push("odometer"), p || f.push("odometer-no-transitions"), f.push(g ? "odometer-theme-" + g : "odometer-auto-theme"), this.el.className = f.join(" "), this.ribbons = {}, this.digits = [], h = !this.format.precision || !t(a) || !1, m = a.toString().split("").reverse(), j = 0, l = m.length; l > j; j++) {
        d = m[j], "." === d && (h = !0), this.addDigit(d, h);
      }

      return this.startWatchingMutations();
    }, a.prototype.update = function (a) {
      var b,
          c = this;
      return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function () {
        return c.el.offsetHeight, r(c.el, "odometer-animating");
      }, 0), this.value = a) : void 0;
    }, a.prototype.renderDigit = function () {
      return s(d);
    }, a.prototype.insertDigit = function (a, b) {
      return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a);
    }, a.prototype.addSpacer = function (a, b, c) {
      var d;
      return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b);
    }, a.prototype.addDigit = function (a, b) {
      var c, d, e, f;
      if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
      if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
      if (b) for (e = !1;;) {
        if (!this.format.repeating.length) {
          if (e) throw new Error("Bad odometer format without digits");
          this.resetFormat(), e = !0;
        }

        if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
        this.addSpacer(c);
      }
      return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d);
    }, a.prototype.animate = function (a) {
      return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a);
    }, a.prototype.animateCount = function (a) {
      var c,
          d,
          e,
          f,
          _g,
          h = this;

      if (d = +a - this.value) return f = e = u(), c = this.value, (_g = function g() {
        var i, j, k;
        return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(_g) : setTimeout(_g, b));
      })();
    }, a.prototype.getDigitCount = function () {
      var a, b, c, d, e, f;

      for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) {
        c = d[a], d[a] = Math.abs(c);
      }

      return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10));
    }, a.prototype.getFractionalDigitCount = function () {
      var a, b, c, d, e, f, g;

      for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) {
        d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
      }

      return Math.max.apply(Math, e);
    }, a.prototype.resetDigits = function () {
      return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat();
    }, a.prototype.animateSlide = function (a) {
      var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;

      if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
        for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
          if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
            for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) {
              l.push(Math.round(c)), c += n;
            }

            l[l.length - 1] !== i && l.push(i), b++;
          } else l = function () {
            E = [];

            for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) {
              E.push(a);
            }

            return E;
          }.apply(this);

          for (m = w = 0, y = l.length; y > w; m = ++w) {
            k = l[m], l[m] = Math.abs(k % 10);
          }

          g.push(l);
        }

        for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x) {
          for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) {
            k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
          }
        }

        return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0;
      }
    }, a;
  }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function () {
    var a, b, c, d, e;

    if (window.odometerOptions) {
      d = window.odometerOptions, e = [];

      for (a in d) {
        b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
      }

      return e;
    }
  }, 0), m.init = function () {
    var a, b, c, d, e, f;

    if (null != document.querySelectorAll) {
      for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) {
        a = b[c], f.push(a.odometer = new m({
          el: a,
          value: null != (e = a.innerText) ? e : a.textContent
        }));
      }

      return f;
    }
  }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function () {
    return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0;
  }) : document.addEventListener("DOMContentLoaded", function () {
    return m.options.auto !== !1 ? m.init() : void 0;
  }, !1), "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? define(["jquery"], function () {
    return m;
  }) : (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) === !1 ? module.exports = m : window.Odometer = m;
}).call(undefined);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/js/vendor/slider.js":
/*!*********************************!*\
  !*** ./src/js/vendor/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $sliderElem = $('.js-scale__rate');
var $thumbElem = $('.js-scale__pointer');
$thumbElem.on('mousemove', function (event) {
  function getCoords(elem) {
    var box = elem.offset();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

  var thumbCoords = getCoords($thumbElem);
  var shiftX = event.pageX - thumbCoords.left;
  var sliderCoords = getCoords($sliderElem);
  $(document).on('mousemove', function (event1) {
    var newLeft = event1.pageX - shiftX - sliderCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    var rightEdge = $sliderElem.outerWidth() - $thumbElem.outerWidth();

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    var degs = newLeft / 1.03;
    $thumbElem.css('transform', "rotate(".concat(degs, "deg)"));
    $('.odometer').html(Math.abs(parseInt(newLeft / 1.89, 10)));
    $(document).on('mouseup', function () {
      $(document).on('mousemove', function () {
        return $(document).on('mouseup', function () {
          return null;
        });
      });
    });
    return false;
  });
  $thumbElem.on('dragstart', function () {
    return false;
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map