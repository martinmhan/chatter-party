/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
=======
/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Grid_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid.jsx */ \"./client/src/components/Grid.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleKeyDown\", function (e) {\n      e.preventDefault();\n\n      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {\n        _this.moveCharacter(e.key);\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"moveCharacter\", function (directionKey) {\n      var character = _this.state.grid[_this.state.currRow][_this.state.currCol];\n      var endSpritePos = character.spritePos;\n      var endRow = _this.state.currRow,\n          endCol = _this.state.currCol;\n\n      if (directionKey === 'ArrowUp') {\n        endRow = Math.max(0, endRow - 1);\n        endSpritePos = endSpritePos[0] !== 1 ? [1, 0] : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];\n      } else if (directionKey === 'ArrowDown') {\n        endRow = Math.min(_this.rows - 1, endRow + 1);\n        endSpritePos = endSpritePos[0] !== 0 ? [0, 0] : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];\n      } else if (directionKey === 'ArrowLeft') {\n        endCol = Math.max(0, endCol - 1);\n        endSpritePos = endSpritePos[0] !== 2 ? [2, 0] : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];\n      } else if (directionKey === 'ArrowRight') {\n        endCol = Math.min(_this.cols - 1, endCol + 1);\n        endSpritePos = endSpritePos[0] !== 3 ? [3, 0] : [endSpritePos[0], endSpritePos[1] + 1 > 7 ? 0 : endSpritePos[1] + 1];\n      }\n\n      _this.socket.emit('moveCharacter', {\n        startRow: _this.state.currRow,\n        startCol: _this.state.currCol,\n        endRow: endRow,\n        endCol: endCol,\n        endSpritePos: endSpritePos\n      });\n    });\n\n    _this.socket = null;\n    _this.rows = null;\n    _this.cols = null;\n    _this.clientId = null;\n    _this.state = {\n      grid: null,\n      currRow: null,\n      currCol: null\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()('http://3.83.40.199:3000');\n      this.socket.on('connect', function () {\n        console.log('Connected to websocket server');\n      });\n      this.socket.on('newClientInfo', function (_ref) {\n        var rows = _ref.rows,\n            cols = _ref.cols,\n            clientId = _ref.clientId;\n        _this2.rows = rows;\n        _this2.cols = cols;\n        _this2.clientId = clientId;\n        var character = {\n          itemType: 'character',\n          clientId: _this2.clientId,\n          spritePos: [0, 0]\n        };\n\n        _this2.socket.emit('addCharacter', character);\n      });\n      this.socket.on('grid', function (grid) {\n        _this2.setState({\n          grid: grid\n        });\n      });\n      this.socket.on('characterCoords', function (_ref2) {\n        var row = _ref2.row,\n            col = _ref2.col;\n\n        _this2.setState({\n          currRow: row,\n          currCol: col\n        });\n      });\n      this.socket.on('message', function (data) {\n        console.log(data);\n      });\n      this.socket.on('disconnect', function () {\n        console.log('disconnected from socket');\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"app\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        id: \"gamecontainer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Grid_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        grid: this.state.grid,\n        handleKeyDown: this.handleKeyDown\n      })));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./client/src/components/App.jsx?");

/***/ }),

/***/ "./client/src/components/Cell.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Cell.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CharacterContainer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharacterContainer.jsx */ \"./client/src/components/CharacterContainer.jsx\");\n/* harmony import */ var _Plant_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Plant.jsx */ \"./client/src/components/Plant.jsx\");\n/* harmony import */ var _Well_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Well.jsx */ \"./client/src/components/Well.jsx\");\n/* harmony import */ var _Rock_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rock.jsx */ \"./client/src/components/Rock.jsx\");\n/* harmony import */ var _Tree_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tree.jsx */ \"./client/src/components/Tree.jsx\");\n/* harmony import */ var _Pokecenter_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pokecenter.jsx */ \"./client/src/components/Pokecenter.jsx\");\n\n\n\n\n\n\n\n\nvar Cell = function Cell(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"cell\"\n  }, props.cell ? props.cell.itemType === 'character' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CharacterContainer_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    cell: props.cell\n  }) : props.cell.itemType === 'plant' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Plant_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null) : props.cell.itemType === 'rock' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rock_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null) : props.cell.itemType === 'tree' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tree_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    rowIndex: props.rowIndex\n  }) : props.cell.itemType === 'pokecenter' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pokecenter_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null) : props.cell.itemType === 'well' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Well_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : null : null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cell);\n\n//# sourceURL=webpack:///./client/src/components/Cell.jsx?");

/***/ }),

/***/ "./client/src/components/Character.jsx":
/*!*********************************************!*\
  !*** ./client/src/components/Character.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Character = function Character(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"character\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/player_walk.png\",\n    style: {\n      transform: \"translate(\".concat(0 - props.cell.spritePos[1] * 40, \"px, \").concat(0 - props.cell.spritePos[0] * 40, \"px)\")\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\n//# sourceURL=webpack:///./client/src/components/Character.jsx?");

/***/ }),

/***/ "./client/src/components/CharacterContainer.jsx":
/*!******************************************************!*\
  !*** ./client/src/components/CharacterContainer.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Character_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Character.jsx */ \"./client/src/components/Character.jsx\");\n\n\n\nvar CharacterContainer = function CharacterContainer(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"charactercontainer\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Character_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    cell: props.cell\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharacterContainer);\n\n//# sourceURL=webpack:///./client/src/components/CharacterContainer.jsx?");

/***/ }),

/***/ "./client/src/components/Grid.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Grid.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Row_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Row.jsx */ \"./client/src/components/Row.jsx\");\n\n\n\nvar Grid = function Grid(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"grid\",\n    tabIndex: \"0\",\n    onKeyDown: props.handleKeyDown\n  }, !props.grid ? null : props.grid.map(function (row, rowIndex) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      row: row,\n      rowIndex: rowIndex,\n      key: rowIndex\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Grid);\n\n//# sourceURL=webpack:///./client/src/components/Grid.jsx?");

/***/ }),

/***/ "./client/src/components/Plant.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Plant.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Plant = function Plant() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"plant item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"itemimg\",\n    src: \"https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/plant_tile2.png\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Plant);\n\n//# sourceURL=webpack:///./client/src/components/Plant.jsx?");

/***/ }),

/***/ "./client/src/components/Pokecenter.jsx":
/*!**********************************************!*\
  !*** ./client/src/components/Pokecenter.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Pokecenter = function Pokecenter() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"pokecenter\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    // className=\"itemimg\"\n    src: \"https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/pokecenter_tile.png\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokecenter);\n\n//# sourceURL=webpack:///./client/src/components/Pokecenter.jsx?");

/***/ }),

/***/ "./client/src/components/Rock.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Rock.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Well = function Well() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"well item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"itemimg\",\n    src: \"https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/rock_tile.png\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Well);\n\n//# sourceURL=webpack:///./client/src/components/Rock.jsx?");

/***/ }),

/***/ "./client/src/components/Row.jsx":
/*!***************************************!*\
  !*** ./client/src/components/Row.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cell_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell.jsx */ \"./client/src/components/Cell.jsx\");\n\n\n\nvar Row = function Row(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, props.row.map(function (cell, colIndex) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cell_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      cell: cell,\n      rowIndex: props.rowIndex,\n      colIndex: colIndex,\n      key: colIndex\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Row);\n\n//# sourceURL=webpack:///./client/src/components/Row.jsx?");

/***/ }),

/***/ "./client/src/components/Tree.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Tree.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Tree = function Tree(props) {\n  var num = props.rowIndex % 3 + 1;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tree\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"itemimg\",\n    src: \"https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/tree_tile\".concat(num, \".png\")\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tree);\n\n//# sourceURL=webpack:///./client/src/components/Tree.jsx?");

/***/ }),

/***/ "./client/src/components/Well.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Well.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Well = function Well() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"well item\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"itemimg\",\n    src: \"https://s3-us-west-1.amazonaws.com/gitbuckets/chatter-party/well_tile.png\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Well);\n\n//# sourceURL=webpack:///./client/src/components/Well.jsx?");

/***/ }),

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
>>>>>>> Update bundle
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: ENOENT: no such file or directory, open '/Users/martinhan/Desktop/chatter-party-v0/client/src/index.jsx'\");\n\n//# sourceURL=webpack:///./client/src/index.jsx?");

/***/ })

/******/ });