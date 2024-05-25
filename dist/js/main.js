/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Body */
body {
  font-family: "Roboto", Arial, Verdana, Helvetica, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

* {
  box-sizing: border-box;
}

/* Layout */
.container-fluid {
  max-width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.header {
  position: relative;
  padding: 1.5rem 3rem;
  background-color: #e8eaf6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.container {
  background-color: #fbfbfb;
  padding: 5rem 2rem;
}

.footer {
  position: relative;
  padding: 1.25rem 0;
  background-color: #e8eaf6;
  text-align: center;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

/* Typography */
.page-title {
  font-size: 2rem;
  margin: 0;
  padding: 0;
}

/* Spacing */
.me-1 {
  margin-right: 0.25rem;
}
.me-2 {
  margin-right: 0.5rem;
}

/* Form */
.form-wrapper {
  position: relative;
  width: max(500px, 30%);
  display: flex;
  flex-flow: column wrap;
  padding: 2rem 3rem;
  margin: 0 auto 2rem;
  background-color: #e8eaf6;
  border-radius: 1rem;
  gap: 2rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.form-row {
  display: flex;
  flex-grow: 1;
  position: relative;
  padding: 1rem 0 0;
  margin-top: 0.7rem;
  width: 100%;
}

.form-row .error {
  display: inline-block;
  color: #d50000;
  font-size: 1rem;
  font-weight: normal;
  padding: 0;
}

.form-row .error.active {
  padding: 0.25rem 0.5rem;
}

.form-control {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: #2962ff;
  padding: 0.5rem;
  background: transparent;
  transition: border-color 0.3s;
}

.form-control::placeholder {
  color: transparent;
}

.form-control:placeholder-shown ~ .form-label {
  font-size: 1.3rem;
  cursor: text;
  top: 1.5rem;
  left: 0.5rem;
}

.form-label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.3s;
  font-size: 1rem;
  color: #9b9b9b;
}

.form-control:valid {
  border-image: linear-gradient(to right, #11998e, #38ef7d);
}

.form-control:invalid {
  border-image: linear-gradient(to right, #d50000, #ff8a80);
}

.form-control:focus {
  border-image: linear-gradient(to right, #2962ff, #82b1ff);
}

.form-control:focus,
.form-control:valid,
.form-control:invalid {
  padding-bottom: 0.5rem;
  font-weight: bold;
  border-width: 3px;
  border-image-slice: 1;
}

.form-control:placeholder-shown {
  border: 0;
  border-bottom: 2px solid #9b9b9b;
}

.form-control:focus:placeholder-shown {
  border-width: 3px;
  border-image: linear-gradient(to right, #2962ff, #82b1ff);
  border-image-slice: 1;
}

/* reset input */
.form-control:required,
.form-control:invalid {
  box-shadow: none;
}

.btn-submit {
  display: inline-flex;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
  background-color: #2962ff;
  color: #fff;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.btn-submit:hover,
.btn-submit:active {
  background-color: #0039cb;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Footer */
.footer-text {
  font-size: 1rem;
  font-weight: normal;
  color: #757575;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA,SAAS;AACT;EACE,4DAA4D;EAC5D,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;;;;;;;;;EASE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA,WAAW;AACX;EACE,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,SAAS;EACT,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,yBAAyB;EACzB,sCAAsC;EACtC,UAAU;AACZ;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,kBAAkB;EAClB,sCAAsC;EACtC,UAAU;AACZ;;AAEA,eAAe;AACf;EACE,eAAe;EACf,SAAS;EACT,UAAU;AACZ;;AAEA,YAAY;AACZ;EACE,qBAAqB;AACvB;AACA;EACE,oBAAoB;AACtB;;AAEA,SAAS;AACT;EACE,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;EACnB,SAAS;EACT,uCAAuC;EACvC,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;;;EAGE,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,yDAAyD;EACzD,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;;EAEE,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,yBAAyB;EACzB,WAAW;EACX,8DAA8D;AAChE;;AAEA;;EAEE,yBAAyB;EACzB,WAAW;EACX,uCAAuC;AACzC;;AAEA,WAAW;AACX;EACE,eAAe;EACf,mBAAmB;EACnB,cAAc;AAChB","sourcesContent":["/* Body */\r\nbody {\r\n  font-family: \"Roboto\", Arial, Verdana, Helvetica, sans-serif;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul,\r\nli,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Layout */\r\n.container-fluid {\r\n  max-width: 100vw;\r\n  min-height: 100vh;\r\n  padding: 0;\r\n  margin: 0;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n}\r\n\r\n.header {\r\n  position: relative;\r\n  padding: 1.5rem 3rem;\r\n  background-color: #e8eaf6;\r\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\r\n  z-index: 1;\r\n}\r\n\r\n.container {\r\n  background-color: #fbfbfb;\r\n  padding: 5rem 2rem;\r\n}\r\n\r\n.footer {\r\n  position: relative;\r\n  padding: 1.25rem 0;\r\n  background-color: #e8eaf6;\r\n  text-align: center;\r\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);\r\n  z-index: 1;\r\n}\r\n\r\n/* Typography */\r\n.page-title {\r\n  font-size: 2rem;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/* Spacing */\r\n.me-1 {\r\n  margin-right: 0.25rem;\r\n}\r\n.me-2 {\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n/* Form */\r\n.form-wrapper {\r\n  position: relative;\r\n  width: max(500px, 30%);\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  padding: 2rem 3rem;\r\n  margin: 0 auto 2rem;\r\n  background-color: #e8eaf6;\r\n  border-radius: 1rem;\r\n  gap: 2rem;\r\n  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);\r\n  z-index: 2;\r\n}\r\n\r\n.form-row {\r\n  display: flex;\r\n  flex-grow: 1;\r\n  position: relative;\r\n  padding: 1rem 0 0;\r\n  margin-top: 0.7rem;\r\n  width: 100%;\r\n}\r\n\r\n.form-row .error {\r\n  display: inline-block;\r\n  color: #d50000;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  padding: 0;\r\n}\r\n\r\n.form-row .error.active {\r\n  padding: 0.25rem 0.5rem;\r\n}\r\n\r\n.form-control {\r\n  font-family: inherit;\r\n  width: 100%;\r\n  border: 0;\r\n  border-bottom: 2px solid #9b9b9b;\r\n  outline: 0;\r\n  font-size: 1.3rem;\r\n  color: #2962ff;\r\n  padding: 0.5rem;\r\n  background: transparent;\r\n  transition: border-color 0.3s;\r\n}\r\n\r\n.form-control::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-control:placeholder-shown ~ .form-label {\r\n  font-size: 1.3rem;\r\n  cursor: text;\r\n  top: 1.5rem;\r\n  left: 0.5rem;\r\n}\r\n\r\n.form-label {\r\n  position: absolute;\r\n  top: 0;\r\n  display: block;\r\n  transition: 0.3s;\r\n  font-size: 1rem;\r\n  color: #9b9b9b;\r\n}\r\n\r\n.form-control:valid {\r\n  border-image: linear-gradient(to right, #11998e, #38ef7d);\r\n}\r\n\r\n.form-control:invalid {\r\n  border-image: linear-gradient(to right, #d50000, #ff8a80);\r\n}\r\n\r\n.form-control:focus {\r\n  border-image: linear-gradient(to right, #2962ff, #82b1ff);\r\n}\r\n\r\n.form-control:focus,\r\n.form-control:valid,\r\n.form-control:invalid {\r\n  padding-bottom: 0.5rem;\r\n  font-weight: bold;\r\n  border-width: 3px;\r\n  border-image-slice: 1;\r\n}\r\n\r\n.form-control:placeholder-shown {\r\n  border: 0;\r\n  border-bottom: 2px solid #9b9b9b;\r\n}\r\n\r\n.form-control:focus:placeholder-shown {\r\n  border-width: 3px;\r\n  border-image: linear-gradient(to right, #2962ff, #82b1ff);\r\n  border-image-slice: 1;\r\n}\r\n\r\n/* reset input */\r\n.form-control:required,\r\n.form-control:invalid {\r\n  box-shadow: none;\r\n}\r\n\r\n.btn-submit {\r\n  display: inline-flex;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  background-color: #2962ff;\r\n  color: #fff;\r\n  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;\r\n}\r\n\r\n.btn-submit:hover,\r\n.btn-submit:active {\r\n  background-color: #0039cb;\r\n  color: #fff;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/* Footer */\r\n.footer-text {\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  color: #757575;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/weatherFetch.js":
/*!********************************!*\
  !*** ./src/js/weatherFetch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherAPI: () => (/* binding */ WeatherAPI)
/* harmony export */ });
function WeatherAPI() {
    const request = {
        url: 'https://api.weatherapi.com/v1',
        key: 'b643f30100b44bfb8e8122233241705',
        location: 'London'
    };

    const getWeatherUrl = () => request.url;

    const setWeatherUrl = (value) => {
        request.url = value;
    };

    const getWeatherKey = () => request.key;

    const setWeatherKey = (value) => {
        request.key = value;
    };

    const getWeatherLocation = () => request.location;

    const setWeatherLocation = (value) => {
        request.location = value;
    };

    const buildUrl = () => {
        const url = getWeatherUrl();
        const key = getWeatherKey();
        const location = getWeatherLocation();
        return `${url}/current.json?key=${key}&q=${location}`;
    };

    const getResponse = async () => {
        try {
            const response = await fetch(buildUrl(), {
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            console.error('Error fetching weather data:', err);
            throw err;
        }
    };

    const getLocation = async () => {
        try {
            const response = await getResponse();
            return {
                country: response.location.country,
                region: response.location.region,
                city: response.location.name,
            };
        } catch (err) {
            console.error('Error fetching country data:', err);
            throw err;
        };
    };

    const getCurrentWeatherConditions = async () => {
        try {
            const response = await getResponse();
            return {
                degreeC: response.current.temp_c,
                degreeF: response.current.temp_f,
                humidity: response.current.humidity,
                pressure: response.current.pressure_in,
                lastUpdate: response.current.last_updated
            };
        } catch (err) {
            console.error('Error fetching weather condition data:', err);
            throw err;
        }
    };

    return {
        getWeatherLocation,
        setWeatherLocation,
        getResponse,
        getLocation,
        getCurrentWeatherConditions
    };
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _weatherFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherFetch */ "./src/js/weatherFetch.js");



const weather = (0,_weatherFetch__WEBPACK_IMPORTED_MODULE_1__.WeatherAPI)();
weather.setWeatherLocation('Oradea');
weather.getResponse()
    .then(data => {
        console.log('Response:', data);
    }).catch(err => {
        console.error('Error:', err);
    });

weather.getLocation()
    .then(data => {
        console.log(`Country ${data.country}, region ${data.region} and city ${data.city}.`);
    }).catch(err => {
        console.error('Error:', err);
    });

weather.getCurrentWeatherConditions()
    .then(data => {
        console.log(`Degree C ${data.degreeC}, humidity ${data.humidity} and 
        atmospheric pressure ${data.pressure}. Last update: ${data.lastUpdate}`);
    }).catch(err => {
        console.error('Error:', err);
    });
})();

/******/ })()
;
//# sourceMappingURL=main.js.map