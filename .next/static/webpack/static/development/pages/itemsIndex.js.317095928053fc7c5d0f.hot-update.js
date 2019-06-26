webpackHotUpdate("static/development/pages/itemsIndex.js",{

/***/ "./src/components/items.js":
/*!*********************************!*\
  !*** ./src/components/items.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/index */ "./src/api/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");






var _jsxFileName = "/Users/peterhahn/src/new/misfits/misfits-market/src/components/items.js";


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\tposition:relative;\n\tfloat:left;\n\tpadding-right:1.5em;\n\tfloat:right;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\tposition:relative;\n\tfloat:left;\n\tpadding-right:1.5em;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\theight:3.2em;\n\toverflow:auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\tdisplay: inline-block;\n\tfloat:right;\n\tmargin-top:1.6em;\n\tpadding:.5em;\n\tborder:2px solid black;\n\twidth:8.4em;\n\tfont-size:.1em;\n\tfont-weight:bold;\n\n    &:hover {\n\t\tcursor:pointer;\n\t  }\n\t&:focus{\n\t\toutline:0;\n\t}\n\t&:active{\n\t\tcolor:white; background-color:black;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

//promise from customer.js
 //Visual primitives for the component age


var Button = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input(_templateObject());
var ItemList = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].li(_templateObject2());
var Product = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p(_templateObject3());
var Price = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p(_templateObject4());

var Items =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Items, _React$Component);

  function Items() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Items);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Items).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Items, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ItemList, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Product, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.props.item.product), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Button, {
        type: "button",
        value: "ADD TO CART",
        align: "right",
        onClick: this.addItem.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Price, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "$", this.props.item.price));
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var item = this.props.item.id;
      _api_index__WEBPACK_IMPORTED_MODULE_7__["default"].Customer.addToCart(item);
    }
  }]);

  return Items;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ })

})
//# sourceMappingURL=itemsIndex.js.317095928053fc7c5d0f.hot-update.js.map