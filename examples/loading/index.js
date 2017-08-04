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
/******/ 	return __webpack_require__(__webpack_require__.s = 111);
/******/ })
/************************************************************************/
/******/ ({

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by maxuezhu on 2017/8/4.
 */
var Loading = __webpack_require__(81);
var Root = React.createClass({
    displayName: 'Root',

    _clickHandle: function _clickHandle() {
        Loading.show();
        console.log(Loading.show);
    },
    componentDidMount: function componentDidMount() {
        setTimeout(function () {
            Loading.hide();
        }, 5000);
    },
    render: function render() {
        return React.createElement(
            'button',
            { onClick: this._clickHandle },
            'loading'
        );
    }
});
ReactDOM.render(React.createElement(Root, null), document.getElementById('merry'));

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by maxuezhu on 2017/8/1.
 * 说明：Loading组件
 */
var Loading = function () {
    var div = document.createElement('div');
    var LoadingItem = React.createClass({
        displayName: 'LoadingItem',

        render: function render() {

            document.body.appendChild(div);
            return React.createElement(
                'div',
                { className: 'ucs-loading' },
                React.createElement('div', { className: 'ucs-loading-mask' }),
                React.createElement(
                    'div',
                    { className: 'ucs-loading-con' },
                    React.createElement(
                        'div',
                        { className: 'loading' },
                        React.createElement('i', { className: 'iconfont icon-loading', ref: 'loading' })
                    )
                )
            );
        }

    });

    return {
        show: function show() {
            ReactDOM.render(React.createElement(LoadingItem, null), div);
        },
        hide: function hide() {
            document.body.removeChild(div);
        }
    };
}();

module.exports = Loading;

/***/ })

/******/ });