webpackHotUpdate("static/development/pages/items-index.js",{

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer */ "./src/api/customer.js");
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items */ "./src/api/items.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Items: _items__WEBPACK_IMPORTED_MODULE_1__,
  Customer: _customer__WEBPACK_IMPORTED_MODULE_0__
});

/***/ }),

/***/ "./src/api/items.js":
/*!**************************!*\
  !*** ./src/api/items.js ***!
  \**************************/
/*! exports provided: getItemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemList", function() { return getItemList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");


function getItemList() {
  return _getItemList.apply(this, arguments);
}

function _getItemList() {
  _getItemList = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var result, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://nursery.misfitsmarket.com/api/test/v1');

          case 2:
            result = _context.sent;
            _context.next = 5;
            return result.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getItemList.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=items-index.js.01c59d8988a4c2d8ce33.hot-update.js.map