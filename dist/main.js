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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ \"./src/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Roboto, sans-serif;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\n.bg-image {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: -1;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 2rem;\n  gap: 2rem;\n}\n\n.gameboards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  max-width: 75rem;\n}\n\n.player-board, .computer-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: 100%;\n  max-width: 25rem;\n  background-color: #333;\n  aspect-ratio: 1;\n}\n\n.player-board {\n  position: relative;\n  padding: 1px;\n}\n\n.computer-board.computer-turn {\n  position: relative;\n  pointer-events: none;\n}\n\n.computer-board.computer-turn::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 1;\n  transition: opacity 0.3s ease;\n}\n\n.cell {\n  background-color: lightblue;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  margin: 0;\n}\n\n.cell.drag-over {\n  background-color: rgba(144, 238, 144, 0.5);\n}\n\n.cell.invalid-drop {\n  background-color: rgba(255, 0, 0, 0.2);\n}\n\n.ship {\n  width: 100%;\n  height: 100%;\n  background-color: darkgrey;\n  cursor: move;\n  transition: opacity 0.2s;\n}\n\n.ship.dragging {\n  opacity: 0.5;\n}\n\n.ship-cell {\n  border: 2px solid #444;\n  border-radius: 2px;\n}\n\n.ship-container {\n  background-color: darkgrey;\n  cursor: move;\n  z-index: 1;\n  transition: all 0.2s ease;\n  border: 2px solid #444;\n  border-radius: 2px;\n  position: absolute;\n  inset: 0;\n  margin: 0;\n}\n\n.ship-container:not(.game-started):hover {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  transform: scale(1.02);\n}\n\n@keyframes rotateShip {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1) rotate(180deg); }\n  100% { transform: scale(1); }\n}\n\n.ship-container.rotating {\n  animation: rotateShip 0.3s ease;\n}\n\n.ship-container.dragging {\n  opacity: 0.6;\n  z-index: 2;\n}\n\n.game-started .ship-container {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n\n.game-started .ship-container:hover {\n  opacity: 1;\n}\n\n.buttons {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.randomize-button {\n  margin: 1rem;\n  padding: 0.75rem 1.5rem;\n  font-size: 1rem;\n  background-color: #f2f2f2;\n  border: 1px solid black;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.3s ease;\n}\n\n.randomize-button.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  background-color: #e0e0e0;\n  border-color: #999;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: lightgray;\n}\n\n.targeting {\n  animation: pulse 0.5s ease-in-out;\n  background-color: rgba(255, 0, 0, 0.3) !important;\n}\n\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n  backdrop-filter: blur(2px);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.3s ease, visibility 0.3s ease;\n}\n\n.modal-overlay.active {\n  opacity: 1;\n  visibility: visible;\n}\n\n.modal-content {\n  background: white;\n  padding: 2rem;\n  border-radius: 1rem;\n  text-align: center;\n  transform: scale(0.7);\n  transition: transform 0.3s ease;\n  min-width: 300px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}\n\n.modal-overlay.active .modal-content {\n  transform: scale(1);\n}\n\n.modal-title {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  color: #333;\n  font-weight: bold;\n}\n\n.modal-button {\n  margin-top: 1.5rem;\n  padding: 0.75rem 1.5rem;\n  background-color: #4a90e2;\n  color: white;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.3s ease;\n}\n\n.modal-button:hover {\n  background-color: #357abd;\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n    background-color: rgba(255, 0, 0, 0.1);\n  }\n  50% {\n    transform: scale(1.1);\n    background-color: rgba(255, 0, 0, 0.3);\n  }\n  100% {\n    transform: scale(1);\n    background-color: rgba(255, 0, 0, 0.1);\n  }\n}\n\n.cell {\n  transition: all 0.3s ease;\n}\n\n.hit {\n  animation: hitEffect 0.5s ease-out;\n}\n\n@media (max-width: 640px) {\n  .gameboards {\n    flex-direction: column;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/GameController.js":
/*!*******************************!*\
  !*** ./src/GameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameboardRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardRenderer */ \"./src/GameboardRenderer.js\");\n\n\nclass GameController {\n  constructor(player, computer) {\n    this.player = player;\n    this.computer = computer;\n    this.currentTurn = \"player\";\n    this.isGameOver = false;\n    this.gameStarted = false;\n    this.computerAI = this.initializeComputerAI();\n    this.updateTurnVisuals();\n  }\n\n  initializeComputerAI() {\n    return {\n      huntMode: false,\n      firstHit: null,\n      lastHit: null,\n      direction: null,\n      triedDirections: new Set()\n    };\n  }\n\n  handleAttack(row, column) {\n    if (this.isGameOver || this.currentTurn !== \"player\") return;\n    \n    if (!this.gameStarted) {\n      this.gameStarted = true;\n      document.querySelector(\".player-board\").classList.add(\"game-started\");\n    }\n\n    try {\n      const attackResult = this.computer.gameboard.receiveAttack(row, column);\n      (0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_0__.renderComputerBoard)();\n      \n      this.checkGameOver();\n\n      if (!this.isGameOver) {\n        this.switchTurn();\n      }\n    } catch (error) {\n      console.log(\"Invalid attack position\");\n    }\n  }\n\n  switchTurn() {\n    this.currentTurn = this.currentTurn === \"player\" ? \"computer\" : \"player\";\n    this.updateTurnVisuals();\n    \n    if (this.currentTurn === \"computer\") {\n      setTimeout(() => {\n        this.computerMove();\n      }, 750);\n    }\n  }\n\n  updateTurnVisuals() {\n    const computerBoard = document.querySelector(\".computer-board\");\n    const randomizeButton = document.querySelector(\".randomize-button\");\n    \n    if (this.currentTurn === \"computer\") {\n      computerBoard.classList.add(\"computer-turn\");\n      randomizeButton.classList.add(\"disabled\");\n      randomizeButton.style.pointerEvents = \"none\";\n    } else {\n      computerBoard.classList.remove(\"computer-turn\");\n      randomizeButton.classList.remove(\"disabled\");\n      randomizeButton.style.pointerEvents = \"auto\";\n    }\n  }\n\n  resetGame() {\n    this.currentTurn = \"player\";\n    this.isGameOver = false;\n    this.gameStarted = false;\n    this.computerAI = this.initializeComputerAI();\n    document.querySelector(\".player-board\").classList.remove(\"game-started\");\n    this.hideModal();\n    this.updateTurnVisuals();\n    \n    this.player.gameboard.clear();\n    this.computer.gameboard.clear();\n  }\n\n  checkGameOver() {\n    if (this.player.gameboard.areAllShipsSunk()) {\n      if (!this.isGameOver) {\n        setTimeout(() => {\n          if (!this.isGameOver) return;\n          alert(\"Computer wins!\");\n        }, 100);\n      }\n      this.isGameOver = true;\n    } else if (this.computer.gameboard.areAllShipsSunk()) {\n      if (!this.isGameOver) {\n        setTimeout(() => {\n          if (!this.isGameOver) return;\n          alert(\"Player wins!\");\n        }, 100);\n      }\n      this.isGameOver = true;\n    }\n  }\n\n  async computerMove() {\n    if (this.isGameOver || this.currentTurn !== \"computer\") return;\n\n    const target = this.getComputerTarget();\n    if (!target) {\n      this.isGameOver = true;\n      return;\n    }\n\n    (0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_0__.highlightCell)(target.row, target.column);\n\n    await new Promise(resolve => setTimeout(resolve, 500));\n\n    const attackResult = this.player.gameboard.receiveAttack(target.row, target.column);\n    this.updateComputerAI(attackResult);\n    \n    (0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)();\n    \n    this.checkGameOver();\n\n    if (!this.isGameOver) {\n      this.switchTurn();\n      this.updateTurnVisuals(); \n    }\n  }\n\n  getComputerTarget() {\n    return this.computerAI.huntMode ? \n      this.getHuntModeTarget() : \n      this.getRandomTarget();\n  }\n\n  getHuntModeTarget() {\n    const { firstHit, lastHit, direction, triedDirections } = this.computerAI;\n    const currentHit = lastHit || firstHit;\n    \n    if (direction) {\n      const target = this.getNextTargetInDirection(currentHit, direction);\n      if (target && this.isValidTarget(target)) {\n        return target;\n      }\n      const oppositeTarget = this.getNextTargetInDirection(firstHit, this.getOppositeDirection(direction));\n      if (oppositeTarget && this.isValidTarget(oppositeTarget)) {\n        return oppositeTarget;\n      }\n    }\n\n    const directions = [\"north\", \"south\", \"east\", \"west\"];\n    for (const dir of directions) {\n      if (!triedDirections.has(dir)) {\n        const target = this.getNextTargetInDirection(firstHit, dir);\n        if (target && this.isValidTarget(target)) {\n          triedDirections.add(dir);\n          return target;\n        }\n      }\n    }\n\n    this.resetComputerAI();\n    return this.getRandomTarget();\n  }\n\n  getNextTargetInDirection(position, direction) {\n    const directionMap = {\n      north: { row: -1, column: 0 },\n      south: { row: 1, column: 0 },\n      east: { row: 0, column: 1 },\n      west: { row: 0, column: -1 }\n    };\n\n    const offset = directionMap[direction];\n    return {\n      row: position.row + offset.row,\n      column: position.column + offset.column\n    };\n  }\n\n  getOppositeDirection(direction) {\n    const opposites = {\n      north: \"south\",\n      south: \"north\",\n      east: \"west\",\n      west: \"east\"\n    };\n    return opposites[direction];\n  }\n\n  getRandomTarget() {\n    const unattackedCells = [];\n    for (let row = 0; row < this.player.gameboard.size; row++) {\n      for (let col = 0; col < this.player.gameboard.size; col++) {\n        if (this.isValidTarget({ row, column: col })) {\n          unattackedCells.push({ row, column: col });\n        }\n      }\n    }\n    \n    return unattackedCells.length > 0 ? \n      unattackedCells[Math.floor(Math.random() * unattackedCells.length)] : \n      null;\n  }\n\n  isValidTarget(target) {\n    const { row, column } = target;\n    const isWithinBounds =\n      row >= 0 &&\n      row < this.player.gameboard.size &&\n      column >= 0 &&\n      column < this.player.gameboard.size;\n\n    const isNotAttacked = !this.player.gameboard.attackedPositions.some(\n      pos => pos.row === row && pos.column === column\n    );\n\n    return isWithinBounds && isNotAttacked;\n  }\n\n  updateComputerAI(attackResult) {\n    const { result, row, column } = attackResult;\n    \n    if (result === \"hit\") {\n      if (!this.computerAI.huntMode) {\n        this.computerAI.huntMode = true;\n        this.computerAI.firstHit = { row, column };\n        this.computerAI.lastHit = { row, column };\n      } else if (!this.computerAI.direction) {\n        const isVertical = this.computerAI.firstHit.row !== row;\n        this.computerAI.direction = isVertical ? \n          (row > this.computerAI.firstHit.row ? \"south\" : \"north\") :\n          (column > this.computerAI.firstHit.column ? \"east\" : \"west\");\n        this.computerAI.lastHit = { row, column };\n      } else {\n        this.computerAI.lastHit = { row, column };\n      }\n\n      const hitPositions = this.findConnectedHits(row, column);\n      if (this.isConnectedHitsFormCompleteSink(hitPositions)) {\n        this.resetComputerAI();\n      }\n    }\n  }\n\n  findConnectedHits(startRow, startCol) {\n    const connected = new Set();\n    const toCheck = [{row: startRow, column: startCol}];\n    \n    while (toCheck.length > 0) {\n      const current = toCheck.pop();\n      const key = `${current.row},${current.column}`;\n      \n      if (connected.has(key)) continue;\n      \n      if (this.player.gameboard.board[current.row][current.column] === \"hit\") {\n        connected.add(key);\n        \n        const adjacent = [\n          {row: current.row - 1, column: current.column},\n          {row: current.row + 1, column: current.column},\n          {row: current.row, column: current.column - 1},\n          {row: current.row, column: current.column + 1}\n        ];\n        \n        for (const pos of adjacent) {\n          if (this.isValidBoardPosition(pos.row, pos.column)) {\n            toCheck.push(pos);\n          }\n        }\n      }\n    }\n    \n    return Array.from(connected).map(key => {\n      const [row, col] = key.split(\",\").map(Number);\n      return {row, column: col};\n    });\n  }\n\n  isConnectedHitsFormCompleteSink(hitPositions) {\n    for (const pos of hitPositions) {\n      const adjacent = [\n        {row: pos.row - 1, column: pos.column},\n        {row: pos.row + 1, column: pos.column},\n        {row: pos.row, column: pos.column - 1},\n        {row: pos.row, column: pos.column + 1}\n      ];\n      \n      for (const adjPos of adjacent) {\n        if (this.isValidBoardPosition(adjPos.row, adjPos.column)) {\n          const cell = this.player.gameboard.board[adjPos.row][adjPos.column];\n          if (cell !== null && cell !== \"hit\" && cell !== \"miss\") {\n            return false;\n          }\n        }\n      }\n    }\n    \n    return true;\n  }\n\n  isValidBoardPosition(row, column) {\n    return row >= 0 && \n           row < this.player.gameboard.size && \n           column >= 0 && \n           column < this.player.gameboard.size;\n  }\n\n  resetComputerAI() {\n    this.computerAI = {\n      huntMode: false,\n      firstHit: null,\n      lastHit: null,\n      direction: null,\n      triedDirections: new Set()\n    };\n  }\n\n  showModal(message) {\n    const modal = document.querySelector(\".modal-overlay\");\n    const title = modal.querySelector(\".modal-title\");\n    title.textContent = message;\n    modal.classList.add(\"active\");\n  }\n\n  hideModal() {\n    const modal = document.querySelector(\".modal-overlay\");\n    modal.classList.remove(\"active\");\n  }\n\n  checkGameOver() {\n    if (this.player.gameboard.areAllShipsSunk()) {\n      if (!this.isGameOver) {\n        this.showModal(\"Computer wins!\");\n        this.isGameOver = true;\n      }\n    } else if (this.computer.gameboard.areAllShipsSunk()) {\n      if (!this.isGameOver) {\n        this.showModal(\"Player wins!\");\n        this.isGameOver = true;\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\n\n\n//# sourceURL=webpack://battleship/./src/GameController.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n  constructor(size = 10) {\n    this.size = size;\n    this.board = Array(size).fill(null).map(() => Array(size).fill(null));\n    this.ships = [];\n    this.attackedPositions = [];\n  }\n\n  placeShip(ship, row, column, isVertical = false) {\n    if (isVertical) {\n      if (row + ship.length > this.size) {\n        throw new Error(\"Ship cannot be placed out of bounds\");\n      }\n    } else {\n      if (column + ship.length > this.size) {\n        throw new Error(\"Ship cannot be placed out of bounds\");\n      }\n    }\n  \n    for (let i = 0; i < ship.length; i++) {\n      if (isVertical) {\n        if (this.board[row + i][column] !== null) {\n          throw new Error(\"Cannot place ship, position already occupied\");\n        }\n      } else {\n        if (this.board[row][column + i] !== null) {\n          throw new Error(\"Cannot place ship, position already occupied\");\n        }\n      }\n    }\n  \n    for (let i = 0; i < ship.length; i++) {\n      if (isVertical) {\n        this.board[row + i][column] = ship;\n      } else {\n        this.board[row][column + i] = ship;\n      }\n    }\n  \n    this.ships.push(ship);\n  }  \n\n  getShipAt(row, column) {\n    return this.board[row][column];\n  }\n\n  receiveAttack(row, column) {\n    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {\n      throw new Error(\"Coordinates are out of bounds\");\n    }\n  \n    if (this.attackedPositions.some(pos => pos.row === row && pos.column === column)) {\n      throw new Error(\"Position has already been attacked\");\n    }\n  \n    const target = this.getShipAt(row, column);\n    const result = target ? \"hit\" : \"miss\";\n  \n    if (target) {\n      target.hit();\n      this.board[row][column] = \"hit\";\n    } else {\n      this.board[row][column] = \"miss\";\n    }\n  \n    this.attackedPositions.push({ row, column, hit: result === \"hit\" });\n    return { result, row, column };\n  }\n\n  areAllShipsSunk() {\n    return this.ships.every(ship => ship.isSunk());\n  }\n\n  initializeBoard() {\n    return Array.from({ length: this.size }, () => Array(this.size).fill(null));\n  }\n\n  clear() {\n    this.board = this.initializeBoard();\n    this.ships = [];\n  }\n\n  canPlaceShip(ship, row, column, isVertical) {\n    if (isVertical) {\n      if (row + ship.length > this.size) return false;\n      for (let i = 0; i < ship.length; i++) {\n        if (this.board[row + i][column] !== null) return false;\n      }\n    } else {\n      if (column + ship.length > this.size) return false;\n      for (let i = 0; i < ship.length; i++) {\n        if (this.board[row][column + i] !== null) return false;\n      }\n    }\n    return true;\n  }  \n\n  randomizeShips(ships) {\n    const directions = [true, false];\n    ships.forEach(ship => {\n      let placed = false;\n      while (!placed) {\n        const row = Math.floor(Math.random() * this.size);\n        const column = Math.floor(Math.random() * this.size);\n        const horizontal = directions[Math.floor(Math.random() * directions.length)];\n        if (this.canPlaceShip(ship, row, column, horizontal)) {\n          this.placeShip(ship, row, column, horizontal);\n          placed = true;\n        }\n      }\n    });\n  }\n  \n  clear() {\n    this.board = this.initializeBoard();\n    this.ships = [];\n    this.attackedPositions = [];\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/GameboardRenderer.js":
/*!**********************************!*\
  !*** ./src/GameboardRenderer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   highlightCell: () => (/* binding */ highlightCell),\n/* harmony export */   renderComputerBoard: () => (/* binding */ renderComputerBoard),\n/* harmony export */   renderPlayerBoard: () => (/* binding */ renderPlayerBoard)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nlet draggedShipData = null;\n\nfunction renderPlayerBoard() {\n  const playerBoardElement = document.querySelector(\".player-board\");\n  const playerBoard = _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.board;\n  playerBoardElement.innerHTML = \"\";\n\n  playerBoardElement.addEventListener(\"dragover\", handleDragOver);\n  playerBoardElement.addEventListener(\"drop\", handleDrop);\n\n  playerBoard.forEach((row, rowIndex) => {\n    row.forEach((cell, colIndex) => {\n      const cellElement = document.createElement(\"div\");\n      cellElement.classList.add(\"cell\");\n      cellElement.dataset.row = rowIndex;\n      cellElement.dataset.column = colIndex;\n\n      if (cell === \"hit\") {\n        cellElement.classList.add(\"hit\");\n        cellElement.classList.add(\"ship-cell\");\n      } else if (cell === \"miss\") {\n        cellElement.classList.add(\"miss\");\n      } else if (cell !== null) {\n        cellElement.classList.add(\"ship\");\n        cellElement.classList.add(\"ship-cell\");\n      }\n      \n      playerBoardElement.appendChild(cellElement);\n    });\n  });\n\n  const shipPositions = findShipPositions(playerBoard);\n  shipPositions.forEach(shipData => {\n    const shipElement = createShipElement(shipData);\n    playerBoardElement.appendChild(shipElement);\n  });\n}\n\nfunction findShipPositions(board) {\n  const positions = [];\n  const processed = new Set();\n\n  for (let row = 0; row < board.length; row++) {\n    for (let col = 0; col < board[row].length; col++) {\n      const cell = board[row][col];\n      const key = `${row},${col}`;\n\n      if (cell && cell !== \"hit\" && cell !== \"miss\" && !processed.has(key)) {\n        let isVertical = false;\n        let length = 1;\n\n        if (row + 1 < board.length && board[row + 1][col] === cell) {\n          isVertical = true;\n          while (row + length < board.length && board[row + length][col] === cell) {\n            processed.add(`${row + length},${col}`);\n            length++;\n          }\n        } \n        else if (col + 1 < board[row].length && board[row][col + 1] === cell) {\n          while (col + length < board[row].length && board[row][col + length] === cell) {\n            processed.add(`${row},${col + length}`);\n            length++;\n          }\n        }\n\n        positions.push({\n          ship: cell,\n          row,\n          column: col,\n          length,\n          isVertical\n        });\n\n        processed.add(key);\n      }\n    }\n  }\n\n  return positions;\n}\n\nfunction createShipElement(shipData) {\n  const { row, column, length, isVertical } = shipData;\n  \n  const shipElement = document.createElement(\"div\");\n  shipElement.classList.add(\"ship-container\");\n  shipElement.draggable = true;\n  \n  shipElement.style.gridRowStart = row + 1;\n  shipElement.style.gridColumnStart = column + 1;\n  shipElement.style.gridRowEnd = isVertical ? row + length + 1 : row + 2;\n  shipElement.style.gridColumnEnd = isVertical ? column + 2 : column + length + 1;\n  \n  shipElement.dataset.shipLength = length;\n  shipElement.dataset.isVertical = isVertical;\n  shipElement.dataset.originalRow = row;\n  shipElement.dataset.originalColumn = column;\n\n  shipElement.addEventListener(\"dragstart\", handleDragStart);\n  shipElement.addEventListener(\"dragend\", handleDragEnd);\n  shipElement.addEventListener(\"dblclick\", handleShipRotation);\n\n  return shipElement;\n}\n\nfunction handleDragStart(e) {\n  const shipElement = e.target;\n  shipElement.classList.add(\"dragging\");\n  \n  draggedShipData = {\n    length: parseInt(shipElement.dataset.shipLength),\n    isVertical: shipElement.dataset.isVertical === \"true\",\n    originalRow: parseInt(shipElement.dataset.originalRow),\n    originalColumn: parseInt(shipElement.dataset.originalColumn)\n  };\n}\n\nfunction handleDragEnd(e) {\n  e.target.classList.remove(\"dragging\");\n  draggedShipData = null;\n}\n\nfunction handleDragOver(e) {\n  e.preventDefault();\n  e.dataTransfer.dropEffect = \"move\";\n}\n\nfunction handleDrop(e) {\n  e.preventDefault();\n  \n  if (!draggedShipData) return;\n\n  const cell = e.target.closest(\".cell\");\n  if (!cell) return;\n\n  const row = parseInt(cell.dataset.row);\n  const column = parseInt(cell.dataset.column);\n\n  if (isNaN(row) || isNaN(column)) return;\n\n  try {\n    const ship = _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.getShipAt(\n      draggedShipData.originalRow,\n      draggedShipData.originalColumn\n    );\n\n    if (!ship) return;\n\n    clearShipPosition(\n      draggedShipData.originalRow,\n      draggedShipData.originalColumn,\n      draggedShipData.length,\n      draggedShipData.isVertical\n    );\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.canPlaceShip(ship, row, column, draggedShipData.isVertical)) {\n      _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.placeShip(ship, row, column, draggedShipData.isVertical);\n    } else {\n      _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.placeShip(\n        ship,\n        draggedShipData.originalRow,\n        draggedShipData.originalColumn,\n        draggedShipData.isVertical\n      );\n    }\n  } catch (error) {\n    console.error(\"Error moving ship:\", error);\n  }\n\n  renderPlayerBoard();\n}\n\nfunction handleShipRotation(e) {\n  if (document.querySelector(\".player-board\").classList.contains(\"game-started\")) {\n    return;\n  }\n\n  const shipElement = e.target;\n  const row = parseInt(shipElement.dataset.originalRow);\n  const column = parseInt(shipElement.dataset.originalColumn);\n  const length = parseInt(shipElement.dataset.shipLength);\n  const isVertical = shipElement.dataset.isVertical === \"true\";\n  \n  try {\n    const ship = _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.getShipAt(row, column);\n    if (!ship) return;\n\n    clearShipPosition(row, column, length, isVertical);\n\n    if (_index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.canPlaceShip(ship, row, column, !isVertical)) {\n      _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.placeShip(ship, row, column, !isVertical);\n    } else {\n      _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.placeShip(ship, row, column, isVertical);\n    }\n\n    renderPlayerBoard();\n  } catch (error) {\n    console.error(\"Error rotating ship:\", error);\n  }\n}\n\nfunction clearShipPosition(row, column, length, isVertical) {\n  for (let i = 0; i < length; i++) {\n    if (isVertical) {\n      _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.board[row + i][column] = null;\n    } else {\n      _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.board[row][column + i] = null;\n    }\n  }\n}\n\nfunction renderComputerBoard() {\n  const computerBoardElement = document.querySelector(\".computer-board\");\n  const computerBoard = _index__WEBPACK_IMPORTED_MODULE_0__.computer.gameboard.board;\n  computerBoardElement.innerHTML = \"\";\n\n  computerBoard.forEach((row, rowIndex) => {\n    row.forEach((cell, colIndex) => {\n      const cellElement = document.createElement(\"div\");\n      cellElement.classList.add(\"cell\");\n      cellElement.dataset.row = rowIndex;\n      cellElement.dataset.column = colIndex;\n\n      if (cell === \"hit\") {\n        cellElement.classList.add(\"hit\");\n        \n        const ship = getShipAtPosition(_index__WEBPACK_IMPORTED_MODULE_0__.computer.gameboard, rowIndex, colIndex);\n        if (ship && ship.isSunk()) {\n          cellElement.classList.add(\"ship-cell\");\n        }\n      } else if (cell === \"miss\") {\n        cellElement.classList.add(\"miss\");\n      }\n      \n      computerBoardElement.appendChild(cellElement);\n    });\n  });\n}\n\nfunction getShipAtPosition(gameboard, row, col) {\n  const connectedHits = findConnectedHits(gameboard.board, row, col);\n  \n  for (const ship of gameboard.ships) {\n    for (const pos of connectedHits) {\n      if (gameboard.board[pos.row][pos.column] === ship || \n         (gameboard.board[pos.row][pos.column] === \"hit\" && \n          ship.isSunk())) {\n        return ship;\n      }\n    }\n  }\n  return null;\n}\n\nfunction findConnectedHits(board, startRow, startCol) {\n  const connected = new Set();\n  const toCheck = [{row: startRow, column: startCol}];\n  \n  while (toCheck.length > 0) {\n    const current = toCheck.pop();\n    const key = `${current.row},${current.column}`;\n    \n    if (connected.has(key)) continue;\n    \n    if (board[current.row][current.column] === \"hit\") {\n      connected.add(key);\n      \n      const adjacent = [\n        {row: current.row - 1, column: current.column},\n        {row: current.row + 1, column: current.column},\n        {row: current.row, column: current.column - 1},\n        {row: current.row, column: current.column + 1}\n      ];\n      \n      for (const pos of adjacent) {\n        if (isValidPosition(board, pos.row, pos.column)) {\n          toCheck.push(pos);\n        }\n      }\n    }\n  }\n  \n  return Array.from(connected).map(key => {\n    const [row, col] = key.split(\",\").map(Number);\n    return {row, column: col};\n  });\n}\n\nfunction isValidPosition(board, row, col) {\n  return row >= 0 && row < board.length && \n         col >= 0 && col < board[0].length;\n}\n\nfunction highlightCell(row, column) {\n  const cells = document.querySelectorAll(\".player-board .cell\");\n  const targetCell = Array.from(cells).find(\n    cell => \n      parseInt(cell.dataset.row) === row && \n      parseInt(cell.dataset.column) === column\n  );\n\n  if (targetCell) {\n    targetCell.classList.add(\"targeting\");\n    setTimeout(() => {\n      targetCell.classList.remove(\"targeting\");\n    }, 500);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/GameboardRenderer.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n\n\nclass Player {\n  constructor(type) {\n    this.type = type;\n    this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hitsTaken = 0;\n    this.sunk = false;\n  }\n\n  hit() {\n    if (!this.sunk) {\n      this.hitsTaken++;\n      this.isSunk();\n    }\n  }\n\n  isSunk() {\n    this.sunk = this.hitsTaken >= this.length;\n    return this.sunk;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameController */ \"./src/GameController.js\");\n/* harmony import */ var _GameboardRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameboardRenderer */ \"./src/GameboardRenderer.js\");\n\n\n\n\n\n\nconst player = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"human\");\nconst computer = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"computer\");\nlet gameController;\n\nfunction createShips() {\n  return [\n    new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](5),\n    new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4),\n    new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3),\n    new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3),\n    new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2),\n  ];\n}\n\nwindow.initializeGame = function initializeGame() {\n  if (gameController) {\n    gameController.resetGame();\n  }\n  const playerShips = createShips();\n  const computerShips = createShips();\n  player.gameboard.randomizeShips(playerShips);\n  computer.gameboard.randomizeShips(computerShips);\n  (0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_4__.renderPlayerBoard)();\n  (0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_4__.renderComputerBoard)();\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  gameController = new _GameController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](player, computer);\n\n  const computerBoard = document.querySelector(\".computer-board\");\n  const randomizeButton = document.querySelector(\".randomize-button\");\n  const modalOverlay = document.querySelector(\".modal-overlay\");\n  const modalButton = document.querySelector(\".modal-button\");\n\n  computerBoard.addEventListener(\"click\", (e) => {\n    const row = parseInt(e.target.dataset.row, 10);\n    const column = parseInt(e.target.dataset.column, 10);\n    if (gameController.currentTurn === \"player\" && !isNaN(row) && !isNaN(column)) {\n      gameController.handleAttack(row, column);\n    }\n  });\n\n  randomizeButton.addEventListener(\"click\", window.initializeGame);\n\n  modalOverlay.addEventListener(\"click\", (e) => {\n    if (e.target === modalOverlay) {\n      gameController.hideModal();\n      window.initializeGame();\n    }\n  });\n\n  modalButton.addEventListener(\"click\", (e) => {\n    e.stopPropagation();\n    gameController.hideModal();\n    window.initializeGame();\n  });\n\n  window.initializeGame();\n});\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a16982161b3604eecb0e.jpg\";\n\n//# sourceURL=webpack://battleship/./src/background.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;