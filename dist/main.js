/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-color: #639;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  background-color: rgba(0, 0, 0, 0.95);\\n  color: #fff;\\n  overflow-x: hidden;\\n}\\n\\nheader {\\n  max-width: 100vw;\\n  background-color: var(--primary-color);\\n}\\n\\n.logo-link {\\n  margin: 7px 0;\\n  padding: 5px 12px;\\n  border: 3px solid #fff;\\n  border-radius: 10px;\\n  background: rgba(0, 0, 0, 0.7);\\n}\\n\\n.logo {\\n  font-weight: 700;\\n}\\n\\n.show {\\n  font-size: 25px;\\n  color: #ffe9e4;\\n}\\n\\n.bizz {\\n  font-size: 25px;\\n  color: #aceef3;\\n}\\n\\nnav {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n}\\n\\nul {\\n  list-style-type: none;\\n  display: flex;\\n  gap: 24px;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nli a {\\n  color: #fff;\\n}\\n\\n.active-nav {\\n  border-bottom: 3px solid aqua;\\n}\\n\\nfooter a {\\n  color: black;\\n  font-size: 20px;\\n}\\n\\nli a:hover {\\n  color: #9f9f9d;\\n}\\n\\n/* style the shows sections */\\n.shows-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\\n  place-items: center;\\n}\\n\\nbutton,\\nimg {\\n  cursor: pointer;\\n  transition: all 0.3s ease-in-out;\\n}\\n\\n/* Loading api animation */\\n.loaderContainer {\\n  width: 100%;\\n  height: 500px;\\n}\\n\\n#loader {\\n  position: absolute;\\n  top: calc(50% - 20px);\\n  left: calc(50% - 20px);\\n}\\n\\n@keyframes loader {\\n  0% { left: -100px; }\\n  100% { left: 110%; }\\n}\\n\\n#box {\\n  width: 50px;\\n  height: 50px;\\n  background: rebeccapurple;\\n  animation: animate 0.5s linear infinite;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  border-radius: 3px;\\n}\\n\\n@keyframes animate {\\n  17% { border-bottom-right-radius: 3px; }\\n  25% { transform: translateY(9px) rotate(22.5deg); }\\n\\n  50% {\\n    transform: translateY(18px) scale(1, 0.9) rotate(45deg);\\n    border-bottom-right-radius: 40px;\\n  }\\n  75% { transform: translateY(9px) rotate(67.5deg); }\\n  100% { transform: translateY(0) rotate(90deg); }\\n}\\n\\n#shadow {\\n  width: 50px;\\n  height: 5px;\\n  background: #fdfdfd;\\n  opacity: 0.1;\\n  position: absolute;\\n  top: 59px;\\n  left: 0;\\n  border-radius: 50%;\\n  animation: shadow 0.5s linear infinite;\\n}\\n\\n@keyframes shadow {\\n  50% {\\n    transform: scale(1.2, 1);\\n  }\\n}\\n\\nfigure a img:hover {\\n  transform: scale(1.1);\\n}\\n\\n.popup-img {\\n  width: 100%;\\n  padding-bottom: 12px;\\n  border-radius: 4px;\\n  transition: all 0.3s ease-in-out;\\n}\\n\\na > .popup-img:hover {\\n  transform: scale(0.96);\\n}\\n\\nfigcaption {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n}\\n\\n.like-symbol {\\n  font-size: 30px;\\n  font-weight: 600;\\n  color: #f00;\\n  cursor: pointer;\\n}\\n\\n.comment-btn-container {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\nbutton {\\n  border: none;\\n  border-radius: 3px;\\n  padding: 5px 8px;\\n  font-size: 16px;\\n  font-weight: 600;\\n  color: #fff;\\n  background-color: rgb(102, 51, 153);\\n}\\n\\nbutton:hover {\\n  transition: all 0.3s ease-in-out;\\n  background-color: #fff;\\n  color: #639;\\n}\\n\\n.modal {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: auto;\\n  background-color: rgba(0, 0, 0, 0.9);\\n}\\n\\n.hide-modal {\\n  z-index: -1;\\n  opacity: 0;\\n  transform: scale(0);\\n  animation: hide 0.3s ease-in-out;\\n}\\n\\n@keyframes hide {\\n  from {\\n    z-index: 2;\\n    transform: scale(1);\\n    opacity: 1;\\n  }\\n\\n  to {\\n    z-index: -1;\\n    transform: scale(0);\\n    opacity: 0;\\n  }\\n}\\n\\n.show-modal {\\n  z-index: 1;\\n  opacity: 1;\\n  transform: scale(1);\\n  animation: show 0.3s ease;\\n}\\n\\n@keyframes show {\\n  from {\\n    z-index: -1;\\n    transform: scale(0);\\n    opacity: 0;\\n  }\\n\\n  to {\\n    z-index: 2;\\n    transform: scale(1);\\n    opacity: 1;\\n  }\\n}\\n\\n.popup-container {\\n  margin-bottom: 24px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.close-popup {\\n  margin: 25px 25px 0 0;\\n  align-self: end;\\n  font-size: 25px;\\n  font-weight: 600;\\n  border: none;\\n  border-radius: 4px;\\n  color: #fff;\\n  background-color: rgb(161, 0, 0);\\n  transition: all 0.3s ease-in-out;\\n}\\n\\n.close-popup:hover {\\n  transform: scale(1.2) rotate(360deg);\\n}\\n\\n.popup-container > figure {\\n  width: 90%;\\n  margin-bottom: 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  max-width: 800px;\\n}\\n\\n.popup-details {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\nh3 {\\n  margin: 0;\\n  order: -1;\\n  color: cornflowerblue;\\n  font-size: 24px;\\n  font-weight: 700;\\n}\\n\\n.show-details {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  font-weight: 700;\\n  color: cornflowerblue;\\n}\\n\\nform {\\n  margin-top: 15px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n  background: rgba(53, 52, 52, 0.6);\\n  padding: 20px;\\n  border-radius: 5px;\\n  outline: none;\\n}\\n\\ninput,\\ntextarea {\\n  padding: 5px 8px;\\n}\\n\\n.comment-container {\\n  display: flex;\\n  gap: 22px;\\n  font-weight: 600;\\n  margin-top: 15px;\\n  color: coral;\\n}\\n\\nfooter {\\n  background-color: var(--primary-color);\\n  color: white;\\n  margin-top: 25px;\\n  max-width: 100vw;\\n  padding: 20px 0;\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/config/involvement.js":
/*!***********************************!*\
  !*** ./src/config/involvement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentApi\": () => (/* binding */ commentApi),\n/* harmony export */   \"commentDataApi\": () => (/* binding */ commentDataApi),\n/* harmony export */   \"likesApi\": () => (/* binding */ likesApi)\n/* harmony export */ });\nconst likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vXi1DzMj9owMIWXkHLrJ/likes';\nconst commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oWZKu2lc22B2ErwRlA6j/comments';\nconst commentDataApi = `${commentApi}?item_id=`;\n\n\n//# sourceURL=webpack://webpack/./src/config/involvement.js?");

/***/ }),

/***/ "./src/config/showsAPI.js":
/*!********************************!*\
  !*** ./src/config/showsAPI.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showApiUrl = 'https://api.tvmaze.com/shows';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showApiUrl);\n\n//# sourceURL=webpack://webpack/./src/config/showsAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _config_showsAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/showsAPI */ \"./src/config/showsAPI.js\");\n/* harmony import */ var _config_involvement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/involvement */ \"./src/config/involvement.js\");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server */ \"./src/server.js\");\n\n\n\n\n\nconst body = document.querySelector('body');\nconst modalSection = document.querySelector('.modal');\nconst showsCounter = document.querySelector('.shows-count');\n\n// create popup\nconst renderPopup = async (i) => {\n  const show = await (0,_server__WEBPACK_IMPORTED_MODULE_3__.getApiData)(_config_showsAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  modalSection.innerHTML = '';\n  const popupContainer = document.createElement('div');\n  const closeBtn = document.createElement('button');\n  const popupFig = document.createElement('figure');\n  const popupShowLink = document.createElement('a');\n  const popupImage = document.createElement('img');\n  const figcaption = document.createElement('figcaption');\n  const popupShowTitle = document.createElement('h3');\n  const showDetails = document.createElement('div');\n  const genre = document.createElement('span');\n  const rating = document.createElement('span');\n  const premiered = document.createElement('span');\n  const commentsCount = document.createElement('p');\n  const commentForm = document.createElement('form');\n  const commentInput = document.createElement('input');\n  const commentText = document.createElement('textarea');\n  const commentInputBtn = document.createElement('button');\n  const commentsDiv = document.createElement('div');\n\n  popupContainer.classList.add('popup-container');\n  closeBtn.classList.add('close-popup');\n  figcaption.classList.add('popup-details');\n  popupImage.classList.add('popup-img');\n  showDetails.classList.add('show-details');\n  commentInputBtn.classList.add('comment-input-btn');\n  commentsDiv.classList.add('comments-container');\n  commentText.setAttribute('required', 'true');\n  commentInputBtn.setAttribute('required', 'true');\n  commentInput.setAttribute('placeholder', 'Your name');\n  commentText.setAttribute('placeholder', 'Your insights');\n  commentsCount.classList.add('comments-count');\n\n  popupImage.setAttribute('src', show[i].image.original);\n  popupImage.setAttribute('alt', `${show[i].name} image`);\n  popupShowLink.setAttribute('href', show[i].url);\n  popupShowLink.setAttribute('target', '_blank');\n  closeBtn.innerHTML = '&times;';\n  popupShowTitle.innerHTML = show[i].name;\n  figcaption.innerHTML = show[i].summary;\n  genre.innerHTML = `Genres: ${show[i].genres.join(', ')}`;\n  rating.innerHTML = `Rating: ${show[i].rating.average}`;\n  premiered.innerHTML = `premiered: ${show[i].premiered}`;\n\n  commentInputBtn.textContent = 'Comment';\n\n  commentInputBtn.addEventListener('click', async (e) => {\n    e.preventDefault();\n    if (commentInput.value.trim() === '' || commentText.value.trim() === '') return;\n    (0,_server__WEBPACK_IMPORTED_MODULE_3__.postComment)(_config_involvement__WEBPACK_IMPORTED_MODULE_2__.commentApi, show[i], commentInput, commentText);\n    setTimeout(async () => {\n      const comments = await (0,_server__WEBPACK_IMPORTED_MODULE_3__.getComments)(_config_involvement__WEBPACK_IMPORTED_MODULE_2__.commentDataApi, show[i].id);\n      (0,_server__WEBPACK_IMPORTED_MODULE_3__.renderComments)(comments);\n    }, 1000);\n    commentInput.value = '';\n    commentText.value = '';\n  });\n\n  figcaption.appendChild(popupShowTitle);\n  popupShowLink.appendChild(popupImage);\n  popupFig.appendChild(popupShowLink);\n  popupFig.appendChild(figcaption);\n  showDetails.appendChild(genre);\n  showDetails.appendChild(rating);\n  showDetails.appendChild(premiered);\n  commentForm.appendChild(commentInput);\n  commentForm.appendChild(commentText);\n  commentForm.appendChild(commentInputBtn);\n  popupContainer.appendChild(closeBtn);\n  popupContainer.appendChild(popupFig);\n  popupContainer.appendChild(showDetails);\n  popupContainer.appendChild(commentsCount);\n  popupContainer.appendChild(commentsDiv);\n  popupContainer.appendChild(commentForm);\n\n  modalSection.appendChild(popupContainer);\n  closeBtn.addEventListener('click', () => {\n    modalSection.classList.remove('show-modal');\n    modalSection.classList.add('hide-modal');\n    body.style.overflowY = 'auto';\n  });\n};\n\n// create show List\n\nconst renderShows = async () => {\n  const shows = await (0,_server__WEBPACK_IMPORTED_MODULE_3__.getApiData)(_config_showsAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const showSection = document.querySelector('.shows-container');\n  shows.length = 20;\n  showsCounter.innerText += `(${shows.length})`;\n  // sort randomly whenever the page is loaded;\n  document.querySelector('.loaderContainer').remove();\n  shows.forEach((show, index) => {\n    const symbolContainer = document.createElement('span');\n    const likesContainer = document.createElement('span');\n    const showContainer = document.createElement('div');\n    const commentBtnContainer = document.createElement('div');\n    const commentBtn = document.createElement('button');\n    const showLink = document.createElement('a');\n    const showImage = document.createElement('img');\n    const fig = document.createElement('figure');\n    const figcaption = document.createElement('figcaption');\n    const p = document.createElement('p');\n\n    showContainer.classList.add('show-container');\n    symbolContainer.classList.add('like-symbol');\n    likesContainer.classList.add('likes-count');\n    commentBtnContainer.classList.add('comment-btn-container');\n\n    likesContainer.setAttribute('data-id', `showId${show.id}`);\n    symbolContainer.setAttribute('title', 'like');\n    showImage.setAttribute('src', show.image.medium);\n    showImage.setAttribute('alt', `${show.name} image`);\n    showLink.setAttribute('href', show.url);\n    showLink.setAttribute('target', '_blank');\n\n    p.innerText = `${show.name}`;\n    symbolContainer.innerHTML = '&#9825';\n    commentBtn.textContent = 'comments';\n    commentBtn.addEventListener('click', () => {\n      modalSection.classList.remove('hide-modal');\n      modalSection.classList.add('show-modal');\n      body.style.overflowY = 'hidden';\n      renderPopup(index);\n      setTimeout(async () => {\n        const comments = await (0,_server__WEBPACK_IMPORTED_MODULE_3__.getComments)(_config_involvement__WEBPACK_IMPORTED_MODULE_2__.commentDataApi, show.id);\n        (0,_server__WEBPACK_IMPORTED_MODULE_3__.renderComments)(comments);\n      }, 1000);\n    });\n\n    symbolContainer.addEventListener('click', () => {\n      let likeContainer = symbolContainer.nextSibling;\n      // unlike show and stop updating it on the source api\n      if (symbolContainer.innerHTML === '❤') {\n        likeContainer.innerHTML = Number(likeContainer.innerHTML) - 1;\n        symbolContainer.innerHTML = '&#9825';\n        return;\n      }\n      symbolContainer.innerHTML = '&#10084;';\n\n      likeContainer.innerHTML = Number(likeContainer.innerHTML) + 1;\n      likeContainer = likeContainer.getAttribute('data-id');\n      const data = {\n        item_id: likeContainer,\n      };\n      (0,_server__WEBPACK_IMPORTED_MODULE_3__.postData)(data, _config_involvement__WEBPACK_IMPORTED_MODULE_2__.likesApi);\n    });\n\n    figcaption.appendChild(p);\n    figcaption.appendChild(symbolContainer);\n    figcaption.appendChild(likesContainer);\n    showLink.appendChild(showImage);\n    fig.appendChild(showLink);\n    fig.appendChild(figcaption);\n    commentBtnContainer.appendChild(commentBtn);\n    showContainer.appendChild(fig);\n    showContainer.appendChild(commentBtnContainer);\n\n    showSection.appendChild(showContainer);\n  });\n};\n\nconst renderLikes = async () => {\n  const likes = await (0,_server__WEBPACK_IMPORTED_MODULE_3__.getApiData)(_config_involvement__WEBPACK_IMPORTED_MODULE_2__.likesApi);\n  likes.forEach((like, index) => {\n    const likeContainer = document.querySelector(`[data-id = '${like.item_id}']`);\n    if (index < 20) {\n      likeContainer.innerHTML = like.likes;\n    }\n  });\n};\n\nrenderShows();\n\n// render likes after DOM content have been loaded\ndocument.addEventListener('DOMContentLoaded', () => {\n  renderLikes();\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getApiData\": () => (/* binding */ getApiData),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postData\": () => (/* binding */ postData),\n/* harmony export */   \"renderComments\": () => (/* binding */ renderComments)\n/* harmony export */ });\nconst postData = async (data, api) => {\n  const req = fetch(api, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8',\n    },\n    body: JSON.stringify(data),\n  });\n  try {\n    await req.reject(new Error(`HTTP - ERROR${(await req).status}`));\n  } catch (error) {\n    console.error(error); //  eslint-disable-line\n  }\n};\n\n// get shows from API source function\nconst getApiData = async (showApiUrl) => {\n  const res = await fetch(showApiUrl);\n  const result = await res.json();\n  return result;\n};\n\nasync function postComment(api, show, input, userComment) {\n  const response = await fetch(api, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json; charset=utf-8',\n    },\n    body: JSON.stringify({\n      item_id: show.id,\n      username: input.value,\n      comment: userComment.value,\n    }),\n  });\n  const result = await JSON.parse(JSON.stringify(response));\n  return result;\n}\n\nasync function getComments(api, id) {\n  const res = await fetch(api + id);\n  const result = await res.json();\n  return result;\n}\n\nfunction renderComments(comments) {\n  const commentsDiv = document.querySelector('.comments-container');\n  document.querySelector('.comments-count').innerText = `Comments (${comments.length})`;\n  commentsDiv.innerHTML = '';\n  comments.forEach((comment) => {\n    const commentContainer = document.createElement('div');\n    commentContainer.classList.add('comment-container');\n    const username = document.createElement('span');\n    const commentSummary = document.createElement('span');\n    const commentDate = document.createElement('span');\n    username.innerText = `${comment.username}:`;\n    commentSummary.innerText = comment.comment;\n    commentDate.innerText = comment.creation_date;\n    commentContainer.appendChild(username);\n    commentContainer.appendChild(commentSummary);\n    commentContainer.appendChild(commentDate);\n    commentsDiv.appendChild(commentContainer);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://webpack/./src/server.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;