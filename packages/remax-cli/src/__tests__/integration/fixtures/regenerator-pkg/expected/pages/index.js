require('./../runtime.js');
(my["webpackJsonp"] = my["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@remax/runtime");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


Page(Object(_alipay_remix_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index'));

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(regeneratorRuntime) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _alipay_remix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alipay_remix__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var foo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foo_index2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var foo_index2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foo_index2__WEBPACK_IMPORTED_MODULE_3__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}






function run() {
  return _run.apply(this, arguments);
}

function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(foo__WEBPACK_IMPORTED_MODULE_2__["index"])();

          case 2:
            _context.next = 4;
            return Object(foo_index2__WEBPACK_IMPORTED_MODULE_3__["index2"])();

          case 4:
            return _context.abrupt("return", foo_index2__WEBPACK_IMPORTED_MODULE_3__["foo"]);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _run.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
    run().catch(function () {});
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["View"], {
    _tid: "5da6971-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "hello"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["View"], {
    "data-aspm-expo": "d1234",
    onAppear: function onAppear() {},
    onFirstAppear: function onFirstAppear() {}
  }, "foo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_alipay_remix__WEBPACK_IMPORTED_MODULE_1__["View"], {
    "data-aspm-click": "d5678",
    onTap: function onTap() {}
  }, "bar"));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@alipay/remix");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(regeneratorRuntime) {function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function index() {
  return _index.apply(this, arguments);
}

function _index() {
  _index = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve('111');

          case 2:
            return _context.abrupt("return", 111);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _index.apply(this, arguments);
}

exports.index = index;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
/* WEBPACK VAR INJECTION */(function(regeneratorRuntime) {Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index2 = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Promise.resolve('111');

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _test.apply(this, arguments);
}

exports.index2 = test;
exports.foo = 2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ })
],[[8,0]]]);