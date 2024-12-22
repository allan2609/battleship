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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\nhtml {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n  -moz-box-sizing: inherit;\n  box-sizing: inherit;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 100vw;\n  min-height: 100vh;\n  padding: 1rem;\n}\n\n.gameboards {\n  display: flex;\n  flex: 1;\n  gap: 1rem;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.player-board, .computer-board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: 100%;\n  max-width: 25rem;\n  aspect-ratio: 1;\n}\n\n.cell {\n  background-color: lightblue;\n  border: 1px solid #333;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ship {\n  background-color: darkgrey;\n}\n\n.buttons {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\n.hit {\n  background-color: red;\n}\n\n.miss {\n  background-color: lightgray;\n}\n\n@media (max-width: 640px) {\n  .gameboards {\n    flex-direction: column;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameboardRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardRenderer */ \"./src/GameboardRenderer.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\n\n\nclass GameController {\n  constructor(player, computer) {\n    this.player = player;\n    this.computer = computer;\n    this.currentTurn = \"player\";\n    this.lastHit = null;\n    this.targetQueue = [];\n    this.direction = null;\n    this.previousHit = null;\n    this.isGameOver = false;\n  }\n\n  handleAttack(row, column) {\n    if (this.isGameOver || this.currentTurn !== \"player\") return;\n\n    const attackResult = this.computer.gameboard.receiveAttack(row, column);\n    (0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_0__.renderComputerBoard)();\n\n    console.log(\"Player's attack result:\", attackResult);\n\n    if (attackResult.result === \"hit\") {\n      console.log(\"Player hit!\");\n    } else {\n      console.log(\"Player missed!\");\n    }\n\n    this.checkGameOver();\n\n    if (!this.isGameOver) {\n      this.switchTurn();\n    }\n  }\n\n  switchTurn() {\n    this.currentTurn = this.currentTurn === \"player\" ? \"computer\" : \"player\";\n    console.log(`Switching turn. Current turn: ${this.currentTurn}`);\n\n    if (this.currentTurn === \"computer\") {\n      this.computerMove();\n    }\n  }\n\n  computerMove() {\n    if (this.isGameOver || this.currentTurn !== \"computer\") return;\n  \n    console.log(\"Computer's turn. Target Queue:\", this.targetQueue);\n  \n    let target;\n    \n    if (this.direction && this.lastHit) {\n      const alignedTargets = this.targetQueue.filter(cell => \n        this.direction === \"horizontal\" ? \n          cell.row === this.lastHit.row : \n          cell.column === this.lastHit.column\n      );\n      \n      if (alignedTargets.length > 0) {\n        target = alignedTargets[0];\n        this.targetQueue = this.targetQueue.filter(cell => \n          !(cell.row === target.row && cell.column === target.column)\n        );\n        console.log(\"Attacking aligned target:\", target);\n      }\n    }\n    \n    if (!target && this.targetQueue.length > 0) {\n      target = this.targetQueue.shift();\n      console.log(\"Attacking from target queue:\", target);\n    }\n    \n    if (!target) {\n      do {\n        const row = Math.floor(Math.random() * this.player.gameboard.size);\n        const column = Math.floor(Math.random() * this.player.gameboard.size);\n        target = { row, column };\n      } while (\n        this.player.gameboard.attackedPositions.some(\n          pos => pos.row === target.row && pos.column === target.column\n        )\n      );\n      console.log(\"Random attack at:\", target);\n    }\n    \n    const attackResult = this.player.gameboard.receiveAttack(target.row, target.column);\n    console.log(\"Attack result:\", attackResult);\n    \n    if (attackResult.result === \"hit\") {\n      if (this.lastHit && !this.direction) {\n        this.direction = this.lastHit.row === target.row ? \"horizontal\" : \"vertical\";\n        console.log(\"New direction determined:\", this.direction);\n      }\n      \n      this.previousHit = this.lastHit;\n      this.lastHit = target;\n      \n      if (this.direction) {\n        this.addDirectionalTargets(target);\n      } else {\n        this.addAdjacentTargets(target);\n      }\n      \n      if (this.checkShipSunk(target)) {\n        console.log(\"Ship sunk! Resetting attack pattern.\");\n        this.resetAttackPattern();\n      }\n    }\n    \n    (0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)();\n    \n    this.checkGameOver();\n    \n    if (!this.isGameOver) {\n      this.currentTurn = \"player\";\n      console.log(\"Computer's turn ended. Current turn:\", this.currentTurn);\n    }\n  }\n\n  addDirectionalTargets({ row, column }) {\n    let potentialTargets = [];\n    \n    if (this.direction === \"horizontal\") {\n      potentialTargets = [\n        { row, column: column - 1 },\n        { row, column: column + 1 }\n      ];\n    } else if (this.direction === \"vertical\") {\n      potentialTargets = [\n        { row: row - 1, column },\n        { row: row + 1, column }\n      ];\n    }\n    \n    const validTargets = potentialTargets.filter(target => {\n      const isWithinBounds =\n        target.row >= 0 &&\n        target.row < this.player.gameboard.size &&\n        target.column >= 0 &&\n        target.column < this.player.gameboard.size;\n        \n      const isNotAttacked = !this.player.gameboard.attackedPositions.some(\n        pos => pos.row === target.row && pos.column === target.column\n      );\n      \n      return isWithinBounds && isNotAttacked;\n    });\n    \n    this.targetQueue.push(...validTargets);\n  }\n\n  getDirection(firstHit, secondHit) {\n    if (firstHit.row === secondHit.row) return \"horizontal\";\n    if (firstHit.column === secondHit.column) return \"vertical\";\n    return null;\n  }\n\n  isAligned(cell, direction) {\n    if (direction === \"horizontal\") return cell.row === this.lastHit.row;\n    if (direction === \"vertical\") return cell.column === this.lastHit.column;\n    return true;\n  }\n\n  addAdjacentTargets({ row, column }) {\n    const potentialTargets = [\n      { row: row - 1, column },\n      { row: row + 1, column },\n      { row, column: column - 1 },\n      { row, column: column + 1 },\n    ];\n\n    const filteredTargets = potentialTargets.filter(target => {\n      const isWithinBounds =\n        target.row >= 0 &&\n        target.row < this.player.gameboard.size &&\n        target.column >= 0 &&\n        target.column < this.player.gameboard.size;\n\n      const isAlreadyAttacked = this.player.gameboard.attackedPositions.some(\n        pos => pos.row === target.row && pos.column === target.column\n      );\n\n      if (!isWithinBounds || isAlreadyAttacked) return false;\n\n      if (this.direction === \"horizontal\") {\n        return target.row === this.lastHit.row;\n      } else if (this.direction === \"vertical\") {\n        return target.column === this.lastHit.column;\n      }\n\n      return true;\n    });\n\n    this.targetQueue.push(...filteredTargets);\n  }\n\n  checkShipSunk(target) {\n    const ship = this.player.gameboard.getShipAt(target.row, target.column);\n    console.log(\"Ship at target:\", ship);\n\n    if (ship && ship instanceof _Ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      return ship.isSunk();\n    }\n\n    return false;\n  }\n\n  resetAttackPattern() {\n    this.direction = null;\n    this.previousHit = null;\n    this.targetQueue = [];\n  }\n\n  checkGameOver() {\n    if (this.player.gameboard.areAllShipsSunk()) {\n      alert(\"Computer wins!\");\n      this.isGameOver = true;\n    } else if (this.computer.gameboard.areAllShipsSunk()) {\n      alert(\"Player wins!\");\n      this.isGameOver = true;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);\n\n\n//# sourceURL=webpack://battleship/./src/GameController.js?");

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n  constructor(size = 10) {\n    this.size = size;\n    this.board = Array(size).fill(null).map(() => Array(size).fill(null));\n    this.ships = [];\n    this.attackedPositions = [];\n  }\n\n  placeShip(ship, row, column, isVertical = false) {\n    if (isVertical) {\n      if (row + ship.length > this.size) {\n        throw new Error(\"Ship cannot be placed out of bounds\");\n      }\n    } else {\n      if (column + ship.length > this.size) {\n        throw new Error(\"Ship cannot be placed out of bounds\");\n      }\n    }\n  \n    for (let i = 0; i < ship.length; i++) {\n      if (isVertical) {\n        if (this.board[row + i][column] !== null) {\n          throw new Error(\"Cannot place ship, position already occupied\");\n        }\n      } else {\n        if (this.board[row][column + i] !== null) {\n          throw new Error(\"Cannot place ship, position already occupied\");\n        }\n      }\n    }\n  \n    for (let i = 0; i < ship.length; i++) {\n      if (isVertical) {\n        this.board[row + i][column] = ship;\n      } else {\n        this.board[row][column + i] = ship;\n      }\n    }\n  \n    this.ships.push(ship);\n  }  \n\n  getShipAt(row, column) {\n    return this.board[row][column];\n  }\n\n  receiveAttack(row, column) {\n    if (row < 0 || row >= this.size || column < 0 || column >= this.size) {\n      throw new Error(\"Coordinates are out of bounds\");\n    }\n  \n    if (this.attackedPositions.some(pos => pos.row === row && pos.column === column)) {\n      throw new Error(\"Position has already been attacked\");\n    }\n  \n    const target = this.getShipAt(row, column);\n    const result = target ? \"hit\" : \"miss\";\n  \n    if (target) {\n      target.hit();\n      this.board[row][column] = \"hit\";\n    } else {\n      this.board[row][column] = \"miss\";\n    }\n  \n    this.attackedPositions.push({ row, column, hit: result === \"hit\" });\n    return { result, row, column };\n  }\n\n  areAllShipsSunk() {\n    return this.ships.every(ship => ship.isSunk());\n  }\n  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/Gameboard.js?");

/***/ }),

/***/ "./src/GameboardRenderer.js":
/*!**********************************!*\
  !*** ./src/GameboardRenderer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComputerBoard: () => (/* binding */ renderComputerBoard),\n/* harmony export */   renderPlayerBoard: () => (/* binding */ renderPlayerBoard)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction renderPlayerBoard() {\n  const playerBoardElement = document.querySelector(\".player-board\");\n  const playerBoard = _index__WEBPACK_IMPORTED_MODULE_0__.player.gameboard.board;\n\n  playerBoardElement.innerHTML = \"\";\n\n  playerBoard.forEach((row, rowIndex) => {\n    row.forEach((cell, colIndex) => {\n      const cellElement = document.createElement(\"div\");\n      cellElement.classList.add(\"cell\");\n      cellElement.dataset.row = rowIndex;\n      cellElement.dataset.column = colIndex;\n\n      if (cell === \"hit\") cellElement.classList.add(\"hit\");\n      else if (cell === \"miss\") cellElement.classList.add(\"miss\");\n      else if (cell !== null) cellElement.classList.add(\"ship\");\n\n      playerBoardElement.appendChild(cellElement);\n    });\n  });\n}\n\nfunction renderComputerBoard() {\n  const computerBoardElement = document.querySelector(\".computer-board\");\n  const computerBoard = _index__WEBPACK_IMPORTED_MODULE_0__.computer.gameboard.board;\n\n  computerBoardElement.innerHTML = \"\";\n\n  computerBoard.forEach((row, rowIndex) => {\n    row.forEach((cell, colIndex) => {\n      const cellElement = document.createElement(\"div\");\n      cellElement.classList.add(\"cell\");\n      cellElement.dataset.row = rowIndex;\n      cellElement.dataset.column = colIndex;\n\n      if (cell === \"hit\") {\n        cellElement.classList.add(\"hit\");\n      } else if (cell === \"miss\") {\n        cellElement.classList.add(\"miss\");\n      }\n\n      computerBoardElement.appendChild(cellElement);\n    });\n  });\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/GameboardRenderer.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   player: () => (/* binding */ player)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameController */ \"./src/GameController.js\");\n/* harmony import */ var _GameboardRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameboardRenderer */ \"./src/GameboardRenderer.js\");\n\n\n\n\n\n\nconst player = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"human\");\nconst computer = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"computer\");\nconst playerShip1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\nconst playerShip2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4);\nconst computerShip1 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3);\nconst computerShip2 = new _Ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4);\n\nplayer.gameboard.placeShip(playerShip1, 2, 2, false);\nplayer.gameboard.placeShip(playerShip2, 5, 5, true);\ncomputer.gameboard.placeShip(computerShip1, 1, 1, false);\ncomputer.gameboard.placeShip(computerShip2, 6, 3, true);\n\nconst gameController = new _GameController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](player, computer);\n(0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_4__.renderPlayerBoard)();\n(0,_GameboardRenderer__WEBPACK_IMPORTED_MODULE_4__.renderComputerBoard)();\n\ndocument.querySelector(\".computer-board\").addEventListener(\"click\", (e) => {\n  const row = parseInt(e.target.dataset.row, 10);\n  const column = parseInt(e.target.dataset.column, 10);\n  if (gameController.currentTurn === \"player\" && !isNaN(row) && !isNaN(column)) {\n    gameController.handleAttack(row, column);\n  }\n});\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;