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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ({

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 创建人：DuHuiling
 * 创建时间：2017/7/17
 * 说明：
 */
var List = __webpack_require__(90);
var Root = React.createClass({
    displayName: 'Root',

    _handleClick: function _handleClick() {
        console.log('test');
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                List,
                { className: 'project-list', header: '\u8FD9\u662F\u5217\u8868\u5934\u90E8', footer: '\u8FD9\u662F\u5217\u8868\u5E95\u90E8' },
                React.createElement(
                    List.Item,
                    { className: 'Item', thumb: 'https://www.baidu.com/img/bd_logo1.png', extra: '2017-08-06', arrow: 'down', align: 'top', onClick: this._handleClick },
                    React.createElement(
                        'p',
                        null,
                        'abcdefghijklmnopqrst'
                    )
                ),
                React.createElement(
                    List.Item,
                    { className: 'Item', thumb: 'https://www.baidu.com/img/bd_logo1.png', extra: '2017-08-06', arrow: 'down', align: 'bottom', activeClass: 'active', onClick: this._handleClick },
                    React.createElement(
                        'p',
                        null,
                        'abcdefghijklmnopqrst'
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: SyntaxError: D:/workplace/gitlab/UMUI/src/complex/list/index.js: JSX attributes must only be assigned a non-empty expression (47:63)\n\n\u001b[0m \u001b[90m 45 | \u001b[39m        \u001b[36mreturn\u001b[39m (\n \u001b[90m 46 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33mli\u001b[39m className\u001b[33m=\u001b[39m{_itemClass} onClick\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39monClick}\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 47 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"list-front-layer\"\u001b[39m onTouchStart\u001b[33m=\u001b[39m{} onTouchMove\u001b[33m=\u001b[39m{} onTouchEnd\u001b[33m=\u001b[39m{}\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                                                               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 48 | \u001b[39m                    {\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mthumb\n \u001b[90m 49 | \u001b[39m                        \u001b[33m?\u001b[39m \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"list-thumb\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m src\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m.\u001b[39mthumb} alt\u001b[33m=\u001b[39m\u001b[32m\"\"\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m \u001b[33m:\u001b[39m \u001b[32m''\u001b[39m\n \u001b[90m 50 | \u001b[39m                    }\u001b[0m\n");

/***/ })

/******/ });